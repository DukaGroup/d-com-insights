export type ProtocolTopic = "Mbledhje" | "Audit" | "Operacione";

export interface ProtocolEntry {
  id: string;
  topic: ProtocolTopic;
  title: string;
  fileUrl: string;
}

export const protocolTopics: ProtocolTopic[] = ["Mbledhje", "Audit", "Operacione"];

export const protocolEntries: ProtocolEntry[] = [
  {
    id: "mbledhje-01",
    topic: "Mbledhje",
    title: "Protokoll Mbledhje Javore e Menaxhimit",
    fileUrl: "/documents/protokolli/protokoll-mbledhje-javore.xlsx",
  },
  {
    id: "mbledhje-02",
    topic: "Mbledhje",
    title: "Protokoll Mbledhje Mujore e Performancës",
    fileUrl: "/documents/protokolli/protokoll-mbledhje-mujore-performances.xlsx",
  },
  {
    id: "audit-01",
    topic: "Audit",
    title: "Protokoll i Auditit të Brendshëm",
    fileUrl: "/documents/protokolli/protokoll-audit-brendshem.xlsx",
  },
  {
    id: "audit-02",
    topic: "Audit",
    title: "Protokoll i Kontrollit të Dokumentacionit",
    fileUrl: "/documents/protokolli/protokoll-kontroll-dokumentacioni.xlsx",
  },
  {
    id: "operacione-01",
    topic: "Operacione",
    title: "Protokoll Operacional për Hapje/Mbyllje Dyqani",
    fileUrl: "/documents/protokolli/protokoll-hapje-mbyllje-dyqani.xlsx",
  },
  {
    id: "operacione-02",
    topic: "Operacione",
    title: "Protokoll i Menaxhimit të Eskalimeve",
    fileUrl: "/documents/protokolli/protokoll-menaxhim-eskalimesh.xlsx",
  },
];
