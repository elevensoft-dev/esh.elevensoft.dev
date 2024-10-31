import { BarChart, Clock, Shield } from "lucide-react";

function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need for complete visibility
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive monitoring tools designed for modern workplaces
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Shield className="h-8 w-8 text-indigo-600" />,
              title: "Secure Recording",
              description:
                "End-to-end encrypted session recordings with advanced access controls",
            },
            {
              icon: <BarChart className="h-8 w-8 text-indigo-600" />,
              title: "Analytics Dashboard",
              description:
                "Real-time insights and productivity metrics at your fingertips",
            },
            {
              icon: <Clock className="h-8 w-8 text-indigo-600" />,
              title: "Time Tracking",
              description: "Automated time tracking and activity monitoring",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
