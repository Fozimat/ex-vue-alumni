<template>
  <div>
    <Header />
    <Breadcumb :heading="subtitle" />
    <RegisterForm />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Breadcumb from "@/components/Breadcumb.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Register",
  components: {
    Header,
    Breadcumb,
    RegisterForm,
    Footer,
  },
  data() {
    return {
      subtitle: "Register",
    };
  },
};
</script>
