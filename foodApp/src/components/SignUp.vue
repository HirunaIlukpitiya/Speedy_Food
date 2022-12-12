<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Page Loaded!");
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      response: "",
      errors: "",
      statusText: "",
    };
  },

  methods: {
    submitForm() {
      axios
        .post("http://localhost:5000/api/users/register", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          password2: this.password2,
        })
        .then((response) => {
          console.log(response);
          if (response.request.statusText) {
            this.statusText = response.request.statusText;
          this.$router.push({ name: "SignIn" });

          }
        })
        .catch((errors) => {
          console.log(errors);
          if (errors.response.data.errors) {
            this.errors = errors.response.data.errors;
          }
        });
      this.firstName = "";
      this.lastName = "";
      this.email = "";
      this.password = "";
      this.password2 = "";
    },
  },
};
</script>
<template>
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Register now!</h1>
        <p className="py-6">Food app details!</p>
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
        <div v-if="statusText" class="alert alert-success shadow-lg">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>You have successfully registered</span>
          </div>
        </div>
      </div>
      <form @submit.prevent="submitForm">
        <div
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">First Name</span>
              </label>
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered"
                v-model="firstName"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Last Name</span>
              </label>
              <input
                type="text"
                placeholder="Last Name"
                className="input input-bordered"
                v-model="lastName"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm password"
                className="input input-bordered"
                v-model="password2"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">SignUp</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
