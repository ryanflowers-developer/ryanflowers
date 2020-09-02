<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <h1>Skills</h1>
        <br />

        <v-row class>
          <v-col class="text-center" cols="12" lg="8" offset-lg="2">
            <v-lazy
              v-model="isActive"
              :options="{
          threshold: 1
        }"
              min-height="100"
              transition="scale-transition"
              origin="center center"
            >
              <v-row>
                <v-col col="3">
                  <i class="devicon-javascript-plain colored"></i>
                </v-col>
                <v-col col="3">
                  <i class="devicon-html5-plain colored"></i>
                </v-col>
                <v-col col="3">
                  <i class="devicon-css3-plain colored"></i>
                </v-col>
                <v-col col="3">
                  <i class="devicon-python-plain colored"></i>
                </v-col>
              </v-row>
            </v-lazy>
            <br />
            <br />
            <v-lazy
              v-model="isActive"
              :options="{
          threshold: 1
        }"
              min-height="100"
              transition="scale-transition"
              origin="center center"
            >
              <v-row>
                <v-col lg="10" offset-lg="1" cols="12">
                  <v-row>
                    <v-col cols="4" md="4">
                      <i class="devicon-vuejs-plain colored"></i>
                    </v-col>
                    <v-col cols="4" md="4">
                      <i class="devicon-angularjs-plain colored"></i>
                    </v-col>
                    <v-col cols="4" md="4">
                      <i class="devicon-react-original colored"></i>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-lazy>
            <br />
            <br />
            <v-lazy
              v-model="isActive"
              :options="{
          threshold: 1
        }"
              min-height="100"
              transition="scale-transition"
              origin="center center"
            >
              <v-row>
                <v-col col="3">
                  <i class="devicon-postgresql-plain colored"></i>
                </v-col>
                <v-col col="3">
                  <i class="devicon-bootstrap-plain colored"></i>
                </v-col>
                <v-col col="3">
                  <i class="devicon-git-plain colored"></i>
                </v-col>
                <v-col col="3">
                  <i class="devicon-csharp-plain colored"></i>
                </v-col>
              </v-row>
            </v-lazy>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
i {
  font-size: 5rem;
}
</style>
