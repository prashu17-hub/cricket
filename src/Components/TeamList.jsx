function TeamList({ members }) {
  if (!members?.length) {
    return <p className="muted">No team members yet.</p>
  }

  return (
    <section className="section team-list">
      <h2>Team roster</h2>
      <ul className="team-grid">
        {members.map((member) => (
          <li key={member.id} className="team-card">
            <h3>{member.name}</h3>
            <p>Role: {member.role}</p>
            <p>Experience: {member.exp} yrs</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default TeamList
