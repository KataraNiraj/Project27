import React from "react";
import { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import Swiper from "swiper";
import AOS from "aos";

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isHamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileNavOpen(false);
    setHamburgerMenuOpen(false);
  };

  useEffect(() => {
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach((e) => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };

    /**
     * Easy on scroll event listener
     */
    const onscroll = (el, listener) => {
      el.addEventListener("scroll", listener);
    };

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let header = select("#header");
      let offset = header.offsetHeight;

      let elementPos = select(el).offsetTop;
      window.scrollTo({
        top: elementPos - offset,
        behavior: "smooth",
      });
    };

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select("#header");
    let selectTopbar = select("#topbar");
    if (selectHeader) {
      const headerScrolled = () => {
        if (window.scrollY > 100) {
          selectHeader.classList.add("header-scrolled");
          if (selectTopbar) {
            selectTopbar.classList.add("topbar-scrolled");
          }
        } else {
          selectHeader.classList.remove("header-scrolled");
          if (selectTopbar) {
            selectTopbar.classList.remove("topbar-scrolled");
          }
        }
      };
      window.addEventListener("load", headerScrolled);
      onscroll(document, headerScrolled);
    }

    /**
     * Back to top button
     */
    let backtotop = select(".back-to-top");
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add("active");
        } else {
          backtotop.classList.remove("active");
        }
      };
      window.addEventListener("load", toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }

    /**
     * Mobile nav toggle
     */
    const handleMobileNavToggle = () => {
      setIsMobileNavOpen((prevState) => !prevState);
    };

    // Attach event listener to mobile nav toggle
    const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
    mobileNavToggle.addEventListener("click", handleMobileNavToggle);

    /**
     * Mobile nav dropdowns activate
     */
    on(
      "click",
      ".navbar .dropdown > a",
      function (e) {
        if (select("#navbar").classList.contains("navbar-mobile")) {
          e.preventDefault();
          this.nextElementSibling.classList.toggle("dropdown-active");
        }
      },
      true
    );

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener("load", () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });

    /**
     * Preloader
     */
    let preloader = select("#preloader");
    if (preloader) {
      window.addEventListener("load", () => {
        preloader.remove();
      });
    }

    /**
     * Menu isotope and filter
     */
    window.addEventListener("load", () => {
      let menuContainer = select(".menu-container");
      if (menuContainer) {
        let menuIsotope = new Isotope(menuContainer, {
          itemSelector: ".menu-item",
          layoutMode: "fitRows",
        });

        let menuFilters = select("#menu-flters li", true);

        on(
          "click",
          "#menu-flters li",
          function (e) {
            e.preventDefault();
            menuFilters.forEach(function (el) {
              el.classList.remove("filter-active");
            });
            this.classList.add("filter-active");

            menuIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            menuIsotope.on("arrangeComplete", function () {
              AOS.refresh();
            });
          },
          true
        );
      }

      /**
       * Initiate gallery lightbox
       */
      const galleryLightbox = GLightbox({
        selector: ".gallery-lightbox",
      });

      // Animation on scroll
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
      });
    });

    // Initiate glightbox
    const glightbox = GLightbox({
      selector: ".glightbox",
    });
    // Clean up event listener on component unmount
    return () => {
      mobileNavToggle.removeEventListener("click", handleMobileNavToggle);
    };
  }, []);

  return (
    // <!-- ======= Header ======= -->
    <header id="header" className="fixed-top d-flex align-items-cente">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        <h1 className="logo me-auto me-lg-0">
          <a href="index.html">Nishu Restaurant</a>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="index.html" className="logo me-auto me-lg-0">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <nav
          id="navbar"
          className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}
        >
          {/* <nav id="navbar" className="navbar order-last order-lg-0"> */}
          <ul>
            <li>
              <a
                className="nav-link scrollto active"
                href="#hero"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#about"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                About
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#menu"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#specials"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Specials
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#events"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Events
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#chefs"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Chefs
              </a>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#gallery"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Gallery
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a
                className="nav-link scrollto"
                href="#contact"
                onClick={() => {
                  closeMobileMenu();
                }}
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            className={
              isHamburgerMenuOpen
                ? "bi bi-x mobile-nav-toggle"
                : "bi bi-list mobile-nav-toggle"
            }
            onClick={() => {
              setHamburgerMenuOpen(isHamburgerMenuOpen ? false : true);
            }}
          ></i>
        </nav>
        {/* <!-- .navbar --> */}
        <a
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Book a table
        </a>
      </div>
    </header>
  );
};

export default Header;
