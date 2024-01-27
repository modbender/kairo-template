<template>
  <div id="default-layout-container">
    <Preloader />
    <Navbar />
    <main>
      <slot />
    </main>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
