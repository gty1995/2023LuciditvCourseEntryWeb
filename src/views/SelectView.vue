<template>
    <div>
        <el-card v-for="ac in list" class="ac-card">
            <template #header>
                <div>
                    <h1>{{ac.title}}</h1>
                    <h3>{{ac.subTitle}}</h3>
                </div>
            </template>
            <div>
                <h3>開始日期：{{ac.startDateTime}}</h3>
                <p>{{ac.description}}</p>
                <br/>
                <el-button @click="apply(ac)">我要報名</el-button>
            </div>
        </el-card>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import {queryAc} from '../utils/firebase';
    import type { Activity } from '../models';

    export default defineComponent({
        data(){
            return {
                list:<Array<Activity>>[],
                loading:true
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
            apply(activity:Activity) {
                console.log(activity.id)
                this.$router.push({ path: `/apply/${activity.id}` })
                
            }
        },
    })
</script>

<style>
.ac-card {
    width: 80%;
    margin: 30px;
}
</style>
  