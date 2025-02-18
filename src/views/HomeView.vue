<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";

const message = ref("");
const loading = ref(true);
const products = ref([]);
const error = ref(null);

const fetchProducts = async () => {
  loading.value = true;
  try {
    const response = await axios.get("http://localhost:5000/products");
    products.value = response.data;
    // console.log(products.value);
  } catch (err) {
    error.value = "Failed to load products";
  } finally {
    loading.value = false;
  }
};
const handleFavoriteToggle = (msg) => {
  message.value = msg;
  setTimeout(() => {
    message.value = "";
  }, 3000);
};
const cartMessage = ref("");
const handleAddToCart = (msg) => {
  cartMessage.value = msg;
  setTimeout(() => {
    cartMessage.value = "";
  }, 3000);
};
onMounted(() => {
  setTimeout(() => {
    fetchProducts();
  }, 1000);
});
</script>

<template>
  <div class="container">
    <div class="bg-[#f5f5f5] p-6 rounded-lg text-center mb-8">
      <h1 class="mb-4 text-2xl font-bold">Products</h1>
      <transition name="fade">
        <div
          v-if="message"
          class="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded"
        >
          {{ message }}
        </div>
      </transition>
      <transition name="fade">
        <div
          v-if="cartMessage"
          class="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          {{ cartMessage }}
        </div>
      </transition>
      <div v-if="loading" class="flex justify-center items-center my-4">
        <svg
          class="animate-spin h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4V2m0 20v-2m8-10h2m-20 0H2m16.243 4.243l1.414 1.414M5.343 5.343l1.414 1.414m0 8l1.414 1.414m8-8l1.414 1.414"
          />
        </svg>
      </div>
      <div v-else class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <ProductCard
          v-for="product in products"
          :key="product.id"
          :product="product"
          @toggle-favorite="handleFavoriteToggle"
          @add-to-cart="handleAddToCart"
        />
      </div>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  z-index: 999;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
