<script>
  export default {};
</script>
<template>

 
   <div className="navbar bg-black text-white-content relative">
       <div className="flex-1">
         <router-link to="/"> <img src="./assets/logo_kdu-2.png" class="mr-3 h-6 sm:h-10" alt="KDUlogo"/></router-link>
       </div>
       <div className="flex-none">
         <ul className="menu menu-horizontal p-0">
           <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link></li>
           <li class="nav-item"><router-link to="/SignIn">Sign In</router-link></li>
           <li class="nav-item"><router-link to="/dashboard">Dashboard</router-link></li>
         </ul>
       </div>
     </div>
     </template>
