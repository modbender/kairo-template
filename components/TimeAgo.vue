<template>
  <span :title="new Date(dt).toUTCString()">{{ formattedDate }}</span>
</template>

<script setup>
const props = defineProps({
  dt: {
    required: true,
  },
});
const { dt } = toRefs(props);

const formattedDate = useTimeAgo(new Date(unref(dt)));
</script>
