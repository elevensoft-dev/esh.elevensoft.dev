function CallToAction() {
  return (
    <section className="py-20 bg-indigo-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to transform your workplace?
        </h2>
        <p className="text-xl text-indigo-100 mb-8">
          Start your 14-day free trial today. No credit card required.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
