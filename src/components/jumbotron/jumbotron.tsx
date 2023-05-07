import { component$, useStylesScoped$ } from "@builder.io/qwik";
import STYLE from "./jumbotron.scss?inline";
import { scrollTo } from "~/utils/utils";

export default component$(() => {
  useStylesScoped$(STYLE);

  return (
    <div class="jumbotron" id="home">
      <div class="background">
        <div class="image"></div>
        <div class="overlay"></div>
      </div>
      <div class="content">
        <div class="image_wrap animate__animated animate__zoomIn">
          <div class="main"></div>
        </div>
        <h3 class="name_holder animate__animated animate__fadeInDown animate__delay-1s">
          Albert <span>Walkers</span>
        </h3>
        <p class="proffesion animate__animated animate__fadeInUp animate__delay-1s">
          I'm a Web Developer
        </p>
      </div>
      <div class="arrow_wrap animate__animated animate__bounce animate__infinite animate__delay-2s">
        <button onClick$={() => scrollTo("about")}>
          <i class="fa-solid fa-angles-down"></i>
        </button>
      </div>
    </div>
  );
});
