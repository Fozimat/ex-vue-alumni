<template>
  <div>
    <Header />
    <main id="main">
      <Breadcumb />

      <AlumniTable />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Breadcumb from "@/components/Breadcumb.vue";
import AlumniTable from "@/components/AlumniTable.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Alumni",
  components: {
    Header,
    Breadcumb,
    AlumniTable,
    Footer,
  },
};
</script>
