<template>
  <div class="mt-24 mb-32 bg-black">
    <Particles />
    <div
      class="bg-white/90 container mx-auto p-6 md:p-16 w-full min-h-screen rounded-2xl"
    >
      <div class="text-center text-5xl font-extrabold">BLOG</div>
      <div class="grid md:grid-cols-4 gap-4 mt-10">
        <NuxtLink
          :to="`/post/${postData.slug}`"
          class="no-anim hover:shadow hover:shadow-green-500 flex p-4 border-2 border-gray-300 rounded-2xl"
          :class="{
            'md:col-span-4 md:flex-row flex-col md:gap-6': postData.featured,
            'md:col-span-2 flex-col': !postData.featured,
          }"
          v-for="postData in postList"
          :key="postData"
        >
          <NuxtImg
            quality="80"
            format="webp"
            :alt="postData.title"
            :src="postData.image"
            class="object-cover aspect-video rounded-2xl"
            :class="{
              'md:w-2/5 lg:w-1/2': postData.featured,
            }"
          />
          <div>
            <div
              class="flex items-center justify-between text-sm font-semibold text-gray-500 mt-5"
            >
              <div class="uppercase">
                {{ postData.category }}
              </div>
              <div class="flex items-center gap-1">
                <Icon name="mdi:clock-time-five-outline" />
                <TimeAgo :dt="postData.created_at" />
              </div>
            </div>
            <div
              class="font-semibold text-xl mt-1"
              :class="{ 'md:text-3xl': postData.featured }"
            >
              {{ postData.title }}
            </div>
            <p class="text-sm mt-3 text-gray-600">
              {{ postData.description }}
            </p>
          </div>
        </NuxtLink>
      </div>
      <Pagination :count="10" />
    </div>
  </div>
</template>

<script setup>
import postListData from "@/data/blog/posts.json";

const postList = ref(postListData);

defineOgImageComponent("NuxtSeo");

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [
      { name: "Home", item: "/" },
      { name: "Blog", item: "/blog" },
    ],
  }),
]);

useSeoMeta({
  title: "Blog",
  description: "Blog Posts List",
});
</script>
