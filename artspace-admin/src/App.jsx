
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";

function PlaceholderPage({ title }) {
  return (
    <div className="placeholder-page">
      <h2>{title}</h2>
      <p>This section is under development.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          <Route
            path="bookings"
            element={<PlaceholderPage title="Booking Requests" />}
          />

          <Route
            path="calendar"
            element={<PlaceholderPage title="Booking Calendar" />}
          />

          <Route
            path="events"
            element={<PlaceholderPage title="University Events" />}
          />

          <Route
            path="students"
            element={<PlaceholderPage title="Student Management" />}
          />

          <Route
            path="notifications"
            element={<PlaceholderPage title="Notifications" />}
          />

          <Route
            path="reports"
            element={<PlaceholderPage title="Reports & Analytics" />}
          />

          <Route
            path="profile"
            element={<PlaceholderPage title="Admin Profile" />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
