import type { Recipe } from "../types/Types";

export const sampleRecipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Avocado Toast",
    description:
      "Creamy avocado on toasted sourdough with a hint of chili flakes.",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=800&auto=format&fit=crop",
    category: "Breakfast",
    prepTime: 10,
    cookTime: 5,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      "1 slice sourdough bread",
      "1 ripe avocado",
      "Chili flakes",
      "Lemon juice",
      "Salt",
    ],
    instructions: [
      "Toast the bread.",
      "Mash avocado with lemon and salt.",
      "Spread on toast and sprinkle with chili flakes.",
    ],
  },
  {
    id: "2",
    title: "Garlic Butter Salmon",
    description:
      "Pan-seared salmon fillets glazed with a rich garlic lemon butter sauce.",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    category: "Dinner",
    prepTime: 10,
    cookTime: 12,
    servings: 2,
    difficulty: "Medium",
    ingredients: [
      "2 salmon fillets",
      "3 cloves garlic",
      "2 tbsp butter",
      "Fresh parsley",
      "Lemon wedges",
    ],
    instructions: [
      "Season salmon with salt and pepper.",
      "Sear in a hot pan for 5 minutes per side.",
      "Add butter and garlic, baste the fish.",
    ],
  },
  {
    id: "3",
    title: "Mediterranean Quinoa Bowl",
    description:
      "A fresh and healthy lunch bowl packed with protein and veggies.",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
    category: "Lunch",
    prepTime: 15,
    cookTime: 15,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "1 cup quinoa",
      "Cucumber",
      "Cherry tomatoes",
      "Feta cheese",
      "Olive oil",
    ],
    instructions: [
      "Cook quinoa according to package.",
      "Chop vegetables.",
      "Toss everything together with olive oil.",
    ],
  },
  {
    id: "4",
    title: "Triple Berry Smoothie",
    description:
      "A refreshing blend of strawberries, blueberries, and raspberries.",
    image:
      "https://images.unsplash.com/photo-1553530666-ba11a7da3888?q=80&w=800&auto=format&fit=crop",
    category: "Snack",
    prepTime: 5,
    cookTime: 0,
    servings: 1,
    difficulty: "Easy",
    ingredients: [
      "1 cup mixed berries",
      "1 banana",
      "1/2 cup Greek yogurt",
      "1 cup almond milk",
    ],
    instructions: [
      "Place all ingredients in a blender.",
      "Blend until smooth.",
      "Pour into a glass and serve.",
    ],
  },
  {
    id: "5",
    title: "Beef Stir-Fry",
    description:
      "Quick and savory beef strips with crunchy bell peppers and broccoli.",
    image:
      "https://unsplash.com/photos/beef-and-broccoli-stir-fry-with-vegetables-on-a-red-plate-qKPKDb4_W24",
    category: "Dinner",
    prepTime: 20,
    cookTime: 10,
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g beef strips",
      "Broccoli florets",
      "Soy sauce",
      "Ginger",
      "Sesame oil",
    ],
    instructions: [
      "Heat oil in a wok.",
      "Brown the beef and set aside.",
      "Stir-fry veggies, add beef back with soy sauce.",
    ],
  },
  {
    id: "6",
    title: "Fluffy Blueberry Pancakes",
    description: "Thick, diner-style pancakes bursting with fresh blueberries.",
    image:
      "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?q=80&w=800&auto=format&fit=crop",
    category: "Breakfast",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    difficulty: "Medium",
    ingredients: [
      "1.5 cups flour",
      "1 cup milk",
      "1 egg",
      "Fresh blueberries",
      "Maple syrup",
    ],
    instructions: [
      "Whisk batter ingredients.",
      "Fold in blueberries.",
      "Cook on a griddle until golden brown.",
    ],
  },
  {
    id: "7",
    title: "Dark Chocolate Brownies",
    description: "Fudgy, rich brownies with a crackly top.",
    image:
      "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?q=80&w=800&auto=format&fit=crop",
    category: "Dessert",
    prepTime: 15,
    cookTime: 25,
    servings: 12,
    difficulty: "Medium",
    ingredients: [
      "200g dark chocolate",
      "150g butter",
      "3 eggs",
      "1 cup sugar",
      "1/2 cup cocoa powder",
    ],
    instructions: [
      "Melt chocolate and butter.",
      "Whisk in sugar and eggs.",
      "Fold in dry ingredients and bake.",
    ],
  },
  {
    id: "8",
    title: "Caprese Salad",
    description: "The classic Italian salad of tomato, mozzarella, and basil.",
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9ebc4a5?q=80&w=800&auto=format&fit=crop",
    category: "Lunch",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "Fresh mozzarella",
      "Ripe tomatoes",
      "Fresh basil",
      "Balsamic glaze",
      "Olive oil",
    ],
    instructions: [
      "Slice mozzarella and tomatoes.",
      "Layer them with basil leaves.",
      "Drizzle with oil and balsamic.",
    ],
  },
  {
    id: "9",
    title: "Homemade Margherita Pizza",
    description: "Thin crust pizza with simple, high-quality toppings.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?q=80&w=800&auto=format&fit=crop",
    category: "Dinner",
    prepTime: 30,
    cookTime: 10,
    servings: 2,
    difficulty: "Hard",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella",
      "Basil",
      "Olive oil",
    ],
    instructions: [
      "Stretch dough.",
      "Spread sauce and add cheese.",
      "Bake at maximum oven temperature.",
    ],
  },
  {
    id: "10",
    title: "Hummus & Veggie Sticks",
    description: "A healthy, protein-packed snack for on-the-go.",
    image:
      "https://images.unsplash.com/photo-1577906030551-5acc919869cf?q=80&w=800&auto=format&fit=crop",
    category: "Snack",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "1 can chickpeas",
      "Tahini",
      "Carrots",
      "Celery",
      "Lemon juice",
    ],
    instructions: [
      "Blend chickpeas, tahini, and lemon.",
      "Slice sticks.",
      "Serve as a dip.",
    ],
  },
];
