import UltimasNoticias from "./layout/ultimas-noticias";
import Trending from "./layout/trending";
import Medios from "./layout/medios";
import Temas from "./layout/temas";
import BuscarTema from "./layout/temas/BuscarTema";
import Cuentas from "./layout/cuentas";


const routes = [
  { type: "title", title: "Noticias", key: "noticiasTitulo" },
  {
    type: "link",
    title: "Últimas noticias",
    key: "noticias",
    route: "/noticias",
    exact: true,
    component: UltimasNoticias
  },
  {
    type: "link",
    title: "Últimas noticias",
    key: "noticiasRelacionadas",
    route: "/noticias/:id",
    exact: false,
    component: UltimasNoticias
  },
  {
    type: "link",
    title: "Noticias más comentadas",
    key: "trending",
    route: "/trending",
    exact: true,
    component: Trending
  },
  {
    type: "link",
    title: "Medios de comunicación",
    key: "medios",
    route: "/medios",
    exact: true,
    component: Medios
  },
  { type: "title", title: "Temas", key: "temasTitulo" },
  {
    type: "link",
    title: "Temas más usados",
    key: "temas",
    route: "/temas",
    exact: true,
    component: Temas
  },
  {
    type: "link",
    title: "Buscar tema",
    route: "/buscarTema",
    key: "buscarTema",
    exact: true,
    component: BuscarTema
  },
  {
    type: "link",
    title: "Noticias sobre",
    route: "/buscarTema/:topic",
    key: "temaSeleccionado",
    exact: false,
    component: BuscarTema
  },
  { type: "title", title: "Actividad Twitter", key: "trendingTitulo" },
  {
    type: "link",
    title: "Actividad",
    route: "/trending/:id",
    key: "noticiaSeleccionada",
    exact: false,
    component: Trending
  },
  {
    type: "link",
    title: "Cuentas",
    key: "cuentas",
    route: "/cuentas",
    exact: true,
    component: Cuentas
  }
];

export default routes;
