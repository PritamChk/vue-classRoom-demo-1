<template>
  <!-- <img
    class="absolute top-0 w-screen object-fill lg:object-cover max-h-screen"
    src="../assets/backgrounds/LoginPage Dark.png"
  /> -->
  <div
    class="absolute top-0 w-screen object-contain h-screen bg-mobile-login sm:bg-desktop-login"
  />
  <div class="flex flex-row justify-between items-center overflow-hidden">
    <div class="w-1/5 md:w-2/5 h-full" />

    <form class="form w-2/5 h-full">
      <div class="form-section">
        <label
          class="label"
          for="fname"
        >First Name</label>
        <input
          v-model.trim.lazy="user.first_name"
          autocomplete="off"
          required
          type="text"
          placeholder="Type here"
          class="input-blur uppercase"
        >
      </div>
      <div class="form-section">
        <label
          class="label"
          for="fname"
        >Last Name</label>
        <input
          v-model.trim.lazy="user.last_name"
          autocomplete="off"
          required
          type="text"
          placeholder="Type here"
          class="input-blur uppercase"
        >
      </div>
      <div class="form-section">
        <label
          class="label"
          for="email"
        >Email</label>
        <input
          v-model.trim.lazy="user.email"
          autocomplete="off"
          required
          type="email"
          placeholder="babla@habla.com"
          class="input-blur lowercase"
        >
      </div>
      <div class="form-section">
        <label
          class="label"
          for="email"
        >Password</label>
        <input
          v-model="user.password"
          autocomplete="off"
          required
          type="password"
          placeholder="Password"
          class="input-blur"
        >
      </div>

      <div class="form-section accent-green-400">
        <label
          for="Sex"
          class="label"
        >Category</label>
        <label
          for="Male"
          class="radio-option"
        >
          <input
            v-model="user.category"
            required
            type="radio"
            class="radio-primary radio-md"
            name="Sex"
            value="student"
          ><span> Student </span>
        </label>
        <label
          for="Female"
          class="radio-option"
        >
          <input
            v-model="user.category"
            required
            type="radio"
            class="radio-primary radio-md"
            name="Sex"
            value="teacher"
            checked
          ><span> Teacher </span>
        </label>
      </div>
      <template v-if="user.category === 'student'">
        <div class="form-section">
          <label
            for="Sem"
            class="label"
          >University Roll</label>
          <input
            id="roll"
            v-model="user.univ_roll"
            type="text"
            name="univ_roll"
            required
            class="input-blur"
            pattern="[0-9]{11}"
          >
        </div>
        <div class="form-section">
          <label
            for="Sem"
            class="label"
          >Semester</label>
          <select
            v-model="user.sem"
            required
            class="input-blur"
          >
            <option
              disabled
              selected
              value="None"
            >
              Your Semester
            </option>
            <option
              v-for="sem in sems"
              :key="sem"
              class="label"
            >
              {{ sem }}
            </option>
          </select>
        </div>
        <div class="form-section">
          <label
            for="Dept"
            class="label"
          >Department</label>
          <select
            v-model="user.dept"
            required
            class="input-blur uppercase"
          >
            <option
              disabled
              selected
              value="None"
            >
              Your Depertment
            </option>
            <option
              v-for="dept in depts"
              :key="dept"
              class="label"
            >
              {{ dept }}
            </option>
          </select>
        </div>
        <div class="form-section">
          <label
            for="batch"
            class="label"
          >Batch of</label>
          <input
            v-model.number="user.batch_year"
            required
            type="number"
            min="1900"
            max="2100"
            step="1"
            class="input-blur"
          >
        </div>
      </template>
      <template v-else>
        <div class="form-section">
          <label
            for="Dept"
            class="label"
          >Department</label>
          <select
            v-model="user.teacher_depts"
            required
            class="multi-select uppercase scrollbar-hide"
            multiple
          >
            <option
              v-for="dept in depts"
              :key="dept"
              class="label"
            >
              {{ dept }}
            </option>
          </select>
        </div>
      </template>
      <!-- TODO: Remove it later on -->
      <!-- <div class="form-section label">
      {{ user }}
    </div> -->
      <div class="form-section">
        <button
          type="submit"
          class="button button-success"
        >
          Submit
        </button>
        <button
          type="reset"
          class="button button-danger"
          @click="reset_vals"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Form",
  data() {
    return {
      category: "teacher",
      sems: [1, 2, 3, 4, 5, 6, 7, 8],
      selected_sem: "",
      selected_dept: "",
      depts: ["MCA", "BCA", "B.Tech - CS", "B.Tech - ME", "B.Tech - EE"],
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        category: "teacher",
        sem: 1,
        dept: "MCA",
        batch_year: 2020,
        univ_roll: "",
        teacher_depts: [],
      },
    };
  },
  methods: {
    reset_vals() {
      this.user = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        category: "teacher",
        sem: 1,
        dept: "",
        batch_year: 2020,
        univ_roll: "",
        teacher_depts: [],
      };
    },
  },
};
</script>
