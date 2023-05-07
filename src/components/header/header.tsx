import { component$, useStylesScoped$, useSignal, $ } from "@builder.io/qwik";
import STYLE from "./header.scss?inline";
import { scrollTo } from "~/utils/utils";

export default component$(() => {
  useStylesScoped$(STYLE);
  const activeNav = useSignal("home");

  const handleNavClick = $((elementId: string) => {
    scrollTo(elementId);
    activeNav.value = elementId;
  });

  return (
    <header>
      <div class="topbar">
        <div class="container animate__animated animate__fadeInDown">
          <div class="topbar_inner">
            <div class="logo">
              <a href="#">
                <img src="images/logo.png" alt="logo" />
              </a>
            </div>
            <div class="menu">
              <ul>
                <li class={{ current: activeNav.value === "home" }}>
                  <button onclick$={() => handleNavClick("home")}>Home</button>
                </li>
                <li class={{ current: activeNav.value === "about" }}>
                  <button onclick$={() => handleNavClick("about")}>
                    About
                  </button>
                </li>
                <li class={{ current: activeNav.value === "services" }}>
                  <button onclick$={() => handleNavClick("services")}>
                    Servicies
                  </button>
                </li>
                <li class={{ current: activeNav.value === "portfolio" }}>
                  <button onclick$={() => handleNavClick("portfolio")}>
                    Portfolio
                  </button>
                </li>
                <li class={{ current: activeNav.value === "news" }}>
                  <button onclick$={() => handleNavClick("news")}>News</button>
                </li>
                <li class={{ current: activeNav.value === "contact" }}>
                  <button onclick$={() => handleNavClick("contact")}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});
