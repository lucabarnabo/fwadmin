import Navbar from "@/app/ui/dashboard/navbar/navbar"
import Sidebar from "@/app/ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"

const Layout = ({ children, modal }) => {
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div >
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}
export default Layout