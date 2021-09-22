<template>
    <div class="home-page">
        <div class="header">
            <div class="page-title">上传算法功能</div>
        </div>
        <div class="content">
            <Uploader></Uploader>
        </div>
    </div>
</template>
<script>
import Uploader from './pages/uploader/Uploader.vue'
export default {
    name: 'App',
    components: {
        Uploader
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
        // background: rgb(49, 121, 254);
        padding: 10px 20px;
        box-shadow: 0 2px 4px #a4adc3;
        .page-title {
            font-size: 16px;
            color: #fff;
            line-height: 68px;
        }
    }
    .content {
        // padding: 0 20px;
    }
}
</style>