import { Routes, Route } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { pages } from "./router/main-router"
import { nanoid } from "nanoid"
import { ShopSingle } from "./pages/shop-single"

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<MainLayout/>}>
          {pages.map((route) => (
            <Route key={nanoid()} path={route.path} index={route.path ? false : true} element={route.component}/>
          ))}
        <Route path="shop-single/:id" element={<ShopSingle/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
