import ServiceCard from "../../components/ServiceCard";

const services = [
  {
    icon: "✨",
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter smile.",
  },
  {
    icon: "😁",
    title: "Dental Veneers",
    description: "Natural-looking porcelain veneers.",
  },
  {
    icon: "🌟",
    title: "Smile Makeover",
    description: "Complete cosmetic smile transformation.",
  },
  {
    icon: "💎",
    title: "Hollywood Smile",
    description: "Premium smile enhancement treatment.",
  },
  {
    icon: "🦷",
    title: "Cosmetic Bonding",
    description: "Repair chipped or uneven teeth.",
  },
  {
    icon: "😊",
    title: "Invisalign",
    description: "Clear aligners for straighter teeth.",
  },
];

export default function AestheticServices() {
  return (
    <section className="bg-gray-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center mb-4">
          Aesthetic Services
        </h1>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Enhance your smile with our advanced cosmetic dental treatments.
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