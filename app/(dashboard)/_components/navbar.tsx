import MobileSidebar from "./mobile-side-bar"
import NavbarRoutes from "./navbar-routes"

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      {/* mobile routes  */}
      <MobileSidebar />

      {/* sidebar routes */}
      <NavbarRoutes />
    </div>
  )
}

export default Navbar