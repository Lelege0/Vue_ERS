<template>
    <div>
        <!--面包屑导航区域-->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/content_setting' }">设置内容</el-breadcrumb-item>
            <el-breadcrumb-item>健康信息</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>
            <div style="width: 500px; text-align: center;margin-bottom: 10px;font-size: 25px">健康信息</div>
            <el-form ref="ruleForm" label-width="80px">
                <el-form-item label="姓名" :required="true">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="性别">
                   <!-- <el-input></el-input>-->
                    <el-select v-model="value">
                        <el-option v-for="item in options"
                                   :key="item.value"
                                   :label="item.label"
                                   :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否健康" required>
                    <el-select v-model="value1">
                        <el-option v-for="item1 in isHealth"
                                    :key="item1.value"
                                    :label="item1.label"
                                    :value="item1.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否发热" required>
                    <el-select v-model="value2">
                        <el-option v-for="item2 in isHot"
                                   :key="item2.value"
                                   :label="item2.label"
                                   :value="item2.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="体温" required>
                    <el-input type="number"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input>
                    </el-input>
                </el-form-item>
                <el-button type="primary" size="default" style="margin-left: 380px; width: 150px">发布</el-button>
            </el-form>
            <div style="font-size: 14px; color: red">注：*为必填项</div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                options:[{
                    value: '1',
                    label: '男'
                }, {
                    value: '2',
                    label: '女'
                }],
                value: '',
                value1: '',
                value2: '',
                isHealth:[{
                        value: '1',
                        label: '是'
                    }, {
                        value: '2',
                        label: '否'
                    }
                ],
                isHot:[{
                    value: '1',
                    label: '是'
                }, {
                    value: '2',
                    label: '否'
                }
                ]
            }
        }
    }
</script>

<style scoped>
    .el-input{
        width: 450px;
    }
</style>
