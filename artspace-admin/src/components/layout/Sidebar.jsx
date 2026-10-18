
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  CalendarDays,
  CalendarHeart,
  Users,
  Bell,
  ChartNoAxesCombined,
  UserCircle,
  LogOut,
  Music2,
  X,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Booking Requests", path: "/bookings", icon: ClipboardList },
  { name: "Booking Calendar", path: "/calendar", icon: CalendarDays },
  { name: "University Events", path: "/events", icon: CalendarHeart },
  { name: "Students", path: "/students", icon: Users },
  { name: "Notifications", path: "/notifications", icon: Bell },
  { name: "Reports & Analytics", path: "/reports", icon: ChartNoAxesCombined },
];

export default function Sidebar({ isOpen, onClose }) {
  const linkClass = ({ isActive }) =>
    `admin-nav-link ${isActive ? "active" : ""}`;

  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose} />
      )}

      <aside className={`admin-sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-brand">
          <div className="brand-icon">
            <Music2 size={22} strokeWidth={2.3} />
          </div>

          <div className="brand-text">
            <h2>ArtSpace</h2>
            <p>Admin Portal</p>
          </div>

          <button
            className="sidebar-close"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <div className="sidebar-section-label">MANAGEMENT</div>

        <nav className="sidebar-navigation">
          {navigation.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={linkClass}
              onClick={onClose}
            >
              <Icon size={19} strokeWidth={1.9} />
              <span>{name}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-bottom">
          <NavLink
            to="/profile"
            className={linkClass}
            onClick={onClose}
          >
            <UserCircle size={19} />
            <span>Admin Profile</span>
          </NavLink>

          <button
            type="button"
            className="admin-nav-link logout-button"
            onClick={() =>
              window.alert("Logout will be enabled after authentication setup.")
            }
          >
            <LogOut size={19} />
            <span>Logout</span>
          </button>

          <div className="sidebar-footer">ArtSpace © 2026</div>
        </div>
      </aside>
    </>
  );
}
