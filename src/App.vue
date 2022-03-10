<template>
    <div class="home-page">
        <div class="header">
            <div class="page-title">上传算法功能</div>
        </div>
        <div class="content">
            <uploader></uploader>
        </div>
    </div>
</template>
<script>
import uploader from './pages/uploader/Uploader.vue'
export default {
    name: 'App',
    components: {
        uploader
    }
}
</script>
<style lang="less">
.home-page {
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
        height: 88px;
        width: 100%;
        padding: 10px 20px;
        box-shadow: 0 2px 4px #a4adc3;
        .page-title {
            font-size: 16px;
            color: #fff;
            line-height: 68px;
        }
    }
}
</style>