<script setup lang="ts">
const url = require('@/assets/home-page-meme.gif');
</script>

<template>
    <div id="root-home">
        <el-scrollbar class="home-scrollbar">
            <el-image class="home-meme" alt="home-meme" :src="url" fit="cover"></el-image>
        </el-scrollbar>
    </div>
</template>

<style scoped>
#root-home {
    /* height: calc(100vh - 60px); */
}

.home-scrollbar {
    height: calc(100vh - 60px);
}

.home-meme {
    width: 800px;
    height: 460px;
    margin: 60px;
}
</style>
