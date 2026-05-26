export function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 24px',
      backgroundColor: '#1a202c',
      borderBottom: '1px solid #2d3748'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="NextPage Logo" width="50" height="50" />
      </div>
      <h1 style={{
        margin: 0,
        fontSize: '28px',
        fontWeight: 'bold',
        color: '#e5e7eb',
        letterSpacing: '2px'
      }}>NextPage</h1>
    </header>
  )
}

