import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../page-template.module.css'

export default function AboutPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.pageContent}>
        <h1 className={styles.pageTitle}>About Us Page</h1>
      </main>
      <Footer />
    </div>
  )
}
