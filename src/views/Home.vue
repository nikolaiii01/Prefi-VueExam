<template>
  <div class="home">
    <ItemList :list="food"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ItemList from '@/components/ItemList.vue';

export default {
  name: 'Home',
  components: {
    ItemList,
  },
  data(){
      return{
        food: [
          {
          id: 1, 
          name: "Bacon",
          price: 250,
          quantity: 32, 
          category: ["Meat"],
          img:'https://healthyrecipesblogs.com/wp-content/uploads/2018/01/oven-bacon-featured.jpg',
          description:"Salt-cured pork made from various cuts. From your local farm.",
          },
          {
          id: 2, 
          name: "Fish",
          price: 150,
          quantity: 8, 
          category: ["Seafood","Fresh"],
          img:'https://cdn-prod.medicalnewstoday.com/content/images/articles/322/322522/fresh-fish-on-ice.jpg',
          description:"Tuna fish, freshly caught from the depths of the pacific ocean.",
          },
          {
          id: 3, 
          name: "Chicken", 
          price:200, 
          quantity:9,  
          category: ["Poultry","Fresh"], 
          img:'https://www.seriouseats.com/thmb/t82X6N4ZwGkFZmWPuCjwT-osL3g=/1500x844/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg',
          description:"Large meaty chicken drumsticks. Fresh from your local farm.",
          },
          {
          id: 4, 
          name: "Beef",
          price: 300,
          quantity: 0, 
          category: ["Meat"],
          img:'https://post.healthline.com/wp-content/uploads/2020/08/beef-update-1200x628-facebook-1200x628.jpg',
          description:"Fresh Beef Ribs, from the local farm.",
          },
          {
          id: 5, 
          name: "Soy Sauce",
          price:50,
          quantity:42, 
          category: ["Sauce","Seasoning"],
          img:'https://www.tasteofhome.com/wp-content/uploads/2020/01/GettyImages-461879075.jpg?fit=700,1024',
          description:"Salty liquid, good for seasoning your dishes. Produced by fermenting soybeans and wheat",
          },
          {
          id: 9, 
          name: "Egg",
          price: 10,
          quantity: 22, 
          category: ["Dairy"],
          img:'https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg',
          description:"Large eggs, freshly picked from your local chicken farm",
          },
          {
          id: 11, 
          name: "Pork",
          price: 200,
          quantity: 4, 
          category: ["Meat"],
          img:'https://www.seriouseats.com/thmb/yHg0KQZc928Iqbm8G-aOE91gJb0=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__02__20160208-sous-vide-pork-chop-guide-food-lab-37-9bfa2f9b8a464bccad99ea08423b9d8e.jpg',
          description:"Meaty and juicy pork loin. From your local farm",
          },
        ],
        query: '',
      }
    },
}
</script>
