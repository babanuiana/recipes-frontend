export type Category = "SALAD" | "SAUCE";

export type Tag = {
  id: number;
  name: string;
};

export type Ingredient = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type RecipeIngredient = {
  id: number;
  recipeId: number;
  ingredientId: number;
  description: string;
  quantity: number | null;
  unit: string | null;
  createdAt: Date;
  updatedAt: Date;
  ingredient: Ingredient;
};

export type Recipe = {
  id: number;
  name: string;
  imageUri: string | null;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  steps: string[];
  category: Category;
  timeToCookInMinutes: number | null;
  recipeIngredients: RecipeIngredient[];
  tags: Tag[];
};
