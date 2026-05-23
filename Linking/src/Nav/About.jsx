export default function About() {
  return (
    <section className="min-h-screen bg-white px-6 py-20 flex items-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="About Us"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Us
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We create modern, responsive, and user-friendly web applications
            using the latest technologies like React, Node.js, and Tailwind
            CSS.
          </p>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Our goal is to deliver high-quality digital experiences with clean
            design, fast performance, and scalable solutions for businesses and
            individuals.
          </p>

          <div className="mt-8 flex gap-6">
            <div className="bg-gray-100 p-6 rounded-2xl shadow-md text-center w-36">
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>

            <div className="bg-gray-100 p-6 rounded-2xl shadow-md text-center w-36">
              <h3 className="text-3xl font-bold text-blue-600">100+</h3>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
