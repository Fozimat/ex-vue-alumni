<template>
  <section class="register" id="register">
    <div class="container" data-aos="fade-up">
      <div class="row">
        <div class="col-lg-12 mt-5 mt-lg-0">
          <form class="php-email-form" @submit.prevent="submit">
            <div class="row">
              <div
                class="alert alert-primary"
                role="alert"
                v-if="insertSuccess"
              >
                Success insert data
              </div>
              <div class="col-lg-4">
                <div class="form-group mt-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="NISN"
                    required
                    v-model="nisn"
                  />
                </div>
              </div>
              <div class="col-lg-8">
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nama Lengkap"
                    required
                    v-model="nama"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tempat Lahir"
                    required
                    v-model="tempat_lahir"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mt-3">
                  <input
                    type="date"
                    class="form-control"
                    placeholder="Tanggal Lahir"
                    required
                    v-model="tanggal_lahir"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group mt-3">
                  <select
                    class="form-control"
                    placeholder="Jenis Kelamin"
                    required
                    v-model="jenis_kelamin"
                  >
                    <option value="">-- Pilih Jenis Kelamin --</option>
                    <option value="Pria">Pria</option>
                    <option value="Wanita">Wanita</option>
                  </select>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mt-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Tahun Masuk"
                    required
                    v-model="tahun_masuk"
                  />
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group mt-3">
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Tahun Lulus"
                    required
                    v-model="tahun_lulus"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="form-group mt-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="No Telepon"
                    required
                    v-model="no_telp"
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group mt-3">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    required
                    v-model="email"
                  />
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <textarea
                class="form-control"
                rows="5"
                placeholder="Alamat Lengkap"
                required
                v-model="alamat"
              ></textarea>
            </div>

            <div class="text-center">
              <button @click="insertAlumni" class="mt-4">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
button {
  width: 100%;
}
</style>

<script>
import axios from "axios";

export default {
  name: "RegisterForm",
  data() {
    return {
      nisn: "",
      nama: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      jenis_kelamin: "",
      tahun_masuk: "",
      tahun_lulus: "",
      no_telp: "",
      email: "",
      alamat: "",
      insertSuccess: false,
    };
  },
  methods: {
    async insertAlumni() {
      let data = {
        nisn: this.nisn,
        nama: this.nama,
        tempat_lahir: this.tempat_lahir,
        tanggal_lahir: this.tanggal_lahir,
        jenis_kelamin: this.jenis_kelamin,
        tahun_masuk: this.tahun_masuk,
        tahun_lulus: this.tahun_lulus,
        no_telp: this.no_telp,
        email: this.email,
        alamat: this.alamat,
      };
      const url = "http://127.0.0.1:5000/alumni";
      try {
        await axios.post(url, data);
        this.nisn = "";
        this.nama = "";
        this.tempat_lahir = "";
        this.tanggal_lahir = "";
        this.jenis_kelamin = "";
        this.tahun_masuk = "";
        this.tahun_lulus = "";
        this.no_telp = "";
        this.email = "";
        this.alamat = "";
        this.$router.push({ name: "Register" });
        this.insertSuccess = true;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
