// TODO: Define your Recipe type here
// Hint: What properties does a recipe need?

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string; // i will use links
  category: "Breakfast" | "Lunch" | "Dinner" | "Dessert" | "Snack";
  prepTime: number; // Time in minutes
  cookTime: number; // Time in minutes
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  ingredients: string[];
  instructions: string[];
}
