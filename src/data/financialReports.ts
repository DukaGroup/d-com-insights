export interface FinancialDocument {
  id: string;
  title: string;
  fileUrl: string;
}

export interface FinancialReportEntry {
  month: string;
  documents: FinancialDocument[];
}

export const financialReports: FinancialReportEntry[] = [
  {
    month: "Janar 2026",
    documents: [
      {
        id: "janar-2026-pasqyra",
        title: "Pasqyra Financiare Mujore",
        fileUrl: "/documents/financial/janar-2026-pasqyra-financiare.xlsx",
      },
      {
        id: "janar-2026-shitje",
        title: "Raporti i Shitjeve",
        fileUrl: "/documents/financial/janar-2026-raporti-shitjeve.xlsx",
      },
    ],
  },
  {
    month: "Shkurt 2026",
    documents: [
      {
        id: "shkurt-2026-pasqyra",
        title: "Pasqyra Financiare Mujore",
        fileUrl: "/documents/financial/shkurt-2026-pasqyra-financiare.xlsx",
      },
      {
        id: "shkurt-2026-shitje",
        title: "Raporti i Shitjeve",
        fileUrl: "/documents/financial/shkurt-2026-raporti-shitjeve.xlsx",
      },
    ],
  },
  {
    month: "Mars 2026",
    documents: [
      {
        id: "mars-2026-pasqyra",
        title: "Pasqyra Financiare Mujore",
        fileUrl: "/documents/financial/mars-2026-pasqyra-financiare.xlsx",
      },
      {
        id: "mars-2026-shitje",
        title: "Raporti i Shitjeve",
        fileUrl: "/documents/financial/mars-2026-raporti-shitjeve.xlsx",
      },
    ],
  },
];
