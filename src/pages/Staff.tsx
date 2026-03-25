import { useState, useMemo } from "react";
import { Search, AlertTriangle, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { staff } from "@/data/staff";
import { shops } from "@/data/shops";
import StaffProfileCard from "@/components/StaffProfileCard";
import type { StaffMember } from "@/data/staff";

const Staff = () => {
  const [search, setSearch] = useState("");
  const [filterShop, setFilterShop] = useState<string>("");
  const [filterRole, setFilterRole] = useState<string>("");
  const [showVacant, setShowVacant] = useState(false);
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

  const staffShops = useMemo(() => [...new Set(staff.map((s) => s.shop))].sort(), []);
  const roles = useMemo(() => [...new Set(staff.map((s) => s.role))].sort(), []);

  const filtered = useMemo(() => {
    return staff.filter((s) => {
      if (showVacant) return s.isVacant;
      if (s.isVacant && !showVacant) return false;
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.shop.toLowerCase().includes(search.toLowerCase());
      const matchShop = !filterShop || s.shop === filterShop;
      const matchRole = !filterRole || s.role === filterRole;
      return matchSearch && matchShop && matchRole;
    });
  }, [search, filterShop, filterRole, showVacant]);

  const vacantCount = staff.filter((s) => s.isVacant).length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Stafi</h1>
          <p className="text-muted-foreground">
            {staff.filter((s) => !s.isVacant).length} punonjës · {vacantCount} vende vakante
          </p>
        </div>
        <button
          onClick={() => { setShowVacant(!showVacant); setSearch(""); setFilterShop(""); setFilterRole(""); }}
          className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
            showVacant
              ? "bg-destructive text-destructive-foreground"
              : "bg-muted text-muted-foreground hover:bg-accent"
          }`}
        >
          <AlertTriangle className="h-4 w-4" />
          Vende Vakante ({vacantCount})
        </button>
      </div>

      {!showVacant && (
        <div className="flex flex-wrap gap-3">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Kërko stafin..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={filterShop}
            onChange={(e) => setFilterShop(e.target.value)}
            className="rounded-lg border bg-card px-3 py-2 text-sm text-card-foreground"
          >
            <option value="">Të gjitha shopet</option>
            {staffShops.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="rounded-lg border bg-card px-3 py-2 text-sm text-card-foreground"
          >
            <option value="">Të gjitha rolet</option>
            {roles.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
      )}

      {/* Staff Grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((member) => (
          <div
            key={member.id}
            onClick={() => !member.isVacant && setSelectedMember(member)}
            className={`rounded-xl border p-4 transition-all ${
              member.isVacant
                ? "border-dashed border-muted-foreground/30 bg-muted/50"
                : "cursor-pointer bg-card shadow-sm hover:shadow-md hover:-translate-y-0.5"
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold ${
                  member.isVacant
                    ? "border-2 border-dashed border-muted-foreground bg-transparent text-muted-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {member.isVacant ? "?" : member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
              </div>
              <div className="min-w-0 flex-1">
                <p className={`truncate text-sm font-medium ${member.isVacant ? "italic text-muted-foreground" : "text-card-foreground"}`}>
                  {member.isVacant ? "Pozicion Vakant" : member.name}
                </p>
                <p className="truncate text-xs text-muted-foreground">{member.shop}</p>
              </div>
              <span className="shrink-0 rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                {member.role}
              </span>
            </div>
            {!member.isVacant && member.performance !== undefined && (
              <div className="mt-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Performanca</span>
                  <span className="font-semibold text-card-foreground">{member.performance}%</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${member.performance}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-12 text-center text-muted-foreground">Nuk u gjet asnjë rezultat</div>
      )}

      {selectedMember && (
        <StaffProfileCard member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </div>
  );
};

export default Staff;
