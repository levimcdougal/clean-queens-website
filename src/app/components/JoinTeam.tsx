import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import moneyImage from "figma:asset/money.png";
// @ts-ignore
import calendarImage from "figma:asset/calander.png";
// @ts-ignore
import crownImage from "figma:asset/crown.png";
// @ts-ignore
import plantImage from "figma:asset/plant.png";
// @ts-ignore
import broomImage from "figma:asset/broom.png";
// @ts-ignore
import locationImage from "figma:asset/location.png";

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

const benefits: { icon?: string; image?: string; size?: string; title: string; description: string }[] = [
  {
    image: moneyImage,
    size: "w-24 h-auto",
    title: "Competitive Pay",
    description:
      "We offer competitive pay, and tips that reflect the quality of your work.",
  },
  {
    image: calendarImage,
    title: "Flexible Scheduling",
    description:
      "Choose shifts that fit your lifestyle. We offer weekday and weekend availability to work around your needs.",
  },
  {
    image: crownImage,
    title: "Supportive Team Culture",
    description:
      "Join a team that feels like family. We uplift each other and celebrate every win together.",
  },
  {
    image: plantImage,
    size: "w-20 h-auto",
    title: "Growth Opportunities",
    description:
      "We invest in our people. Start with a few homes and grow your schedule over time by taking on more clients and building a steady cleaning route.",
  },
  {
    image: broomImage,

    title: "Supplies & Equipment Provided",
    description:
      "Cleaners may use their own supplies and equipment, as is typical for independent contractors. Reimbursement options are available for cleaning supplies and equipment purchases.",
  },
  {
    image: locationImage,
    title: "Local Texas Work",
    description:
      "Serve clients in your local community across Texas. No long commutes, we match you to nearby jobs.",
  },
];

const requirements = [
  "Reliable transportation to job sites across your local Texas area",
  "Strong attention to detail and a pride in delivering quality results",
  "Excellent time management and punctuality",
  "Professional, friendly demeanor with clients",
  "Ability to work independently and as part of a team",
  "Prior cleaning experience is a plus but not required.",
];

export function JoinTeam() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Animate>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Join the Clean Queens Team
            </h1>
          </Animate>
          <Animate delay={150}>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Be part of Texas's most trusted cleaning company. We're looking
              for passionate, hardworking individuals ready to deliver the royal
              treatment.
            </p>
          </Animate>
          <Animate delay={250}>
            <span className="inline-block px-10 py-4 bg-[#5BC85A] text-white rounded-md text-lg font-semibold shadow-lg">
              Call or Text 903-530-1475
            </span>
          </Animate>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] text-center mb-4">
              Why Work With Clean Queens?
            </h2>
            <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-12">
              We treat our team like royalty because great people create great
              results.
            </p>
          </Animate>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <Animate key={benefit.title} delay={i * 80}>
                <div className="bg-[#E3F2FD] rounded-xl px-6 pt-3 pb-5 flex flex-col gap-0 h-full shadow-sm hover:shadow-md transition-shadow">
                  {benefit.image
                    ? <img src={benefit.image} alt={benefit.title} className={`${benefit.size ?? "w-14 h-14"} object-contain mb-1`} />
                    : <span className="text-4xl leading-none mb-1">{benefit.icon}</span>
                  }
                  <h3 className="text-xl font-bold text-[#1E5DB8] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-12 lg:py-20 bg-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Animate>
              <div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] mb-6 leading-tight">
                  What We're Looking For
                </h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  At Clean Queens, we don't just hire workers, we build a team
                  of dedicated professionals who take pride in making every
                  space shine. Here's what makes an ideal Clean Queens team
                  member:
                </p>
                <ul className="space-y-3">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#5BC85A] flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-base leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>

            <Animate delay={150}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <img src={crownImage} alt="Crown" className="w-24 h-auto object-contain mx-auto" />
                  <h3 className="text-2xl font-bold text-[#1E5DB8] mt-3">
                    Ready to Wear the Crown?
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Join a growing company that values every member of the team.
                    Your hard work won't go unnoticed.
                  </p>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center gap-3 p-3 bg-[#E3F2FD] rounded-lg">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-semibold text-[#1E5DB8]">Call or Text</p>
                      <a
                        href="tel:9035301475"
                        className="text-gray-700 hover:text-[#1E5DB8] transition-colors font-medium"
                      >
                        903-530-1475
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#E3F2FD] rounded-lg">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-[#1E5DB8]">Email Us</p>
                      <a
                        href="mailto:Guy@cleanqueens.net"
                        className="text-gray-700 hover:text-[#1E5DB8] transition-colors font-medium break-all"
                      >
                        Guy@cleanqueens.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-6 bg-gradient-to-br from-[#5BC85A] to-[#4ab449] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold mb-1">Ready to Experience Royal Service?</h2>
            <p className="text-base text-white/90">Let Clean Queens transform your space. Book your service today!</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link
              to="/booking"
              className="inline-block px-8 py-2.5 bg-[#D946A6] text-white rounded-full hover:bg-[#c23690] transition-colors text-lg font-semibold"
            >
              Book Your Service Now
            </Link>
            <div className="hidden sm:block w-px h-10 bg-white/30" />
            <div className="text-center">
              <p className="text-white text-base font-semibold leading-none">Call or Text Us</p>
              <a
                href="tel:9035301475"
                className="text-2xl font-bold text-white hover:text-white/80 transition-colors"
              >
                903-530-1475
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
