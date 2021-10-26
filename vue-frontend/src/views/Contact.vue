<template>
  <div>
    <Header />
    <main id="main">
      <Breadcumb />
    </main>
    <ContactSection />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ContactSection from "@/components/ContactSection.vue";
import Breadcumb from "@/components/Breadcumb.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Contact",
  components: {
    Header,
    ContactSection,
    Breadcumb,
    Footer,
  },
};
</script>
