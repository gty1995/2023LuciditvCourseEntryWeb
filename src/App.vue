<template>
  <header>
    <div class="wrapper">
      <!-- <HelloWorld msg="福青學堂 課程報名" /> -->
      <nav>
        <el-image class="logo" alt="logo" :src="url" fit="fit" />
        <!-- <span style="font-weight:600; font-size:22px; letter-spacing:2px;">福青學堂</span> -->
        <div class="menu">
          <RouterLink to="/">首頁</RouterLink>
          <RouterLink to="/select">選擇活動</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <router-view v-slot="{ Component }">
    <transition name="bgAnimation">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<script lang="ts" setup>
const url = require('@/assets/logo.png');
</script>

<style>
html {
  overflow: -moz-hidden-unscrollable;
  height: 100%;
}

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  height: 100%;
  overflow: auto;
  margin: 0%;
  background-image: linear-gradient(15deg, #C15164 0%, #C15164 40%, #fad0c4 100%);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px 80px 10px 50px;
  box-shadow: 3px 3px 5px 6px #6a293466;
  position: sticky;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: white;
}

nav a {
  font-weight: bold;
  color: #DF8186;
  text-decoration: none;
  margin: 0 20px;
}

nav a.router-link-exact-active {
  color: #a44151;
}

.logo {
  height: 40px;
  width: 40px;
}

.bgAnimation-enter-active,
.bgAnimation-leave-active {
  transition: opacity 0.2s;
}

.bgAnimation-enter-from,
.bgAnimation-leave-to {
  opacity: 0;
}
</style>
