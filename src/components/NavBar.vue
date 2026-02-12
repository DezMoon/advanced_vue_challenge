<template>
  <nav
    class="fixed bg-white shadow-md px-6 py-4 flex items-center justify-between flex-wrap w-full z-10"
  >
    <div class="flex items-center gap-2">
      <img src="/src/assets/logo1.png" alt="Logo" class="h-8 w-8" />
      <span class="text-xl font-bold text-green-700">Recipe Vault</span>
    </div>

    <button
      @click="isMenuOpen = !isMenuOpen"
      class="md:hidden text-green-700 focus:outline-none"
    >
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <ul
      :class="isMenuOpen ? 'flex' : 'hidden'"
      class="md:flex flex-col md:flex-row w-full md:w-auto mt-4 md:mt-0 gap-5 text-sm text-gray-700 font-medium items-center"
    >
      <RouterLink to="/" class="hover:text-green-700">Home</RouterLink>
      <span class="hidden md:inline text-gray-300">|</span>
      <RouterLink to="/Recipes" class="hover:text-green-700"
        >Recipes</RouterLink
      >
      <span class="hidden md:inline text-gray-300">|</span>
      <RouterLink to="/MealPlans" class="hover:text-green-700"
        >MealPlans</RouterLink
      >
      <span class="hidden md:inline text-gray-300">|</span>
      <RouterLink to="/ShoppingList" class="hover:text-green-700"
        >ShoppingList</RouterLink
      >
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>
