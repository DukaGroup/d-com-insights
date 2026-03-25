export type StaffRole = "SM" | "SR" | "IE" | "SPV" | "Drejtor" | "Specialist" | "Back Office" | "Asistente";

export interface StaffMember {
  id: number;
  name: string;
  role: StaffRole;
  shop: string;
  email: string;
  phone: string;
  performance?: number;
  isVacant: boolean;
}

export interface OrgPerson {
  id: number;
  name: string;
  title: string;
  children?: OrgPerson[];
}

export const orgChart: OrgPerson = {
  id: 1,
  name: "Elidjan Shtepenja",
  title: "Drejtor Ekzekutiv",
  children: [
    {
      id: 2,
      name: "Elidjan Shtepenja",
      title: "Drejtor Shitjesh",
      children: [
        { id: 10, name: "Andi Bido", title: "SPV Non Eskluziv 1" },
        { id: 11, name: "Erjon Mezini", title: "SPV Non Eskluziv 2" },
        { id: 12, name: "Diella Shehu", title: "SPV Eskluziv 1" },
        { id: 13, name: "Juxhin Zaloshnja", title: "SPV Eskluziv 2" },
        { id: 14, name: "Anxhela Caka", title: "SPV Eskluziv 3" },
        { id: 15, name: "Suada Tola", title: "SPV Eskluziv 4" },
        { id: 16, name: "Rezarta Merko", title: "SPV Eskluziv 5" },
        { id: 17, name: "Vakant", title: "SPV Eskluziv 6" },
        { id: 18, name: "Bruno Caushaj", title: "SPV Akt Promocionale" },
        { id: 19, name: "Xhiljola Alba", title: "Back Office (suport)" },
        { id: 20, name: "Rudina Canga", title: "Back Office (suport)" },
      ],
    },
    {
      id: 3,
      name: "Marinela Majsa",
      title: "Drejtor Finance",
      children: [
        { id: 21, name: "Alketa Alimehmeti", title: "Specialist Finance 1" },
        { id: 22, name: "Vakant", title: "Specialist Finance 2" },
      ],
    },
    { id: 4, name: "Isidora Hado", title: "Asistente Zyre & HR" },
    { id: 5, name: "Vakant", title: "Mirembajtje" },
  ],
};

export const staff: StaffMember[] = [
  // SPV Eskluziv 1 - Diella Shehu
  { id: 101, name: "Dorinë Hadëraj", role: "SM", shop: "One Shop Vasil Shanto", email: "dorine.haderaj@dcom.al", phone: "+355 69 123 4501", performance: 87, isVacant: false },
  { id: 102, name: "Çeljeta Fejzulla", role: "SR", shop: "One Shop Vasil Shanto", email: "celjeta.fejzulla@dcom.al", phone: "+355 69 123 4502", performance: 82, isVacant: false },
  { id: 103, name: "Denisa Alhasa", role: "SR", shop: "One Shop Vasil Shanto", email: "denisa.alhasa@dcom.al", phone: "+355 69 123 4503", performance: 79, isVacant: false },
  { id: 104, name: "Ina Zoga", role: "SR", shop: "One Shop Vasil Shanto", email: "ina.zoga@dcom.al", phone: "+355 69 123 4504", performance: 91, isVacant: false },

  { id: 105, name: "Erjonida Qosja", role: "SM", shop: "One Shop Rr Kavajes 2", email: "erjonida.qosja@dcom.al", phone: "+355 69 123 4505", performance: 85, isVacant: false },
  { id: 106, name: "Mirjana Ndoci", role: "SR", shop: "One Shop Rr Kavajes 2", email: "mirjana.ndoci@dcom.al", phone: "+355 69 123 4506", performance: 76, isVacant: false },
  { id: 107, name: "Entrita Zelo", role: "SR", shop: "One Shop Rr Kavajes 2", email: "entrita.zelo@dcom.al", phone: "+355 69 123 4507", performance: 88, isVacant: false },

  { id: 108, name: "Migena Lekaj", role: "SM", shop: "One Shop Rr Kavajes", email: "migena.lekaj@dcom.al", phone: "+355 69 123 4508", performance: 90, isVacant: false },
  { id: 109, name: "Erilda Ismajlukaj", role: "SR", shop: "One Shop Rr Kavajes", email: "erilda.ismajlukaj@dcom.al", phone: "+355 69 123 4509", performance: 84, isVacant: false },
  { id: 110, name: "Klejdia Kaso", role: "SR", shop: "One Shop Rr Kavajes", email: "klejdia.kaso@dcom.al", phone: "+355 69 123 4510", performance: 77, isVacant: false },

  { id: 111, name: "Klajvi Rroshi", role: "SM", shop: "One Shop Fresku", email: "klajvi.rroshi@dcom.al", phone: "+355 69 123 4511", performance: 83, isVacant: false },
  { id: 112, name: "Marsela Alizoti", role: "SR", shop: "One Shop Fresku", email: "marsela.alizoti@dcom.al", phone: "+355 69 123 4512", performance: 80, isVacant: false },
  { id: 113, name: "Olesja Rushani", role: "SR", shop: "One Shop Fresku", email: "olesja.rushani@dcom.al", phone: "+355 69 123 4513", performance: 86, isVacant: false },
  { id: 114, name: "Arlinda Buci", role: "SR", shop: "One Shop Fresku", email: "arlinda.buci@dcom.al", phone: "+355 69 123 4514", performance: 74, isVacant: false },

  { id: 115, name: "Briselda Bubeqi", role: "SM", shop: "One Shop Hoxha Tahsim", email: "briselda.bubeqi@dcom.al", phone: "+355 69 123 4515", performance: 92, isVacant: false },
  { id: 116, name: "Laura Çali", role: "SR", shop: "One Shop Hoxha Tahsim", email: "laura.cali@dcom.al", phone: "+355 69 123 4516", performance: 88, isVacant: false },
  { id: 117, name: "Adelina Gega", role: "SR", shop: "One Shop Hoxha Tahsim", email: "adelina.gega@dcom.al", phone: "+355 69 123 4517", performance: 81, isVacant: false },
  { id: 118, name: "Ana Ferhataj", role: "SR", shop: "One Shop Hoxha Tahsim", email: "ana.ferhataj@dcom.al", phone: "+355 69 123 4518", performance: 75, isVacant: false },
  { id: 119, name: "Rasime Kerrnaja", role: "SR", shop: "One Shop Hoxha Tahsim", email: "rasime.kerrnaja@dcom.al", phone: "+355 69 123 4519", performance: 83, isVacant: false },

  { id: 120, name: "Evelina Basha", role: "SM", shop: "One Shop Shk Baletit", email: "evelina.basha@dcom.al", phone: "+355 69 123 4520", performance: 89, isVacant: false },
  { id: 121, name: "Nurieda Osmanlliu", role: "SR", shop: "One Shop Shk Baletit", email: "nurieda.osmanlliu@dcom.al", phone: "+355 69 123 4521", performance: 78, isVacant: false },
  { id: 122, name: "Brikena Topuzi", role: "SR", shop: "One Shop Shk Baletit", email: "brikena.topuzi@dcom.al", phone: "+355 69 123 4522", performance: 85, isVacant: false },

  { id: 123, name: "Kristi Shtepani", role: "SM", shop: "One Shop Rr Dibres 2", email: "kristi.shtepani@dcom.al", phone: "+355 69 123 4523", performance: 86, isVacant: false },
  { id: 124, name: "Erjona Kurti", role: "SR", shop: "One Shop Rr Dibres 2", email: "erjona.kurti@dcom.al", phone: "+355 69 123 4524", performance: 82, isVacant: false },
  { id: 125, name: "Hyze Krasniqi", role: "SR", shop: "One Shop Rr Dibres 2", email: "hyze.krasniqi@dcom.al", phone: "+355 69 123 4525", performance: 79, isVacant: false },

  { id: 126, name: "Klodeta Hoxha", role: "SM", shop: "One Shop Cameria", email: "klodeta.hoxha@dcom.al", phone: "+355 69 123 4526", performance: 91, isVacant: false },
  { id: 127, name: "Armela Beka", role: "SR", shop: "One Shop Cameria", email: "armela.beka@dcom.al", phone: "+355 69 123 4527", performance: 87, isVacant: false },
  { id: 128, name: "Kjara Doncauda", role: "SR", shop: "One Shop Cameria", email: "kjara.doncauda@dcom.al", phone: "+355 69 123 4528", performance: 73, isVacant: false },

  { id: 129, name: "Elona Ndini", role: "SM", shop: "One Shop Blv Zogu I", email: "elona.ndini@dcom.al", phone: "+355 69 123 4529", performance: 88, isVacant: false },
  { id: 130, name: "Eugela Mema", role: "SR", shop: "One Shop Blv Zogu I", email: "eugela.mema@dcom.al", phone: "+355 69 123 4530", performance: 84, isVacant: false },
  { id: 131, name: "Katerina Fejzulla", role: "SR", shop: "One Shop Blv Zogu I", email: "katerina.fejzulla@dcom.al", phone: "+355 69 123 4531", performance: 80, isVacant: false },
  { id: 132, name: "Sude Rama", role: "SR", shop: "One Shop Blv Zogu I", email: "sude.rama@dcom.al", phone: "+355 69 123 4532", performance: 76, isVacant: false },

  // SPV Eskluziv 2 - Juxhin Zaloshnja
  { id: 133, name: "Megisa Gjoka", role: "SM", shop: "One Shop Unaza Re 2", email: "megisa.gjoka@dcom.al", phone: "+355 69 123 4533", performance: 85, isVacant: false },
  { id: 134, name: "Klajdi Sulce", role: "SR", shop: "One Shop Unaza Re 2", email: "klajdi.sulce@dcom.al", phone: "+355 69 123 4534", performance: 82, isVacant: false },
  { id: 135, name: "Axhiresina Mulollari", role: "SR", shop: "One Shop Unaza Re 2", email: "axhiresina.m@dcom.al", phone: "+355 69 123 4535", performance: 78, isVacant: false },
  { id: 136, name: "Lorenca Pirra", role: "SR", shop: "One Shop Unaza Re 2", email: "lorenca.pirra@dcom.al", phone: "+355 69 123 4536", performance: 90, isVacant: false },
  { id: 137, name: "Ilva Leskaj", role: "SR", shop: "One Shop Unaza Re 2", email: "ilva.leskaj@dcom.al", phone: "+355 69 123 4537", performance: 81, isVacant: false },

  { id: 138, name: "Ejada Zeneli", role: "SM", shop: "One Shop Misto Mame", email: "ejada.zeneli@dcom.al", phone: "+355 69 123 4538", performance: 83, isVacant: false },
  { id: 139, name: "Vakant", role: "SR", shop: "One Shop Misto Mame", email: "", phone: "", isVacant: true },

  { id: 140, name: "Jasmin Peqini", role: "SM", shop: "One Shop Ura Institut", email: "jasmin.peqini@dcom.al", phone: "+355 69 123 4540", performance: 79, isVacant: false },
  { id: 141, name: "Alkida Canemti", role: "SR", shop: "One Shop Ura Institut", email: "alkida.canemti@dcom.al", phone: "+355 69 123 4541", performance: 86, isVacant: false },

  { id: 142, name: "Matilda Lami", role: "SM", shop: "One Shop Paskuqan", email: "matilda.lami@dcom.al", phone: "+355 69 123 4542", performance: 77, isVacant: false },
  { id: 143, name: "Aldona Shahini", role: "SR", shop: "One Shop Paskuqan", email: "aldona.shahini@dcom.al", phone: "+355 69 123 4543", performance: 84, isVacant: false },

  { id: 144, name: "Zare Sadikaj", role: "SM", shop: "One Shop Shijak", email: "zare.sadikaj@dcom.al", phone: "+355 69 123 4544", performance: 81, isVacant: false },
  { id: 145, name: "Veri Losha", role: "SR", shop: "One Shop Shijak", email: "veri.losha@dcom.al", phone: "+355 69 123 4545", performance: 88, isVacant: false },
  { id: 146, name: "Tea Sijoni", role: "SR", shop: "One Shop Shijak", email: "tea.sijoni@dcom.al", phone: "+355 69 123 4546", performance: 75, isVacant: false },

  { id: 147, name: "Ardita Zguri", role: "SM", shop: "One Shop Vore", email: "ardita.zguri@dcom.al", phone: "+355 69 123 4547", performance: 90, isVacant: false },
  { id: 148, name: "Gentjana Hysaj", role: "SR", shop: "One Shop Vore", email: "gentjana.hysaj@dcom.al", phone: "+355 69 123 4548", performance: 82, isVacant: false },
  { id: 149, name: "Fjona Merja", role: "SR", shop: "One Shop Vore", email: "fjona.merja@dcom.al", phone: "+355 69 123 4549", performance: 85, isVacant: false },
  { id: 150, name: "Adelina Metalia", role: "SR", shop: "One Shop Vore", email: "adelina.metalia@dcom.al", phone: "+355 69 123 4550", performance: 79, isVacant: false },

  { id: 151, name: "Ronaldo Gjikolaj", role: "SM", shop: "One Shop Fushe Kruje", email: "ronaldo.gjikolaj@dcom.al", phone: "+355 69 123 4551", performance: 87, isVacant: false },
  { id: 152, name: "Migena Gashi", role: "SR", shop: "One Shop Fushe Kruje", email: "migena.gashi@dcom.al", phone: "+355 69 123 4552", performance: 83, isVacant: false },
  { id: 153, name: "Ajdi Kovaci", role: "SR", shop: "One Shop Fushe Kruje", email: "ajdi.kovaci@dcom.al", phone: "+355 69 123 4553", performance: 80, isVacant: false },
  { id: 154, name: "Mario Resuli", role: "SR", shop: "One Shop Fushe Kruje", email: "mario.resuli@dcom.al", phone: "+355 69 123 4554", performance: 76, isVacant: false },
  { id: 155, name: "Amina Kurti", role: "SR", shop: "One Shop Fushe Kruje", email: "amina.kurti@dcom.al", phone: "+355 69 123 4555", performance: 91, isVacant: false },

  { id: 156, name: "Juljana Vranezi", role: "SM", shop: "One Shop Kruje", email: "juljana.vranezi@dcom.al", phone: "+355 69 123 4556", performance: 84, isVacant: false },
  { id: 157, name: "Irena Dedej", role: "SR", shop: "One Shop Kruje", email: "irena.dedej@dcom.al", phone: "+355 69 123 4557", performance: 88, isVacant: false },
  { id: 158, name: "Anisa Maja", role: "SR", shop: "One Shop Kruje", email: "anisa.maja@dcom.al", phone: "+355 69 123 4558", performance: 82, isVacant: false },

  // Management / HQ staff
  { id: 200, name: "Elidjan Shtepenja", role: "Drejtor", shop: "HQ", email: "elidjan@dcom.al", phone: "+355 69 100 0001", performance: 95, isVacant: false },
  { id: 201, name: "Marinela Majsa", role: "Drejtor", shop: "HQ", email: "marinela.majsa@dcom.al", phone: "+355 69 100 0002", performance: 93, isVacant: false },
  { id: 202, name: "Isidora Hado", role: "Asistente", shop: "HQ", email: "isidora.hado@dcom.al", phone: "+355 69 100 0003", performance: 88, isVacant: false },
  { id: 203, name: "Alketa Alimehmeti", role: "Specialist", shop: "HQ", email: "alketa.a@dcom.al", phone: "+355 69 100 0004", performance: 86, isVacant: false },
  { id: 204, name: "Xhiljola Alba", role: "Back Office", shop: "HQ", email: "xhiljola.alba@dcom.al", phone: "+355 69 100 0005", performance: 84, isVacant: false },
  { id: 205, name: "Rudina Canga", role: "Back Office", shop: "HQ", email: "rudina.canga@dcom.al", phone: "+355 69 100 0006", performance: 82, isVacant: false },

  // SPVs
  { id: 210, name: "Andi Bido", role: "SPV", shop: "HQ", email: "andi.bido@dcom.al", phone: "+355 69 100 0010", performance: 89, isVacant: false },
  { id: 211, name: "Erjon Mezini", role: "SPV", shop: "HQ", email: "erjon.mezini@dcom.al", phone: "+355 69 100 0011", performance: 87, isVacant: false },
  { id: 212, name: "Diella Shehu", role: "SPV", shop: "HQ", email: "diella.shehu@dcom.al", phone: "+355 69 100 0012", performance: 91, isVacant: false },
  { id: 213, name: "Juxhin Zaloshnja", role: "SPV", shop: "HQ", email: "juxhin.z@dcom.al", phone: "+355 69 100 0013", performance: 88, isVacant: false },
  { id: 214, name: "Anxhela Caka", role: "SPV", shop: "HQ", email: "anxhela.caka@dcom.al", phone: "+355 69 100 0014", performance: 85, isVacant: false },
  { id: 215, name: "Suada Tola", role: "SPV", shop: "HQ", email: "suada.tola@dcom.al", phone: "+355 69 100 0015", performance: 83, isVacant: false },
  { id: 216, name: "Rezarta Merko", role: "SPV", shop: "HQ", email: "rezarta.merko@dcom.al", phone: "+355 69 100 0016", performance: 86, isVacant: false },
  { id: 217, name: "Bruno Caushaj", role: "SPV", shop: "HQ", email: "bruno.caushaj@dcom.al", phone: "+355 69 100 0017", performance: 80, isVacant: false },

  // Vacant positions
  { id: 300, name: "Vakant", role: "SPV", shop: "HQ", email: "", phone: "", isVacant: true },
  { id: 301, name: "Vakant", role: "Specialist", shop: "HQ", email: "", phone: "", isVacant: true },
];
