export interface ShopStat {
  shopName: string;
  target: number;
  achieved: number;
  percentage: number;
}

export interface PersonStat {
  name: string;
  shop: string;
  role: string;
  target: number;
  achieved: number;
  percentage: number;
}

export interface TopPerformer {
  rank: 1 | 2 | 3;
  name: string;
  shop: string;
  role: string;
  score: number;
  month: string;
}

export const shopStats: ShopStat[] = [
  { shopName: "One Shop Vasil Shanto", target: 120, achieved: 108, percentage: 90 },
  { shopName: "One Shop Hoxha Tahsim", target: 150, achieved: 141, percentage: 94 },
  { shopName: "One Shop Fresku", target: 100, achieved: 87, percentage: 87 },
  { shopName: "One Shop Blv Zogu I", target: 130, achieved: 118, percentage: 91 },
  { shopName: "One Shop Rr Kavajes", target: 110, achieved: 99, percentage: 90 },
  { shopName: "One Shop Rr Kavajes 2", target: 95, achieved: 82, percentage: 86 },
  { shopName: "One Shop Cameria", target: 105, achieved: 100, percentage: 95 },
  { shopName: "One Shop Unaza Re 2", target: 115, achieved: 103, percentage: 90 },
  { shopName: "One Shop Vore", target: 90, achieved: 85, percentage: 94 },
  { shopName: "One Shop Fushe Kruje", target: 85, achieved: 76, percentage: 89 },
  { shopName: "One Shop Kruje", target: 80, achieved: 72, percentage: 90 },
  { shopName: "One Shop Shijak", target: 75, achieved: 65, percentage: 87 },
  { shopName: "One Shop Rr Dibres 2", target: 100, achieved: 92, percentage: 92 },
  { shopName: "One Shop Shk Baletit", target: 95, achieved: 88, percentage: 93 },
  { shopName: "One Shop Misto Mame", target: 70, achieved: 59, percentage: 84 },
  { shopName: "One Shop Paskuqan", target: 65, achieved: 55, percentage: 85 },
  { shopName: "One Shop Ura Institut", target: 60, achieved: 54, percentage: 90 },
];

export const smStats: PersonStat[] = [
  { name: "Briselda Bubeqi", shop: "One Shop Hoxha Tahsim", role: "SM", target: 50, achieved: 47, percentage: 94 },
  { name: "Klodeta Hoxha", shop: "One Shop Cameria", role: "SM", target: 45, achieved: 43, percentage: 96 },
  { name: "Migena Lekaj", shop: "One Shop Rr Kavajes", role: "SM", target: 42, achieved: 39, percentage: 93 },
  { name: "Ardita Zguri", shop: "One Shop Vore", role: "SM", target: 38, achieved: 36, percentage: 95 },
  { name: "Evelina Basha", shop: "One Shop Shk Baletit", role: "SM", target: 40, achieved: 37, percentage: 93 },
  { name: "Dorinë Hadëraj", shop: "One Shop Vasil Shanto", role: "SM", target: 48, achieved: 43, percentage: 90 },
  { name: "Elona Ndini", shop: "One Shop Blv Zogu I", role: "SM", target: 44, achieved: 39, percentage: 89 },
  { name: "Kristi Shtepani", shop: "One Shop Rr Dibres 2", role: "SM", target: 40, achieved: 36, percentage: 90 },
];

export const srStats: PersonStat[] = [
  { name: "Ina Zoga", shop: "One Shop Vasil Shanto", role: "SR", target: 30, achieved: 28, percentage: 93 },
  { name: "Entrita Zelo", shop: "One Shop Rr Kavajes 2", role: "SR", target: 28, achieved: 26, percentage: 93 },
  { name: "Lorenca Pirra", shop: "One Shop Unaza Re 2", role: "SR", target: 32, achieved: 30, percentage: 94 },
  { name: "Laura Çali", shop: "One Shop Hoxha Tahsim", role: "SR", target: 30, achieved: 27, percentage: 90 },
  { name: "Amina Kurti", shop: "One Shop Fushe Kruje", role: "SR", target: 25, achieved: 24, percentage: 96 },
  { name: "Veri Losha", shop: "One Shop Shijak", role: "SR", target: 22, achieved: 20, percentage: 91 },
  { name: "Armela Beka", shop: "One Shop Cameria", role: "SR", target: 28, achieved: 26, percentage: 93 },
  { name: "Irena Dedej", shop: "One Shop Kruje", role: "SR", target: 24, achieved: 22, percentage: 92 },
];

export const topPerformers: TopPerformer[] = [
  { rank: 1, name: "Klodeta Hoxha", shop: "One Shop Cameria", role: "SM", score: 96, month: "Mars 2026" },
  { rank: 2, name: "Amina Kurti", shop: "One Shop Fushe Kruje", role: "SR", score: 95, month: "Mars 2026" },
  { rank: 3, name: "Ardita Zguri", shop: "One Shop Vore", role: "SM", score: 94, month: "Mars 2026" },
];
