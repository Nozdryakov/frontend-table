<template>
    <div class="load-page">
        <div class="content_lp">
            <div class="logo">
                <base-icon name="logo" class="size__logo"/>
                <div class="text__main">
                    <p class="title">База данных</p>
                    <p class="suptitle">Предприятие</p>
                </div>
            </div>

            <div class="wrapper">
                <div class="loader">
                    <div class="inner one"></div>
                    <div class="inner two"></div>
                    <div class="inner three"></div>
                </div>
                <div class="download">Загрузка...</div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseIcon from "@/components/BaseIcon.vue"
import "@/assets/fonts/nunito.css"

export default {
    components: {BaseIcon}

}
</script>

<style scoped>
.load-page{
    height: 100vh;
    background-color: #F1FBFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Nunito;
}
.content_lp{
    display: flex;
    flex-direction: column;
}
.logo{
    display: flex;
}
.size__logo{
    width: 235px;
    height: 215px;
}
.text__main{
    margin-left: 115px;
    color: #826262;
}
.title{
    font-size: 72px;
}
.suptitle{
    margin-left: 215px;
    margin-top: 75px;
    font-size: 48px;
}
.wrapper{
    display: flex;
    flex-direction: column;
}

.loader {
    position: absolute;
    top: calc(50% - 32px);
    left: calc(50% - 32px);
    width: 64px;
    height: 64px;
    border-radius: 50%;
    perspective: 800px;
    margin: 90px auto;
}

.inner {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.inner.one {
    left: 0%;
    top: 0%;
    animation: rotate-one 1s linear infinite;
    border-bottom: 3px solid #826262;
}
.inner.two {
    right: 0%;
    top: 0%;
    animation: rotate-two 1s linear infinite;
    border-right: 3px solid #826262;
}
.inner.three {
    right: 0%;
    bottom: 0%;
    animation: rotate-three 1s linear infinite;
    border-top: 3px solid #826262;
}
.download{
    margin-top:100px;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    color: #826262;
}
@keyframes rotate-one {
    0% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
}
@keyframes rotate-two {
    0% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
}
@keyframes rotate-three {
    0% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
}
@media (max-width: 880px) {
    .logo{
        padding: 0 20px;
    }
    .size__logo{
        width: 110px;
        height: 100px;
    }
    .text__main{
        margin-left: 50px;
    }
    .title{
        font-size: 48px;
    }
    .suptitle{
        margin-left: 115px;
        margin-top: 55px;
        font-size: 32px;
    }
    .loader{
        margin:70px auto;
    }
    .download{
        margin-top:100px;
        font-size: 22px;
        font-weight: 700;
    }
}
@media (max-width: 510px) {
    .logo{
        padding: 0 10px;
    }
    .size__logo{
        width: 80px;
        height: 75px;
    }
    .text__main{
        margin-left: 30px;
    }
    .title{
        font-size: 32px;
    }
    .suptitle{
        margin-left: 59px;
        margin-top: 30px;
        font-size: 24px;
    }
    .download{
        margin-top:150px;
        font-size: 16px;
        font-weight: 700;
    }
}
</style>