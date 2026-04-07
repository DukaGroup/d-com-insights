export type ProcedureCategory = "Kompani" | "Shitje" | "Inventar";

export interface ProcedureEntry {
  id: string;
  category: ProcedureCategory;
  title: string;
  documentUrl: string;
}

export const procedures: ProcedureEntry[] = [
  {
    id: "kompani-001",
    category: "Kompani",
    title: "Kodi i Etikës dhe Sjelljes",
    documentUrl: "/documents/procedures/kompani-kodi-etikes.pdf",
  },
  {
    id: "kompani-002",
    category: "Kompani",
    title: "Rregullorja e Brendshme",
    documentUrl: "/documents/procedures/kompani-rregullorja-brendshme.pdf",
  },
  {
    id: "shitje-001",
    category: "Shitje",
    title: "Procedura e Shitjes në Dyqan",
    documentUrl: "/documents/procedures/shitje-procedura-ne-dyqan.pdf",
  },
  {
    id: "shitje-002",
    category: "Shitje",
    title: "Procedura e Aktivizimit të Linjës",
    documentUrl: "/documents/procedures/shitje-aktivizim-linje.pdf",
  },
  {
    id: "inventar-001",
    category: "Inventar",
    title: "Procedura e Menaxhimit të Inventarit",
    documentUrl: "/documents/procedures/inventar-menaxhim.pdf",
  },
  {
    id: "inventar-002",
    category: "Inventar",
    title: "Procedura e Numërimit Mujor",
    documentUrl: "/documents/procedures/inventar-numerim-mujor.pdf",
  },
];
