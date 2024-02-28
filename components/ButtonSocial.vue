<template>
  <template v-if="social === 'twitter'">
    <a
      aria-label="Go to Twitter Page"
      class="bg-blue-400 text-white no-anim button-social"
      :target="external ? '_blank' : undefined"
      v-bind="$attrs"
    >
      <Icon name="mdi:twitter" size="24" />
    </a>
  </template>
  <template v-else-if="social === 'facebook'">
    <a
      aria-label="Go to Facebook Page"
      class="bg-blue-600 text-white no-anim button-social"
      :target="external ? '_blank' : undefined"
      v-bind="$attrs"
    >
      <Icon name="mdi:facebook" size="24" />
    </a>
  </template>
  <template v-else-if="social === 'dribbble'">
    <a
      aria-label="Go to Dribbble Page"
      class="bg-pink-500 text-white no-anim button-social"
      :target="external ? '_blank' : undefined"
      v-bind="$attrs"
    >
      <Icon name="mdi:dribbble" size="24" />
    </a>
  </template>
  <template v-else-if="social === 'instagram'">
    <a
      aria-label="Go to Instagram Page"
      class="bg-pink-600 text-white no-anim button-social"
      :target="external ? '_blank' : undefined"
      v-bind="$attrs"
    >
      <Icon name="mdi:instagram" size="24" />
    </a>
  </template>
  <template v-else-if="social === 'github'">
    <a
      aria-label="Go to GitHub Page"
      class="bg-gray-900 text-white no-anim button-social"
      :target="external ? '_blank' : undefined"
      v-bind="$attrs"
    >
      <Icon name="mdi:github" size="24" />
    </a>
  </template>
</template>

<script setup>
defineProps({
  social: {
    type: String,
    required: true,
    validator(value, props) {
      // The value must match one of these strings
      return [
        "twitter",
        "facebook",
        "dribbble",
        "instagram",
        "github",
      ].includes(value);
    },
  },
  external: {
    type: Boolean,
    default: true,
  },
});
</script>

<style lang="scss">
.button-social {
  @apply h-10 w-10 inline-flex items-center justify-center rounded-full outline-none focus:outline-none mr-1 mb-1;
}
</style>
