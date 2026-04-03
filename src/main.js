// import { createApp } from "vue";
// import { createPinia } from "pinia";
// import App from "./App.vue";
// import router from "./router";
// import "./style.css";
// import { createI18n } from "vue-i18n";

// import { languages } from "./i18n/index.js";

// const i18n = createI18n({
//   legacy: false,
//   locale: "en",
//   fallbackLocale: "en",
//   messages: languages,
// });

// const app = createApp(App);
// const pinia = createPinia();

// app.use(router);
// app.use(pinia);
// app.use(i18n);
// app.mount("#app");

import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import { createI18n } from "vue-i18n";

import { languages } from "./i18n/index.js";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: languages,
});

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(i18n);

router.isReady().then(() => {
  const currentLocale = router.currentRoute.value.params.locale;

  if (currentLocale) {
    i18n.global.locale.value = currentLocale;
  }

  watch(
    () => router.currentRoute.value.params.locale,
    (newLocale) => {
      if (newLocale) {
        i18n.global.locale.value = newLocale;
      }
    },
  );
});

app.mount("#app");
