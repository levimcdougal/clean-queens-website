import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import deepCleanImg from "figma:asset/6ce1d56b7c29a13e4defc4943d76bcc62a8d305a.png";
import weeklyImg from "figma:asset/13d1c4e94e9d2876a7a44211f3ef1eb5afeb6b30.png";
import biweeklyImg from "figma:asset/3e34377746634f94b0dc6c4d8ee59a0e5453d431.png";
import triWeeklyImg from "figma:asset/d5f7ab53a7cbcd2cf17f55e0be1182dfc3b5b425.png";
import monthlyImg from "figma:asset/9ae263c6ffb31b3fa8cb675e02638d78ac0e8f5f.png";
import weeklyWeekendImg from "figma:asset/6d8cd8869675454eae870b4f05bdb01f1f1fc6f6.png";
import biWeeklyWeekendImg from "figma:asset/c0a390f7a9ec4af1df83bede0bc71df09368153a.png";
import triWeeklyWeekendImg from "figma:asset/a413eeaf5d081e07e43df5045b3a123db6cbf5c7.png";
import monthlyWeekendImg from "figma:asset/7c140bb0e32ca85009ee892619164f1fd2a2b727.png";
import deepCleanWeekendImg from "figma:asset/ea9a1de7133c4ef02416dfc06f6c9c33fe4f641e.png";
import moveInOutImg from "figma:asset/a698c9e189dabddbaa698b8b06d8154cd4c111d6.png";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function Animate({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}

export function Services() {
  const services = [
    {
      image: deepCleanImg,
      title: "Deep Clean",
      description: "A weekday deep clean of an occupied home or business, for first time customers.",
    },
    {
      image: weeklyImg,
      title: "Weekly",
      description: "A routine weekday clean of your home or business, scheduled on a weekday.",
    },
    {
      image: biweeklyImg,
      title: "Bi-Weekly",
      description: "A routine weekday clean of your home or business, scheduled once every 2 weeks.",
    },
    {
      image: triWeeklyImg,
      title: "Tri-Weekly",
      description: "A routine weekday clean of your home or business, scheduled once every 3 weeks.",
    },
    {
      image: monthlyImg,
      title: "Monthly",
      description: "A routine weekday clean of your home or business, scheduled once per month.",
    },
    {
      image: weeklyWeekendImg,
      title: "Weekly Weekend",
      description: "A routine weekend clean of your home or business, scheduled once a week.",
    },
    {
      image: biWeeklyWeekendImg,
      title: "Bi-Weekly Weekend",
      description: "A routine weekend clean of your home or business, scheduled once every 2 weeks.",
    },
    {
      image: triWeeklyWeekendImg,
      title: "Tri-Weekly Weekend",
      description: "A routine weekend clean of your home or business, scheduled once every 3 weeks.",
    },
    {
      image: monthlyWeekendImg,
      title: "Monthly Weekend",
      description: "A routine weekend clean of your home or business, scheduled once per month.",
    },
    {
      image: deepCleanWeekendImg,
      title: "Deep Clean Weekend",
      description: "A weekend deep clean of your home or business, for first time customers.",
    },
    {
      image: moveInOutImg,
      title: "Move In/ Move Out Clean",
      description: "A thorough clean of an unoccupied home or apartment after a resident or tenant moves out and/or a new tenant or resident moves in.",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                Professional cleaning solutions designed to meet your specific
                needs. We deliver excellence in every service.
              </p>
            </div>
          </Animate>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pt-12 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Animate key={index} delay={(index % 3) * 100}>
                <div className="bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-xl transition-shadow text-center">
                  <div className="mb-6 flex justify-center items-center h-[200px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-auto h-full max-w-[300px] object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#1E5DB8]">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{service.description}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Footer Section */}
      <section className="py-6 bg-gradient-to-br from-[#5BC85A] to-[#4ab449] text-white">
        <Animate>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading + description centered */}
            <div className="text-center mb-3">
              <h2 className="text-xl font-bold mb-1">
                Ready to Experience Royal Service?
              </h2>
              <p className="text-base text-white/90">
                Let Clean Queens transform your space. Book your service today!
              </p>
            </div>

            {/* Button + phone side by side, centered */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              {/* Phone */}
              <div className="text-center">
                <p className="text-white text-base font-semibold leading-none">Call or Text Us</p>
                <a
                  href="tel:9035301475"
                  className="text-2xl font-bold text-white hover:text-white/80 transition-colors"
                >
                  903-530-1475
                </a>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/30" />

              <Link
                to="/booking"
                className="inline-block px-8 py-2.5 bg-[#D946A6] text-white rounded-full hover:bg-[#c23690] transition-colors text-lg font-semibold"
              >
                Book Your Service Now
              </Link>

              {/* Divider */}
              <div className="hidden sm:block w-px h-10 bg-white/30" />

              {/* Email */}
              <div className="text-center">
                <p className="text-white text-base font-semibold leading-none">Email Us</p>
                <a
                  href="mailto:info@cleanqueens.com"
                  className="text-lg font-bold text-white hover:text-white/80 transition-colors"
                >
                  info@cleanqueens.com
                </a>
              </div>
            </div>

            <div className="text-center text-white/70 text-xs mt-2">
              © 2026 Clean Queens. All Rights Reserved.
            </div>
          </div>
        </Animate>
      </section>
    </div>
  );
}