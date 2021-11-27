<template>
    <center>
        <div class="details-card">
            <h2>{{ $route.query.name }} ({{$route.query.categ}})</h2>
            <br>
            <img class="details-card-img" :src='$route.query.img'/>
            <br>
            <h3 class="details-card-price">P{{ $route.query.price }}</h3>
            <br>
            <input class="quantity" type="number" min="0" :max="$route.query.qty" placeholder="0"/>
            &nbsp;
            <div class="add-to-cart-btn">
                <router-link class="add-to-cart" to="/cart">Add To Cart</router-link>
            </div>
            <br>
            <h5>{{ $route.query.desc }}</h5>

        </div>
    </center>
</template>

<script>

  export default{
    name: 'DetailsCard',
    data(){
        return{

            item: Array,
        }
    },
  }
</script>
