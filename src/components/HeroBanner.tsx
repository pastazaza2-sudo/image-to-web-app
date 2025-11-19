import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroDish from "@/assets/hero-dish.jpg";

export const HeroBanner = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/90 to-primary p-8 md:p-12">
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            เมนูยอดนิยมที่สั่งมากที่สุด
            <br />
            <span className="text-secondary">ทุกเดือน!</span>
          </h1>
          <p className="text-xl text-white/90">
            พร้อมส่งทุกวันที่ <span className="font-bold">ครัวไทย</span>
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="bg-accent text-secondary font-semibold hover:bg-accent/90 shadow-lg"
          >
            สั่งเลย! <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="absolute -inset-4 border-2 border-white/30 rounded-full"></div>
            <div className="absolute -inset-8 border-2 border-white/20 rounded-full"></div>
            <div className="absolute -inset-12 border-2 border-white/10 rounded-full"></div>
            <img
              src={heroDish}
              alt="อาหารไทยยอดนิยม"
              className="relative z-10 w-full max-w-md mx-auto rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
        <div className="h-3 w-3 rounded-full bg-primary-foreground"></div>
        <div className="h-3 w-3 rounded-full bg-primary-foreground/50"></div>
        <div className="h-3 w-3 rounded-full bg-primary-foreground/30"></div>
      </div>
    </section>
  );
};
