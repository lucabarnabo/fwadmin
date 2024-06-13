import styles from "../../../ui/dashboard/product/addProducts/addProducts.module.css"

const AddProducts = () => {
    return (
    
      <div className={styles.container}>
        
        <div className={styles.title}>Agregar producto</div>
        <form action="" className={styles.form}>
        <input type="text" placeholder="Titulo" name="title" required/>
            <select name="category" placeholder="Categoria" id="category">
                <option value="Bodega">Bodega</option>
                <option value="Fiesta">Fiesta</option>
                <option value="Comida">Comida</option>
            </select>
     
          <input type="number"  placeholder="Precio" name="price" required />
          <input type="text" placeholder="Proveedor" name="provider" required />
          <input type="text" placeholder="Traslado?" name="freight" required />
          <textarea type="text" placeholder="Descripción" name="desc" id="desc" rows={4} required />
          <button type="submit">Guardar</button>
        </form>
        </div> 
    )
}

export default AddProducts