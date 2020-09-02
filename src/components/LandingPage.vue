<template>
  <span>
    <v-row class="mt-lg-16 hidden-sm-and-down">
      <v-col col="12" class="text-center">
        <vue-typed-js
          :loop="true"
          :typeSpeed="40"
          :backSpeed="100"
          style="color: black; height: 100vh;"
          :strings="['Motivated', 'Experienced', 'Creative', 'Developer']"
        >
          <div>
            <div id="lg-h1">
              <span>
                <h1 class="line">Ryan Flowers</h1>
              </span>

              <span class="typing main"></span>
            </div>
          </div>
        </vue-typed-js>
      </v-col>
    </v-row>

    <v-row class="hidden-md-and-up">
      <v-col col="7" offset="5" class="text-center mt-4">
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
                <h1 class="line" id="sm-h1">Ryan Flowers</h1>
              </span>

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
  line-height: 6rem;
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

.line {
  padding-bottom: 5px;
  background: linear-gradient(
    to right,
    #41b883 20%,
    #c4473a 20% 40%,
    #61dafb 40% 60%,
    #e54d26 60% 80%,
    #3c8fc6 80% 100%
  );
  background-size: 100% 2px;
  background-position: bottom 0 left 0, bottom 5px left 0;
  background-repeat: no-repeat;
}
</style>
