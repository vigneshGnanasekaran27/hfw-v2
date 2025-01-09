"use client";
import { useState, useEffect } from "react";
import EmpathySupport from "./EmpathySupport";
import AnimatedHamburgerMenu from "./AnimatedHamburgerMenu";
import Image from "next/image";
import logo from "../images/logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "banner",
        "kitchen",
        "nutrition",
        "training",
        "schedule",
        "shop",
        "workshops",
        "events",
        "blog",
        "calculator",
        "leadership",
        "about",
        "contact",
        "faq",
      ];

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold flex items-center">
            <Image
              src={logo.src}
              alt="Hope Fit Wellness Logo"
              width={50}
              height={50}
            />
            <button
              onClick={() => scrollToSection("banner")}
              className="hover:text-blue-500 transition duration-300"
            >
              Hope Fit Wellness
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <EmpathySupport />
            <AnimatedHamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLinks
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
            <EmpathySupport />
          </div>
        </div>

        {/* Mobile Menu - Positioned absolutely */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background shadow-lg">
            <div className="p-4">
              <NavLinks
                mobile={true}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false, activeSection, scrollToSection }) => {
  const [showMore, setShowMore] = useState(false);

  const primaryLinks = [
    { id: "kitchen", label: "Kitchen" },
    { id: "nutrition", label: "Nutrition" },
    { id: "training", label: "Training" },
    { id: "schedule", label: "Schedule" },
    { id: "calculator", label: "Nutrition Calculator" },
    { id: "shop", label: "Shop" },
    { id: "events", label: "Events" },
  ];

  const moreLinks = [
    { id: "blog", label: "Blog" },
    { id: "workshops", label: "Workshops" },
    { id: "leadership", label: "Leadership" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" },
  ];

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`
        ${
          mobile
            ? "block w-full text-left py-2 px-4 hover:bg-blue-500"
            : "hover:text-blue-500 transition duration-300"
        }
        ${activeSection === id ? "text-gray-500" : ""}
        relative
      `}
    >
      {label}
      {activeSection === id && !mobile && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary">
          <svg
            className="w-full h-2 text-gray-500"
            viewBox="0 0 100 3"
            preserveAspectRatio="none"
          >
            <path
              d="M0,1 Q25,0 50,1 T100,1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      )}
    </button>
  );

  return (
    <div className={`${mobile ? "space-y-2" : "flex items-center space-x-6"}`}>
      {/* Primary Links */}
      {primaryLinks.map((link) => (
        <NavItem key={link.id} {...link} />
      ))}

      {/* More Dropdown for Desktop */}
      {!mobile && (
        <div className="relative">
          <button
            onClick={() => setShowMore(!showMore)}
            className="hover:text-gray-500 transition duration-300 flex items-center"
          >
            More
            <svg
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                showMore ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {showMore && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-background rounded-md shadow-lg py-1 z-50">
              {moreLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setShowMore(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-500"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* More Links for Mobile */}
      {mobile && moreLinks.map((link) => <NavItem key={link.id} {...link} />)}

      {/* Contact Button */}
      <button
        onClick={() => scrollToSection("contact")}
        className={`
          ${mobile ? "w-full" : ""}
          px-4 py-2 rounded-full 
          text-gray-500
          transition duration-300
          ${activeSection === "contact" ? "ring-2 ring-primary-dark" : ""}
        `}
      >
        Contact Us
      </button>
    </div>
  );
};

export default Navigation;
