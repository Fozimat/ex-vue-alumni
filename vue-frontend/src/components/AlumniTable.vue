<template>
  <div>
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">
        <h2 class="title-alumni">Daftar Alumni</h2>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">NISN</th>
              <th scope="col">Nama</th>
              <th scope="col">Tahun Masuk</th>
              <th scope="col">Tahun Lulus</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, index) in results" :key="result.id">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ result.nisn }}</td>
              <td>{{ result.nama }}</td>
              <td>{{ result.tahun_masuk }}</td>
              <td>{{ result.tahun_lulus }}</td>
              <td>
                <a href="#" class="btn btn-primary btn-sm"
                  ><i class="bi bi-eye-fill margin-see"></i>See Detail</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style scoped>
.title-alumni {
  margin-top: -3rem;
}
.margin-see {
  margin-right: 0.3rem !important;
}
</style>

<script>
import axios from "axios";
export default {
  name: "AlumniTable",
  data() {
    return {
      results: [],
    };
  },
  created() {
    this.showData();
  },
  methods: {
    async showData() {
      try {
        const url = "http://127.0.0.1:5000/alumni";
        const response = await axios.get(url);
        this.results = response.data.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
