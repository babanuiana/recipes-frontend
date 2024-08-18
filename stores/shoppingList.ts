import { defineStore } from "pinia";
export interface ShoppingItem {
  id: string;
  text: string;
  isPurchased: boolean;
}
const generateId = () => {
  return Math.random().toString(36);
};
export const useShoppingListStore = defineStore("shoppingList", {
  state: () => {
    return {
      shoppingList: [] as ShoppingItem[],
    };
  },
  persist: {
    storage: persistedState.cookiesWithOptions({
      sameSite: "strict",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    }),
  },
  actions: {
    addItem(text: string) {
      if (text.trim() === "") return;
      const id = generateId();
      this.shoppingList.push({
        id,
        text: text.trim(),
        isPurchased: false,
      });
    },
    removeItem(id: string) {
      this.shoppingList = this.shoppingList.filter((item) => item.id !== id);
    },
    deleteAllItems() {
      this.shoppingList = [];
    },
    toggleItem(id: string) {
      const item = this.shoppingList.find((item) => item.id === id);
      if (item) item.isPurchased = !item.isPurchased;
    },
  },
});
