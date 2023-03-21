<template>
    <div id="root-record-view">
        <el-row>
            <el-col>
                <el-card>
                    <template #header>
                        <div>
                            <h1 class="success-title">報名成功</h1>
                        </div>
                    </template>
                    <div class="record-content">姓名： {{ record.name }}</div>
                    <div class="record-content">Email： {{ record.email }}</div>
                    <div class="record-content">電話： {{ record.cellphone }}</div>
                    <div class="record-content">報名日期： {{ record.date }}</div>
                    <el-image class="record-meme" alt="record-meme" :src="url" fit="cover"></el-image>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import { queryEntryFormById } from '../utils/firebase';
import { ref, onMounted } from 'vue';
import { EntryRecord } from '../models';
import { useRoute } from 'vue-router';
const route = useRoute();
let recordId = ref('');
let record = ref(new EntryRecord());
const url = require('@/assets/success.png');
async function getRecord(id: string) {
    record.value = await queryEntryFormById(id)
    console.log(record.value);
};
onMounted(() => {
    recordId.value = route.params.id.toString();
    getRecord(recordId.value);
});
</script>

<style scoped>
#root-record-view {
    max-width: 1280px;
    margin: 0 auto;
    padding: 60px 30px;
}

.success-title {
    color: #893946;
}

.record-content {
    color: #5b5b5b;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
}

.record-meme {
    width: 300px;
    height: 230px;
    margin: 20px 0;
}
</style>