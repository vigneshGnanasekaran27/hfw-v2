"use client";
import { useState, useEffect } from "react";
import EmpathySupport from "./EmpathySupport";
import AnimatedHamburgerMenu from "./AnimatedHamburgerMenu";
import Image from "next/image";
import { ShoppingCart, User, LogOut, ChevronRight } from "lucide-react";
import { useAuth } from "../context/AuthContext"; // Import useAuth
import { useRouter } from "next/navigation"; // Import useRouter
import logo from "../images/logo.png";

const Navigation = () => {
  const router = useRouter();
  const { user, signout } = useAuth(); // Get auth context
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [cartCount, setCartCount] = useState(12);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignIn = () => {
    router.push("/auth/signin");
  };

  const handleSignOut = async () => {
    await signout();
    router.push("/");
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

  const AuthButtons = ({ isMobile = false }) => (
    <>
      {user ? (
        <div
          className={`flex items-center ${
            isMobile ? "space-x-2" : "space-x-4"
          }`}
        >
          <button
            className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
            onClick={() => router.push("/dashboard")}
          >
            <User size={20} />
            <span>{user.email}</span>
            {isMobile && <ChevronRight size={16} />}
          </button>
          {!isMobile && (
            <button
              onClick={handleSignOut}
              className="flex items-center space-x-1 hover:text-blue-500"
            >
              <LogOut size={20} />
              <span>Sign Out</span>
            </button>
          )}
        </div>
      ) : (
        <button
          onClick={handleSignIn}
          className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
        >
          <User size={20} />
          <span>Sign In</span>
          {isMobile && <ChevronRight size={16} />}
        </button>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 left-0 w-full bg-purple-100 shadow-md z-50 dark:bg-gray-900">
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
              className="hover:text-blue-500 transition duration-300 ml-2"
            >
              HopeFit Wellness
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks
              activeSection={activeSection}
              scrollToSection={scrollToSection}
            />
            <EmpathySupport />
          </div>

          {/* Auth and Cart - Desktop */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <User size={20} />
              <span>Sign In</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div> */}

          {/* Auth and Cart - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <AuthButtons />
            <button className="flex items-center space-x-1 hover:text-blue-500">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle and Cart */}
          {/* <div className="md:hidden flex items-center space-x-4">
            <button className="hover:text-blue-500">
              <User size={20} />
            </button>
            <button className="hover:text-blue-500 relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            <AnimatedHamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div> */}

          {/* Mobile Menu Toggle and Cart */}
          <div className="md:hidden flex items-center space-x-4">
            <AuthButtons isMobile={true} />
            <button className="hover:text-blue-500 relative">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </button>
            <AnimatedHamburgerMenu isOpen={isOpen} onClick={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menu - Left side drawer */}
        {/* {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-4/5 h-screen bg-purple-100 dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={toggleMenu} className="p-2">
                  ✕
                </button>
              </div>
              <NavLinks
                mobile={true}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
              <EmpathySupport />
            </div>
          </div>
        )} */}

        {/* Mobile Menu - Left side drawer */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-4/5 h-screen bg-purple-100 dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out z-50">
            <div className="p-4">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={toggleMenu} className="p-2">
                  ✕
                </button>
              </div>
              {user && (
                <div className="mb-4 p-3 bg-blue-500/10 rounded-lg">
                  <p className="text-sm text-gray-600">Welcome back,</p>
                  <p className="font-semibold">{user.email}</p>
                  <button
                    onClick={handleSignOut}
                    className="mt-2 flex items-center text-sm text-gray-600 hover:text-blue-500"
                  >
                    <LogOut size={16} className="mr-1" />
                    Sign Out
                  </button>
                </div>
              )}
              <NavLinks
                mobile={true}
                activeSection={activeSection}
                scrollToSection={scrollToSection}
              />
              <EmpathySupport />
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
            ? "block w-full text-left py-2 hover:bg-blue-500/10"
            : "hover:text-blue-500 transition duration-300"
        }
        ${activeSection === id ? "text-blue-500" : ""}
        relative
      `}
    >
      {label}
      {activeSection === id && !mobile && (
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500" />
      )}
    </button>
  );

  return (
    <div className={`${mobile ? "space-y-2" : "flex items-center space-x-4"}`}>
      {primaryLinks.map((link) => (
        <NavItem key={link.id} {...link} />
      ))}

      {/* More Dropdown for Desktop */}
      {!mobile && (
        <div className="relative">
          <button
            onClick={() => setShowMore(!showMore)}
            className="hover:text-blue-500 transition duration-300 flex items-center"
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
            <div className="absolute top-full right-0 mt-2 w-48 bg-purple-100 dark:bg-gray-900 rounded-md shadow-lg py-1 z-50">
              {moreLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setShowMore(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-blue-500/10"
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
      {!mobile && (
        <button
          onClick={() => scrollToSection("contact")}
          className={`
            px-4 py-1.5 rounded-full 
            border border-blue-500
            hover:bg-blue-500 hover:text-white
            transition duration-300
            ${activeSection === "contact" ? "bg-blue-500 text-white" : ""}
          `}
        >
          Contact Us
        </button>
      )}
    </div>
  );
};

export default Navigation;
