import BookingOverview from '../components/dashboard/BookingOverview'
import StatCard from '../components/dashboard/StatCard'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <section aria-label="Summary">
        <StatCard label="Pending Requests" value={0} />
        <StatCard label="Upcoming Bookings" value={0} />
        <StatCard label="Registered Students" value={0} />
      </section>
      <BookingOverview />
    </div>
  )
}