import UltimasNoticias from "./layout/ultimas-noticias";
import Medios from "./layout/medios";
import Cuentas from "./layout/cuentas";


const routes = [
  { type: "title", title: "Noticias", key: "noticias" },
  {
    type: "collapse",
    name: "Últimas noticias",
    key: "ultimas-noticias",
    route: "/",
    //icon: <Shop size="12px" />,
    component: UltimasNoticias,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Medios de comunicación",
    key: "medios",
    route: "/medios",
    //icon: <Office size="12px" />,
    component: Medios,
    noCollapse: true,
  },
  { type: "title", title: "Cuentas Twitter", key: "cuentas-twitter" },
  {
    type: "collapse",
    name: "Cuentas más activas",
    key: "cuentas",
    route: "/cuentas",
    //icon: <CustomerSupport size="12px" />,
    component: Cuentas,
    noCollapse: true,
  }
];

export default routes;
