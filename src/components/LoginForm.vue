<template>
  <!-- <img
    class="absolute top-0 w-screen object-fill lg:object-cover max-h-screen"
    src="../assets/backgrounds/LoginPage Dark.png"
  /> -->
  <div
    class="absolute top-0 w-screen object-cover min-h-screen bg-mobile-login sm:bg-desktop-login from-fuchsia-300 to-blue-100"
  />
  <!-- src="../assets/backgrounds/LoginPage Dark.png" -->

  <div class="flex flex-row justify-between items-center">
    <div class="w-1/5 md:w-2/5 h-full" />
    <from class="form right-0 self-center">
      <div class="form-section">
        <label
          for="email"
          class="label"
        >Email</label>
        <input
          id="email"
          v-model="user.email"
          required
          type="email"
          name="email"
          placeholder="arab@aroal.com"
          class="input-blur lowercase"
        >
      </div>
      <div class="form-section">
        <label
          for="password"
          class="label"
        >Password</label>
        <input
          id="password"
          v-model="user.password"
          required
          type="password"
          name="password"
          placeholder="********"
          class="input-blur"
        >
      </div>
      <div class="form-section">
        <button class="button button-success">
          login
        </button>
        <a
          href="#"
          class="button button-danger text-center"
        >Forgot Password</a>
      </div>
    </from>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  components: {},
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
