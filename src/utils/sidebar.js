import Generic from "../page/Generic";
import Buyutmalar from "../page/Buyurtmalar";
import Mahsulotlar from "../page/Mahsulotlar";
import Kategoriyalar from "../page/Kategoriyalar";
import Filiallar from "../page/Filiallar";

// Icons
import { ReactComponent as buyurtma } from "../assets/icons/buyurtmalar.svg";
import { ReactComponent as filial } from "../assets/icons/filial.svg";
import { ReactComponent as hisobot } from "../assets/icons/hisobot.svg";
import { ReactComponent as hodimlar } from "../assets/icons/settings.svg";
import { ReactComponent as settings } from "../assets/icons/settings.svg";
import { ReactComponent as mahsulotlar } from "../assets/icons/mahsulotlar.svg";
import { ReactComponent as kategoriya } from "../assets/icons/kategoriya.svg";
import { ReactComponent as mijozlar } from "../assets/icons/mijozlar.svg";
import Xarita from "../page/Xarita";
import Hisobot from "../page/Xisobot";
import MijozlarPage from "../page/Mijozlar";

export const sidebarData = [
  {
    id: 1,
    path: "/",
    title: "Buyurtmalar",
    Component: Buyutmalar,
    Icon: buyurtma,
    hidden: false,
  },
  {
    id: 2,
    path: "/maxsulotlar",
    title: "Maxsulotlar",
    Component: Mahsulotlar,
    Icon: mahsulotlar,
    hidden: false,
  },
  {
    id: 3,
    path: "/katigoriya",
    title: "Katigoriya",
    Component: Kategoriyalar,
    Icon: kategoriya,
    hidden: false,
  },
  {
    id: 4,
    path: "/filiallar",
    title: "Filiallar",
    Component: Filiallar,
    Icon: filial,
    hidden: false,
  },
  {
    id: 5,
    path: "/mijozlar",
    title: "Mijozlar",
    Component: MijozlarPage,
    Icon: mijozlar,
    hidden: false,
  },
  {
    id: 6,
    path: "/hisobot",
    title: "Hisobot",
    Component: Hisobot,
    Icon: hisobot,
    hidden: false,
  },
  // {
  //   id: 7,
  //   path: "/hodimlar",
  //   title: "Hodimlar",
  //   Component: Generic,
  //   Icon: hodimlar,
  //   hidden: false,
  // },
  {
    id: 7,
    path: "/xarita",
    title: "Xarita",
    Component: Xarita,
    Icon: settings,
    hidden: false,
  },
];
