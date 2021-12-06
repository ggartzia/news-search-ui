import UltimasNoticias from "./layout/ultimas-noticias";
import Medios from "./layout/medios";
import Cuentas from "./layout/cuentas";


const routes = [
  { type: "title", title: "Noticias", key: "noticias" },
  {
    type: "link",
    name: "Últimas noticias",
    key: "ultimas-noticias",
    route: "/",
    icon: "",
    component: UltimasNoticias
  },
  {
    type: "link",
    name: "Medios de comunicación",
    key: "medios",
    route: "/medios",
    icon: "",
    component: Medios
  },
  { type: "title", title: "Cuentas Twitter", key: "cuentas-twitter" },
  {
    type: "link",
    name: "Cuentas más activas",
    key: "cuentas",
    route: "/cuentas",
    icon: "",
    component: Cuentas
  }
];

export default routes;
