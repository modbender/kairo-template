<template>
  <main class="error-page-container">
    <div class="error-page-box">
      <div class="error-page-content">
        <h1 class="text-8xl text-white">
          {{ error.statusCode }}
        </h1>
        <div class="text-2xl text-white">
          {{ error.message || error.statusMessage || "" }}
        </div>
        <hr class="my-5" />
        <button class="text-white text-4xl" @click="handleError" aria-label="Go Home">
          <Icon class="mb-1" name="mdi:home" />
          Go Home
        </button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});

const { error } = toRefs(props);

const router = useRouter();

const handleError = () => {
  clearError();
  router.push("/");
};
</script>
