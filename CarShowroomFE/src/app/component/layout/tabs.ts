import { RouterPaths } from "../../app.constants";
import { Tab } from "../sidenav/tab";


export const TABS: Tab[] = [
  {
    title: 'showroom management',
    link: `/${RouterPaths.HOME}/${RouterPaths.SHOWROOM_MANAGEMENT}`,
  },
  {
    title: 'car management',
    link: `/${RouterPaths.HOME}/${RouterPaths.CAR_MANAGEMENT}`,
 },

];
