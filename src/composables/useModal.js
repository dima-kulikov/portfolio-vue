import { ref } from "vue";

const isOpen = ref(false);
const component = ref(null);
const props = ref({});

export function useModal() {
  function open(options) {
    component.value = options.component;
    props.value = options.props || {};
    isOpen.value = true;
    document.body.style.overflow = "hidden";
  }

  function close() {
    isOpen.value = false;
    console.log("close");
    document.body.style.overflow = "";
  }

  return {
    isOpen,
    component,
    props,
    open,
    close,
  };
}
