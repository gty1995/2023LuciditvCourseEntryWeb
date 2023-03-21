<template>
  <header>
    <div class="wrapper">
      <!-- <HelloWorld msg="福青學堂 課程報名" /> -->
      <nav>
        <div class="company-logo">
          <el-image class="logo" alt="logo" :src="url" fit="cover" />
          <span style="font-weight:600; font-size:22px; letter-spacing:2px; color: #893946;">福青學堂</span>
        </div>
        <div class="menu">
          <RouterLink to="/">首頁</RouterLink>
          <RouterLink to="/select">選擇活動</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <router-view style="background: linear-gradient(15deg, #C15164 0%, #C15164 40%, #fad0c4 100%);" v-slot="{ Component }">
    <transition name="bgAnimation" mode="out-in">
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
  box-shadow: 1px 1px 20px 3px #6a293466;
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

.company-logo {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.bgAnimation-enter-active,
.bgAnimation-leave-active {
  transition: opacity 0.3s;
}

.bgAnimation-enter-from,
.bgAnimation-leave-to {
  opacity: 0;
}

.bgAnimation-enter-to,
.bgAnimation-leave-from {
  opacity: 1;
}
</style>
