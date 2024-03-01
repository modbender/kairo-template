<template>
  <footer class="relative bg-gray-300 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style="height: 81px"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-3 lg:px-4">
      <div class="flex flex-wrap">
        <div
          class="w-full lg:w-6/12 px-4 lg:mb-0 mt-12 lg:mt-0 text-center lg:text-left"
        >
          <div class="text-3xl font-bold">Let's keep in touch!</div>
          <div class="text-lg mt-0 mb-2 text-gray-700">
            Find us on any of these platforms, we respond 1-2 business days.
          </div>
          <div class="mt-6 text-center lg:text-left">
            <a
              target="_blank"
              aria-label="Check Twitter profile"
              class="no-anim text-blue-400 font-normal items-center justify-center  rounded-full outline-none focus:outline-none mr-2"
              :href="$config.public.socialLinks.x"
            >
              <Icon name="mdi:twitter" size="36" />
            </a>
            <a
              target="_blank"
              aria-label="Check Facebook profile"
              class="no-anim text-blue-600 font-normal h-10 w-10 items-center justify-center  rounded-full outline-none focus:outline-none mr-2"
              :href="$config.public.socialLinks.facebook"
            >
              <Icon name="mdi:facebook" size="36" />
            </a>
            <a
              target="_blank"
              aria-label="Check Dribbble profile"
              class="no-anim text-pink-400 font-normal h-10 w-10 items-center justify-center  rounded-full outline-none focus:outline-none mr-2"
              :href="$config.public.socialLinks.dribbble"
            >
              <Icon name="mdi:dribbble" size="36" />
            </a>
            <a
              target="_blank"
              aria-label="Check GitHub profile"
              class="no-anim text-gray-900 font-normal h-10 w-10 items-center justify-center  rounded-full outline-none focus:outline-none mr-2"
              :href="$config.public.socialLinks.github"
            >
              <Icon name="mdi:github" size="36" />
            </a>
          </div>
        </div>
        <div class="w-full lg:w-6/12">
          <div
            class="flex flex-wrap items-top uppercase mb-6 mt-8 lg:mt-0 text-center md:text-left"
          >
            <div class="w-6/12 lg:w-4/12 px-4 ml-auto">
              <ul class="list-unstyled">
                <li>
                  <NuxtLink
                    aria-label="Blog Page"
                    class="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                    to="/blog"
                  >
                    Blog
                  </NuxtLink>
                </li>
                <li>
                  <a
                    target="_blank"
                    aria-label="Github Profile"
                    class="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                    href="https://github.com/modbender"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    aria-label="Donate to Author!"
                    class="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                    href="https://github.com/modbender"
                  >
                    Donate
                  </a>
                </li>
                <li>
                  <NuxtLink
                    aria-label="About Us Page"
                    class="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                    to="/about"
                  >
                    About Us
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="w-6/12 lg:w-4/12 px-4">
              <ul class="list-unstyled">
                <li>
                  <NuxtLink
                    aria-label="Terms & Conditions Page"
                    class="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                    to="/terms"
                  >
                    Terms &amp; Conditions
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    aria-label="Privacy Policy Page"
                    class="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                    to="/privacy"
                  >
                    Privacy Policy
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    aria-label="Contact Us Page"
                    class="text-gray-700 hover:text-gray-900 block pb-2 text-sm"
                    to="/contact"
                  >
                    Contact Us
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-gray-400" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-gray-600 font-semibold py-1">
            Copyright © {{ date }} Tailwind - Kairi Template by
            <a
              aria-label="Author GitHub Page"
              href="https://github.com/modbender"
              class="text-gray-600 hover:text-gray-900"
              target="_blank"
            >
              Modbender
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const date = ref(new Date().getFullYear());

const siteConfig = useSiteConfig();
</script>
