<template>
    <div class="up-loader-page">
        <div class="top-button-bar">
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :show-file-list=false
                :on-progress="handleProgress"
                :on-remove="handleRemove"
                :before-upload="handleBeforeUpload"
                :on-success="handleSuccess"
                :file-list="fileList">

                <el-button type="info" :radius="true">上传算法</el-button>
            </el-upload>
            
            <el-checkbox v-model="checked">备选项</el-checkbox>
        </div>
        <el-button type="primary"><i class="h-icon-add"></i>aaa</el-button>
        <el-dialog title="提示" :visible.sync="waittingUploadFlag" size="small">
            你好啊
            <!-- <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
            </span> -->
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'Uploader',
    data () {
        return {
            fileList: [],
            isUploading: false,
            waittingUploadFlag: false,
            checked: true
        }
    },
    methods: {
        handlePreview (e) {
            console.log(e)
        },
        handleRemove (index) {
            console.log(index)
        },
        handleProgress (e, file, filelist) {
            // console.log('handleProgress', this)
             console.log('handleProgress')
            let arr = [1, 2, 3]
            let res = arr.filter(it => it > 1)
            this.pTest().then(res => console.log(res))
            console.log(res)
        },
        handleBeforeUpload (file) {
            console.log(file, this.isUploading)
            // this.waittingUploadFlag = true
        },
        handleSuccess (e) {
            // console.log(file, this.isUploading)
            console.log('handleSuccess')
            let arr = [1, 2, 3]
            let res = arr.filter(it => it > 1)
        },
        pTest () {
            return new Promise((resolve, reject) => {
                resolve(2)
            })
        }
    }
}
</script>
<style lang="less">
.up-loader-page {
    .top-button-bar{
        padding: 10px 20px;
        box-shadow: 0 2px 4px #a4adc3;
        display: flex;
        flex-direction: row;
        align-items: center;
        box-sizing: border-box;
    }
}
</style>