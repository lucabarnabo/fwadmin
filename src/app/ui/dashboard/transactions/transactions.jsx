import styles from "./transactions.module.css"

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Ultima Actividad</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Status</td>
                        <td>Fecha Ultimo Contacto</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>
                             <span className={`${styles.status} ${styles.pending}`}>Pendiente</span>
                        </td>
                        <td>29-10-2024</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions