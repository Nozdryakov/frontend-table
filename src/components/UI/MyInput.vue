<template>
    <input type="text" class="input" placeholder="Поиск...">
</template>

<script>
export default {
    name: 'my-input'
}
</script>

<style scoped>
.input{
    width: 860px;
    height: 40px;
    font-size: 20px;
    font-family: Nunito;
    margin-right: 50px;
    background: #FFFFFF;
    border: 1px solid #ABABAB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    outline: none;
    padding: 5px 15px;
}
</style>