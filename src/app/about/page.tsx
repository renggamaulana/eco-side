export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-20 flex flex-col items-center">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About Save Earth Movement</h1>
        <p className="text-lg leading-relaxed mb-10">
          Save Earth Movement is a community-driven initiative focused on raising awareness
          about environmental sustainability. We believe that meaningful change is possible
          when individuals come together to rethink daily habits, protect natural ecosystems,
          and inspire others to take action.
        </p>
      </div>

      <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div className="border rounded-2xl shadow-sm p-8 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-3">🌿 Our Mission</h2>
          <p>
            To inspire, educate, and empower communities to lead environmentally conscious
            lifestyles and preserve our planet for future generations.
          </p>
        </div>

        <div className="border rounded-2xl shadow-sm p-8 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-3">💧 Our Values</h2>
          <p>
            Sustainability, collaboration, compassion for all living beings, and continuous
            learning toward greener ways of living.
          </p>
        </div>

        <div className="border rounded-2xl shadow-sm p-8 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold mb-3">🌍 Our Vision</h2>
          <p>
            To build a world where sustainable living is the norm—not the exception.
          </p>
        </div>
      </div>

      <div className="max-w-4xl text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Why This Matters</h2>
        <p className="text-lg leading-relaxed">
          Climate change, pollution, and habitat loss threaten the balance of life on Earth.
          Small, consistent actions—like reducing waste, conserving energy, and supporting
          responsible brands—make a significant impact. We strive to show that every person
          has the power to make a difference.
        </p>
      </div>
    </div>
  );
}