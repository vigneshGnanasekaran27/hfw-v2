"use client";
import { useState, useEffect, useRef } from "react";
import AnimatedHamburgerMenu from "./AnimatedHamburgerMenu";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../images/logo.png";

const Navigation = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showMore, setShowMore] = useState(false);
  const moreButtonRef = useRef(null);

  // Close dropdown or mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if more dropdown is open and click is outside
      if (
        showMore &&
        moreButtonRef.current &&
        !moreButtonRef.current.contains(event.target)
      ) {
        setShowMore(false);
      }

      // Check if mobile menu is open and click is outside
      if (
        isOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest("nav")
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMore, isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
    setShowMore(false);
  };

  const handleSignIn = () => {
    router.push("/auth/signin");
  };

  const handleSignUp = () => {
    router.push("/auth/signup");
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
        "calculator",
        "events",
        "blog",
        "workshops",
        "leadership",
        "about",
        "faq",
        "contact",
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
    <nav className="fixed top-0 left-0 w-full bg-purple-200 shadow-md z-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
            <Image
              src={logo.src}
              alt="Hope Fit Wellness Logo"
              width={40}
              height={40}
            />
            <button
              onClick={() => scrollToSection("banner")}
              className="hover:text-purple-600 transition duration-300 ml-2 text-gray-800 dark:text-gray-100"
            >
              HopeFit Wellness
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks
              activeSection={activeSection}
              scrollToSection={scrollToSection}
              showMore={showMore}
              setShowMore={setShowMore}
              moreButtonRef={moreButtonRef}
            />
          </div>

          {/* Auth Buttons and Mobile Menu Toggle */}
          <div className="md:flex items-center space-x-4">
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={handleSignIn}
                className="px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <AnimatedHamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
            </div>
          </div>
        </div>

        {/* Mobile Menu - Left side drawer */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-4/5 h-screen bg-purple-200 dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                  Menu
                </h2>
                <button
                  onClick={toggleMenu}
                  className="p-2 text-gray-800 dark:text-gray-100"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col space-y-2 mb-4">
                <button
                  onClick={handleSignIn}
                  className="w-full px-4 py-2 border border-purple-500 text-purple-600 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
                >
                  Sign In
                </button>
                <button
                  onClick={handleSignUp}
                  className="w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-300"
                >
                  Sign Up
                </button>
              </div>

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

const NavLinks = ({
  mobile = false,
  activeSection,
  scrollToSection,
  showMore,
  setShowMore,
  moreButtonRef,
}) => {
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

  // Check if the active section is in the More links
  const isMoreSectionActive = moreLinks.some(
    (link) => link.id === activeSection
  );

  const NavItem = ({ id, label }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`
        ${
          mobile
            ? "block w-full text-left py-2 hover:bg-purple-500/10"
            : "px-3 py-2 hover:text-purple-600 transition duration-300 whitespace-nowrap"
        }
        ${
          activeSection === id
            ? "text-purple-600"
            : "text-gray-700 dark:text-gray-300"
        }
        relative
      `}
    >
      {label}
      {activeSection === id && !mobile && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600" />
      )}
    </button>
  );
  return (
    <div
      className={`
        ${mobile ? "space-y-2" : "flex items-center space-x-0"}
        w-full
      `}
    >
      {primaryLinks.map((link) => (
        <NavItem key={link.id} {...link} />
      ))}

      {/* More Dropdown for Desktop */}
      {!mobile && setShowMore && moreButtonRef && (
        <div ref={moreButtonRef} className="relative">
          <button
            onClick={() => setShowMore(!showMore)}
            className={`
              px-3 py-2 hover:text-purple-600 transition duration-300 flex items-center whitespace-nowrap
              ${
                isMoreSectionActive
                  ? "text-purple-600"
                  : "text-gray-700 dark:text-gray-300"
              }
            `}
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
            {isMoreSectionActive && !showMore && (
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-600" />
            )}
          </button>

          {showMore && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-purple-100 dark:bg-gray-900 rounded-md shadow-lg py-1 z-50">
              {moreLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setShowMore(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-purple-500/10 text-gray-700 dark:text-gray-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* More Links for Mobile */}
      {mobile && (
        <>
          {moreLinks.map((link) => (
            <NavItem key={link.id} {...link} />
          ))}

          {/* Contact Us Button for Mobile */}
          <button
            onClick={() => scrollToSection("contact")}
            className={`
              block w-full px-4 py-2 
              ${
                activeSection === "contact"
                  ? "bg-purple-600 text-white"
                  : "text-purple-600"
              }
              hover:bg-purple-500/10
              border border-purple-500 rounded-md mt-2
              hover:bg-purple-600 hover:text-white
              transition duration-300
            `}
          >
            Contact Us
          </button>
        </>
      )}

      {/* Contact Button */}
      {!mobile && (
        <button
          onClick={() => scrollToSection("contact")}
          className={`
            px-3 py-2 rounded-full 
            border border-purple-500
            hover:bg-purple-600 hover:text-white
            transition duration-300 whitespace-nowrap
            ${
              activeSection === "contact"
                ? "bg-purple-600 text-white"
                : "text-purple-600"
            }
          `}
        >
          Contact Us
        </button>
      )}
    </div>
  );
};

export default Navigation;
