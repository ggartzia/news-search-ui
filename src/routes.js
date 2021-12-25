import UltimasNoticias from "./layout/ultimas-noticias";
import Trending from "./layout/trending";
import Medios from "./layout/medios";
import Temas from "./layout/temas";
import Cuentas from "./layout/cuentas";


const routes = [
  { type: "title", title: "Noticias", key: "noticias" },
  {
    type: "link",
    title: "Últimas noticias",
    key: "ultimas-noticias",
    route: "/ultimas-noticias",
    component: UltimasNoticias
  },
  {
    type: "link",
    title: "Noticias más comentadas",
    key: "trending",
    route: "/trending",
    component: Trending
  },
  {
    type: "link",
    title: "Medios de comunicación",
    key: "medios",
    route: "/medios",
    component: Medios
  },
  {
    type: "link",
    title: "Temas más comentados",
    key: "temas",
    route: "/temas",
    component: Temas
  },
  { type: "title", title: "Cuentas Twitter", key: "cuentas-twitter" },
  {
    type: "link",
    title: "Cuentas más activas",
    key: "cuentas",
    route: "/cuentas",
    component: Cuentas
  }
];

export default routes;
