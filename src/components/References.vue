<template>
  <v-row class="text-center">
    <v-col>
      <v-carousel cycle height="400" hide-delimiters show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet color="black" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div>
                <v-icon :color="slide.color" size="200">{{
                  slide.icon
                }}</v-icon>
                <br />

                <h1>{{ slide.name }}</h1>
                <p>{{ slide.quote }}</p>
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        {
          icon: "mdi-human-greeting",
          name: "Jordan Wood",
          quote:
            '"Ryan is an excellent person to be around, he caught on to everything quickly and was a huge asset to the organization."',
          color: "#41b883",
        },
        {
          icon: "mdi-human-greeting",
          name: "Tyler Ellis",
          quote:
            '"Ryan spent a lot of time making sure that he didn\'t only have a solution, but that he had the right one."',
          color: "#c4473a",
        },
        {
          icon: "mdi-human-greeting",
          name: "Jacob Anderson",
          quote:
            '"Ryan is someone you can always trust to listen and get things done."',
          color: "#60dafb",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  color: white;
}

i {
  font-size: 6rem;
}

p {
  max-width: 300px;
}
</style>
