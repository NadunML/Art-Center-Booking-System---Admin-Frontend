const links = [
  ['Dashboard', '/'],
  ['Booking Requests', '/booking-requests'],
  ['Calendar', '/calendar'],
  ['Events', '/events'],
  ['Students', '/students'],
  ['Notifications', '/notifications'],
  ['Reports', '/reports'],
]

export default function Sidebar() {
  return (
    <aside aria-label="Main navigation">
      <nav>
        {links.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
      </nav>
    </aside>
  )
}