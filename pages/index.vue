<template>
  <div>
    <!-- BEGIN HERO SECTION  -->
    <div
      class="relative pt-16 pb-32 flex content-center items-center justify-center"
      style="min-height: 75vh"
    >
      <Particles />
      <div class="absolute top-0 w-full h-full bg-center bg-cover">
        <span class="w-full h-full absolute opacity-30 bg-black"></span>
      </div>
      <div data-aos="fade-down" class="container relative mx-auto">
        <div class="items-center flex flex-wrap">
          <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <h1 class="text-white font-bold text-5xl">
              Crafting Your Imagination into Reality
            </h1>
            <h2 class="mt-4 text-lg text-gray-300">
              The perfect template for your digital masterpiece
            </h2>
          </div>
        </div>
      </div>
    </div>
    <!-- END HERO SECTION  -->
    <!-- BEGIN ABOUT SECTION  -->
    <section class="relative pb-20 -mt-24">
      <div class="absolute mt-48 top-auto w-full h-full bg-center bg-cover">
        <span class="w-full h-full absolute bg-purple-700"></span>
      </div>
      <div class="container mx-auto px-4">
        <!-- BEGIN FEATURES SECTION  -->
        <div class="flex flex-wrap">
          <div class="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-xl shadow-green-400 rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 rounded-full bg-green-400"
                >
                  <Icon name="mdi:android" size="64" />
                </div>
                <div class="text-xl font-semibold">Android</div>
                <p class="mt-2 mb-4 text-gray-600">
                  Building seamless Android apps and games
                </p>
              </div>
            </div>
          </div>
          <div class="w-full md:w-4/12 px-4 text-center">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-xl shadow-red-400 rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 rounded-full bg-red-400"
                >
                  <Icon name="mdi:language-html5" size="64" />
                </div>
                <div class="text-xl font-semibold">Websites</div>
                <p class="mt-2 mb-4 text-gray-600">
                  Designing engaging websites that achieve perfect PageSpeed
                  scores.
                </p>
              </div>
            </div>
          </div>
          <div class="pt-6 w-full md:w-4/12 px-4 text-center">
            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-xl shadow-yellow-400 rounded-lg"
            >
              <div class="px-4 py-5 flex-auto">
                <div
                  class="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 mb-5 rounded-full bg-yellow-400"
                >
                  <Icon name="mdi:code" size="64" />
                </div>
                <div class="text-xl font-semibold">Efficient Code</div>
                <p class="mt-2 mb-4 text-gray-600">
                  Always aiming for maximum efficiency in programming
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap items-center mt-16">
          <div
            data-aos="zoom-out"
            class="w-full md:w-5/12 px-4 mr-auto ml-auto"
          >
            <div
              class="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
            >
              <Icon name="mdi:account-supervisor" size="32" />
            </div>
            <h2 class="text-white text-3xl mb-2 font-semibold leading-normal">
              Code, Laugh, Launch!
            </h2>
            <p
              class="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-200"
            >
              Elevate your app game with a sprinkle of our coding magic and a
              whole lot of fun
            </p>
            <p
              class="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-200"
            >
              Say goodbye to coding blues; with us, it's all smooth sailing (and
              maybe some pizza)!
            </p>
            <a
              aria-label="Check GitHub profile"
              href="https://github.com/modbender"
              class="font-bold text-gray-300 mt-8"
              target="_blank"
            >
              <Icon class="mb-1" name="mdi:external-link" size="16" />
              Check my GitHub profile
            </a>
          </div>
          <div class="w-full md:w-4/12 px-4 mr-auto ml-auto mt-10">
            <div
              data-aos="fade-left"
              class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg shadow-blue-400 rounded-lg"
            >
              <NuxtImg
                alt="Top Notch Services"
                src="https://cdn.pixabay.com/photo/2023/02/09/18/42/podcast-7779510_1280.png"
                class="w-full rounded-t-lg"
                sizes="300px md:400px lg:500px"
                width="1280"
                height="961"
                loading="lazy"
                format="webp"
                quality="80"
              />
              <div class="bg-pink-600 rounded-b-lg">
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block"
                    style="height: 95px; top: -94px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-pink-600 fill-current"
                    ></polygon>
                  </svg>
                  <h2 class="text-xl font-bold text-white">
                    Top Notch Services
                  </h2>
                  <p class="text-md font-light mt-2 text-white">
                    Instant services that will make you want to come again!
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END ABOUT SECTION  -->
    <!-- BEGIN SHOWCASE SECTION  -->
    <section class="relative bg-white py-20">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style="height: 81px"
      >
        <svg
          class="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 2560 100"
          version="1.1"
          x="0"
          y="0"
        >
          <polygon
            class="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div
            data-aos="flip-right"
            class="w-full md:w-4/12 ml-auto mr-auto px-4 mb-6"
          >
            <NuxtImg
              loading="lazy"
              alt="Skyrocketing Success"
              class="max-w-full rounded-lg shadow-lg shadow-black"
              src="https://cdn.pixabay.com/photo/2019/07/26/20/52/man-4365597_1280.png"
              sizes="300px md:350px xl:450px"
              format="webp"
              quality="80"
              height="1280"
              width="907"
            />
          </div>
          <div
            data-aos="zoom-in"
            class="w-full md:w-5/12 ml-auto mr-auto px-4 mt-16 lg:mt-0"
          >
            <div class="md:pr-12">
              <div
                class="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"
              >
                <Icon name="mdi:rocket" size="32" />
              </div>
              <h2 class="text-3xl font-semibold">Skyrocketing Success</h2>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                Dive into our toolbox of innovation with pre-built pages that
                launch your project at warp speed. Customize a bit or a lot, and
                boom - you're on the launchpad, ready for liftoff!
              </p>
              <ul class="list-none mt-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block p-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                      >
                        <Icon name="mdi:code-block-tags" size="24" />
                      </span>
                    </div>
                    <div>
                      <div class="text-gray-600">
                        Pixel-Perfect Build Blocks
                      </div>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block p-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                      >
                        <Icon
                          name="mdi:selection-ellipse-arrow-inside"
                          size="24"
                        />
                      </span>
                    </div>
                    <div>
                      <div class="text-gray-600">Stellar Page Examples</div>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block p-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"
                      >
                        <Icon name="mdi:video-input-component" size="24" />
                      </span>
                    </div>
                    <div>
                      <div class="text-gray-600">Adaptable Components</div>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="my-10 text-center lg:text-left">
                <a
                  class="no-anim text-white bg-green-700 hover:bg-green-800 focus:ring-green-800 font-bold text-xl rounded-lg px-7 py-4 me-2 mb-2 focus:outline-none"
                  aria-label="Check our apps on Google Play"
                  href="https://play.google.com/"
                  target="_blank"
                >
                  App Store
                  <Icon
                    class="text-white mb-1"
                    name="mdi:google-play"
                    size="24"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END SHOWCASE SECTION  -->
    <!-- BEGIN STAFF SECTION  -->
    <section class="relative pt-20 pb-20 lg:pb-36 text-white">
      <div class="absolute top-0 w-full h-full bg-center bg-cover">
        <span class="w-full h-full absolute opacity-50 bg-blue-600"></span>
      </div>
      <div class="container mx-auto px-4">
        <div
          data-aos="fade-down"
          class="flex flex-wrap justify-center text-center mb-16 lg:mb-24"
        >
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-extrabold">Here are our heroes</h2>
            <p class="text-lg leading-relaxed font-semibold m-4 text-gray-300">
              These heroes made this template possible
            </p>
          </div>
        </div>
        <div class="flex flex-wrap">
          <div
            data-aos="fade-left"
            class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
          >
            <div class="px-6">
              <NuxtImg
                alt="Me"
                src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_1280.jpg"
                class="shadow-lg rounded-full mx-auto max-w-32"
                sizes="120px"
                width="128"
                height="116"
                loading="lazy"
                format="webp"
                quality="80"
              />
              <div class="pt-6 text-center">
                <div class="text-xl font-bold">Me</div>
                <p class="mt-1 text-sm text-gray-300 uppercase font-semibold">
                  Web Developer
                </p>
                <div class="mt-6">
                  <ButtonSocial social="twitter" href="#" />
                  <ButtonSocial social="facebook" href="#" />
                  <ButtonSocial social="dribbble" href="#" />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
          >
            <div class="px-6">
              <NuxtImg
                alt="Me"
                src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_1280.jpg"
                class="shadow-lg rounded-full mx-auto max-w-32"
                sizes="120px"
                width="128"
                height="116"
                loading="lazy"
                format="webp"
                quality="80"
              />
              <div class="pt-6 text-center">
                <div class="text-xl font-bold">Me</div>
                <p class="mt-1 text-sm text-gray-300 uppercase font-semibold">
                  Game Developer
                </p>
                <div class="mt-6">
                  <ButtonSocial social="github" href="#" />
                  <ButtonSocial social="facebook" href="#" />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-down"
            class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
          >
            <div class="px-6">
              <NuxtImg
                alt="Me"
                src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_1280.jpg"
                class="shadow-lg rounded-full mx-auto max-w-32"
                sizes="120px"
                width="128"
                height="116"
                loading="lazy"
                format="webp"
                quality="80"
              />
              <div class="pt-6 text-center">
                <div class="text-xl font-bold">Me</div>
                <p class="mt-1 text-sm text-gray-300 uppercase font-semibold">
                  UI/UX Designer
                </p>
                <div class="mt-6">
                  <ButtonSocial social="github" href="#" />
                  <ButtonSocial social="twitter" href="#" />
                  <ButtonSocial social="instagram" href="#" />
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4"
          >
            <div class="px-6">
              <NuxtImg
                alt="Me"
                src="https://cdn.pixabay.com/photo/2016/12/07/21/01/cartoon-1890438_1280.jpg"
                class="shadow-lg rounded-full mx-auto max-w-32"
                sizes="120px"
                width="128"
                height="116"
                loading="lazy"
                format="webp"
                quality="80"
              />
              <div class="pt-6 text-center">
                <div class="text-xl font-bold">Me</div>
                <p class="mt-1 text-sm text-gray-300 uppercase font-semibold">
                  Python Developer
                </p>
                <div class="mt-6">
                  <ButtonSocial social="dribbble" href="#" />
                  <ButtonSocial social="github" href="#" />
                  <ButtonSocial social="twitter" href="#" />
                  <ButtonSocial social="instagram" href="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END STAFF SECTION  -->
    <!-- BEGIN TESTIMONIAL SECTION  -->
    <section class="bg-blue-900 text-white pt-10 pb-10 lg:pb-20">
      <div
        class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6"
      >
        <Icon size="96" class="text-white" name="mdi:format-quote-open" />
        <h2 class="text-4xl font-extrabold mb-7">Testimonials</h2>
        <div class="max-w-screen-md mx-auto">
          <LazySwiper
            v-if="!!testimonialData && testimonialData.length > 0"
            class="testimonial-swiper"
            :modules="[SwiperAutoplay, SwiperPagination]"
            :slides-per-view="1"
            :loop="true"
            :pagination="{
              enabled: true,
              clickable: true,
            }"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
          >
            <SwiperSlide
              v-for="testimonialSlide in testimonialData"
              :key="testimonialSlide"
            >
              <blockquote class="text-2xl font-medium text-white">
                "{{ testimonialSlide.testimonial }}"
              </blockquote>
              <div class="flex items-center justify-center gap-3 mt-5">
                <NuxtImg
                  loading="lazy"
                  class="w-10 h-10 rounded-full"
                  :src="testimonialSlide.profile.image"
                  alt="Testimonial profile picture"
                />
                <div class="flex flex-col items-start">
                  <div class="font-medium text-white">
                    {{ testimonialSlide.profile.name }}
                  </div>
                  <div class="text-sm font-light text-gray-300">
                    {{ testimonialSlide.profile.position }}
                  </div>
                </div>
              </div>
              <div
                class="flex items-center justify-center mt-6 space-x-3"
              ></div>
            </SwiperSlide>
          </LazySwiper>
        </div>
      </div>
    </section>
    <!-- END TESTIMONIAL SECTION  -->
    <!-- BEGIN INSIGHT SECTION  -->
    <section class="pb-20 relative block bg-gray-900">
      <div
        class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-[79px]"
        style="height: 80px"
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
            class="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto px-4 pt-24 lg:pb-64">
        <div
          data-aos="fade-left"
          class="flex flex-wrap text-center justify-center"
        >
          <div class="w-full lg:w-6/12 px-4">
            <h2 class="text-4xl font-semibold text-white">
              Build Something Great
            </h2>
            <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-400">
              Elevate your digital presence with our cutting-edge solutions
              tailored just for you. Let's innovate together
            </p>
          </div>
        </div>
        <div class="flex flex-wrap mt-12 justify-center">
          <div
            data-aos="fade-down-left"
            class="w-full lg:w-3/12 px-4 text-center"
          >
            <div
              class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <Icon name="mdi:medal" size="36" />
            </div>
            <div class="text-xl mt-5 font-semibold text-white">
              Excellent Services
            </div>
            <p class="mt-2 mb-4 text-gray-400">
              Delivering top-notch quality and unparalleled expertise to turn
              your vision into a digital reality
            </p>
          </div>
          <div
            data-aos="fade-down-right"
            class="w-full lg:w-3/12 px-4 text-center"
          >
            <div
              class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <Icon name="mdi:poll" size="36" />
            </div>
            <div class="text-xl mt-5 font-semibold text-white">
              Grow Your Market
            </div>
            <p class="mt-2 mb-4 text-gray-400">
              Expand your reach and capture new audiences with strategic
              marketing and robust digital tools
            </p>
          </div>
          <div data-aos="fade-right" class="w-full lg:w-3/12 px-4 text-center">
            <div
              class="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            >
              <Icon name="mdi:bulb" size="36" />
            </div>
            <div class="text-xl mt-5 font-semibold text-white">Launch Time</div>
            <p class="mt-2 mb-4 text-gray-400">
              Embark on a journey to market dominance with products launched to
              perfection and beyond
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- END INSIGHT SECTION  -->
    <!-- BEGIN CONTACT SECTION  -->
    <section id="contact" class="relative block py-24 lg:pt-0 bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap justify-center lg:-mt-64 -mt-48">
          <div class="w-full lg:w-6/12 lg:px-4">
            <div
              data-aos="flip-down"
              class="relative flex flex-col min-w-0 break-words w-full mt-16 lg:mt-6 mb-6 shadow-lg shadow-purple-400 rounded-lg bg-gray-300"
            >
              <div class="flex-auto p-5 lg:p-10">
                <h2 class="text-2xl font-semibold">Want to work with us?</h2>
                <p class="leading-relaxed mt-1 mb-4 text-gray-600">
                  Complete this form and we will get back to you in 24 hours
                </p>
                <div class="relative w-full mb-3 mt-8">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="full-name"
                  >
                    Full Name
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Full Name"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Email"
                    style="transition: all 0.15s ease 0s"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    for="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    cols="80"
                    class="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                    placeholder="Type a message..."
                  ></textarea>
                </div>
                <div class="text-center mt-6">
                  <button
                    aria-label="Send Message"
                    style="transition: all 0.15s ease 0s"
                    class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <Icon class="mb-1 mr-1" name="mdi:send" />
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- END CONTACT SECTION  -->
  </div>
</template>

<script setup>
import testimonialData from "@/data/testimonials.json";

const { $AOS } = useNuxtApp();

const defaultOgImage = useDefaultOgImage();

onMounted(() => {
  $AOS.init({
    offset: 150,
    duration: 1000,
  });
});

defineOgImageComponent("NuxtSeo");

useSchemaOrg([
  defineBreadcrumb({
    itemListElement: [{ name: "Home", item: "/" }],
  }),
]);

useSeoMeta({
  title: "Home",
  description: "Kairo Template Homepage",
  twitterCard: "summary_large_image",
  ogImage: [...defaultOgImage],
});
</script>
