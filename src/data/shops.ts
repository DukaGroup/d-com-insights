export interface Shop {
  id: number;
  name: string;
  address: string;
  status: "Aktiv" | "Joaktiv";
  city: string;
  imageUrl?: string;
}

const shopRows: Omit<Shop, "imageUrl">[] = [
  { id: 1, name: "One Shop Don Bosko", address: "Tirane, Rr. Don Bosko, Pall 326, kati perdhe", status: "Aktiv", city: "Tiranë" },
  { id: 2, name: "One Shop Ballsh", address: "Fier, Lagjja 28 Nëntori, Rruga Shetitorja, Ballsh", status: "Aktiv", city: "Ballsh" },
  { id: 3, name: "One Shop Fushe Kruje", address: "Fushe Kruje, Lagja Kastrioti, qender", status: "Aktiv", city: "Fushë-Krujë" },
  { id: 4, name: "One Shop Kruje", address: "Durrës, Krujë, Lagjja Qender, Rr. Skenderbeu", status: "Aktiv", city: "Krujë" },
  { id: 5, name: "One Shop Blv Zogu I", address: "Bulevardi Zogu i Pare, Prane zyres postare nr. 4", status: "Aktiv", city: "Tiranë" },
  { id: 6, name: "One Shop Delvine", address: "Vlore, Delvine, Lagjja Sinan Ballaci, Sheshi Sulejman Delvina", status: "Aktiv", city: "Delvinë" },
  { id: 7, name: "One Shop Durres 4", address: "Durres, Lagjja nr 6, Rr. Deshmoret, Godina 388", status: "Aktiv", city: "Durrës" },
  { id: 8, name: "One Shop Durres 5", address: "Durres, Lagjja 4, Bulevardi Kryesor, tek ish Procredit Bank", status: "Aktiv", city: "Durrës" },
  { id: 9, name: "One Shop Divjake", address: "Fier, Divjake, Rruga Divjak", status: "Aktiv", city: "Divjakë" },
  { id: 10, name: "One Shop Fier", address: "Fier, Ish Mapo Indistriale, Lagjia Apollonia", status: "Aktiv", city: "Fier" },
  { id: 11, name: "One Shop Fier 2", address: "Fier, Lagjia Liri, Rruga Jakov Xoxa, Pallati Sharra", status: "Aktiv", city: "Fier" },
  { id: 12, name: "One Shop Fier 3", address: "Fier, Lagjia Apollonia, Rruga Brigada e 11 Sulmuese", status: "Aktiv", city: "Fier" },
  { id: 13, name: "One Shop Fier 4", address: "Lagjja 11 Janari ZK 8531, Fier", status: "Aktiv", city: "Fier" },
  { id: 14, name: "One Shop Fresku", address: "Njesia Administrative Dajt, Rruga Dajti, Ndertesa Nr. 5", status: "Aktiv", city: "Tiranë" },
  { id: 15, name: "One Corner Fushe Kruje", address: "Fushe Kruje, ZK 1664, Nr. 5/252", status: "Aktiv", city: "Fushë-Krujë" },
  { id: 16, name: "One Shop Gjirokaster", address: "Gjirokaster, Bulevardi 18 Shtatori, Godina Nr. 1", status: "Aktiv", city: "Gjirokastër" },
  { id: 17, name: "One Shop Gjirokaster 2", address: "Gjirokaster, Rruga e Lumit, ZK 8541", status: "Aktiv", city: "Gjirokastër" },
  { id: 18, name: "One Shop Hoxha Tahsim", address: "Tirane, Rr. Hoxha Tah'sim, Pall 288", status: "Aktiv", city: "Tiranë" },
  { id: 19, name: "One Shop Institut", address: "Rr. Kastiotet, Ndertesa 3-kt, Njesia Nr. 11, Tirane", status: "Aktiv", city: "Tiranë" },
  { id: 20, name: "One Shop Ksamil", address: "Ksamil, Qender", status: "Aktiv", city: "Ksamil" },
  { id: 21, name: "One Shop Laprake 3", address: "Njesia Nr. 11, Rruga Lord Bajron, Pallati 54/1, Laprake", status: "Aktiv", city: "Tiranë" },
  { id: 22, name: "One Shop Lushnje", address: "Fier, Lushnje, Lagjia Skënder Libohova, perball Bashkise", status: "Aktiv", city: "Lushnjë" },
  { id: 23, name: "One Shop Lushnje 2", address: "Fier, Lushnje, Lagjja Xhevdet Nepravishta", status: "Aktiv", city: "Lushnjë" },
  { id: 24, name: "One Shop Misto Mame", address: "Tirane, Lgj Yzberisht, Pll Cabej", status: "Aktiv", city: "Tiranë" },
  { id: 25, name: "One Shop Paskuqan", address: "Tirane, Paskuqan, Rr. Demokracia, Lagjia Qender", status: "Aktiv", city: "Tiranë" },
  { id: 26, name: "One Shop Patos", address: "Fier, Patos, Lagjja 1 Maji, Pall. 10", status: "Aktiv", city: "Patos" },
  { id: 27, name: "One Shop Roskovec", address: "Fier, Roskovec, Lagjja 1, Rr. Naftëtarët", status: "Aktiv", city: "Roskovec" },
  { id: 28, name: "One Shop Rr Dibres 2", address: "Tirane, Rruga e Dibres, Kompleksi Halili, pallati C", status: "Aktiv", city: "Tiranë" },
  { id: 29, name: "One Shop Rr Kavajes", address: "Rr. Kavajes, ZK 8380, Njesia Nr. 10, Tirane", status: "Aktiv", city: "Tiranë" },
  { id: 30, name: "One Shop Rr Kavajes 2", address: "Rr. e Kavajes ZK 8220, Tirane", status: "Aktiv", city: "Tiranë" },
  { id: 31, name: "One Shop Sarande 2", address: "Sarande, Lgj. Nr 3, Rr. Onheizmi", status: "Aktiv", city: "Sarandë" },
  { id: 32, name: "One Shop Shijak", address: "Lagjia Popullore, Pallati 3 katesh, Shijak, Durres", status: "Aktiv", city: "Shijak" },
  { id: 33, name: "One Shop Shk Baletit", address: "Tirane, Njesia Nr. 2, Rruga Mihal Grameno", status: "Aktiv", city: "Tiranë" },
  { id: 34, name: "One Shop Sukth", address: "Ndertese 1 Kateshe, prane mbikalimit Sukth I Ri, Durres", status: "Aktiv", city: "Sukth" },
  { id: 35, name: "One Shop Tepelene", address: "Gjirokaster, Tepelene, Bulevardi Ali Pashe Tepelena", status: "Aktiv", city: "Tepelenë" },
  { id: 36, name: "One Shop Unaza Re 2", address: "Tirane, Njesia nr. 14, Rr. Teodor Keko", status: "Aktiv", city: "Tiranë" },
  { id: 37, name: "One Shop Ura Institut", address: "Tirane, Institut, Lgj Treshi, Rr. Lunxheri", status: "Aktiv", city: "Tiranë" },
  { id: 38, name: "One Shop Vasil Shanto", address: "Rr. Muhamet Gjollesha, Pall 35/1, Tiranë", status: "Aktiv", city: "Tiranë" },
  { id: 39, name: "One Shop Vore", address: "Njesi Sherbimi, ish Mapos, Vore, Tirane", status: "Aktiv", city: "Vorë" },
  { id: 40, name: "One Shop Cameria", address: "Rruga Çameria, prane Postes Shqiptare", status: "Aktiv", city: "Tiranë" },
  { id: 41, name: "One Shop Fier 5", address: "Lagjia Liri Gero, ngjitur me shkollen Kristaq Shtembari", status: "Aktiv", city: "Fier" },
  { id: 42, name: "One Shop Sarande", address: "Sarande, Mustafa Matohiti, Lagja Nr. 1", status: "Aktiv", city: "Sarandë" },
  { id: 43, name: "One Corner Maminas 1", address: "Durres, Shijak, ZK 3796, Kati i pare", status: "Aktiv", city: "Maminas" },
  { id: 44, name: "Mobile Van D-COM", address: "AB920PM", status: "Aktiv", city: "Mobile" },
];

const SHOP_IMAGE_COUNT = 41;
const shopImageFiles = Array.from(
  { length: SHOP_IMAGE_COUNT },
  (_, index) => `shop-${String(index + 1).padStart(2, "0")}.jpeg`
);

export const shops: Shop[] = shopRows.map((shop, index) => {
  const imageFile = shopImageFiles.length
    ? shopImageFiles[index % shopImageFiles.length]
    : undefined;
  return {
    ...shop,
    imageUrl: imageFile ? `/shop-images/${imageFile}` : "/placeholder.svg",
  };
});
