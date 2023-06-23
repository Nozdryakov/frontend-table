<template>
    <site-container>
        <menu-section>
        </menu-section>
        <box-menu>
            <div class="linee">
                <div class="column one">
                    <div class="title-block">
                        <div class="color-block"></div>
                        <my-suptitle>участок</my-suptitle>
                    </div>
                    <my-button>Учётная Запись</my-button>
                </div>

                <div class="column">
                    <my-input></my-input>
                    <my-button>Структура таблицы</my-button>
                </div>

                <div class="column three">
                    <my-button class="all">Фильтры</my-button>
                    <my-button>Добавить запись</my-button>
                </div>
            </div>
        </box-menu>

        <div class="content">
            <div class="list-items">
                <div class="item">
                    <h2>family</h2>
                    <h2>familydfffffffffffffffffffffff</h2>
                    <h2>family</h2>

                </div>
                <div class="item">
                    <h2>family</h2>
                    <h2>family</h2>
                    <h2>family</h2>

                </div>
                <div class="item">
                    <h2>family</h2>
                    <h2>family</h2>
                    <h2>family</h2>

                </div>
                <div class="item">
                    <h2>aa</h2>
                    <h2>sadasdsaя</h2>
                    <h2>family</h2>

                </div>

            </div>
        </div>
    </site-container>
</template>

<script>


export default {


}
</script>

<style scoped>
h2{
    width: 10%;
    overflow: hidden;

}
.list-items{
    display: flex;
    flex-direction: column;
    max-width: 90%;
}
.item{
    display: flex;
    justify-content: space-between;

}
.content{
    display: flex;
    flex-direction: column;
    margin-top: 300px;
    width: 100%;
}
.linee{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: fixed;
    background-color: #FFFFFF;
    padding: 10px 50px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.05);
    border-radius: 0px 0px 25px 25px;
}
.column{
    display: flex;
    justify-content: flex-end;
    padding: 8px 0px;
    margin-right: 50px;

}
.one{
    flex-direction: row;
}

.three{
    justify-content: flex-end;
}
.title-block{

    box-sizing: border-box;
    transform: translateX(-38%);


}
.color-block{
    width: 530px;
    height: 40px;
    background: #715ECE;
    border-radius: 0px 0px 10px 10px;
    margin-top: -19px;
}

.all{
    margin-right: 50px;
}
</style>