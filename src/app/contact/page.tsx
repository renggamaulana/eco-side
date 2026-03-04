export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-white text-gray-800">
      <h1 className="text-4xl font-bold tracking-tight mb-6">Contact Us</h1>
      <p className="text-lg max-w-xl text-center mb-8">
        We'd love to hear from you. Whether you have a question about our mission,
        want to collaborate, or just want to say hello — feel free to reach out.
      </p>

      <form className="w-full max-w-lg space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-gray-600"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-gray-600"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            className="w-full border border-gray-300 rounded-xl px-4 py-3 h-32 resize-none focus:outline-none focus:border-gray-600"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-xl border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-center font-medium"
        >
          Send Message
        </button>
      </form>

      <div className="mt-12 text-center text-sm text-gray-500">
        Or contact us directly at <span className="font-medium text-gray-700">support@saveearth.org</span>
      </div>
    </div>
  );
}