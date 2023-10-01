import { nextTick, ref } from "vue";

export const renderComponent = ref(true);

export const forceRerender = async () => {
  // Remove MyComponent from the DOM
  renderComponent.value = false;

    // Wait for the change to get flushed to the DOM
    await nextTick();

    // Add the component back in
  renderComponent.value = true;
};