import Link from 'next/link'

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.brand}>
        <span style={styles.brandIcon}>📰</span>
        <span style={styles.brandText}>News<span style={styles.brandAccent}>Agg</span></span>
      </Link>
      <div style={styles.links}>
        <Link href="/" style={styles.link}>Home</Link>
        <Link href="/search" style={styles.link}>Cari Berita</Link>
        <Link href="/favorites" style={styles.favBtn}>⭐ Favorit</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 80px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
    position: 'sticky' as const,
    top: 0,
    zIndex: 100,
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
  },
  brandIcon: {
    fontSize: '24px',
  },
  brandText: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '1px',
  },
  brandAccent: {
    color: '#ffd700',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '32px',
  },
  link: {
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    fontSize: '15px',
    fontWeight: '500' as const,
    letterSpacing: '0.5px',
  },
  favBtn: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    backdropFilter: 'blur(10px)',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontWeight: 'bold' as const,
    fontSize: '14px',
    border: '1px solid rgba(255,255,255,0.3)',
  },
}