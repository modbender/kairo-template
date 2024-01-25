import AOS from "aos";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: { AOS },
  };
});
