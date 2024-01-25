<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <ClientOnly>
      <Footer />
    </ClientOnly>
  </div>
</template>
