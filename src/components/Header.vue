<template>
    <div class="head">
        <center>
        <h1>Food Market</h1>
        <br>
            <div class="routers">
                <router-link class="router-text" to="/">Menu</router-link>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <router-link class="router-text" to="/cart">Cart</router-link>
            </div>
        </center>
    </div>
</template>

<script>
export default{
    name: 'Header',
    props: {
        
    }
}
</script>