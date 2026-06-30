import ServiceCard from "../../components/ServiceCard";

const services = [
  {
    icon: "🦷",
    title: "General Checkup",
    description: "Routine dental examinations for healthy teeth.",
  },
  {
    icon: "✨",
    title: "Teeth Cleaning",
    description: "Professional cleaning to remove plaque and tartar.",
  },
  {
    icon: "😁",
    title: "Dental Implants",
    description: "Permanent replacement for missing teeth.",
  },
  {
    icon: "🪥",
    title: "Root Canal",
    description: "Save infected teeth with painless treatment.",
  },
  {
    icon: "🦷",
    title: "Orthodontics",
    description: "Braces and aligners for straight teeth.",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    description: "Special dental care for children.",
  },
];

export default function DentalCare() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Dental Care
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Comprehensive dental services to keep your smile healthy and beautiful.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
}