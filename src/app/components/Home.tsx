import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from "figma:asset/2a393b41b890eae9e9e1460e80d0b400402ad3b4.png";
import cleanerImage from "figma:asset/8c18a438f5f24d71f579a6b569b5ba3c8aca25e7.png";
// @ts-ignore
import house1Image from "figma:asset/house1.jpg";
// @ts-ignore
import house2Image from "figma:asset/house2.jpg";
// @ts-ignore
import house3Image from "figma:asset/house3.jpg";
// @ts-ignore
import house4Image from "figma:asset/house4.jpg";
import cleaningSuppliesImage from "figma:asset/fa9331fb7fea5bb9af1f060e0519c7f987b0810b.png";
import spaceCollageImage from "figma:asset/f9f53a9939c851fefe594d0ac22a6b0e1c7a4eac.png";

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

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section with Background Image */}
      <section className="relative h-[420px] sm:h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Professional cleaning team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <Animate>
            <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white mb-5 sm:mb-8 leading-tight">
              Professional Commercial and Residential Cleaning Services in Texas
            </h1>
          </Animate>
          <Animate delay={150}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/booking"
                className="px-7 sm:px-10 py-3 sm:py-4 bg-[#1E5DB8] text-white rounded-md hover:bg-[#1a4d99] transition-colors text-base sm:text-lg font-semibold shadow-lg"
              >
                Book Now
              </Link>
              <Link
                to="/services"
                className="px-7 sm:px-10 py-3 sm:py-4 bg-[#5BC85A] text-white rounded-md hover:bg-[#4ab449] transition-colors text-base sm:text-lg font-semibold shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* The Clean Queens Standard Section */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Content */}
            <Animate>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] leading-tight">
                  The Clean Queens Standard for Texas Homes & Businesses
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Across Texas, clean spaces matter, whether it's a thriving business or a busy home. Clean Queens is the trusted name for dependable, high-quality commercial and residential cleaning services.
                  </p>
                  <p>
                    Our eco-friendly cleaning solutions keep offices productive and homes comfortable, all while being safe for families, employees, and the environment. From corporate buildings and retail spaces to houses and apartments, we deliver detailed, consistent cleaning that creates healthier, fresher spaces.
                  </p>
                  <p>
                    Our dedicated team takes pride in professionalism, reliability, and results that truly shine, because every Texas business and every Texas home deserves the royal treatment.
                  </p>
                </div>
              </div>
            </Animate>

            {/* Right Content - Image */}
            <Animate delay={150}>
              <div className="relative flex justify-center">
                <img
                  src={cleanerImage}
                  alt="Professional cleaner"
                  className="max-w-full h-auto max-h-[500px] rounded-lg shadow-2xl"
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Cleaning Plans Section */}
      <section className="py-10 lg:py-20 bg-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] text-center mb-10 lg:mb-16">
              Cleaning Plans Built Around Your Space
            </h2>
          </Animate>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Image Grid */}
            <Animate>
              <div className="grid grid-cols-2 gap-3">
                <img
                  src={house1Image}
                  alt="Clean home"
                  className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={house2Image}
                  alt="Clean home"
                  className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={house3Image}
                  alt="Clean home"
                  className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg"
                />
                <img
                  src={house4Image}
                  alt="Clean home"
                  className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            </Animate>

            {/* Right - Text Content */}
            <Animate delay={150}>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  Every business and home in Texas is unique, and so are their cleaning needs. At Clean Queens, we create personalized cleaning plans designed to fit your specific space, schedule, and preferences.
                </p>
                <p>
                  Whether you manage a busy office, operate a retail storefront, or simply want your home fresh and spotless, our services are flexible and dependable. From major Texas cities to growing local communities, we adapt to your needs and deliver consistent, high-quality results.
                </p>
                <p>
                  We pay attention to the details, making sure every corner of your workspace or home is cleaned with care, precision, and pride.
                </p>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Discover the Difference Section */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Animate>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] text-center mb-10 lg:mb-16">
              Discover the Clean Queens Difference in Texas
            </h2>
          </Animate>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Text Content */}
            <Animate>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  It's time to elevate your space with Clean Queens. Whether you own a business or want your home looking its absolute best, we're here to deliver a clean, welcoming environment you can be proud of.
                </p>
                <p>
                  From impressing clients and boosting employee morale to creating a fresh, comfortable home for your family, our professional cleaning services are customized to fit your needs.
                </p>
                <p>
                  Experience the difference that attention to detail, reliability, and true professionalism can make.
                </p>
              </div>
            </Animate>

            {/* Right - Image */}
            <Animate delay={150}>
              <div className="relative">
                <img
                  src={cleaningSuppliesImage}
                  alt="Professional cleaning supplies"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                />
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-br from-[#5BC85A] to-[#4ab449] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading + description centered */}
          <div className="text-center mb-3">
            <h2 className="text-xl font-bold mb-1">Ready to Experience Royal Service?</h2>
            <p className="text-base text-white/90">Let Clean Queens transform your space. Book your service today!</p>
          </div>

          {/* Button + phone side by side, centered */}
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

          <div className="text-center text-white/70 text-xs mt-2">
            © 2026 Clean Queens. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}