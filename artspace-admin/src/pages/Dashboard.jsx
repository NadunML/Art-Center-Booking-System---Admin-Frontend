
import {
  CalendarCheck,
  Clock3,
  CalendarDays,
  Users,
  ArrowUpRight,
  ClipboardList,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    title: "Total Bookings",
    value: "128",
    subtitle: "All booking requests",
    icon: CalendarCheck,
  },
  {
    title: "Pending Requests",
    value: "12",
    subtitle: "Waiting for approval",
    icon: Clock3,
  },
  {
    title: "Upcoming Events",
    value: "08",
    subtitle: "University events",
    icon: CalendarDays,
  },
  {
    title: "Registered Students",
    value: "245",
    subtitle: "Student accounts",
    icon: Users,
  },
];

const recentRequests = [
  {
    id: "BK-001",
    event: "Music Club Practice",
    student: "Student 01",
    date: "2026-10-20",
    status: "Pending",
  },
  {
    id: "BK-002",
    event: "Drama Rehearsal",
    student: "Student 02",
    date: "2026-10-22",
    status: "Approved",
  },
  {
    id: "BK-003",
    event: "Cultural Event Practice",
    student: "Student 03",
    date: "2026-10-24",
    status: "Pending",
  },
];

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="page-heading">
        <div>
          <h2>Admin Overview</h2>
          <p>Manage bookings, events and student activities.</p>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map(({ title, value, subtitle, icon: Icon }) => (
          <div className="stat-card" key={title}>
            <div className="stat-top">
              <span>{title}</span>
              <div className="stat-icon">
                <Icon size={21} />
              </div>
            </div>
            <h3>{value}</h3>
            <p>{subtitle}</p>
          </div>
        ))}
      </div>

      <div className="dashboard-panels">
        <section className="content-card">
          <div className="card-heading">
            <div>
              <h3>Recent Booking Requests</h3>
              <p>Latest student booking submissions</p>
            </div>
            <Link to="/bookings" className="view-all">
              View All <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="table-scroll">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>Event</th>
                  <th>Student</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentRequests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.id}</td>
                    <td>{request.event}</td>
                    <td>{request.student}</td>
                    <td>{request.date}</td>
                    <td>
                      <span
                        className={`status-badge ${request.status.toLowerCase()}`}
                      >
                        {request.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="content-card quick-actions">
          <div className="card-heading">
            <div>
              <h3>Quick Actions</h3>
              <p>Access management tools</p>
            </div>
          </div>

          <Link to="/bookings" className="action-link">
            <ClipboardList size={20} />
            <span>Review Booking Requests</span>
            <ArrowUpRight size={17} />
          </Link>

          <Link to="/calendar" className="action-link">
            <CalendarDays size={20} />
            <span>View Booking Calendar</span>
            <ArrowUpRight size={17} />
          </Link>

          <Link to="/events" className="action-link">
            <CalendarCheck size={20} />
            <span>Manage University Events</span>
            <ArrowUpRight size={17} />
          </Link>

          <Link to="/students" className="action-link">
            <Users size={20} />
            <span>Manage Students</span>
            <ArrowUpRight size={17} />
          </Link>
        </section>
      </div>
    </div>
  );
}
