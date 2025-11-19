import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity?: number;
  onAdd: () => void;
  onRemove: () => void;
}

export const MenuItem = ({ 
  name, 
  description, 
  price, 
  image, 
  quantity = 0,
  onAdd,
  onRemove 
}: MenuItemProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg text-secondary">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-secondary">{price}.-</span>
          
          {quantity === 0 ? (
            <Button 
              size="icon" 
              className="rounded-full bg-primary hover:bg-primary/90 shadow-md"
              onClick={onAdd}
            >
              <Plus className="h-4 w-4" />
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="h-8 w-8 rounded-full"
                onClick={onRemove}
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="font-semibold min-w-[2rem] text-center">{quantity}</span>
              <Button
                size="icon"
                className="h-8 w-8 rounded-full bg-primary hover:bg-primary/90"
                onClick={onAdd}
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
