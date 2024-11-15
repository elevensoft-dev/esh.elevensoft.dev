import { Users } from "lucide-react";

function SocialProof() {
  return (
    <section className="py-20 bg-gray-50 hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted by leading companies
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Users key={i} className="h-12 w-12 text-gray-400" />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
