import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Streamline Your Strata Management
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              A modern solution for efficient property management and community engagement
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="#features"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Get Started
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Why Choose Our Strata Management Solution?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <Image
                  src="/icons/efficiency.svg"
                  alt="Efficiency Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Efficient Management
              </h3>
              <p className="text-gray-600">
                Streamlined processes for property maintenance, billing, and resident communication
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <Image
                  src="/icons/security.svg"
                  alt="Security Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Enhanced Security
              </h3>
              <p className="text-gray-600">
                Advanced security features to protect your property and residents
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <Image
                  src="/icons/community.svg"
                  alt="Community Icon"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Community Engagement
              </h3>
              <p className="text-gray-600">
                Tools for effective communication and community building
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Strata Management?
          </h2>
          <p className="text-xl mb-8">
            Join thousands of satisfied property managers and residents using our platform
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
          >
            Schedule a Demo
          </a>
        </div>
      </section>
    </main>
  );
}
