<template>
  <div v-if="recipe" class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 pt-24">
    <div
      class="max-w-4xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden border border-gray-100"
    >
      <div class="relative h-100">
        <img
          :src="
            recipe.image ||
            'https://images.unsplash.com/photo-1495195129352-aed325a55b65?q=80&w=1200'
          "
          :alt="recipe.title"
          class="w-full h-full object-cover"
        />
        <button
          @click="goBack"
          class="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-green-700 font-bold shadow-lg hover:bg-white transition-all flex items-center gap-2"
        >
          <span>←</span> Back to Vault
        </button>
      </div>

      <div class="p-8 md:p-14">
        <div
          class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8"
        >
          <div>
            <div class="flex items-center gap-3 mb-2">
              <span
                class="bg-green-100 text-green-800 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest"
              >
                {{ recipe.category }}
              </span>
              <span class="text-gray-300">|</span>
              <span class="text-gray-500 font-bold text-sm">{{
                recipe.difficulty
              }}</span>
            </div>
            <h1
              class="text-4xl md:text-5xl font-black text-gray-900 leading-tight"
            >
              {{ recipe.title }}
            </h1>
          </div>
        </div>

        <p
          class="text-xl text-gray-600 mb-10 leading-relaxed italic border-l-4 border-green-500 pl-6"
        >
          "{{ recipe.description }}"
        </p>

        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-gray-100 mb-12"
        >
          <div class="text-center md:border-r border-gray-100">
            <p class="text-gray-400 text-xs uppercase font-black mb-1">
              Prep Time
            </p>
            <p class="text-xl font-bold text-gray-800">
              {{ recipe.prepTime }} min
            </p>
          </div>
          <div class="text-center md:border-r border-gray-100">
            <p class="text-gray-400 text-xs uppercase font-black mb-1">
              Cook Time
            </p>
            <p class="text-xl font-bold text-gray-800">
              {{ recipe.cookTime }} min
            </p>
          </div>
          <div class="text-center md:border-r border-gray-100">
            <p class="text-gray-400 text-xs uppercase font-black mb-1">
              Servings
            </p>
            <p class="text-xl font-bold text-gray-800">
              {{ recipe.servings }} ppl
            </p>
          </div>
          <div class="text-center">
            <p class="text-gray-400 text-xs uppercase font-black mb-1">
              Total Time
            </p>
            <p class="text-xl font-bold text-green-700">
              {{ recipe.prepTime + recipe.cookTime }} min
            </p>
          </div>
        </div>

        <div class="grid md:grid-cols-5 gap-12">
          <div class="md:col-span-2">
            <h2
              class="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3"
            >
              <span class="w-2 h-8 bg-green-600 rounded-full"></span>
              Ingredients
            </h2>
            <ul class="space-y-4">
              <li
                v-for="(ingredient, index) in recipe.ingredients"
                :key="index"
                class="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors"
              >
                <span class="text-green-600 font-bold">✔</span>
                <span class="text-gray-700 font-medium">{{ ingredient }}</span>
              </li>
            </ul>
          </div>

          <div class="md:col-span-3">
            <h2
              class="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3"
            >
              <span class="w-2 h-8 bg-green-600 rounded-full"></span>
              Instructions
            </h2>
            <div class="space-y-8">
              <div
                v-for="(step, index) in recipe.instructions"
                :key="index"
                class="flex gap-5"
              >
                <div
                  class="shrink-0 w-10 h-10 bg-green-700 text-white rounded-2xl flex items-center justify-center font-black shadow-md"
                >
                  {{ index + 1 }}
                </div>
                <p class="text-gray-700 leading-relaxed pt-2">
                  {{ step }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          class="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-4"
        >
          <button
            @click="handleEdit"
            class="px-8 py-3 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center gap-2"
          >
            ✏️ Edit Recipe
          </button>
          <button
            @click="handleDelete"
            class="px-8 py-3 bg-red-50 text-red-600 rounded-2xl font-bold hover:bg-red-100 transition-all flex items-center justify-center gap-2"
          >
            🗑️ Delete Recipe
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="min-h-screen flex items-center justify-center p-6 text-center"
  >
    <div class="bg-white p-12 rounded-3xl shadow-xl max-w-md">
      <div class="text-6xl mb-4">🍲</div>
      <h2 class="text-2xl font-black text-gray-900 mb-2">Recipe Not Found</h2>
      <p class="text-gray-500 mb-8">
        It seems this recipe has vanished from the vault.
      </p>
      <button
        @click="goBack"
        class="w-full bg-green-700 text-white py-3 rounded-xl font-bold"
      >
        Return to Vault
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRecipes } from "../composables/UseRecipes";

const route = useRoute();
const router = useRouter();
const { recipes, deleteRecipe } = useRecipes();

// 1. Get the ID from the URL and find the matching recipe
const recipeId = route.params.id as string;
const recipe = computed(() => {
  return recipes.value.find((r) => r.id === recipeId);
});

// 2. Navigation & Actions
const goBack = () => router.push("/Recipes");

const handleEdit = () => {
  router.push(`/EditRecipe/${recipeId}`);
};

const handleDelete = () => {
  if (
    confirm(
      "Are you sure you want to delete this recipe? This cannot be undone.",
    )
  ) {
    deleteRecipe(recipeId);
    router.push("/Recipes");
  }
};
</script>
