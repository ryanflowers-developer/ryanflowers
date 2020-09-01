<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="8" offset-lg="2">
        <v-row>
          <v-col class="align-center" cols="12" md="12" lg="5" offset-lg="1">
            <v-img
              class="mx-auto"
              id="profile"
              width="400px"
              src="https://i.imgur.com/i0AiiS6.jpg"
            ></v-img>
          </v-col>
          <v-col
            id="passage"
            class="my-auto mx-auto text-center"
            cols="12"
            md="12"
            lg="5"
          >
            <h2>
              Full Stack Solution
              <span id="period">.</span>
              <span id="period2">.</span>
              <span id="period3">.</span>
            </h2>
            <br />
            <p>
              My work is a fusion of productivity and creativity. I have
              self-discipline and set goals to crush objectives while striving
              for innovation. I believe in writing code that is fast, efficient
              and inventive for both the server and the client. In modern web
              development, understanding the full stack is essential and I have
              made it my duty to do so.
            </p>
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
#profile {
  border-radius: 50% !important;
}

h2 {
  font-weight: 600;
}

#period {
  font-size: 1.5rem;
  color: #41b883;
}

#period2 {
  font-size: 1.5rem;
  color: #c4473a;
}

#period3 {
  font-size: 1.5rem;
  color: #61dafb;
}
</style>
