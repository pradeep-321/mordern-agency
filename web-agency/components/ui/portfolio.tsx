import Image from "next/image";

const projects = [
  {
    title: "Business Website",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Mobile App UI",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800",
  },
  {
    title: "E-Commerce Store",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
];

export default function Portfolio() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Portfolio
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-60 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

