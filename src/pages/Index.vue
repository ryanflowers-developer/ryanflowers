<template>
  <Layout>
    <MyOffer id="services" />
    <br />
    <v-row>
      <v-col cols="10" offset="1">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <br />
    <Skills id="skills" />
    <br />
    <br />
    <Parallax />
    <br />
    <br />
    <ProfileQuote />
    <br />
    <v-row>
      <v-col cols="10" offset="1">
        <v-divider></v-divider>
      </v-col>
    </v-row>
    <br />
    <Projects id="projects" />

    <br />
    <br />
    <References id="ref" />
    <br />
    <br />
    <br />
    <br />
    <Contact id="contact" />
    <br />
    <br />
  </Layout>
</template>

<script>
import LandingPage from "~/components/LandingPage.vue";
import MyOffer from "~/components/MyOffer.vue";
import Parallax from "~/components/Parallax.vue";
import Skills from "~/components/Skills.vue";
import ProfileQuote from "~/components/ProfileQuote.vue";
import Projects from "~/components/Projects.vue";
import References from "~/components/References.vue";
import Contact from "~/components/Contact.vue";

export default {
  components: {
    LandingPage,
    MyOffer,
    Skills,
    Parallax,
    ProfileQuote,
    Projects,
    References,
    Contact,
  },
};
</script>

<style>
html,
body,
* {
  font-family: Geneva, "Times New Roman", serif;
  font-weight: 500;
  min-width: 100%;
}
</style>
