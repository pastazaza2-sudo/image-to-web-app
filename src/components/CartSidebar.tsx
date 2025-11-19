import { Minus, Plus, Trash2, CreditCard, QrCode, Link as LinkIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  note?: string;
}

interface CartSidebarProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartSidebar = ({ items, onUpdateQuantity, onRemove }: CartSidebarProps) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = 0;
  const vat = subtotal * 0.07;
  const total = subtotal + deliveryFee + vat;

  return (
    <Card className="p-6 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <h2 className="text-2xl font-bold mb-6">
        <span className="text-secondary">คำสั่งซื้อ</span>ของฉัน
      </h2>

      <div className="space-y-4 mb-6">
        {items.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">ตะกร้าสินค้าว่างเปล่า</p>
        ) : (
          items.map((item) => (
            <div key={item.id} className="flex gap-3">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 min-w-0 mr-2">
                    <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                    {item.note && (
                      <p className="text-xs text-muted-foreground">{item.note}</p>
                    )}
                  </div>
                  <span className="font-bold text-sm whitespace-nowrap">{item.price}.-</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 rounded"
                      onClick={() => onUpdateQuantity(item.id, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium min-w-[1.5rem] text-center">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-6 w-6 rounded"
                      onClick={() => onUpdateQuantity(item.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-destructive hover:text-destructive hover:bg-destructive/10"
                    onClick={() => onRemove(item.id)}
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <>
          <Separator className="my-4" />
          
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">ยอดรวม</span>
              <span className="font-medium">{subtotal.toFixed(2)}.-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">ค่าจัดส่ง</span>
              <span className="font-medium">{deliveryFee.toFixed(2)}.-</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">ภาษีมูลค่าเพิ่ม 7%</span>
              <span className="font-medium">{vat.toFixed(2)}.-</span>
            </div>
          </div>

          <Separator className="my-4" />
          
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">ยอดรวมทั้งหมด</span>
            <span className="text-2xl font-bold text-secondary">{total.toFixed(2)}.-</span>
          </div>

          <div className="grid grid-cols-3 gap-2 mb-4">
            <Button variant="outline" size="icon" className="h-12">
              <CreditCard className="h-5 w-5 text-primary" />
            </Button>
            <Button variant="outline" size="icon" className="h-12">
              <QrCode className="h-5 w-5 text-primary" />
            </Button>
            <Button variant="outline" size="icon" className="h-12">
              <LinkIcon className="h-5 w-5 text-primary" />
            </Button>
          </div>

          <Button 
            className="w-full h-12 text-lg font-semibold bg-primary hover:bg-primary/90"
            size="lg"
          >
            ชำระเงิน <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </>
      )}
    </Card>
  );
};
