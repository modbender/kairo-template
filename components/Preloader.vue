<template>
  <div ref="preloaderRef" class="preloader">
    <div class="bar-loaders">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script setup>
const preloaderRef = ref();

onMounted(() => {
  const fadeEffect = setInterval(() => {
    // if we don't set opacity 1 in CSS, then
    // it will be equaled to "" -- that's why
    // we check it, and if so, set opacity to 1
    if (unref(preloaderRef)) {
      if (!unref(preloaderRef).style.opacity) {
        unref(preloaderRef).style.opacity = 1;
      }
      if (unref(preloaderRef).style.opacity > 0) {
        unref(preloaderRef).style.opacity -= 0.1;
      } else {
        clearInterval(fadeEffect);
        unref(preloaderRef).classList.add("hide");
      }
    }
  }, 100);
});
</script>
