import { useState } from "react";
import { orgChart, type OrgPerson } from "@/data/staff";
import { ChevronDown, ChevronRight, User } from "lucide-react";

const OrgNode = ({ person, depth = 0 }: { person: OrgPerson; depth?: number }) => {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = person.children && person.children.length > 0;
  const isVacant = person.name === "Vakant";

  return (
    <div className={depth > 0 ? "ml-6 border-l border-border pl-4" : ""}>
      <div
        className={`group my-1 flex items-center gap-3 rounded-lg p-3 transition-colors ${
          hasChildren ? "cursor-pointer hover:bg-muted" : "hover:bg-muted/50"
        }`}
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren ? (
          expanded ? (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          )
        ) : (
          <span className="w-4" />
        )}

        <div
          className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold ${
            isVacant
              ? "border-2 border-dashed border-muted-foreground bg-muted text-muted-foreground"
              : depth === 0
              ? "bg-primary text-primary-foreground"
              : "bg-accent text-accent-foreground"
          }`}
        >
          {isVacant ? <User className="h-4 w-4" /> : person.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
        </div>

        <div>
          <p className={`text-sm font-medium ${isVacant ? "text-muted-foreground italic" : "text-foreground"}`}>
            {person.name}
          </p>
          <p className="text-xs text-muted-foreground">{person.title}</p>
        </div>
      </div>

      {expanded && hasChildren && (
        <div>
          {person.children!.map((child) => (
            <OrgNode key={child.id} person={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

const Organogram = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Organograma</h1>
        <p className="text-muted-foreground">Struktura organizative e D-COM</p>
      </div>

      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <OrgNode person={orgChart} />
      </div>
    </div>
  );
};

export default Organogram;
