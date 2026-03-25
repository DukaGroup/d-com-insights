import { X, Phone, Mail, Store, Award, Briefcase } from "lucide-react";
import type { StaffMember } from "@/data/staff";

interface StaffProfileCardProps {
  member: StaffMember;
  onClose: () => void;
}

const StaffProfileCard = ({ member, onClose }: StaffProfileCardProps) => {
  const performanceColor =
    (member.performance ?? 0) >= 90
      ? "text-success"
      : (member.performance ?? 0) >= 75
      ? "text-warning"
      : "text-destructive";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/40 p-4" onClick={onClose}>
      <div
        className="relative w-full max-w-md animate-fade-in rounded-2xl border bg-card p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute right-4 top-4 text-muted-foreground hover:text-foreground">
          <X className="h-5 w-5" />
        </button>

        {/* Avatar */}
        <div className="mb-5 flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
            {member.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
          </div>
          <h3 className="mt-3 text-xl font-bold text-card-foreground">{member.name}</h3>
          <span className="mt-1 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
            {member.role}
          </span>
        </div>

        {/* Details */}
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
            <Store className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Shopi</p>
              <p className="text-sm font-medium text-card-foreground">{member.shop}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Roli</p>
              <p className="text-sm font-medium text-card-foreground">{member.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Telefon</p>
              <p className="text-sm font-medium text-card-foreground">{member.phone || "—"}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
            <Mail className="h-4 w-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-card-foreground">{member.email || "—"}</p>
            </div>
          </div>
          {member.performance !== undefined && (
            <div className="flex items-center gap-3 rounded-lg bg-muted p-3">
              <Award className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-xs text-muted-foreground">Performanca</p>
                <p className={`text-sm font-bold ${performanceColor}`}>{member.performance}%</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffProfileCard;
