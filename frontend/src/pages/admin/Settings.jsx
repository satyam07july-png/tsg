import { useState, useEffect } from "react";
import api from "../../lib/api";

import {
  FaUserCog,
  FaLock,
  FaBell,
  FaPalette,
  FaCreditCard,
  FaShieldAlt,
  FaSave,
} from "react-icons/fa";

function Settings() {

  // add state
  const [passwordData, setPasswordData] = useState({

  currentPassword: "",

  newPassword: "",

});

// update pasword fuction
const updatePassword = async () => {

  try {

    await api.put(

      "http://https://https://tsg-qlb1.onrender.com/api/admin/update-password",

      {

        email: adminData.email,

        currentPassword:
          passwordData.currentPassword,

        newPassword:
          passwordData.newPassword,

      }

    );

    alert("Password Updated Successfully 🚀");

  }

  catch (error) {

    console.log(error);

    alert(

      error.response?.data?.message ||

      "Error updating password"

    );

  }

};
  // ADMIN DATA
  const [adminData, setAdminData] = useState({

    name: "",

    email: "",

  });

  // LOAD SAVED SETTINGS
  useEffect(() => {

    const savedAdmin = JSON.parse(

      localStorage.getItem("adminSettings")

    );

    if (savedAdmin) {

      setAdminData(savedAdmin);

    }

  }, []);

  // SAVE SETTINGS
  const saveProfile = () => {

    localStorage.setItem(

      "adminSettings",

      JSON.stringify(adminData)

    );

    alert("Settings Saved Successfully 🚀");

  };

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black text-white p-10 relative overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="relative z-10">

        <h1 className="text-7xl font-black">

          Admin Settings ⚙️

        </h1>

        <p className="text-slate-400 text-xl mt-5 max-w-4xl leading-9">

          Configure LMS platform settings, security,
          branding, notifications and payment systems.

        </p>

      </div>

      {/* SETTINGS GRID */}
      <div className="grid grid-cols-2 gap-10 mt-14 relative z-10">

        {/* PROFILE SETTINGS */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex items-center gap-5">

            <FaUserCog className="text-5xl text-cyan-400" />

            <div>

              <h1 className="text-4xl font-black">

                Profile Settings

              </h1>

              <p className="text-slate-400 mt-2">

                Manage admin profile information.

              </p>

            </div>

          </div>

          <div className="space-y-6 mt-10">

            {/* ADMIN NAME */}
            <input
              type="text"
              placeholder="Admin Name"
              value={adminData.name}
              onChange={(e) =>
                setAdminData({
                  ...adminData,
                  name: e.target.value,
                })
              }
              className="w-full bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            {/* ADMIN EMAIL */}
            <input
              type="email"
              placeholder="Admin Email"
              value={adminData.email}
              onChange={(e) =>
                setAdminData({
                  ...adminData,
                  email: e.target.value,
                })
              }
              className="w-full bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            {/* SAVE BUTTON */}
            <button
              onClick={saveProfile}
              className="bg-cyan-500 hover:bg-cyan-400 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
            >

              <FaSave />

              Save Changes

            </button>

          </div>

        </div>

        {/* SECURITY */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex items-center gap-5">

            <FaLock className="text-5xl text-red-400" />

            <div>

              <h1 className="text-4xl font-black">

                Security Settings

              </h1>

              <p className="text-slate-400 mt-2">

                Change password and security preferences.

              </p>

            </div>

          </div>

          <div className="space-y-6 mt-10">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />
<input
  type="password"
  placeholder="New Password"
  value={passwordData.newPassword}
  onChange={(e) =>
    setPasswordData({
      ...passwordData,
      newPassword: e.target.value,
    })
  }
  className="w-full bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
/>

<button
  onClick={updatePassword}
  className="bg-red-500 hover:bg-red-400 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3"
>

  <FaShieldAlt />

  Update Password

</button>

          </div>

        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex items-center gap-5">

            <FaBell className="text-5xl text-yellow-400" />

            <div>

              <h1 className="text-4xl font-black">

                Notification Settings

              </h1>

              <p className="text-slate-400 mt-2">

                Configure LMS alerts and reminders.

              </p>

            </div>

          </div>

          <div className="space-y-5 mt-10 text-lg">

            <label className="flex items-center justify-between bg-black/20 p-5 rounded-2xl">

              Email Notifications

              <input type="checkbox" defaultChecked />

            </label>

            <label className="flex items-center justify-between bg-black/20 p-5 rounded-2xl">

              Payment Alerts

              <input type="checkbox" defaultChecked />

            </label>

            <label className="flex items-center justify-between bg-black/20 p-5 rounded-2xl">

              Student Activity Alerts

              <input type="checkbox" defaultChecked />

            </label>

          </div>

        </div>

        {/* PAYMENT SETTINGS */}
        <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl">

          <div className="flex items-center gap-5">

            <FaCreditCard className="text-5xl text-emerald-400" />

            <div>

              <h1 className="text-4xl font-black">

                API & Payment Keys

              </h1>

              <p className="text-slate-400 mt-2">

                Configure LMS integrations and payment gateways.

              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <input
              type="text"
              placeholder="Razorpay Key ID"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Razorpay Secret"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Stripe Publishable Key"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Stripe Secret Key"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Cloudinary API Key"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="Cloudinary Secret"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <input
              type="text"
              placeholder="SMTP Email"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

            <input
              type="password"
              placeholder="SMTP Password"
              className="bg-black/20 border border-white/10 rounded-2xl p-5 outline-none"
            />

          </div>

          <button className="mt-8 bg-emerald-500 hover:bg-emerald-400 transition px-8 py-4 rounded-2xl font-bold flex items-center gap-3">

            <FaSave />

            Save All Keys

          </button>

        </div>

      </div>

      {/* THEME */}
      <div className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[40px] p-8 shadow-2xl mt-10 relative z-10">

        <div className="flex items-center gap-5">

          <FaPalette className="text-5xl text-pink-400" />

          <div>

            <h1 className="text-4xl font-black">

              Appearance & Branding

            </h1>

            <p className="text-slate-400 mt-2">

              Customize LMS branding and platform appearance.

            </p>

          </div>

        </div>

        <div className="grid grid-cols-3 gap-6 mt-10">

          <button className="bg-cyan-500 hover:bg-cyan-400 transition py-5 rounded-2xl font-bold">

            Dark Theme

          </button>

          <button className="bg-purple-500 hover:bg-purple-400 transition py-5 rounded-2xl font-bold">

            Purple Theme

          </button>

          <button className="bg-emerald-500 hover:bg-emerald-400 transition py-5 rounded-2xl font-bold">

            Green Theme

          </button>

        </div>

      </div>

    </div>

  );

}

export default Settings;