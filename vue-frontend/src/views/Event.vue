<template>
  <div>
    <Header />
    <main id="main">
      <Breadcumb />
      <EventCard />>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Breadcumb from "@/components/Breadcumb.vue";
import EventCard from "../components/EventCard.vue";

export default {
  name: "Event",
  components: {
    Header,
    Breadcumb,
    EventCard,
    Footer,
  },
};
</script>
