import { ref, computed } from "vue";

const isOpen = ref(false);

export function useSidebar() {
  const sidebarClasses = computed(() =>
    isOpen.value ? "translate-x-0" : "-translate-x-full",
  );

  const open = () => (isOpen.value = true);
  const close = () => (isOpen.value = false);
  const toggle = () => (isOpen.value = !isOpen.value);

  return {
    isOpen,
    sidebarClasses,
    open,
    close,
    toggle,
  };
}
