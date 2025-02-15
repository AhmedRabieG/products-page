<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const emit = defineEmits(["toggle-favorite", "add-to-cart"]);
const props = defineProps({
  product: {
    type: Object,
    required: true,
    validator: (value) => {
        if (
        typeof value.id !== "number" ||
        typeof value.name !== "string" ||
        typeof value.price !== "number" ||
        typeof value.description !== "string" ||
        typeof value.image !== "string" ||
        typeof value.inStock !== "boolean"
      ) {
        console.error("Invalid product prop:", value);
        return false;
      }
      return true;
    },
  }
});


const cartCount = ref(0);
const isFavorite = ref(false);

const addToCart = () => {
  cartCount.value += 1;
  emit("add-to-cart", "Item added to cart successfully");
};

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
  const message = isFavorite.value
    ? "Item added to favorite list"
    : "Item removed from favorite list";
  emit("toggle-favorite", message);
};

</script>

<template>
    <a href="#" class="group bg-white border border-gray-200 shadow-lg 
    rounded-lg h-full hover:shadow-xl flex flex-col
    hover:border-blue-500 transition-all duration-300">
    
        <div v-if="product.image" class="w-full aspect-[1.2] overflow-hidden rounded-lg">
            <img 
                class="w-full h-full object-cover rounded-lg 
                transition-transform duration-300 group-hover:scale-[1.2]" 
                :src="product.image" 
                alt="Product Image" 
            />
        </div>
        <div v-else class="relative flex items-center justify-center
         bg-[#eee] w-full aspect-[1.2] overflow-hidden rounded-lg">
            <span class="text-lg font-semibold">
                Image is not available right now
        </span> 
        </div>
        <div class="p-3 text-start flex flex-col flex-1">
            <div class="flex items-center gap-2 justify-between mb-2">
                <h3 class="text-lg font-semibold text-gray-900 line-clamp-1">
                  {{ product.name }} 
                </h3>
                <button
                    @click="toggleFavorite"
                    :class="isFavorite ? 'text-red-500' : 'text-gray-500'"
                    class="text-xl"
                >
                    <i class="fa" :class="isFavorite ? 'fa-heart' : 'fa-heart-o'"></i>
                </button>
            </div>
            <p class="text-xl font-bold text-gray-800 mb-2">
                ${{ product.price }}
            </p>
            <p class="text-gray-600 text-sm mb-2 line-clamp-3">
                {{ product.description }}
            </p>
            <div v-if="product.inStock" class="flex items-center justify-between mt-auto">
                <button 
                    type="button"
                    @click="addToCart"
                    class="bg-blue-500 text-white px-4 py-2 rounded-md 
                    hover:bg-blue-600 transition duration-200"
                >
                    Add to Cart
                </button>
                <span class="text-lg px-6 font-medium">{{ cartCount }}</span>
            </div> 
            <div v-else class="text-red-500 py-2 text-sm mt-auto flex items-center">
                ❌ Out of Stock
            </div>
        </div>
    </a>
    
</template>
  
<style scoped>

</style>
  