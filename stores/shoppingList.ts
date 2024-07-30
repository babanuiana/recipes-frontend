import { defineStore } from "pinia";
interface ShoppingItem {
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
  actions: {
    addSampleItems() {
      this.shoppingList = [
        { id: "1", text: "Milk", isPurchased: false },
        { id: "2", text: "Bread", isPurchased: true },
        { id: "3", text: "Eggs", isPurchased: false },
        { id: "4", text: "Butter", isPurchased: true },
      ];
    },
    addItem(text: string) {
      // Prevent adding empty items
      if (text.trim() === "") return;
      const id = generateId();
      this.shoppingList.push({
        id,
        text: text.trim(),
        isPurchased: false,
      });
    },
  },
});
