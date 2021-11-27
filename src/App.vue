<template>
  <Header/>
  <router-view/>
</template>


<script>
  import Header from '@/components/Header.vue';

  export default{
    name: 'Home',
    components: {
      Header,
    },
  }
</script>

<style>

* {
 margin: 0;
 padding: 0;
}

#app {
  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  background-color: #e6e6e6;
  font-family: Georgia, serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.head {
   background-color: #ed802d;
   padding: 25px;
   margin-bottom: 30px;
}

.search {
  padding: 30px;
  width: 240px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: left;
}

.searchinput {
  height: 40px;
  font-size: 17px;
  border-radius: 10px;
  border: none;
}

.foodCard {
  background-color: white;
  box-shadow: 3px 3px 5px #595959;
  margin-bottom: 20px;
  width: 280px;
  float: left;
  padding: 20px;
  margin-left: 30px;
  border-radius: 20px;
  padding: 0px;
}

.foodCard-name {

  padding-left: 30px;
  padding-top: 30px;
  font-weight: bold;
  font-size: 21px;
}

.foodCard-price {
  padding-left: 30px;
  font-size: 17px;
  font-style: italic;
}

.img-container {
  padding: 0px;
  height: 190px;
}

.foodCard-image {
  width: 280px;
  height: 190px;
  margin-left: 0px;
}

.foodCard-router {
  margin-top: 0px;
  padding: 5px;
  background-color: #ed802d;
  border-radius: 0px 0px 20px 20px;
}

.router-text {
  text-decoration: none;
  color: black;
}

.routers {
  padding: 10px;
  background-color: #e6e6e6;
  width: 145px;
  height: 20px;
  border-radius: 10px;
}

.details-card {
  width: 650px;
  padding: 50px;
  background-color: white;
  text-align: left;
  border-radius: 20px;
}

.details-card-img {
  width: 650px;
  height: 500px;
}

.details-card-price {
  padding-top: 20px;
  font-size: 23px;
}

.add-to-cart-btn {
  width: 100px;
  background-color: #ed802d;
  height: 20px;
  border-radius: 10px;
  border: none;
  text-align: center;
}

.add-to-cart {
  color: white;
  font-style: italic;
  padding-top: 5px;
  text-decoration: none;
}

.quantity {
  padding: 10px;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  font-weight: bold;
  text-align: left;
  border: none;
  background-color: #e6e6e6;
}

.cart-container {
  margin-top: 20px;
  background-color: white;
  width: 980px;
  border-radius: 20px;
  box-shadow: 3px 3px 5px #595959;
}

.cart-columns {
  padding: 20px 10px 0px 100px;
}

.col1 {
  padding-top: 30px;
  padding-right: 280px;
  padding-bottom: 60px;
}

.col2 {
  padding-top: 30px;
  padding-right: 280px;
  padding-bottom: 60px;
}

.col3 {
  padding-top: 30px;
  padding-right: 100px;
  padding-bottom: 60px;
}

.remove-item-btn-container {
  padding-top: 30px;
}

.remove-item-btn {
  border: none;
  background-color: #ff1900;
  width: 20px;
  height: 20px;
  opacity: 80%;
  font-weight: bold;
  border-radius: 4px;
  color: white;
}

.cart-totalprice {
  padding-bottom: 10px;
}

.checkout-btn {
  width: 980px;
  background-color: #ed802d;
  height: 25px;
  border-radius: 0 0 20px 20px;
  border: none;
  font-size: 18px;
}

.checkout {
  color: white;
  font-style: italic;
  text-decoration: none;
}

.coupon-code-container {
  margin-right: 600px;
}

.coupon-code {
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #e1e3e8;
  padding: 3px;
}

.payment-container {
  margin-right: 600px;
}

.payment {
  height: 30px;
  border-radius: 10px;
  border: none;
  background-color: #e1e3e8;
  padding: 3px;
}
</style>
