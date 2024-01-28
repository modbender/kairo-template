<template>
  <vue-particles
    id="tsparticles"
    class="bg-particles"
    :options="parallaxTriangles"
    @particles-loaded="particlesLoaded"
  />
</template>

<script setup>
// If you want more particle effect presets you can find them in below link
// https://particles.js.org/samples/index.html#Parallax

import parallaxTriangles from "../data/particles/parallaxTriangles.json";
// import amongUs from "../data/particles/amongUs.json";
// import twinkle from "../data/particles/twinkle.json";

const particlesLoaded = async (container) => {
  console.log("Particles container loaded", container);
};
</script>
