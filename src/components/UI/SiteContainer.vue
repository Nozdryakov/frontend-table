<template>
    <div class="container">
      <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'site-container'
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: space-between;



}
</style>