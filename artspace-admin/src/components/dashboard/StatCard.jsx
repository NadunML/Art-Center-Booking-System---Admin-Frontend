export default function StatCard({ label, value }) {
  return (
    <section className="stat-card">
      <h2>{label}</h2>
      <p>{value}</p>
    </section>
  )
}