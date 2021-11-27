<template>
    <CartDetails/>
</template>

<script>
import Header from '@/components/Header.vue';
import CartDetails from '@/components/CartDetails.vue';

  export default{
    name: 'Cart',
    components: {
        CartDetails,
    },
    props: {
        cart: Array,
    },
    computed: {
        headers: function(){
            const item = this.list[0];
            return Object.getOwnPropertyNames(item);
        }
    }
  }
</script>