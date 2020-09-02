<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1>Projects</h1>
        <br />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-lazy
          v-model="isActive"
          :options="{
          threshold: 1
        }"
          min-height="100"
          transition="scale-transition"
          origin="center center"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card :elevation="hover ? 16 : 2" class="mx-auto" max-width="375" link>
              <a href="https://www.caytlawson.com" target="_blank">
                <v-img
                  class="white--text align-end"
                  height="210px"
                  src="https://i.imgur.com/bz98MXW.png"
                ></v-img>
                <v-card-title id="title">Cayt Lawson LLC</v-card-title>

                <v-card-subtitle class="pb-0">www.caytlawson.com</v-card-subtitle>

                <v-row>
                  <v-col cols="1" offset="1">
                    <i class="devicon-javascript-plain colored"></i>
                  </v-col>
                  <v-col cols="1" offset="1">
                    <i class="devicon-vuejs-plain colored"></i>
                  </v-col>
                  <v-col cols="1" offset="1">
                    <i class="devicon-html5-plain colored"></i>
                  </v-col>
                  <v-col cols="1" offset="1">
                    <i class="devicon-css3-plain colored"></i>
                  </v-col>
                </v-row>
              </a>
            </v-card>
          </v-hover>
        </v-lazy>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
i {
  font-size: 3rem;
}

a:link {
  text-decoration: none;
}

#title {
  color: black !important;
}
</style>
