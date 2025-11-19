import { ChefHat, Star, UtensilsCrossed, Soup, Beef, Coffee, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const categories = [
  { id: "all", label: "All", icon: ChefHat },
  { id: "recommend", label: "Recommend", icon: Star },
  { id: "rice", label: "Rice", icon: UtensilsCrossed },
  { id: "soup", label: "Soup", icon: Soup },
  { id: "noodles", label: "Noodles", icon: Beef },
  { id: "beverages", label: "Beverages", icon: Coffee },
  { id: "addon", label: "Add-On", icon: Plus },
];

export const CategoryTabs = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">
        Categories <span className="text-secondary">MENU</span>
      </h2>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => {
          const Icon = category.icon;
          const isActive = activeCategory === category.id;
          
          return (
            <Button
              key={category.id}
              variant={isActive ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 whitespace-nowrap ${
                isActive 
                  ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                  : "bg-card hover:bg-accent"
              }`}
            >
              <Icon className="h-4 w-4" />
              {category.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
