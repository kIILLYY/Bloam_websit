import { computed, ref } from "vue";

export const collapsed = ref(false);
export const mobileMenuOpen = ref(false);

export const toggleSidebar = () => {
  collapsed.value = !collapsed.value;
};

export const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

export const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

export const SIDEBAR_WIDTH = 280;
export const SIDEBAR_WIDTH_COLLAPSED = 92;

export const sidebarWidth = computed(
  () => `${collapsed.value ? SIDEBAR_WIDTH_COLLAPSED : SIDEBAR_WIDTH}px`
);
