<script>
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/Footer.vue";
import { sidebarWidth } from "@/components/sidebar/state";
import FooterScreen from "@/components/Footer.vue";
export default {
  components: { FooterScreen, Sidebar },
  setup() {
    return { sidebarWidth, Footer };
  },
};
</script>
<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
  <FooterScreen />
  <div :style="{ 'margin-bottom': Footer }"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
