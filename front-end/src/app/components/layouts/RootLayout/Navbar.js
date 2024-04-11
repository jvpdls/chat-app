"use client";

import { useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const navbarBurger = useRef(null);
  const menuItemsRef = useRef(null);

  const menuItems = [
    { label: "Home", url: "/", location: "start" },
    { label: "About", url: "/about-us", location: "start" },
    {
      label: "Start chatting",
      url: "/chat",
      location: "end",
      className: "button is-link",
    },
    {
      label: "Contact us",
      url: "/contact-us",
      location: "end",
      className: "button is-light",
    },
  ];

  function getCurentPath() {
    const pathname = usePathname();
    return pathname;
  }

  function isActive(url) {
    return getCurentPath() === url ? "is-active" : "";
  }

  function toggleMenu() {
    navbarBurger.current.classList.toggle("is-active");
    menuItemsRef.current.classList.toggle("is-active");
  }

  return (
    <nav
      className="navbar is-warning
    "
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <p className="navbar-item title is-5 mb-0">
            <a href="/">💬 Chat App</a>
          </p>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="menuItems"
            onClick={toggleMenu}
            ref={navbarBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="menuItems" className="navbar-menu" ref={menuItemsRef}>
          <div className="navbar-start">
            {menuItems
              .filter((item) => item.location === "start")
              .map((item) => (
                <a
                  key={item.label}
                  href={item.url}
                  className={`navbar-item ${isActive(item.url)}`}
                >
                  {item.label}
                </a>
              ))}
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {menuItems
                  .filter((item) => item.location === "end")
                  .map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      className={item.className}
                    >
                      {item.label}
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
