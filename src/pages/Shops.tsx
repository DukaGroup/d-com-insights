import { useMemo, useState } from "react";
import { Search, MapPin, Table, Image as ImageIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { shops } from "@/data/shops";

type ViewMode = "table" | "gallery";

const Shops = () => {
  const [search, setSearch] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("table");

  const filtered = useMemo(
    () =>
      shops.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.city.toLowerCase().includes(search.toLowerCase()) ||
          s.address.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  const cities = [...new Set(shops.map((s) => s.city))].sort();

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Database i Shop</h1>
        <p className="text-muted-foreground">{shops.length} dyqane në total</p>
      </div>

      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Kërko sipas emrit, qytetit ose adresës..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="flex gap-1 rounded-lg bg-muted p-1 max-w-md">
        <button
          onClick={() => setViewMode("table")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            viewMode === "table"
              ? "bg-card text-card-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Table className="h-4 w-4" />
          Tabela
        </button>
        <button
          onClick={() => setViewMode("gallery")}
          className={`flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
            viewMode === "gallery"
              ? "bg-card text-card-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <ImageIcon className="h-4 w-4" />
          Galeri Shopesh
        </button>
      </div>

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

      {viewMode === "table" && (
        <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">#</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Foto</th>
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
                  <td className="px-4 py-3">
                    <img
                      src={shop.imageUrl || "/placeholder.svg"}
                      alt={`Foto e ${shop.name}`}
                      className="h-10 w-14 rounded object-cover"
                      loading="lazy"
                    />
                  </td>
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
      )}

      {viewMode === "gallery" && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((shop) => (
            <article key={shop.id} className="overflow-hidden rounded-xl border bg-card shadow-sm">
              <img
                src={shop.imageUrl || "/placeholder.svg"}
                alt={`Foto e ${shop.name}`}
                className="h-40 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-2 p-4">
                <h3 className="line-clamp-1 text-sm font-semibold text-card-foreground">{shop.name}</h3>
                <p className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {shop.city}
                </p>
                <p className="line-clamp-2 text-xs text-muted-foreground">{shop.address}</p>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-xl border border-dashed p-8 text-center text-muted-foreground">
              Nuk u gjet asnjë dyqan
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Shops;
