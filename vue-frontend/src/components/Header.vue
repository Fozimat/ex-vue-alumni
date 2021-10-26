<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><a href="index.html">e-aLumni</a></h1>
      <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <router-link tag="li" to="/" active-class="active">Home</router-link>
          <router-link tag="li" to="alumni" active-class="active"
            >Alumni</router-link
          >
          <router-link tag="li" to="event" active-class="active"
            >Event</router-link
          >
          <router-link tag="li" to="contact" active-class="active"
            >Contact</router-link
          >
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->

      <a href="courses.html" class="get-started-btn">Register</a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
