import { useState, useEffect } from "react";
import { ArrowLeft, Search, Link2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Device {
  id: string;
  name: string;
}

const mockDevices: Device[] = [
  { id: "device00", name: "POS1.0.225000.9.2_local. (device00)" },
  { id: "device01", name: "POS1.0.225000.9.2_local. (device01)" },
  { id: "device02", name: "POS1.0.225000.9.2_local. (device02)" },
];

const POSSettings = () => {
  const navigate = useNavigate();
  const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("connectedDevice");
    if (saved) {
      setConnectedDevice(JSON.parse(saved));
    }
  }, []);

  const handleConnect = (device: Device) => {
    setConnectedDevice(device);
    localStorage.setItem("connectedDevice", JSON.stringify(device));
  };

  const filteredDevices = mockDevices.filter((device) =>
    device.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => navigate("/")} className="p-2">
            <ArrowLeft className="h-6 w-6" />
          </button>
          <h1 className="text-2xl font-bold">POS Setting</h1>
        </div>

        <div className="mb-6">
          <Button className="bg-primary text-primary-foreground gap-2">
            <Search className="h-5 w-5" />
            Search Device
          </Button>
        </div>

        {connectedDevice && (
          <div className="mb-8 flex items-center gap-4 p-4 border border-border rounded-lg">
            <Input
              value={connectedDevice.name}
              readOnly
              className="flex-1"
            />
            <Button className="bg-primary text-primary-foreground gap-2">
              <Link2 className="h-4 w-4" />
              Connected
            </Button>
          </div>
        )}

        <div>
          <h2 className="text-xl font-bold mb-4">
            Local Device ({filteredDevices.length})
          </h2>

          <div className="space-y-4">
            {filteredDevices.map((device) => (
              <div
                key={device.id}
                className="flex items-center justify-between p-4 border-b border-border"
              >
                <span
                  className={
                    connectedDevice?.id === device.id
                      ? "text-primary font-medium"
                      : "text-foreground"
                  }
                >
                  {device.name}
                </span>
                <Button
                  variant={
                    connectedDevice?.id === device.id ? "secondary" : "outline"
                  }
                  onClick={() => handleConnect(device)}
                  disabled={connectedDevice?.id === device.id}
                >
                  {connectedDevice?.id === device.id ? "Connected" : "Connect"}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSSettings;
