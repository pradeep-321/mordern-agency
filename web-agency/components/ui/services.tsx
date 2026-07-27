import AnimatedBackground from "./animated-background";
export default function Services() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Modern and user-friendly interface design.",
      icon: "🎨",
    },
    {
      title: "Web Development",
      description: "Fast, responsive and scalable websites.",
      icon: "💻",
    },
    {
      title: "Branding",
      description: "morden branding for your business.",
      icon: "🚀",
    },
    {
      title: "Digital Marketing",
      description: "Grow your business with online marketing.",
      icon: "📈",
    },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold text-black">
          Our Services
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-white p-6 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-4 text-5xl">{service.icon}</div>

              <h3 className="mb-2 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

