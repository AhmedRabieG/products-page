<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";

import headImage from "../assets/images/head-1.webp";
import smartImage from "../assets/images/smart.webp";
import laptopImage from "../assets/images/laptop.jpg";
import tabletImage from "../assets/images/tablet.avif";
import cameraImage from "../assets/images/cam3.jpg";
import cameraImage2 from "../assets/images/cam1.jpg";
import cameraImage1 from "../assets/images/cam2.jpg";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    description: "High-quality wireless headphones with noise cancellation",
    image: headImage,
    inStock: true,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 499.99,
    description: "Latest smartphone with advanced features",
    inStock: true,
  },
  {
    id: 3,
    name: "Laptop",
    price: 799.99,
    description: "Powerful laptop for work and play",
    image: laptopImage,
    inStock: true,
  },
  {
    id: 4,
    name: "Tablet",
    price: 299.99,
    description: "Portable tablet for entertainment",
    image: tabletImage,
    inStock: false,
  },
  {
    id: 5,
    name: "Camera",
    price: 699.99,
    description: "High-quality digital camera for capturing moments",
    image: cameraImage,
    inStock: true,
  },
  {
    id: 6,
    name: "Camera",
    price: 399.99,
    description: "High-quality digital camera for capturing moments",
    image: cameraImage2,
    inStock: true,
  },
  {
    id: 7,
    name: "Camera",
    price: 599.99,
    description: "High-quality digital camera for capturing moments",
    image: cameraImage1,
    inStock: false,
  },
];

const message = ref("");
const loading = ref(true);

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
    loading.value = false;
  }, 2000);
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
