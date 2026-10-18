import Sidebar from './Sidebar'

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}