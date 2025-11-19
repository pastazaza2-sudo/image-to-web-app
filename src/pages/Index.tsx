import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroBanner } from "@/components/HeroBanner";
import { CategoryTabs } from "@/components/CategoryTabs";
import { MenuItem } from "@/components/MenuItem";
import { CartSidebar } from "@/components/CartSidebar";

import padKrapowImg from "@/assets/pad-krapow.jpg";
import khaoPadImg from "@/assets/khao-pad.jpg";
import padThaiImg from "@/assets/pad-thai.jpg";
import tomYumImg from "@/assets/tom-yum.jpg";
import greenCurryImg from "@/assets/green-curry.jpg";
import somTamImg from "@/assets/som-tam.jpg";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  note?: string;
}

const menuItems = [
  {
    id: "1",
    name: "Pad Krapow",
    description: "Spicy Stir Fry Basil Pork / Chicken / Beef / Seafood with Rice",
    price: 89,
    image: padKrapowImg,
  },
  {
    id: "2",
    name: "Khao Pad",
    description: "Fried Rice with Pork / Chicken / Seafood",
    price: 89,
    image: khaoPadImg,
  },
  {
    id: "3",
    name: "Pad Thai",
    description: "Stir-Fried noodles with shrimp and peanuts",
    price: 120,
    image: padThaiImg,
  },
  {
    id: "4",
    name: "Tom Yum Goong",
    description: "Hot and sour shrimp soup",
    price: 150,
    image: tomYumImg,
  },
  {
    id: "5",
    name: "Gaeng Keow Wan Gai",
    description: "Green curry made with coconut milk, chicken and vegetables",
    price: 120,
    image: greenCurryImg,
  },
  {
    id: "6",
    name: "Som Tam",
    description: "A refreshing and Spicy green papaya salad",
    price: 89,
    image: somTamImg,
  },
];

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: typeof menuItems[0]) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const getItemQuantity = (id: string) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          <div>
            <HeroBanner />
            
            <div className="mt-12">
              <CategoryTabs />
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.id}
                    {...item}
                    quantity={getItemQuantity(item.id)}
                    onAdd={() => addToCart(item)}
                    onRemove={() => updateQuantity(item.id, -1)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <aside className="hidden lg:block">
            <CartSidebar
              items={cart}
              onUpdateQuantity={updateQuantity}
              onRemove={removeFromCart}
            />
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
