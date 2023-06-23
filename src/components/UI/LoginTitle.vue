<template>
  <span class="title">
  <slot></slot>
  </span>
</template>

<script>
export default {
    name: 'login-title'
}
</script>

<style scoped>
.title{
    margin: 50px 0px 55px 0px;
    font-size: 27px;
}
@media (max-width: 880px) {
    .title{
        font-size: 22px;
        margin: 30px 0px 35px 0px;
    }
}
</style>