<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { collapsed } from "./state";

export default {
  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
  },
  setup(props) {
    const route = useRoute();
    const isActive = computed(() => route.path === props.to);
    return { isActive, collapsed };
  },
};
</script>

<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon" />
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
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.link {
  display: flex;
  align-items: center;
  margin: 0.4em 0;
  padding: 0.5em;
  border-radius: 0.25em;
  height: 1.5em;
  color: black;
}

.link:hover {
  backdrop-color: var(--sidebar-item-hover);
  background-color: var(--sidebar-item-hover);
}

.link.active {
  backdrop-color: var(--sidebar-item-active);
  background-color: var(--sidebar-item-active);
}
</style>
