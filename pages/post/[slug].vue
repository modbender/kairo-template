<template>
  <div class="mt-24 mb-32 bg-black">
    <Particles />
    <div
      class="bg-white/90 container mx-auto p-6 md:p-16 w-full min-h-screen rounded-2xl"
    >
      <div class="flex items-center mt-5">
        <NuxtLink to="/blog">
          <Icon size="24" class="mr-1" name="mdi:arrow-left" />
          <span>Back to Blog</span>
        </NuxtLink>
      </div>
      <div class="prose post-body max-w-none text-black">
        <h1 class="text-center text-5xl font-extrabold">
          Example Post - <span class="capitalize">{{ route.params.slug }}</span>
        </h1>
        <div class="mt-8">
          <h1>Title H1</h1>
          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </strong>
            Numquam ad id repellat, placeat porro iste exercitationem assumenda
            sit provident doloribus rem voluptatibus tenetur odio ipsum
            similique temporibus architecto eveniet pariatur?
          </p>
          <h2>Title H2</h2>
          <p>
            <i>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</i>
            Numquam ad id repellat, placeat porro iste exercitationem assumenda
            sit provident doloribus rem voluptatibus tenetur odio ipsum
            similique temporibus architecto eveniet pariatur?
          </p>
          <h3>Title H3</h3>
          <p>
            <u>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</u>
            Numquam ad id repellat, placeat porro iste exercitationem assumenda
            sit provident doloribus rem voluptatibus tenetur odio ipsum
            similique temporibus architecto eveniet pariatur?
          </p>
          <h4>Title H4</h4>
          <p>
            <s>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</s>
            Numquam ad id repellat, placeat porro iste exercitationem assumenda
            sit provident doloribus rem voluptatibus tenetur odio ipsum
            similique temporibus architecto eveniet pariatur?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();

defineOgImageComponent("NuxtSeo");

useSeoMeta({
  title: "About",
  description: "About Kairo Template",
});
</script>
