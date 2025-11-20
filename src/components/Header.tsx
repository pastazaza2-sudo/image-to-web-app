import { Menu, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-sm">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <button className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-primary">ZAPPI</span>
            <span className="text-2xl font-bold text-secondary">KRUATHAI</span>
          </div>
        </div>

        <div className="relative flex-1 max-w-xl mx-auto">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="What would you like to eat today?"
            className="w-full pl-10 bg-muted/50 border-0"
          />
        </div>

        <button
          className="hidden lg:block"
          onClick={() => navigate("/pos-settings")}
        >
          <Search className="h-5 w-5 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
};
