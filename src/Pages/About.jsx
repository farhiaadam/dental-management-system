import React from "react";

const About = () => {
  const features = [
    {
      icon: "🦷",
      title: "Experienced Dentists",
      desc: "Highly qualified professionals committed to delivering exceptional dental care."
    },
    {
      icon: "✨",
      title: "Advanced Technology",
      desc: "Modern equipment and innovative techniques for accurate and comfortable treatments."
    },
    {
      icon: "🤍",
      title: "Patient First",
      desc: "Every treatment plan is tailored to your needs, comfort, and long-term oral health."
    },
    {
      icon: "😁",
      title: "Beautiful Smiles",
      desc: "Creating confident, healthy, and natural-looking smiles that last."
    }
  ];

  return (
    <div className="bg-white text-neutral-800">

      {/* Hero */}
      <section
        className="relative h-[75vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000')"
        }}
      >
        <div className="text-center px-6 text-white max-w-4xl">
          <p className="uppercase tracking-[0.4em] text-[#dfb28c] text-sm">
            Welcome to Aluer
          </p>

          <h1 className="text-5xl md:text-7xl font-serif mt-5 leading-tight">
            Your Smile <br />
            <span className="italic font-light">Our Passion</span>
          </h1>

          <p className="mt-8 text-lg text-gray-200 max-w-2xl mx-auto">
            Combining modern dentistry with aesthetic excellence to create
            healthy, confident, and beautiful smiles.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <span className="uppercase tracking-[0.3em] text-[#dfb28c] font-semibold text-sm">
            About Us
          </span>

          <h2 className="text-5xl font-serif mt-4 leading-tight">
            Excellence In Every Smile
          </h2>

          <p className="mt-8 text-neutral-600 leading-8">
            At Aluer Aesthetic & Dental Clinic, we believe that a healthy smile
            changes lives. Our clinic combines advanced dental care with modern
            aesthetic treatments to deliver outstanding results in a relaxing
            and welcoming environment.
          </p>

          <p className="mt-6 text-neutral-600 leading-8">
            From preventive dentistry and cosmetic smile makeovers to restorative
            and aesthetic procedures, every treatment is personalized to meet
            your individual needs while ensuring comfort, safety, and long-term
            oral health.
          </p>

          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-4xl font-serif text-[#dfb28c]">500+</h3>
              <p className="text-sm mt-2 text-neutral-500">
                Happy Patients
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-serif text-[#dfb28c]">10+</h3>
              <p className="text-sm mt-2 text-neutral-500">
                Dental Services
              </p>
            </div>
          </div>
        </div>

        <div >
          <img
            src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1200"
            alt="Dental Clinic"
            className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
          />
        </div>

      </section>

      {/* Mission & Vision */}

      <section className="bg-[#faf7f2] py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-white rounded-3xl p-10 shadow-sm">

            <h3 className="text-3xl font-serif mb-6">
              Our Mission
            </h3>

            <p className="text-neutral-600 leading-8">
              To provide exceptional dental and aesthetic care using advanced
              technology, personalized treatment plans, and compassionate
              service that improves the health and confidence of every patient.
            </p>

          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm">

            <h3 className="text-3xl font-serif mb-6">
              Our Vision
            </h3>

            <p className="text-neutral-600 leading-8">
              To become a trusted destination for premium dental and aesthetic
              care, recognized for innovation, excellence, and life-changing
              smile transformations.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.3em] text-[#dfb28c] text-sm">
              Why Choose Us
            </span>

            <h2 className="text-5xl font-serif mt-4">
              Exceptional Care,
              <br />
              Outstanding Results
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
              >
                <div className="text-5xl mb-6">{item.icon}</div>

                <h3 className="font-serif text-2xl mb-4">
                  {item.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-7">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#1f1f1f] text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-serif">
            Ready For A Healthier Smile?
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Let our experienced team help you achieve the smile you've always
            wanted with personalized, professional dental care.
          </p>

          <button className="mt-10 bg-[#dfb28c] hover:bg-[#c89d77] transition px-10 py-4 rounded-full uppercase tracking-widest text-sm font-semibold">
            Book Appointment
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;