<template>
    <div>
        <div class="account__section">
            <div class="content__section">
                <login-title>Введите ваш логин и пароль</login-title>
                <login-form>
                    <login-input placeholder="Логин"></login-input>
                    <login-input placeholder="Пароль" type="password"></login-input>
                    <login-input placeholder="Повторите пароль" type="password"></login-input>
                    <login-button>Зарегистрироваться</login-button>
                    <span>или</span>
                    <button @click="$router.push('/login')">Войти</button>
                </login-form>
            </div>
        </div>
    </div>
</template>

<script>
import LoginButton from "@/components/UI/LoginButton.vue";
import LoginTitle from "@/components/UI/LoginTitle.vue";
import LoginForm from "@/components/UI/LoginForm.vue";
import LoginInput from "@/components/UI/LoginInput.vue";

export default {
    components: {LoginInput, LoginForm, LoginTitle, LoginButton}

}
</script>

<style scoped>
.account__section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #F1FBFF;
}
.content__section{
    position: relative;
    width: 815px;
    height: 600px;
    background-color: #F1FBFF;
    border-radius: 40px;
    box-shadow: 2px 2px 38px rgba(115, 115, 115, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
}
span{
    margin-top: 10px;
    color: #1B1F2C;
    font-size: 16px;
}
button{
    margin-top: 10px;
    padding: 0;
    text-decoration: none;
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-family: Nunito;
    color: #1B1F2C;
}
button:hover{
    text-decoration: underline;
}
@media (max-width: 880px) {
    .content__section {
        width: 615px;
        height: 470px;
    }
}
@media (max-width: 640px) {
    .content__section {
        width: 550px;
        height: 440px;
    }
}
@media (max-width: 575px) {
    .content__section {
        width: 375px;
    }
}
</style>