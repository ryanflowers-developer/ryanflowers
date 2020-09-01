<template>
  <v-row>
    <v-col class="text-center">
      <h1>Contact</h1>
      <br />
      <br />

      <v-row>
        <v-col cols="10" offset="1" lg="4" offset-lg="2">
          <div class="text-center">
            <v-icon color="#61dafb" size="75">mdi-phone</v-icon
            ><span> (989)763-7452</span> <br />
            <br />
            <v-icon color="#61dafb" size="75">mdi-email</v-icon
            ><span> ryanflowers.developer@gmail.com</span>
          </div>
          <br />
          <br />
        </v-col>
        <v-col cols="10" offset="1" lg="4" offset-lg="0" class="my-auto">
          <v-icon style="margin: 20px;" size="100" color="#3c8fc6"
            >mdi-linkedin</v-icon
          >
          <v-icon style="margin: 20px;" size="100" color="#e54d26"
            >mdi-github</v-icon
          >
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("You must agree to continue!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Item is required");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>

<style scoped></style>
