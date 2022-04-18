/* eslint-disable vue/multi-word-component-names */
<template>
  <nav
    class="sticky top-0 z-20 bg-slate-900/60 shadow-md backdrop-blur-sm backdrop-filter"
  >
    <ul
      class="flex flex-col flex-wrap items-center justify-evenly p-2 align-middle md:flex-row"
    >
      <router-link to="/dashboard">
        <li
          class="hover: rounded px-5 py-1 backdrop-blur-xl transition-all duration-100 ease-in-out hover:bg-slate-50/50 hover:drop-shadow-xl hover:backdrop-filter"
        >
          Dashboard
        </li>
      </router-link>
      <router-link to="/register">
        <li
          class="hover: rounded px-5 py-1 backdrop-blur-xl transition-all duration-100 ease-in-out hover:bg-slate-50/50 hover:drop-shadow-xl hover:backdrop-filter"
        >
          Signup
        </li>
      </router-link>
      <router-link to="/login">
        <li
          class="hover: rounded px-5 py-1 backdrop-blur-xl transition-all duration-100 ease-in-out hover:bg-slate-50/50 hover:drop-shadow-xl hover:backdrop-filter"
        >
          Login
        </li>
      </router-link>
      <router-link to="/dropdown">
        <li
          class="hover: rounded px-5 py-1 backdrop-blur-xl transition-all duration-100 ease-in-out hover:bg-slate-50/50 hover:drop-shadow-xl hover:backdrop-filter"
        >
          Drop Down
        </li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
};
</script>
