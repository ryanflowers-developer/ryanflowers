// v2.0
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import DefaultLayout from "~/layouts/Default.vue";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import VueTypedJs from "vue-typed-js";
import VueScrollTo from "vue-scrollto";

export default function(Vue, { appOptions, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
  });

  const opts = {
    iconfont: "md" || "mdi",
  }; //const opts = { ... } //opts includes, vuetify themes, icons, etc.

  Vue.use(Vuetify);
  if (isClient) {
    Vue.use(VueTypedJs);
    Vue.use(VueScrollTo, {
      container: "body",
      duration: 900,
      easing: "ease",
      offset: -64,
      force: true,
      cancelable: true,
      onStart: false,
      onDone: false,
      onCancel: false,
      x: false,
      y: true,
    });
  }

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
