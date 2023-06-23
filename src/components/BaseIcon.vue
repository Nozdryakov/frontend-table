<template>
    <svg :class="$attrs.class || 'size__icon'" viewBox="0 0 234 218" fill="none" xmlns="http://www.w3.org/2000/svg" v-html="path">

    </svg>
</template>

<script>
import icons from './UI/icons'
export default {
    props:['name'],

    data() {
        return {
            path: icons[this.name]
        }
    },
}
</script>

<style scoped>
.size__icon{
    height: 30px;
    width: 30px;
}
</style>