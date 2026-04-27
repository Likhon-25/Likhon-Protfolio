import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Footer, ScrollProgress, Background } from '../components/Utils'

export default function Layout() {
  return (
    <div className="min-h-screen relative">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
