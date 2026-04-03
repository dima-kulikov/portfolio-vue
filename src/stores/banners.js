import { defineStore } from "pinia";
import { ref } from "vue";

export const useBannersStore = defineStore("banners", () => {
  const allBanners = ref([]);

  const loadBanners = async (lang) => {
    try {
      const res = await fetch(
        `${import.meta.env.BASE_URL}homepageBanners-${lang}.json`,
      );
      if (!res.ok) throw new Error("Failed to load banner");
      allBanners.value = await res.json();
    } catch (err) {
      console.error(err);
    }
  };
  return { allBanners, loadBanners };
});
