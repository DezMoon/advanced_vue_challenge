<template>
  <div class="max-w-7xl mx-auto px-4 py-12">
    <header class="mb-12 text-center md:text-left pt-20">
      <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
        Welcome to all our recipes
      </h1>
      <p class="text-gray-500 text-lg">
        Explore our collection of kitchen-tested favorites.
      </p>
    </header>
    <RouterLink to="/AddRecipe">
      <button
        class="mb-5 Stext-green-700 px-8 py-3 rounded-md font-bold hover:bg-green-50 shadow-lg"
      >
        Add Recipe
      </button>
    </RouterLink>

    <section
      class="mb-10 flex flex-col md:flex-row gap-4 justify-between items-center bg-green-50 p-6 rounded-2xl border border-green-100"
    >
      <div class="relative w-full md:w-96">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for a recipe..."
          class="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none transition-all shadow-sm"
        />
      </div>

      <div class="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-5 py-2 rounded-full font-bold text-sm transition-all whitespace-nowrap',
            selectedCategory === cat
              ? 'bg-green-700 text-white shadow-md'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-green-500',
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </section>

    <div
      v-if="filteredRecipes.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      <RouterLink
        v-for="recipe in filteredRecipes"
        :key="recipe.id"
        :to="`/SingleRecipe/${recipe.id}`"
        class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col hover:shadow-md transition-shadow cursor-pointer group"
      >
        <img
          :src="recipe.image"
          :alt="recipe.title"
          class="h-48 w-full object-cover bg-gray-200 group-hover:scale-105 transition-transform duration-500"
        />

        <div class="p-4 grow flex flex-col">
          <div class="flex justify-between items-start mb-1">
            <h3
              class="font-bold text-lg text-gray-800 uppercase leading-tight group-hover:text-green-700 transition-colors"
            >
              {{ recipe.title }}
            </h3>
            <span
              class="shrink-0 text-[10px] bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-bold uppercase ml-2"
            >
              {{ recipe.category }}
            </span>
          </div>

          <p class="text-gray-600 text-sm line-clamp-2 italic">
            "{{ recipe.description }}"
          </p>

          <div
            class="mt-auto pt-4 flex items-center gap-3 text-xs text-gray-400 font-semibold"
          >
            <span>⏱️ {{ recipe.prepTime + recipe.cookTime }} mins</span>
            <span>🔥 {{ recipe.difficulty }}</span>
          </div>
        </div>
      </RouterLink>
    </div>

    <div
      v-else
      class="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200"
    >
      <p class="text-gray-500 text-lg">
        No recipes found matching your criteria. 🔍
      </p>
      <button
        @click="
          searchQuery = '';
          selectedCategory = 'All';
        "
        class="mt-4 text-green-700 font-bold underline"
      >
        Clear all filters
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRecipes } from "../composables/UseRecipes";
import { useFilter } from "../composables/useFilter";

const { recipes } = useRecipes();

// Pass the recipes list into our filter logic
const { searchQuery, selectedCategory, filteredRecipes } = useFilter(recipes);

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Snack"];
</script>
