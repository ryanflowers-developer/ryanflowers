<template>
  <v-app>
    <v-row id="top">
      <v-col class="d-none d-md-flex" cols="12" md="5">
        <v-img height="100%" src="https://i.imgur.com/MbCOsqK.jpg"></v-img>
      </v-col>

      <v-col class="hidden-md-and-up" cols="12" md="5">
        <v-img height="100vh" src="https://i.imgur.com/MbCOsqK.jpg">
          <LandingPage />
          <v-col cols="12"></v-col>
        </v-img>
      </v-col>

      <v-col class="d-none d-md-flex" cols="12" md="7">
        <LandingPage />
      </v-col>
    </v-row>
    <Navbar />
    <slot />
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import LandingPage from "~/components/LandingPage.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Navbar,
    LandingPage,
    Footer,
  },
};
</script>

<style>
html {
  overflow-x: hidden;
}

.v-app {
  left: 0;
  top: 0;
  max-width: 100vw;
  min-width: 100vw;
  padding: 0px;
}
</style>
