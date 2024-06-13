import styles from "./sidebar.module.css"
import MenuLink from "./menuLink/menuLink"
import Image from "next/image"
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdAttachMoney,
    MdWork,
    MdAnalitytics,
    MdPeople,
    MdOutLineSettings,
    MdHelpCenter,
    MdLogout,
} from 'react-icons/md'

const menuItems = [
    {
    title: "Admin",
    list: [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: <MdDashboard />,
        },
        {
            title: "Lista de Precios",
            path: "/dashboard/products",
            icon: <MdDashboard />,
        },
        {
            title: "Paquetes Confirmados",
            path: "/dashboard/sales",
            icon: <MdDashboard />,
        }
    ]
    },
    {
    title: "Presupuestos",
    list: [
        {
            title: "Presupuestador",
            path: "/dashboard/quotator",
            icon: <MdDashboard />,
        },
        {
            title: "CRM",
            path: "/dashboard/crm",
            icon: <MdSupervisedUserCircle />,
        },]
}]

const Sidebar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.user}>
                <Image className={styles.userImage} src="/NoAvatar.png" alt="" width="50" height="50" /> 
                <div className={styles.userDetail}>
                    <span className={styles.username}>User Name</span>
                    <span className={styles.userTitle}>User Credential</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => {
                    return<li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => {
                           return <MenuLink item={item} key={item.title}/>
                        })}
               </li>
            })}
            </ul>
            <button className={styles.logout} >
                <MdLogout />
                Logout</button>
        </div>
    )
}
export default Sidebar