import styles from "../../../ui/dashboard/product/addProducts/addProducts.module.css"
import React, { useEffect, useState } from 'react';
import axios from "axios";

const AddProducts = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
  const getCategories = async () => {
    axios.get(`http://localhost:3000/category`)
      .then(function (res) {
    setCategories(res.data)
  })
  .catch(function (err) {
    setError(err)
    console.log(error);
  })
  }
   getCategories()
 }, []);
  
    return (
      <div className={styles.container}>
        <form action="" className={styles.form}>
        <input type="text" placeholder="Titulo" name="title" required/>
         <select name="category" placeholder="Categoria" id="category">
    {categories.map(categorie => (
      <option key={categorie.id} value={categorie.id}>
        {categorie.cat}
      </option>
    ))}
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