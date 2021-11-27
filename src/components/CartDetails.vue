<template>
    <center>
        <div>
            <h1 class="cart-header">Cart</h1>
        </div>
        <br>
        <div class="cart-container">
            <table class="cart-columns">
                <tr>
                    <th class="col1">Item</th>
                    <th class="col2">Qty</th>
                    <th class="col3">Price</th>
                    <div class="remove-item-btn-container">
                        <button class="remove-item-btn">X</button>
                    </div>
                </tr>
                <tr>
                    <th class="col1">Item1</th>
                    <th class="col2">Qty1</th>
                    <th class="col3">Price1</th>
                    <div class="remove-item-btn-container">
                        <button class="remove-item-btn">X</button>
                    </div>
                </tr>
                <tr>
                    <th class="col1">Item2</th>
                    <th class="col2">Qty2</th>
                    <th class="col3">Price2</th>
                    <div class="remove-item-btn-container">
                        <button class="remove-item-btn">X</button>
                    </div>
                </tr>
            </table>
            <hr>
            <br>
            <h2 class="cart-totalprice">Total: P0.00</h2>
            <div class="coupon-code-container">
                <input class="coupon-code" type="text" placeholder="Enter coupon code"/>
            </div>
            <br>
            <div class="payment-container">
                <input class="payment" type="text" placeholder="Enter payment"/>
            </div>
            <br>
            <div class="checkout-btn">
                <router-link class="checkout" to="/success">CHECKOUT</router-link>
            </div>
        </div>
    </center>
</template>

<script>
  import Header from '@/components/Header.vue';

  export default{
    name: 'Details',
    components: {
      Header,
    },
  }
</script>
