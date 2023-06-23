<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
name: 'my-button'
}
</script>

<style scoped>
.btn{
    display: flex;
    align-items: center;
    width: 250px;
    height: 55px;
    cursor: pointer;
    white-space: nowrap;
    text-align: center;
    justify-content: center;
    font-family: Nunito;
    font-size: 18px;
    background: #FFFFFF;
    border: 1px solid #ABABAB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
}
.btn:hover{
    box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>