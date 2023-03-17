<template>
    <div id="root-select">
        <el-scrollbar class="select-scrollbar">
            <div style="max-width: 1280px; margin: 0 auto;">
                <el-row :gutter="20" style="margin-top: 60px;">
                    <el-col :xs="24" :sm="24" :md="12" :lg="12" v-for="ac in list">
                        <el-card class="ac-card">
                            <template #header>
                                <div>
                                    <h1 class="card-title">{{ ac.title }}</h1>
                                    <h3 class="card-subTitle">{{ ac.subTitle }}</h3>
                                </div>
                            </template>
                            <div>
                                <h3 class="card-startDateTime">開始日期：{{ ac.startDateTime }}</h3>
                                <p>{{ ac.description }}</p>
                                <br />
                                <el-button color="#C15164" size="large" @click="apply(ac)">我要報名</el-button>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-scrollbar>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { queryAc } from '../utils/firebase';
import type { Activity } from '../models';

export default defineComponent({
    data() {
        return {
            list: <Array<Activity>>[],
            loading: true
        }
    },
    async mounted() {
        await this.queryData();
        this.loading = false;
    },
    methods: {
        async queryData() {
            this.list = await queryAc();
        },
        apply(activity: Activity) {
            console.log(activity.id)
            this.$router.push({ path: `/apply/${activity.id}` })

        }
    },
})
</script>

<style>
#root-select {
    /* max-width: 1280px; */
}

.select-scrollbar {
    height: calc(100vh - 60px);
}

.ac-card {
    margin: 30px;
    background: #fcfcf9;
}
</style>
  