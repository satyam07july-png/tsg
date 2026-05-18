import DashboardLayout from "../../components/dashboard/DashboardLayout";

function ActivityPage() {

  const activities = [

    {
      title: "New Student Registered",
      description: "Rahul Sharma enrolled in Web Development",
      time: "2 min ago",
    },

    {
      title: "Payment Received",
      description: "₹4,999 received from Priya Singh",
      time: "10 min ago",
    },

    {
      title: "New Course Uploaded",
      description: "Machine Learning Bootcamp added",
      time: "1 hour ago",
    },

    {
      title: "Certificate Generated",
      description: "Certificate issued to Aman Verma",
      time: "2 hours ago",
    },

    {
      title: "New Teacher Added",
      description: "Rohit Kapoor joined as instructor",
      time: "5 hours ago",
    },

    {
      title: "Course Updated",
      description: "React Masterclass updated",
      time: "1 day ago",
    },

  ];

  return (

    <DashboardLayout>

      <div className="bg-white rounded-[35px] shadow-xl p-10">

        <div className="flex justify-between items-center mb-12">

          <div>

            <h1 className="text-6xl font-bold text-slate-800">

              All Activities

            </h1>

            <p className="text-slate-500 text-xl mt-4">

              Complete LMS activity history.

            </p>

          </div>

        </div>

        <div className="space-y-8">

          {activities.map((activity, index) => (

            <div
              key={index}
              className="border-b pb-8 flex justify-between items-center"
            >

              <div>

                <h2 className="text-3xl font-bold text-slate-800">

                  {activity.title}

                </h2>

                <p className="text-slate-500 text-xl mt-3">

                  {activity.description}

                </p>

              </div>

              <span className="text-slate-400 text-lg">

                {activity.time}

              </span>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>

  );

}

export default ActivityPage;