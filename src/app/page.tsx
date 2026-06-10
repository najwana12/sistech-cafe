import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>SISTECH CAFE</h1>
          <p className={styles.heroSubtitle}>
            Local Coffee brewed by Extraordinary Women in Indonesia
          </p>
          <Link href="/menu" className={styles.ctaButton}>
            See our Menu
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
