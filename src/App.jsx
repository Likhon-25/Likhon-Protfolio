import { useState, useEffect, createContext, useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import { Loader } from './components/Utils'

// ===== THEME CONTEXT =====
export const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const [loading, setLoading] = useState(true)

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.documentElement
    html.classList.toggle('dark', isDark)
    html.classList.toggle('light', !isDark)
  }, [isDark])

  // Hide loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1700)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => setIsDark(prev => !prev)

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {loading && <Loader />}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </ThemeContext.Provider>
  )
}
