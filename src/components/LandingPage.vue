<template>
  <span>
    <v-row class="mt-lg-16 hidden-sm-and-down">
      <v-col col="12" class="text-center">
        <vue-typed-js
          :loop="true"
          :typeSpeed="40"
          :backSpeed="100"
          style="color: black; height: 100vh;"
          :strings="['Motivated', 'Experienced', 'Creative', 'a Developer']"
        >
          <div>
            <div id="lg-h1">
              <span>
                <h1>Ryan Flowers</h1>
              </span>
              <div
                style="background: linear-gradient(to right , #41b883 20%, #c4473a 20% 40%, #61dafb 40% 60%, #e54d26 60% 80%, #3c8fc6 80% 100%; height: 3px;"
              ></div>
              <span class="typing main"></span>
            </div>
          </div>
        </vue-typed-js>
      </v-col>
    </v-row>

    <v-row class="hidden-md-and-up">
      <v-col col="6" offset="6" class="text-center mt-2">
        <vue-typed-js
          :loop="true"
          :typeSpeed="40"
          :backSpeed="100"
          style="color: black;"
          :strings="['Motivated', 'Experienced', 'Creative', 'a Developer']"
        >
          <div>
            <div id="sm-h1">
              <span>
                <h1 id="sm-h1">Ryan Flowers</h1>
              </span>
              <div
                style="background: linear-gradient(to right , #41b883 20%, #c4473a 20% 40%, #61dafb 40% 60%, #e54d26 60% 80%, #3c8fc6 80% 100%; height: 1px;"
              ></div>
              <span id="main-sm" class="typing"></span>
            </div>
          </div>
        </vue-typed-js>
      </v-col>
    </v-row>
  </span>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  color: black;
  font-size: 2.5rem;
  font-weight: 100;
}

#main-sm {
  color: black;
  font-size: 1.5rem;
  font-weight: 100;
}

h1 {
  font-size: 4rem;
  font-weight: 200;
}

#lg-h1 {
  font-size: 4rem;
  font-weight: 300;
}

#sm-h1 {
  line-height: 90%;
  font-size: 2rem;
  font-weight: 100;
}
</style>
