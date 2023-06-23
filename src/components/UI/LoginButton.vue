<template>
    <div>
    <button class="btn">
        <slot></slot>
    </button>
    </div>
</template>

<script>
export default {
    name: 'login-button'
}
</script>

<style scoped>
.btn {
    width: 250px;
    height: 70px;
    padding: 10px 15px;
    background: #F9FFE8;
    border: 1px solid #ABABAB;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    font-family: Nunito;
    font-size: 22px;
    font-weight: 500;
    border-radius: 10px;
    cursor: pointer;
}
.btn:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
@media (max-width: 880px) {
    .btn{
        width: 210px;
        height: 50px;
        font-size: 18px;
    }
}
@media (max-width: 640px) {
    .btn{
        width: 190px;
        height: 45px;
        font-size: 16px;
    }
}

</style>