<template>
    <div class="container-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'box-menu'
}
</script>

<style scoped>
.container-box{
    margin: 0 40px 15px 175px;
    display: flex;
    flex-direction: column;
}
</style>