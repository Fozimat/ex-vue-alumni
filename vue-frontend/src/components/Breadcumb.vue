<template>
  <div class="breadcrumbs" data-aos="fade-in">
    <div class="container">
      <h2>{{ heading }}</h2>
      <p>
        Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia
        id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam
        aperiam consequatur laboriosam nemo harum praesentium.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Breadcumb",
  props: {
    heading: {
      type: String,
      default: "",
    },
  },
};
</script>
