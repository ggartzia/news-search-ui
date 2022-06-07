import Latest from "./layout/news/Latest";
import Related from "./layout/news/Related";
import Tweets from "./layout/tweets";
import Trending from "./layout/news/Trending";
import Medios from "./layout/medios";
import MediaNews from "./layout/medios/News"
import Temas from "./layout/temas";
import BuscarTema from "./layout/temas/BuscarTema";
import Cuentas from "./layout/cuentas";
import UserTweets from "./layout/tweets/UserTweets";


const routes = [
  { type: "title", title: "Noticias", key: "noticiasTitulo" },
  {
    type: "link",
    title: "Últimas noticias",
    key: "noticias",
    route: "/noticias",
    exact: true,
    component: Latest
  },
  {
    type: "link",
    title: "Últimas noticias",
    key: "noticiasRelacionadas",
    route: "/noticias/:id",
    exact: false,
    component: Related
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
  {
    type: "link",
    title: "Noticias del medio",
    key: "medios",
    route: "/medios/:medio",
    exact: false,
    component: MediaNews
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
    component: Tweets
  },
  {
    type: "link",
    title: "Cuentas",
    key: "cuentas",
    route: "/cuentas",
    exact: true,
    component: Cuentas
  },
  {
    type: "link",
    title: "Cuentas",
    key: "cuentas",
    route: "/cuentas/:user",
    exact: false,
    component: UserTweets
  }
];

export default routes;
