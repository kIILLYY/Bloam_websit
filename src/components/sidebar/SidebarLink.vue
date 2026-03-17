<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { closeMobileMenu, collapsed } from "./state";

export default {
  props: {
    to: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { closeMobileMenu, isActive, collapsed };
  },
};
</script>

<template>
  <router-link
    :to="to"
    class="link"
    :class="{ active: isActive, compact: collapsed }"
    @click="closeMobileMenu"
  >
    <transition name="fade">
      <span v-if="!collapsed">
        <slot />
      </span>
    </transition>
  </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0.35rem 0;
  min-height: 3rem;
  padding: 0.8rem 1rem;
  border-radius: 1rem;
  color: #172033;
  font-size: 0.96rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  transition: background-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
  transform: translateX(4px);
}

.link.active {
  background-color: var(--sidebar-item-active);
  color: #0f172a;
  box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.06);
}

.compact {
  justify-content: center;
  padding: 0.8rem;
}
</style>
