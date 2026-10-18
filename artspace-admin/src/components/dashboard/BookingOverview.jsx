export default function BookingOverview({ bookings = [] }) {
  return (
    <section className="booking-overview">
      <h2>Booking Overview</h2>
      {bookings.length === 0 ? (
        <p>No bookings to display.</p>
      ) : (
        <ul>
          {bookings.map((booking) => (
            <li key={booking.id}>{booking.title}</li>
          ))}
        </ul>
      )}
    </section>
  )
}