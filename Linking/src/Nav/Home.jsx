export default function Home() {
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Welcome to <span className="text-blue-600">My Website</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Build modern and responsive web applications using React and
            Tailwind CSS with clean UI design and smooth user experience.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-blue-700 transition">
              Get Started
            </button>

            <button className="border border-gray-400 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Coding"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
