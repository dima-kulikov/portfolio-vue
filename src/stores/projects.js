import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useProjectsStore = defineStore("projects", () => {
  const projects = ref([]);

  const activeCategory = ref("All");

  const loadProjects = async (lang) => {
    try {
      const res = await fetch(`/projects-${lang}.json`);
      if (!res.ok) throw new Error("Failed to load projects");
      projects.value = await res.json();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProjects = computed(() => {
    if (activeCategory.value === "All") return projects.value;
    return projects.value.filter((p) => p.filter === activeCategory.value);
  });

  const categoriesArray = computed(() => {
    const cats = projects.value.map((p) => p.filter);
    return ["All", ...new Set(cats)];
  });

  const setActiveCategory = (category) => {
    activeCategory.value = category;
  };

  return {
    projects,
    loadProjects,
    filteredProjects,
    categoriesArray,
    setActiveCategory,
    activeCategory,
  };
});
