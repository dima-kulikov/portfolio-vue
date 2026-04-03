import { createRouter, createWebHistory } from "vue-router";

import MainPage from "@/components/MainPage.vue";
import SkillsPage from "@/components/SkillsPage.vue";
import ContactsPage from "@/components/ContactsPage.vue";
import LocaleLayout from "@/components/LocaleLayout.vue";

const routes = [
  {
    path: "/:locale(en|ua)",
    component: LocaleLayout,
    children: [
      {
        path: "",
        name: "main",
        component: MainPage,
      },
      {
        path: "skills",
        name: "skills",
        component: SkillsPage,
      },
      {
        path: "contacts",
        name: "contacts",
        component: ContactsPage,
      },
    ],
  },

  {
    path: "/",
    redirect: () => {
      const savedLang = localStorage.getItem("lang") || "en";
      return `/${savedLang}`;
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
