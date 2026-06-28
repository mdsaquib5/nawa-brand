import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      
      addToCart: (product) => set((state) => {
        const existingIndex = state.cart.findIndex(item => item.id === product.id);
        if (existingIndex > -1) {
          const newCart = state.cart.map((item, idx) => 
            idx === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
          );
          return { cart: newCart };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),

      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
      })),

      updateQuantity: (productId, change) => set((state) => {
        const newCart = state.cart.map(item => {
          if (item.id === productId) {
            const newQuantity = item.quantity + change;
            return { ...item, quantity: Math.max(1, newQuantity) };
          }
          return item;
        });
        return { cart: newCart };
      }),

      clearCart: () => set({ cart: [] })
    }),
    {
      name: 'nawa-cart-storage',
    }
  )
);
