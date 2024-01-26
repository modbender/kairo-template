import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

// tsParticles - https://github.com/tsparticles/tsparticles

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Particles, {
    init: async (engine) => {
      // await loadFull(engine); // you can load the full tsParticles library from "tsparticles" if you need it
      await loadFull(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  });
});
