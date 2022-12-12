<script>
import axios from "axios";
export default {
  mounted() {
    console.log("component mounted");
  },
  data() {
    return {
      email: "",
      password: "",
      response: "",
      errors: "",
      success: "",
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:5000/api/users/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          const success = response.data.success;
          this.response = response;
          localStorage.setItem('accessToken',response.data.token);
          router.push({ name: "Dashboard" });
        })
        .catch((errors) => {
          console.log(errors);
          if (errors.response.data.errors) {
            this.errors = errors.response.data.errors;
          }
        });
      this.email = "";
      this.password = "";
    },
    goToSignup() {
      this.$router.push({ name: "SignUp" });
    },
  },
};
</script>

<template>
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
        <p className="py-6">food app details can add here!</p>
        <hr />
        <p>Don't have an account?</p>
        <button className="btn btn-primary" @click="goToSignup()">Sign Up</button>
        <div v-if="errors" class="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{{ errors }}</span>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                v-model="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                v-model="password"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">SignIn</button>
              <hr />
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
