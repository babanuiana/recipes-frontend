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
    addSampleItems() {
      this.shoppingList = [
        { id: "1", text: "Milk", isPurchased: false },
        { id: "2", text: "Bread", isPurchased: false },
        { id: "3", text: "Eggs", isPurchased: false },
        { id: "4", text: "Butter", isPurchased: false },
      ];
    },
    loadList() {
      return this.shoppingList;
    },
    addItem(text: string) {
      if (text.trim() === "") return;
      const id = generateId();
      this.shoppingList.push({
        id,
        text: text.trim(),
        isPurchased: false,
      });
    },
    toggleItem(id: string) {
      const item = this.shoppingList.find((item) => item.id === id);
      if (item) item.isPurchased = !item.isPurchased;
    },
  },
});
