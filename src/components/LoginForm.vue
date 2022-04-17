<template>
<img
      class="absolute top-0 w-screen object-fill lg:object-cover max-h-screen"
      src="../assets/backgrounds/LoginPage Dark.png"
    />

  <div class="flex flex-row justify-between items-center">
    <div class="w-2/5 h-full"></div>
    <from class="form right-0 self-center">
      <div class="form-section">
        <label for="email" class="label">Email</label>
        <input
          v-model="user.email"
          required
          type="email"
          name="email"
          id="email"
          placeholder="arab@aroal.com"
          class="input-blur lowercase"
        />
      </div>
      <div class="form-section">
        <label for="password" class="label">Password</label>
        <input
          v-model="user.password"
          required
          type="password"
          name="password"
          placeholder="********"
          id="password"
          class="input-blur"
        />
      </div>
      <div class="form-section">
        <button class="button button-success">login</button>
        <a href="#" class="button button-danger text-center">Forgot Password</a>
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
