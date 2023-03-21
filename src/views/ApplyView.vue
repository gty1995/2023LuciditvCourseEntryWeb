<template>
    <div id="root-apply-view">
        <el-row style="max-width: 1280px; margin: 0 auto;" :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="card">
                    <template #header>
                        <div>
                            <h1>{{ activity.title }}</h1>
                            <h3>{{ activity.subTitle }}</h3>
                        </div>
                    </template>
                    <div>
                        <h3>開始日期：{{ activity.startDateTime }}</h3>
                        <p>{{ activity.description }}</p>
                        <br />
                    </div>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="card">
                    <el-form ref="formRef" :rules="rules" label-position="top" label-width="100px" :model="applyData">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="applyData.name" />
                        </el-form-item>
                        <el-form-item label="信箱" prop="email">
                            <el-input v-model="applyData.email" />
                        </el-form-item>
                        <el-form-item label="電話" prop="cellphone">
                            <el-input v-model="applyData.cellphone" />
                        </el-form-item>
                        <el-form-item>
                            <el-button size="large" color="#C15164" type="primary" @click="submitForm()">
                                送出
                            </el-button>
                            <el-button size="large" color="gray" plain @click="resetForm()">重填</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { queryAcById, addEntryForm, queryEntryForm } from '../utils/firebase';
import { Activity } from '../models';
import { EntryForm } from '../models';
import type { FormInstance } from 'element-plus';


export default defineComponent({
    data() {
        return {
            loading: true,
            activity: new Activity(),
            applyData: new EntryForm(),
            rules: {
                name: [
                    { required: true, message: '請填寫姓名', trigger: 'blur' },
                ],
                email: [
                    { required: true, message: '請填寫信箱', trigger: 'blur' },
                ],
                cellphone: [
                    { required: true, message: '請填寫電話', trigger: 'blur' },
                ],
            }

        }
    },
    async mounted() {
        var acId: string = this.$route.params.id.toString();
        this.applyData.activityId = acId;
        await this.queryData(acId);
        this.loading = false;
    },
    methods: {
        async queryData(acId: string) {
            this.activity = await queryAcById(acId)
        },
        async submitForm() {
            if (!this.$refs.formRef) return
            var formEl: FormInstance = <FormInstance>this.$refs.formRef;
            await formEl.validate(async (valid, fields) => {
                if (valid) {
                    console.log('submit!')
                    const recordId = await addEntryForm(this.applyData)
                    console.log('sumit record: ', recordId);
                    this.$router.push({ path: `/result/${recordId}` })
                } else {
                    console.log('error submit!', fields)
                }
            })
        },
        async resetForm() {
            if (!this.$refs.formRef) return
            var formEl: FormInstance = <FormInstance>this.$refs.formRef;
            formEl.resetFields()
        }
    },
})
</script>

<style>
#root-apply-view {
    padding: 60px 30px;
}

.card {}
</style>
  