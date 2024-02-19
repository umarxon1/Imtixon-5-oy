import { Home } from "../pages/home"
import { About } from "../pages/about"
import { Shop } from "../pages/shop"
import { Pages } from "../pages/pages"
import { Projects } from "../pages/projects"
import { News } from "../pages/news"
export const pages = [
    {
        component: <Home/>
    },
    {
        component: <About/>,
        path: "about"
    },
    {
        component: <Shop/>,
        path: "shop"
    },
    {
        component: <Pages/>,
        path: "pages"
    },
    {
        component: <Projects/>,
        path: "projects"
    },
    {
        component: <News/>,
        path: "news"
    }
]