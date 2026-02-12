<script lang="ts">
import HomePage from "./pages/HomePage.vue";
import Recipes from "./pages/Recipes.vue";
import MealPlans from "./pages/MealPlans.vue";
import ShoppingList from "./pages/ShoppingList.vue";
import AddRecipe from "./pages/AddRecipe.vue";
import SingleRecipe from "./pages/SingleRecipe.vue";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/Recipes", component: Recipes },
  { path: "/MealPlans", component: MealPlans },
  { path: "/ShoppingList", component: ShoppingList },
  { path: "/AddRecipe", component: AddRecipe },
  { path: "/SingleRecipe/:id", component: SingleRecipe },
];
</script>

<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/footer.vue";
</script>

<template>
  <NavBar />
  <RouterView />
  <Footer />
</template>
