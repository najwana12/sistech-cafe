'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          SISTECH CAFE
        </Link>

        <div className={styles.navLinks}>
          <Link
            href="/menu"
            className={`${styles.navLink} ${pathname === '/menu' ? styles.active : ''}`}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}
          >
            About Us
          </Link>
          <Link
            href="/promo"
            className={`${styles.navLink} ${pathname === '/promo' ? styles.active : ''}`}
          >
            Promo
          </Link>
          <Link href="/login" className={styles.loginBtn}>
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}
