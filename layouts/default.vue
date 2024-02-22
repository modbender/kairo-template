<template>
  <div id="default-layout-container">
    <Preloader />
    <Navbar />
    <main>
      <slot />
    </main>
    <LazyFooter />
  </div>
</template>
