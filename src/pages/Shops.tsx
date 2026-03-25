import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { shops } from "@/data/shops";

const Shops = () => {
  const [search, setSearch] = useState("");

  const filtered = shops.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.city.toLowerCase().includes(search.toLowerCase()) ||
      s.address.toLowerCase().includes(search.toLowerCase())
  );

  const cities = [...new Set(shops.map((s) => s.city))].sort();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Database i Shop</h1>
        <p className="text-muted-foreground">{shops.length} dyqane në total</p>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Kërko sipas emrit, qytetit ose adresës..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* City filter chips */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSearch("")}
          className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
            !search ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
          }`}
        >
          Të gjitha ({shops.length})
        </button>
        {cities.slice(0, 10).map((city) => (
          <button
            key={city}
            onClick={() => setSearch(city)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              search === city ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {city} ({shops.filter((s) => s.city === city).length})
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">#</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Emri i Shopit</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Qyteti</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Adresa</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((shop, i) => (
              <tr key={shop.id} className="border-b last:border-0 hover:bg-muted/30">
                <td className="px-4 py-3 text-muted-foreground">{i + 1}</td>
                <td className="px-4 py-3 font-medium text-card-foreground">{shop.name}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {shop.city}
                  </span>
                </td>
                <td className="max-w-xs truncate px-4 py-3 text-muted-foreground">{shop.address}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                    {shop.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="p-8 text-center text-muted-foreground">Nuk u gjet asnjë dyqan</div>
        )}
      </div>
    </div>
  );
};

export default Shops;
