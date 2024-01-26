<template>
  <nav
    class="bg-black/50 top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
      >
        <NuxtLink
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          to="/"
        >
          Kairo Template
        </NuxtLink>
        <button
          class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          @click="toggleNavbar"
        >
          <Icon class="text-white" name="mdi:menu" />
        </button>
      </div>
      <div
        class="lg:flex items-center bg-white lg:bg-transparent lg:shadow-none"
        :class="{ hidden: !showMenu, block: showMenu }"
      >
        <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              :href="$config.public.socialLinks.x"
            >
              <Icon
                class="lg:text-gray-300 text-gray-500"
                name="mdi:twitter"
                size="24"
              />
              <span class="lg:hidden inline-block ml-2"> X (F. Twitter) </span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              :href="$config.public.socialLinks.youtube"
            >
              <Icon
                class="lg:text-gray-300 text-gray-500"
                name="mdi:youtube"
                size="24"
              />
              <span class="lg:hidden inline-block ml-2">YouTube</span>
            </a>
          </li>
          <li class="flex items-center">
            <a
              class="lg:text-white lg:hover:text-gray-300 text-gray-900 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              :href="$config.public.socialLinks.github"
            >
              <Icon
                class="lg:text-gray-300 text-gray-500"
                name="mdi:github"
                size="24"
              />
              <span class="lg:hidden inline-block ml-2">Star</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const showMenu = ref(false);

const toggleNavbar = () => {
  showMenu.value = !unref(showMenu);
};
</script>
