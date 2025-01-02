"use client";
import { useState, useEffect } from "react";
import EmpathySupport from "./EmpathySupport";
import AnimatedHamburgerMenu from "./AnimatedHamburgerMenu";
import Image from "next/image";
import logo from "../images/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle smooth scrolling
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Track active section based on scroll position
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
    <nav className="fixed top-0 left-0 w-full bg-background shadow-md z-50 overflow-hidden">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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
        <div className="md:hidden flex items-center space-x-4 overflow-hidden">
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

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-background shadow-lg md:hidden overflow-hidden">
            <div className="flex flex-col p-4 space-y-2">
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
}

function NavLinks({ mobile = false, activeSection, scrollToSection }) {
  // Primary navigation links that are always visible
  const primaryLinks = [
    { id: "kitchen", label: "Kitchen" },
    { id: "nutrition", label: "Nutrition" },
    { id: "training", label: "Training" },
    { id: "schedule", label: "Schedule" },
    { id: "shop", label: "Shop" },
    { id: "workshops", label: "Workshops" },
    { id: "events", label: "Events" },
  ];

  // Secondary navigation links in a dropdown
  const moreLinks = [
    { id: "blog", label: "Blog" },
    { id: "calculator", label: "Nutrition Calculator" },
    { id: "leadership", label: "Leadership" },
    { id: "about", label: "About" },
    { id: "faq", label: "FAQ" },
  ];

  const [showMore, setShowMore] = useState(false);

  const NavItem = ({ id, label }) => (
    <div className="relative">
      <button
        onClick={() => scrollToSection(id)}
        className={`
          ${
            mobile
              ? "block py-2 px-4 w-full text-left hover:bg-blue-500"
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
    </div>
  );

  return (
    <>
      {/* Primary Links */}
      {primaryLinks.map((link) => (
        <NavItem key={link.id} {...link} />
      ))}

      {/* More Dropdown for Desktop */}
      {!mobile && (
        <div className="relative group">
          <button
            onClick={() => setShowMore(!showMore)}
            className="hover:text-gray-500 transition duration-300 flex items-center"
          >
            More
            <svg
              className={`ml-1 h-4 w-4 transition-transform ${
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

          {/* Dropdown Menu */}
          {showMore && (
            <div className="absolute top-full right-0 mt-7 w-48  rounded-md shadow-lg py-1 z-50 bg-background">
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

      {/* More Links for Mobile (displayed directly) */}
      {mobile && moreLinks.map((link) => <NavItem key={link.id} {...link} />)}

      {/* Contact Button */}
      <button
        onClick={() => scrollToSection("contact")}
        className={`
          ${mobile ? "block w-full" : "ml-4"} 
          px-4 py-2 rounded-full 
            text-gray-500
           transition duration-300
          ${activeSection === "contact" ? "ring-2 ring-primary-dark" : ""}
        `}
      >
        Contact Us
      </button>
    </>
  );
}
