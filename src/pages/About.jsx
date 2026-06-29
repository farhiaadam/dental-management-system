import React from "react";

const About = () => {
  const features = [
    {
      icon: "🦷",
      title: "Expert Dentists",
      desc: "Experienced professionals providing exceptional dental care with precision."
    },
    {
      icon: "💎",
      title: "Premium Care",
      desc: "Comfortable treatments focused on quality, safety, and patient satisfaction."
    },
    {
      icon: "⚡",
      title: "Modern Technology",
      desc: "Advanced equipment for faster, safer, and more accurate dental procedures."
    },
    {
      icon: "❤️",
      title: "Personalized Treatment",
      desc: "Every smile is unique, and every treatment plan is customized."
    }
  ];

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cosmetic Dentist",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80"
    },
    {
      name: "Dr. Michael Lee",
      role: "Dental Surgeon",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80"
    },
    {
      name: "Dr. Emily Brown",
      role: "Orthodontist",
      image:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80"
    }
  ];

  const journey = [
    {
      step: "01",
      title: "Consultation",
      desc: "Meet our dentist and discuss your dental goals."
    },
    {
      step: "02",
      title: "Diagnosis",
      desc: "Digital examination and personalized treatment planning."
    },
    {
      step: "03",
      title: "Treatment",
      desc: "Professional care using advanced dental technology."
    },
    {
      step: "04",
      title: "Smile",
      desc: "Enjoy a healthy, beautiful, and confident smile."
    }
  ];

  return (
    <div className="bg-white text-gray-800">

      {/* HERO */}
<section className="bg-[#faf8f5] pt-32 pb-24">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Content */}

    <div>

      <span className="uppercase tracking-[6px] text-[#5b58a6] text-sm font-semibold">
        ABOUT ALUER CLINIC
      </span>

      <h1 className="mt-6 text-5xl lg:text-6xl font-serif leading-tight text-gray-900">
        Creating
        <span className="text-[#5b58a6]"> Beautiful </span>
        Smiles
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-600 max-w-xl">
        We provide modern dental and aesthetic treatments with
        advanced technology, experienced specialists, and
        personalized care.
      </p>

      <div className="mt-10 flex gap-5">

        <button className="bg-[#5b58a6] hover:bg-[#dfb28c] text-white px-8 py-4 rounded-full">
          Book Appointment
        </button>

        <button className="border border-[#5b58a6] text-[#5b58a6] px-8 py-4 rounded-full hover:bg-[#5b58a6] hover:text-white transition">
          Learn More
        </button>

      </div>

      <div className="flex gap-12 mt-16">

        <div>
          <h2 className="text-4xl font-bold text-[#5b58a6]">1000+</h2>
          <p className="text-gray-500">Happy Patients</p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#5b58a6]">15+</h2>
          <p className="text-gray-500">Years Experience</p>
        </div>

      </div>

    </div>

    {/* Right Image */}

    <div className="relative">

      <img
        src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=80"
        alt=""
        className="rounded-[40px] h-[650px] w-full object-cover shadow-2xl"
      />

      <div className="absolute bottom-8 left-8 bg-white rounded-3xl shadow-xl p-6">

        <h3 className="text-3xl font-bold text-[#5b58a6]">★ 4.9</h3>

        <p className="text-gray-500">
          Trusted by Hundreds of Patients
        </p>

      </div>

    </div>

  </div>

</section>

      {/* STORY */}

      <section className="max-w-7xl mx-auto py-24 px-6 grid lg:grid-cols-2 gap-16 items-center">

        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=900&q=80"
          className="rounded-3xl h-[650px] object-cover shadow-xl"
          alt=""
        />

        <div>

          <span className="uppercase tracking-[0.3em] text-[#dfb28c]">
            Our Story
          </span>

          <h2 className="text-5xl font-serif mt-4">
            Excellence Begins With Care
          </h2>

          <p className="mt-8 leading-8 text-gray-600">
            At Aluer Aesthetic & Dental Clinic, we believe everyone deserves a
            confident smile. Our clinic combines modern technology,
            experienced professionals, and personalized care to provide
            world-class dental treatments.
          </p>

          <p className="mt-6 leading-8 text-gray-600">
            From preventive care to cosmetic dentistry and smile makeovers,
            our mission is to improve oral health while creating beautiful,
            natural-looking smiles.
          </p>

        </div>

      </section>

      {/* WHY CHOOSE */}

      <section className="bg-[#faf7f2] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[0.3em] text-[#dfb28c]">
              Why Choose Us
            </span>

            <h2 className="text-5xl font-serif mt-4">
              Exceptional Dental Experience
            </h2>

          </div>

          <div className="grid lg:grid-cols-4 gap-8">

            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow hover:-translate-y-2 duration-300"
              >
                <div className="text-5xl mb-5">{item.icon}</div>

                <h3 className="text-2xl font-serif mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 text-center gap-10">

          <div>
            <h2 className="text-5xl text-[#dfb28c] font-serif">1000+</h2>
            <p className="mt-2">Happy Patients</p>
          </div>

          <div>
            <h2 className="text-5xl text-[#dfb28c] font-serif">15+</h2>
            <p className="mt-2">Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl text-[#dfb28c] font-serif">25+</h2>
            <p className="mt-2">Dental Services</p>
          </div>

          <div>
            <h2 className="text-5xl text-[#dfb28c] font-serif">99%</h2>
            <p className="mt-2">Patient Satisfaction</p>
          </div>

        </div>

      </section>

      {/* DOCTORS */}

      <section className="py-24 bg-white">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-[#dfb28c]">
            Our Team
          </span>

          <h2 className="text-5xl font-serif mt-4">
            Meet Our Specialists
          </h2>

        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={doctor.image}
                className="h-[420px] w-full object-cover"
                alt={doctor.name}
              />

              <div className="p-8">

                <h3 className="text-2xl font-serif">
                  {doctor.name}
                </h3>

                <p className="text-[#dfb28c] mt-2">
                  {doctor.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* JOURNEY */}

      <section className="bg-[#faf7f2] py-24">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-[#dfb28c]">
            Patient Journey
          </span>

          <h2 className="text-5xl font-serif mt-4">
            Your Smile Journey
          </h2>

        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {journey.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center"
            >
              <div className="text-6xl font-serif text-[#dfb28c]">
                {item.step}
              </div>

              <h3 className="text-2xl mt-5 font-serif">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}

      <section className="bg-[#1f1f1f] text-white py-24">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-5xl font-serif">
            Let Us Transform Your Smile
          </h2>

          <p className="mt-6 text-gray-300 leading-8">
            Schedule your consultation today and experience premium dental
            care tailored to your needs.
          </p>

          <button className="mt-10 bg-[#c89d77] hover:bg-[#5b58a6] px-10 py-4 rounded-full uppercase tracking-widest">
            Book Appointment
          </button>

        </div>

      </section>

    </div>
  );
};

export default About;