<template>
  <v-app-bar
    :scroll="handleScroll"
    :color="dynamic"
    elevate-on-scroll
    scroll-threshold="10"
    fixed
  >
    <v-toolbar-title class="title">
      {{ $static.metadata.siteName }}
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <div class="hidden-sm-and-down">
      <v-btn text :color="navColor" href="#" v-scroll-to="'#services'"
        >Services</v-btn
      >
      <v-btn text :color="navColor" href="#" v-scroll-to="'#skills'"
        >Skills</v-btn
      >
      <v-btn text :color="navColor" href="#" v-scroll-to="'#projects'"
        >Projects</v-btn
      >
      <v-btn text :color="navColor" href="#" v-scroll-to="'#ref'"
        >References</v-btn
      >
      <v-btn text :color="navColor" href="#" v-scroll-to="'#contact'"
        >Contact</v-btn
      >
    </div>

    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      class="hidden-md-and-up"
      style="color: white;"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data: () => ({
    dynamic: "transparent",
    drawer: null,
    navColor: "black",
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      if (window.scrollY > 0) {
        this.dynamic = "black";
        this.navColor = "white";
      } else {
        this.dynamic = "transparent";
        this.navColor = "black";
      }
    },
  },
};
</script>

<style scoped>
.title {
  /* color: #c4473a; */
  font-family: Geneva, "Times New Roman", serif;
  font-weight: 400;
  letter-spacing: 0.0892857143em;
  text-indent: 0.0892857143em;
  text-transform: uppercase;
  color: white;
}

a {
  text-decoration: none;
  margin: 20px;
  /* color: #c4473a !important; */
}
</style>
