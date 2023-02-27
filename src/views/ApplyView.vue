<template>
    <div>
        <br/>
        <el-card>
            <template #header>
                <div>
                    <h1>{{activity.title}}</h1>
                    <h3>{{activity.subTitle}}</h3>
                </div>
            </template>
            <div>
                <h3>開始日期：{{activity.startDateTime}}</h3>
                <p>{{activity.description}}</p>
                <br/>
            </div>
        </el-card>
        <br/>
        <el-form
            ref="formRef"
            :rules="rules"
            label-position="top"
            label-width="100px"
            :model="applyData"
        >
            <el-form-item label="姓名" prop="name">
                <el-input v-model="applyData.name" />
            </el-form-item>
            <el-form-item label="信箱" prop="email">
                <el-input v-model="applyData.email" />
            </el-form-item>
            <el-form-item label="電話" prop="email">
                <el-input v-model="applyData.cellphone" />
            </el-form-item>
            <el-form-item>
            <el-button type="primary" @click="submitForm()">
                送出
            </el-button>
            <el-button @click="resetForm()">重填</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { queryAcById,addEntryForm,queryEntryForm } from '../utils/firebase';
    import { Activity } from '../models';
    import { EntryForm } from '../models';
import type { FormInstance } from 'element-plus';


    export default defineComponent({
        data(){
            return {
                loading:true,
                activity:new Activity(),
                applyData: new EntryForm(),
                rules : {
                        name: [
                            { required: true, message: '此欄必填', trigger: 'blur' },
                        ],
                        email: [
                            { required: true, message: '此欄必填', trigger: 'blur' },
                        ],
                        cellphone: [
                            { required: true, message: '此欄必填', trigger: 'blur' },
                        ],
                    }

            }
        },
        async mounted() {
            var acId:string = this.$route.params.id.toString();
            this.applyData.activityId = acId;
            await this.queryData(acId);
            this.loading = false;
        },
        methods: {
            async queryData(acId:string) {
                this.activity = await queryAcById(acId)
            },
            async submitForm() {
                if (!this.$refs.formRef) return
                var formEl:FormInstance = <FormInstance>this.$refs.formRef;
                await formEl.validate((valid, fields) => {
                    if (valid) {
                    console.log('submit!')
                    addEntryForm(this.applyData)

                    } else {
                    console.log('error submit!', fields)
                    }
                })
            },
            async resetForm() {
                if (!this.$refs.formRef) return
                var formEl:FormInstance = <FormInstance>this.$refs.formRef;
                formEl.resetFields()
            }
        },
    })
</script>

<style>
</style>
  