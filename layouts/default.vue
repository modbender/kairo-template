<template>
  <div id="default-layout-container">
    <Navbar />
    <main>
      <slot />
    </main>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
