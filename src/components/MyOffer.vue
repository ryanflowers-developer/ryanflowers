<template>
  <v-container class="text-center">
    <h1>What I Offer</h1>
    <br />

    <v-row>
      <v-col lg="10" md="12" offset-lg="1">
        <v-row>
          <v-col cols="12" lg="4" sm="12">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 16 : 2">
                <v-card-title class="justify-center">Front End</v-card-title>
                <v-card-subtitle>Fast | Responsive | Intuitive</v-card-subtitle>
                <v-icon color="#41b883" size="100">mdi-laptop</v-icon>
                <v-card-text>
                  UI/UX applications designed to be lightning quick, silky
                  smooth, intuitive and accessible.
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>

          <v-col cols="12" lg="4" sm="12">
            <transition name="fade" appear>
              <v-hover v-slot:default="{ hover }">
                <v-card :elevation="hover ? 16 : 2">
                  <v-card-title class="justify-center">Back End</v-card-title>
                  <v-card-subtitle>Efficient | Inventive | Effective</v-card-subtitle>
                  <v-icon color="#c4473a" size="100">code</v-icon>
                  <v-card-text>
                    Backend systems designed for rapid data delivery, harnessing
                    creative and proficient logic.
                  </v-card-text>
                </v-card>
              </v-hover>
            </transition>
          </v-col>
          <v-col cols="12" lg="4" sm="12">
            <v-hover v-slot:default="{ hover }">
              <v-card :elevation="hover ? 16 : 2">
                <v-card-title class="justify-center">Mobile Apps</v-card-title>
                <v-card-subtitle>Structure | Design | Performance</v-card-subtitle>
                <v-icon color="#61dafb" size="100">stay_primary_portrait</v-icon>
                <v-card-text>
                  Mobile apps designed to be productive, performant and
                  reliable. Quality is the highest priority.
                </v-card-text>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.v-card {
  width: 350px;
  height: 280px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
}

.fade-enter {
  opacity: 0;
}

.fade-active {
  transition: opacity 2s;
}

.fade-leave {
}

.fade-leave-active {
  transition: opacity 2s;
  opacity: 0;
}
</style>
