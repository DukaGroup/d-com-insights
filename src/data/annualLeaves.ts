export interface AnnualLeaveEntry {
  id: string;
  employeeName: string;
  position: string;
  totalDays: number;
  usedDays: number;
  remainingDays: number;
}

export const annualLeaves: AnnualLeaveEntry[] = [
  {
    id: "leave-001",
    employeeName: "Klodeta Hoxha",
    position: "Store Manager",
    totalDays: 20,
    usedDays: 8,
    remainingDays: 12,
  },
  {
    id: "leave-002",
    employeeName: "Amina Kurti",
    position: "Sales Representative",
    totalDays: 20,
    usedDays: 6,
    remainingDays: 14,
  },
  {
    id: "leave-003",
    employeeName: "Ardita Zguri",
    position: "Store Manager",
    totalDays: 20,
    usedDays: 10,
    remainingDays: 10,
  },
  {
    id: "leave-004",
    employeeName: "Briselda Bubeqi",
    position: "Regional Coordinator",
    totalDays: 20,
    usedDays: 4,
    remainingDays: 16,
  },
  {
    id: "leave-005",
    employeeName: "Migena Lekaj",
    position: "Sales Supervisor",
    totalDays: 20,
    usedDays: 7,
    remainingDays: 13,
  },
];
