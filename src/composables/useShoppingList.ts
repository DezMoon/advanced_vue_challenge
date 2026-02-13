import { ref } from "vue";
import type { WeeklyPlan } from "./useMealPlans";

/**
 * Manages the generation and storage of the shopping list.
 * @returns The shopping list and the function to generate it.
 */
export function useShoppingList() {
  const shoppingList = ref<string[]>([]);

  /**
   * Scans the meal plan and extracts all ingredients into a single list.
   * @param mealPlan - The current weekly schedule
   */
  const generateFromMealPlan = (mealPlan: WeeklyPlan) => {
    const allIngredients: string[] = [];

    // Loop through every day in the plan
    Object.values(mealPlan).forEach((day) => {
      // Loop through every meal slot (Breakfast, Lunch, etc.)
      Object.values(day).forEach((recipe) => {
        // If a recipe exists in that slot, add its ingredients to our master list
        if (recipe && recipe.ingredients) {
          allIngredients.push(...recipe.ingredients);
        }
      });
    });

    // Using Set to remove exact duplicates so we don't buy the same thing twice
    const uniqueIngredients = [...new Set(allIngredients)];

    // Save to local storage so the Shopping List page can find it
    shoppingList.value = uniqueIngredients;
    localStorage.setItem(
      "vault_shopping_list",
      JSON.stringify(uniqueIngredients),
    );
  };

  return {
    shoppingList,
    generateFromMealPlan,
  };
}
