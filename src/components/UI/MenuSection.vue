<template>
    <div class="main">
    <section class="menu">
            <p>Таблицы:</p>
        <router-link
            v-for="link in links"
            :key="link.id"
            :to="link.path"
            :class="{ active: $route.path === link.path }"
            class="menu-link"
        >
            {{ link.label }}
        </router-link>
    </section>
    </div>
</template>

<script>
export default {
    name: 'menu-section',
    data() {
        return {
            links: [
                { id: 1, label: 'Цех', path: '/department' },
                { id: 2, label: 'Участок', path: '/area' },
                { id: 3, label: 'Начальник цеха', path: '/registration' },
                { id: 9, label: 'Начальник участка', path: '/registration' },
                { id: 4, label: 'Бригада', path: '/registration' },
                { id: 5, label: 'Брига_участки', path: '/registration' },
                { id: 6, label: 'Тип изделия', path: '/registration' },
                { id: 7, label: 'Изделие', path: '/registration' },
                { id: 8, label: 'Продукт', path: '/registration' },
            ],
        };
    },
};
</script>

<style>
.main{

    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 290px;

}
.menu{
    display: flex;
    background-color: #F1FBFF;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    /*max-width: 100%;*/
    /*max-height: 100%;*/
    padding: 80px 10px;




}
.menu-link{
    white-space: nowrap;
    color: #000000;
    background: #FFFFFF;
    text-align: center;
    text-decoration: none;
    margin-top: 35px;
    border: 1px solid #D4D4D4;
    border-radius: 1px;
    padding: 8px 50px;
    display: inline-block;
    box-shadow: inset 0 0 0 0 #7E69E5;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    width: 45%;
}
.menu-link:hover {
    box-shadow: inset 400px 0 0 0 #7E69E5;
    color: #F1FBFF;
}
.active {
    background: #7E69E5;
    font-weight: bold;
    color: #F1FBFF;
}
</style>
