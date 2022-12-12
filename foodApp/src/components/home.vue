<script>
   export default {

    methods:{
      goToLogin(){
        this.$router.push('./SignIn.vue');
      },
    },
   };
</script>
<template>
<div className="hero min-h-screen" style="background-image: url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">KDU Online Food ordering app</p>
      <button className="btn btn-primary" @click="goToLogin()">Get Started</button>
    </div>
  </div>
</div>
</template>
<style>
</style>