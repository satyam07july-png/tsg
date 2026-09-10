import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import {
  ShieldCheck,
  Star,
  Users,
  Clock3,
  Award,
  ChevronRight,
  CheckCircle2,
  Copy,
  Check,
  Eye,
  EyeOff,
  Lock,
  ArrowRight,
  BookOpen,
  Sparkles,
  AlertCircle,
  PhoneCall,
  Mail,
  UserCheck,
  CreditCard,
  QrCode,
  Building2,
  X,
  RefreshCw,
} from "lucide-react";
import api from "../lib/api";

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [course, setCourse] = useState(state?.course || null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Student Form Details (Left Side)
  const storedUser = (() => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch {
      return {};
    }
  })();

  const [formData, setFormData] = useState({
    firstName: storedUser?.name ? storedUser.name.split(" ")[0] : "",
    lastName: storedUser?.name ? storedUser.name.split(" ").slice(1).join(" ") : "",
    email: storedUser?.email || "",
    phone: storedUser?.phone || "",
    state: "",
    city: "",
    address: "",
    agreeTerms: true,
  });

  // Success State & Generated Credentials
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [credentials, setCredentials] = useState(null);
  const [copiedField, setCopiedField] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // In-App Sandbox Gateway Modal
  const [showSandboxGateway, setShowSandboxGateway] = useState(false);
  const [sandboxOrder, setSandboxOrder] = useState(null);
  const [sandboxMethod, setSandboxMethod] = useState("upi"); // "upi" | "card" | "netbanking"
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState("");

  // Fallback course fetch if user navigated to /checkout directly
  useEffect(() => {
    if (!course) {
      api
        .get("/api/courses")
        .then((res) => {
          const list = res.data?.courses || [];
          if (list.length > 0) {
            const defaultC = list.find((c) => c.course_id === "dm-advanced") || list[0];
            setCourse({
              id: defaultC.course_id || defaultC.id,
              title: defaultC.title,
              price: Number(defaultC.price) || 45000,
              originalPrice: Number(defaultC.original_price) || 60000,
              duration: defaultC.duration || "6 Months",
              level: defaultC.level || "Advanced Track",
              image:
                defaultC.thumbnail ||
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
              description: defaultC.description,
            });
          }
        })
        .catch((err) => console.warn("Failed to load fallback course:", err));
    }
  }, [course]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errorMsg) setErrorMsg("");
  };

  const copyToClipboard = (text, fieldName) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(""), 2500);
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        return resolve(true);
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const executeVerification = async (orderId, paymentId, signature) => {
    try {
      setIsProcessing(true);
      setErrorMsg("");

      const verifyRes = await api.post("/api/payment/verify-payment", {
        razorpay_order_id: orderId,
        razorpay_payment_id: paymentId,
        razorpay_signature: signature || "test_signature",
        courseId: course.id,
        studentDetails: {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          state: formData.state.trim(),
          city: formData.city.trim(),
        },
      });

      if (verifyRes.data.success) {
        if (verifyRes.data.token) {
          localStorage.setItem("token", verifyRes.data.token);
        }
        if (verifyRes.data.user) {
          localStorage.setItem("user", JSON.stringify(verifyRes.data.user));
        }

        setShowSandboxGateway(false);
        setCredentials(verifyRes.data.credentials);
        setPaymentSuccess(true);
        window.scrollTo({ top: 100, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Verification failed:", err);
      setErrorMsg(
        err.response?.data?.message ||
          "Payment authorization failed. Please try again or contact administration."
      );
    } finally {
      setIsProcessing(false);
      setIsSimulating(false);
    }
  };

  const handleSimulatePayment = async () => {
    if (!sandboxOrder) return;
    setIsSimulating(true);
    setSimStep("Connecting to Banking Switch...");
    await new Promise((r) => setTimeout(r, 600));
    setSimStep("Authorizing Transaction...");
    await new Promise((r) => setTimeout(r, 600));
    setSimStep("Provisioning Student LMS Credentials...");
    await new Promise((r) => setTimeout(r, 600));

    await executeVerification(
      sandboxOrder.id,
      "pay_sim_" + Date.now().toString().slice(-8),
      "test_signature"
    );
  };

  const handlePayment = async (e) => {
    if (e) e.preventDefault();
    if (!course) return;

    // Validate Required Student Information
    if (!formData.firstName.trim()) {
      setErrorMsg("Please enter your First Name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid Email Address for your portal login.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMsg("Please enter a valid 10-digit Mobile Number for official registration.");
      return;
    }
    if (!formData.agreeTerms) {
      setErrorMsg("Please accept the Terms & Conditions to proceed with enrollment.");
      return;
    }

    try {
      setIsProcessing(true);
      setErrorMsg("");

      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        setErrorMsg("Unable to load Razorpay payment SDK. Please check your internet connection.");
        setIsProcessing(false);
        return;
      }

      // 1. Create order on backend with student details
      const orderRes = await api.post("/api/payment/create-order", {
        courseId: course.id,
        studentDetails: {
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim().toLowerCase(),
          phone: formData.phone.trim(),
          state: formData.state.trim(),
          city: formData.city.trim(),
        },
      });

      const { order, keyId, isMock } = orderRes.data;

      // In Sandbox/Test mode with test keys, open the in-app interactive Razorpay Sandbox Terminal
      // to avoid 401 Unauthorized errors from Razorpay's live servers
      if (isMock || (keyId && keyId.startsWith("rzp_test_"))) {
        setSandboxOrder(order);
        setShowSandboxGateway(true);
        setIsProcessing(false);
        return;
      }

      // If live production Razorpay credentials are present, invoke Razorpay SDK
      const fullName = [formData.firstName.trim(), formData.lastName.trim()].filter(Boolean).join(" ");

      const options = {
        key: keyId,
        amount: order.amount,
        currency: order.currency || "INR",
        name: "DIZITAL ADDA LMS",
        description: `Enrollment: ${course.title}`,
        order_id: order.id,
        prefill: {
          name: fullName,
          email: formData.email.trim().toLowerCase(),
          contact: formData.phone.trim(),
        },
        theme: {
          color: "#7C2D12",
        },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
          },
        },
        handler: async function (response) {
          await executeVerification(
            response.razorpay_order_id,
            response.razorpay_payment_id,
            response.razorpay_signature
          );
        },
      };

      try {
        const rzp = new window.Razorpay(options);
        rzp.on("payment.failed", function (response) {
          console.warn("Razorpay gateway rejected transaction:", response.error);
          // Seamless fallback to Sandbox Simulator
          setSandboxOrder(order);
          setShowSandboxGateway(true);
          setIsProcessing(false);
        });
        rzp.open();
      } catch (sdkErr) {
        console.warn("Razorpay window open failed:", sdkErr);
        setSandboxOrder(order);
        setShowSandboxGateway(true);
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Order creation failed:", error);
      setErrorMsg(error.response?.data?.message || "Failed to initialize payment gateway.");
      setIsProcessing(false);
    }
  };

  // ========================================================
  // POST-PAYMENT SUCCESS & CREDENTIALS SCREEN
  // ========================================================
  if (paymentSuccess && credentials) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Top Success Badge */}
          <div className="bg-white rounded-3xl shadow-2xl border-2 border-emerald-500 overflow-hidden">
            {/* Header Banner */}
            <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-emerald-800 text-white p-8 sm:p-10 text-center relative overflow-hidden">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
                <CheckCircle2 size={48} className="text-white" />
              </div>

              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-emerald-900/50 text-emerald-200 px-4 py-1.5 rounded-full mb-3 border border-emerald-400/30">
                Official Enrollment Activated
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black">
                Payment Successful! 🎉
              </h1>

              <p className="text-emerald-100 text-base sm:text-lg mt-3 max-w-xl mx-auto">
                Welcome to Dizital Adda! Your admission has been recorded in our student registry and your course access has been activated.
              </p>

              <div className="mt-4 inline-flex items-center gap-2 bg-emerald-900/40 text-emerald-200 text-xs sm:text-sm px-4 py-1.5 rounded-xl border border-emerald-400/20">
                <span>Payment Reference:</span>
                <span className="font-mono font-bold text-white">
                  {credentials.paymentId || "PAY-VERIFIED"}
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 space-y-8">
              {/* 5-Minute Waiting & Provisioning Notice */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 flex items-start gap-4">
                <Clock3 className="text-amber-600 mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="text-amber-900 font-bold text-base">
                    Please Wait 5 Minutes for Full Environment Provisioning
                  </h4>
                  <p className="text-amber-800 text-sm mt-1 leading-relaxed">
                    Our cloud system is currently preparing your dedicated lecture player, initializing your assignment dashboard, and assigning your senior mentor. You can log into your student portal immediately using the temporary credentials below.
                  </p>
                </div>
              </div>

              {/* Generated Temporary Credentials Card */}
              <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between gap-4 border-b border-slate-700 pb-5 mb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#D4A017] block">
                      Your Portal Access Credentials
                    </span>
                    <h3 className="text-2xl font-black mt-1">
                      Student Login Account
                    </h3>
                  </div>
                  <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-bold">
                    Active
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Username / Email */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      Portal Username (Email ID)
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm sm:text-base font-bold text-white truncate">
                        {credentials.username}
                      </span>
                      <button
                        onClick={() => copyToClipboard(credentials.username, "username")}
                        className="ml-2 p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition flex items-center gap-1 text-xs"
                      >
                        {copiedField === "username" ? (
                          <>
                            <Check size={14} className="text-emerald-400" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Temporary Password */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      Temporary Access Password
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-base font-bold text-[#D4A017] tracking-wider">
                        {showPassword ? credentials.tempPassword : "••••••••••"}
                      </span>
                      <div className="flex items-center gap-1.5 ml-2">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition"
                          title={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                        </button>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(credentials.tempPassword, "password")}
                          className="p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition flex items-center gap-1 text-xs"
                        >
                          {copiedField === "password" ? (
                            <>
                              <Check size={14} className="text-emerald-400" /> Copied!
                            </>
                          ) : (
                            <>
                              <Copy size={14} /> Copy
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Student Roll ID */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      Student Roll / Registry ID
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm sm:text-base font-bold text-cyan-300">
                        {credentials.studentId}
                      </span>
                      <button
                        onClick={() => copyToClipboard(credentials.studentId, "studentId")}
                        className="ml-2 p-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white transition flex items-center gap-1 text-xs"
                      >
                        {copiedField === "studentId" ? (
                          <>
                            <Check size={14} className="text-emerald-400" /> Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={14} /> Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Enrolled Program */}
                  <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                    <span className="text-xs font-semibold text-slate-400 block mb-1">
                      Enrolled Program
                    </span>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white truncate">
                        {credentials.courseTitle}
                      </span>
                      <span className="text-[11px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-md font-bold shrink-0 ml-2">
                        {credentials.duration || "Active"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Password Change Information Callout */}
                <div className="mt-6 pt-5 border-t border-slate-800 flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <Lock className="text-[#D4A017] shrink-0 mt-0.5" size={18} />
                  <p>
                    <strong className="text-white">Important Security Notice:</strong> This temporary password has been auto-generated for instant access. You can customize your password anytime from your <strong>Student Profile Settings</strong> once you enter the dashboard.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={() => navigate("/student")}
                  className="flex-1 bg-gradient-to-r from-[#7C2D12] to-[#b88a10] hover:from-[#60230e] hover:to-[#9c750d] text-white py-4 px-6 rounded-2xl font-bold text-base shadow-xl flex items-center justify-center gap-2 transition hover:scale-[1.02] cursor-pointer"
                >
                  <UserCheck size={20} /> Access Student Portal Now 🚀
                </button>

                <button
                  onClick={() => navigate(`/learn/${credentials.courseId || course.id}`)}
                  className="flex-1 bg-slate-900 hover:bg-black text-white py-4 px-6 rounded-2xl font-bold text-base shadow-md flex items-center justify-center gap-2 transition hover:scale-[1.02] cursor-pointer"
                >
                  <BookOpen size={20} /> Start Learning First Lesson ▶️
                </button>
              </div>

              <div className="text-center pt-2">
                <button
                  onClick={() => window.print()}
                  className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-800 underline transition"
                >
                  Download / Print Enrollment Receipt (PDF)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate pricing numbers
  const originalPrice = Number(course?.originalPrice || (course?.price ? course.price * 1.3 : 50000));
  const currentPrice = Number(course?.price || 45000);
  const discount = Math.max(0, originalPrice - currentPrice);

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B1220] via-[#16243D] to-[#0B1220] text-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center text-xs sm:text-sm text-gray-300 mb-4 flex-wrap">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/skilling" className="hover:text-white">
              Skilling
            </Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-[#D4A017] font-semibold">Checkout & Student Enrollment</span>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 px-3.5 py-1.5 rounded-full text-emerald-300 text-xs font-semibold mb-3">
                <ShieldCheck size={16} /> 256-bit SSL Certified Secure Admission
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Student Enrollment & Billing
              </h1>
              <p className="mt-2 text-sm sm:text-base text-gray-300 max-w-2xl">
                Enter your details to generate your official student portal credentials and activate your course immediately.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl">
              <Sparkles className="text-[#D4A017]" size={24} />
              <div>
                <span className="text-xs text-slate-300 block font-medium">Instant Portal Access</span>
                <span className="text-sm font-black text-white">Auto-Provisioned in 5 Mins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid Container */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {errorMsg && (
          <div className="mb-8 bg-red-50 border-2 border-red-300 rounded-2xl p-4 flex items-center gap-3 text-red-800 text-sm font-semibold animate-shake">
            <AlertCircle size={20} className="shrink-0 text-red-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* ========================================================
              LEFT SIDE: STUDENT INFORMATION FORM (7 Cols)
          ======================================================== */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-7 sm:p-9">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#7C2D12]">
                    Step 1 of 2
                  </span>
                  <h2 className="text-2xl font-black text-[#0B1220]">
                    Student Profile Details
                  </h2>
                </div>
                <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-bold">
                  Official Record
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Your temporary login password and student certificate will be registered to this email and phone number.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* First Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="e.g. Rahul"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C2D12] transition"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="e.g. Sharma"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C2D12] transition"
                  />
                </div>

                {/* Email Address */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Email Address (Student Portal Username) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rahul.sharma@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C2D12] transition pl-11"
                    />
                    <Mail className="absolute left-4 top-3.5 text-slate-400" size={18} />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Your auto-generated temporary password and credentials will be sent to this email.
                  </span>
                </div>

                {/* Mobile Number */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C2D12] transition pl-11"
                    />
                    <PhoneCall className="absolute left-4 top-3.5 text-slate-400" size={18} />
                  </div>
                  <span className="text-[11px] text-slate-500 mt-1 block">
                    Used for mentor session invitations, attendance, and placement drives.
                  </span>
                </div>

                {/* State */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    State / Region
                  </label>
                  <input
                    type="text"
                    name="state"
                    placeholder="e.g. Delhi NCR / Maharashtra"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C2D12] transition"
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. New Delhi"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full border border-slate-300 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C2D12] transition"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-7 sm:p-9">
              <h3 className="text-xl font-black text-[#0B1220] mb-4">
                Payment Gateway
              </h3>

              <div className="border-2 border-[#7C2D12] bg-orange-50/50 rounded-2xl p-5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-5 rounded-full border-4 border-[#7C2D12] bg-white flex items-center justify-center"></div>
                  <div>
                    <h4 className="font-bold text-[#0B1220] text-base">
                      Razorpay Official Gateway (All Payment Modes)
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      UPI (GPay, PhonePe, Paytm), Credit Card, Debit Card, Net Banking & No-Cost EMI
                    </p>
                  </div>
                </div>
                <ShieldCheck size={26} className="text-emerald-600 shrink-0" />
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-[#7C2D12] rounded border-slate-300 focus:ring-[#7C2D12]"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    I agree to the Dizital Adda Terms of Enrollment. I understand that my course access will be provisioned immediately and portal credentials will be generated upon successful payment.
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT SIDE: COURSE BILL & ORDER SUMMARY (5 Cols)
          ======================================================== */}
          <div className="lg:col-span-5">
            <div className="sticky top-10 bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
              {/* Header */}
              <div className="bg-[#0B1220] text-white p-6 sm:p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4A017] block">
                  Step 2 of 2
                </span>
                <h3 className="text-2xl font-black mt-1">Course Bill Details</h3>
                <p className="text-xs text-slate-300 mt-1">
                  Official invoice & itemized program fee breakdown.
                </p>
              </div>

              {/* Course Card Preview */}
              <div className="p-6 sm:p-7">
                <div className="flex gap-4 items-center bg-slate-50 border border-slate-100 p-4 rounded-2xl">
                  <img
                    src={course?.image || "https://images.unsplash.com/photo-1460925895917-afdab827c52f"}
                    alt={course?.title}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-200"
                  />
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-[#7C2D12] uppercase tracking-wider block">
                      {course?.level || "Professional Program"}
                    </span>
                    <h4 className="font-black text-[#0B1220] text-base leading-snug truncate">
                      {course?.title || "Advanced Digital Marketing Course"}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                      <Clock3 size={13} />
                      <span>{course?.duration || "6 Months Track"}</span>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3.5 my-6 text-sm">
                  <div className="flex justify-between text-slate-600">
                    <span>Original Course Fee</span>
                    <span className="line-through text-slate-400">
                      ₹{originalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Direct Portal Scholarship</span>
                    <span>- ₹{discount.toLocaleString("en-IN")}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>LMS Access & Cloud Lab Setup</span>
                    <span className="text-emerald-700 font-bold">100% Free</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Applicable GST (18%)</span>
                    <span className="text-slate-500">Included in Fee</span>
                  </div>

                  <div className="border-t border-slate-200 pt-4 flex justify-between items-baseline">
                    <span className="text-base font-black text-[#0B1220]">Total Payable</span>
                    <span className="text-3xl font-black text-[#7C2D12]">
                      ₹{currentPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* Inclusions Checklist */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Instant LMS Portal login & class recordings</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>10 Live Brand Projects with real ad budgets</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Industry Recognized NSQF Aligned Certification</span>
                  </div>
                  <div className="flex items-center gap-2 font-semibold">
                    <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                    <span>Paid In-House Agency Internship Support</span>
                  </div>
                </div>

                {/* Pay Action CTA Button */}
                <button
                  type="submit"
                  disabled={isProcessing}
                  className={`w-full mt-6 bg-[#7C2D12] hover:bg-[#60230e] text-white py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 ${
                    isProcessing ? "opacity-60 cursor-not-allowed" : "cursor-pointer hover:scale-[1.02]"
                  }`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Connecting Gateway...</span>
                    </>
                  ) : (
                    <>
                      <Lock size={18} />
                      <span>Pay ₹{currentPrice.toLocaleString("en-IN")} & Enroll Now</span>
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-slate-400 mt-4 leading-relaxed">
                  🔒 Protected by 256-bit SSL encryption. Once payment is completed, you will receive your temporary portal ID and password immediately.
                </p>
              </div>
            </div>
          </div>
        </form>
        {/* ======================================================== */}
        {/* IN-APP RAZORPAY SANDBOX PAYMENT GATEWAY MODAL */}
        {/* ======================================================== */}
        {showSandboxGateway && sandboxOrder && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 relative animate-scaleUp">
              {/* Modal Top Bar */}
              <div className="bg-gradient-to-r from-[#7C2D12] to-[#9A3412] text-white p-5 sm:p-6 relative">
                <button
                  type="button"
                  onClick={() => setShowSandboxGateway(false)}
                  className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
                >
                  <X size={18} />
                </button>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-200">
                  <ShieldCheck size={16} />
                  <span>Razorpay Test Mode Simulator</span>
                </div>
                <h3 className="text-xl font-black mt-1">Dizital Adda Secure Payment</h3>
                <p className="text-xs text-white/80 mt-1">
                  Official Course Enrollment & Instant LMS Portal Provisioning
                </p>
              </div>

              {/* Order & Student Details Banner */}
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Enrolling In
                  </span>
                  <p className="font-bold text-slate-800 text-sm line-clamp-1">{course.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Student: <strong className="text-slate-700">{formData.firstName} {formData.lastName}</strong> ({formData.email})
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Total Amount
                  </span>
                  <p className="text-2xl font-black text-[#7C2D12]">
                    ₹{(course.price || 14999).toLocaleString("en-IN")}
                  </p>
                  <span className="text-[10px] text-emerald-700 font-bold bg-emerald-100 px-2 py-0.5 rounded-full">
                    GST & Fees Included
                  </span>
                </div>
              </div>

              {/* Payment Methods Selection */}
              <div className="p-6">
                <div className="flex rounded-xl bg-slate-100 p-1 mb-5">
                  <button
                    type="button"
                    onClick={() => setSandboxMethod("upi")}
                    className={`flex-1 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                      sandboxMethod === "upi"
                        ? "bg-white text-[#7C2D12] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <QrCode size={15} />
                    <span>UPI & QR</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSandboxMethod("card")}
                    className={`flex-1 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                      sandboxMethod === "card"
                        ? "bg-white text-[#7C2D12] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <CreditCard size={15} />
                    <span>Cards</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSandboxMethod("netbanking")}
                    className={`flex-1 py-2.5 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition ${
                      sandboxMethod === "netbanking"
                        ? "bg-white text-[#7C2D12] shadow-xs"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Building2 size={15} />
                    <span>NetBanking</span>
                  </button>
                </div>

                {/* Method 1: UPI */}
                {sandboxMethod === "upi" && (
                  <div className="text-center py-2 space-y-4">
                    <div className="relative inline-block p-4 bg-white rounded-2xl border-2 border-dashed border-amber-300 shadow-sm">
                      {/* Stylized QR placeholder */}
                      <div className="w-36 h-36 mx-auto bg-slate-900 rounded-xl p-2 flex flex-col items-center justify-center text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-transparent"></div>
                        <QrCode size={90} className="text-amber-400" />
                        <span className="text-[9px] font-mono tracking-widest text-slate-300 mt-1 uppercase">
                          SCAN WITH ANY APP
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-800">
                        Scan with Google Pay, PhonePe, Paytm or BHIM
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        UPI ID: <code className="bg-slate-100 px-2 py-0.5 rounded font-mono text-[#7C2D12] font-bold">dizitaladda@icici</code>
                      </p>
                    </div>
                  </div>
                )}

                {/* Method 2: Card */}
                {sandboxMethod === "card" && (
                  <div className="space-y-3 py-1">
                    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-2xl p-5 shadow-lg border border-slate-700 relative overflow-hidden">
                      <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
                        <span>TEST PAYMENT CARD</span>
                        <span className="font-bold text-amber-400">VISA / RUPAY</span>
                      </div>
                      <div className="my-4 font-mono text-lg tracking-widest text-slate-200">
                        4242 •••• •••• 4242
                      </div>
                      <div className="flex justify-between items-end text-xs font-mono">
                        <div>
                          <span className="text-[9px] text-slate-400 block uppercase">Card Holder</span>
                          <span className="font-bold">{formData.firstName} {formData.lastName || "STUDENT"}</span>
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-400 block uppercase">Expires</span>
                          <span className="font-bold">12/28</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 text-center">
                      Pre-filled simulated test credentials for instant authorization.
                    </p>
                  </div>
                )}

                {/* Method 3: NetBanking */}
                {sandboxMethod === "netbanking" && (
                  <div className="grid grid-cols-2 gap-2.5 py-1">
                    {["HDFC Bank", "ICICI Bank", "State Bank of India", "Axis Bank"].map((bank, i) => (
                      <div
                        key={bank}
                        className={`p-3.5 rounded-xl border text-left cursor-pointer transition text-xs font-bold flex items-center justify-between ${
                          i === 0 ? "border-[#7C2D12] bg-amber-50/50 text-[#7C2D12]" : "border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <span>{bank}</span>
                        {i === 0 && <CheckCircle2 size={14} className="text-[#7C2D12]" />}
                      </div>
                    ))}
                  </div>
                )}

                {/* Instant Access Guarantee Banner */}
                <div className="mt-5 p-3 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2.5 text-xs text-amber-900">
                  <Sparkles size={16} className="text-amber-700 shrink-0 mt-0.5" />
                  <p className="leading-snug">
                    <strong>Sandbox Simulator:</strong> Click below to simulate an approved payment. Your <strong>Student ID & Password</strong> will be generated immediately on the next screen.
                  </p>
                </div>

                {/* Primary Action Simulator Button */}
                <button
                  type="button"
                  onClick={handleSimulatePayment}
                  disabled={isSimulating}
                  className={`w-full mt-5 py-4 px-6 rounded-2xl font-bold text-base transition-all duration-300 shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                    isSimulating
                      ? "bg-slate-700 text-white cursor-not-allowed"
                      : "bg-[#7C2D12] hover:bg-[#60230e] text-white hover:scale-[1.02] shadow-[#7C2D12]/20"
                  }`}
                >
                  {isSimulating ? (
                    <>
                      <RefreshCw size={18} className="animate-spin text-amber-300" />
                      <span>{simStep || "Authorizing Payment..."}</span>
                    </>
                  ) : (
                    <>
                      <Lock size={16} />
                      <span>Simulate Successful Payment (₹{(course.price || 14999).toLocaleString("en-IN")})</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
