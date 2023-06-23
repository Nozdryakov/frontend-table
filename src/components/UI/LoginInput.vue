<template>
    <input class="input">
</template>

<script>
import "@/assets/fonts/nunito.css"
export default {
    name: 'login-input'
}
</script>

<style scoped>
.input {
    width: 660px;
    height: 50px;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    margin-bottom: 30px;
    font-size: 22px;
    font-family: Nunito;
}
@media (max-width: 880px) {
    .input{
        padding: 5px 10px;
        width: 480px;
        height: 40px;
        font-size: 16px;
    }
}
@media (max-width: 640px) {
    .input{
        width: 440px;
        height: 35px;
        font-size: 15px;
    }
}
@media (max-width: 575px) {
    .input{
        padding: 5px 10px;
        width: 310px;
        height: 30px;
        font-size: 14px;
    }
}
</style>