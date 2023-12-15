import { PageHeader } from "../components/header/PageHeader";

export default function Home() {
  return (
    <>
      <PageHeader
        title="Next.js Product Showcase"
        tagline="Explore, Discover, Experience"
      />
      <main className="min-h-screen py-24 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-indigo-800 mb-4">
            Elevate Your Experience with Next.js
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Welcome to the Next.js Product Showcase – a cutting-edge platform
            designed to redefine your exploration of premium products. With the
            power of Next.js and Tailwind CSS, we've crafted a seamless and
            immersive experience for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Responsive Design */}
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                Responsive Design
              </h3>
              <p className="text-gray-600 mb-4">
                Enjoy a responsive and visually appealing design that adapts to
                various devices, ensuring a consistent and delightful user
                experience.
              </p>
            </div>
            {/* Feature 2: Dynamic Routing */}
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                Dynamic Routing
              </h3>
              <p className="text-gray-600 mb-4">
                Benefit from dynamic routing capabilities provided by Next.js,
                enabling smooth navigation and enhanced performance.
              </p>
            </div>
            {/* Feature 3: Tailwind Styling */}
            <div className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              <h3 className="text-xl font-semibold mb-2 text-indigo-800">
                Tailwind Styling
              </h3>
              <p className="text-gray-600 mb-4">
                Immerse yourself in a visually stunning interface crafted with
                the utility-first approach of Tailwind CSS, offering flexibility
                and customization.
              </p>
            </div>
          </div>
          {/* Call-to-Action Button */}
          <a
            href="/bikes"
            className="inline-block mt-12 px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition duration-300"
          >
            Explore Products
          </a>
        </div>
      </main>
    </>
  );
}
