import AOS from "aos";

// AOS: Animate On Scroll - https://michalsnik.github.io/aos/

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: { AOS },
  };
});
