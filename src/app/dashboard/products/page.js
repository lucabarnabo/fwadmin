"use client"
import styles from '@/app/ui/dashboard/product/product.module.css'
import Search from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import Pagination from '@/app/ui/dashboard/pagination/pagination'
import AddProducts from './addProducts/page'
import { useState } from 'react'
import Modal from "../../ui/dashboard/modal/modal"

export default function product() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
    
    return (
        <div className={styles.container}>

            {isModalOpen === true && (<Modal isOpen={isModalOpen} title={"Agregar Item"} onClose={handleCloseModal}>
                <AddProducts/>
            </Modal>)
            }


            <div className={styles.top}>
                <Search placeholder="Buscar un item..." />              
                <button onClick={handleOpenModal} className={styles.addButton}>Agregar</button>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Categoria</td>
                        <td>Precio</td>
                        <td>Traslado</td>
                        <td>Status</td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Sunset Bodega Viamonte</td>
                            <td>Sunset - Fiesta</td>
                            <td>$45.0000</td>
                            <td>Si</td>
                            <td>Activo</td>
                            <td>
                                <div className={styles.buttons}>

                                <Link href="/">
                                    <button className={`${styles.button} ${ styles.view}`} >Ver</button>
                                </Link>
                                <button className={`${styles.button} ${ styles.delete}`} >Borrar</button>
                                </div>
                             </td>
                </tr>
                    </tbody>
                
            </table>
            <Pagination/>
        </div>
    )
       
}