import { $ } from "@builder.io/qwik";

export const scrollTo = $((elementId: string) => {
  const element = document.getElementById(elementId);

  element?.scrollIntoView({ behavior: "smooth" });
});
