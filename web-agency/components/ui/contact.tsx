export default function Contact() {
  return (
    <section className="py-20 min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-black">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-black">
          Contact Us
         
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg text-black"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg text-black"
          />

          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 border rounded-lg text-black"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
