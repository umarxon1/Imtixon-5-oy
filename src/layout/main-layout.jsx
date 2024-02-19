import { Header } from "./header"
import { Footer } from "./footer"
import { Outlet } from 'react-router-dom'
export const MainLayout = () => {
  return (
    <div>
        <div>
          <Header />
            <main>
              <Outlet />
            </main>
        </div>
        <Footer />
    </div>
  )
}
