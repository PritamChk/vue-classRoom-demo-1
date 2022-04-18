<template>
  <!-- <img
      class="absolute top-0 w-screen max-h-screen"
      src="../assets/backgrounds/Home Dark.png"
    /> -->
  <div
    class="absolute top-0 w-screen object-cover min-h-screen bg-mobile-login sm:bg-desktop-login from-fuchsia-300 to-blue-100"
  />
  <div
    class="text-4xl font-bold text-center py-10 mx-auto mt-32 w-2/3 h-1/4 rounded-md backdrop-filter backdrop-blur-md bg-slate-700/30"
  >
    <div>
      <span class="text-red-400">Welcome</span>
      to Classroom
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
};
</script>
