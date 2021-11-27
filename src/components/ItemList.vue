<template>

    <div>
        <div v-for="item in list" :key="item.id">
            <div class="foodCard">
                <td class="foodCard-name">{{item.name}}</td>
                &nbsp;
                <td class="foodCard-price">P{{item.price}}</td>
                &nbsp;
                <div class="img-container">
                    <td><img class="foodCard-image" :src="item.img"/></td>
                </div>
                <div class="foodCard-router">
                    <router-link class="router-text" :to="{
                        path: '/details',
                        params: { pathname: item.id },
                        query: {
                        name: item.name,
                        price: item.price,
                        categ: item.category.join(', '),
                        img: item.img,
                        desc: item.description,
                        qty: item.quantity,
                        id: item.id
                        }
                    }" 
                    @add-clicked="addClicked"
                    >DETAILS</router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default {
    name: 'ItemList',
    props: {
        list: Array,
    },
    computed: {
        headers: function(){
            const item = this.list[0];
            return Object.getOwnPropertyNames(item);
        }
    }
}

</script>