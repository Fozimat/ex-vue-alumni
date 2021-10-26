<template>
  <div>
    <Header />
    <Hero />
    <main id="main">
      <About />
      <WhyUs />
      <Features />
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import WhyUs from "@/components/WhyUs.vue";
import Features from "@/components/Features.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    About,
    WhyUs,
    Features,
    Footer,
  },
};
</script>
