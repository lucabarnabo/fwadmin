import styles from "../../../ui/dashboard/product/addProducts/addProducts.module.css"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify'

const AddProducts = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState(null);
  
  const notify = () => {
    res.status === 'success' ? toast.success(res.message) : toast.error(res.message)
  }

  //Metodo que serializa los datos del form y los envia a la api
  const formAction = async (formData) => {
    const data = Object.fromEntries(formData.entries())

    const response = await axios.post(`http://localhost:3000/category`, data)
      .then(function (res) {
        setRes({ status: 'success', message: "Insert con exito" })
        return res
      })
      .catch(function (err) {
        setRes({ status: 'error', message: "Insert sin exito" })
        return err
      })
  }

  useEffect(() => {
    if (res != null) {
      notify()
      setRes(null)
    }
  }, [res]);
  //setRidePrice controla el input lugar de actividad y establece el valor 
  //correspondiente del traslado segun zona donde se realizala actividad
  const setRidePrice = async () => {
    
  }

  useEffect(() => {
  const getCategories = async () => {
   await axios.get(`http://localhost:3000/category`)
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
        <form action={formAction} className={styles.form}>
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
          <input type="text" onChange={setRidePrice} placeholder="Lugar de actividad" name="ride" required />
          <input type="text" placeholder="Monto Traslado" name="ridePrice" required />
          <textarea type="text" placeholder="Descripción" name="desc" id="desc" rows={4} required />
          <button type="submit">Guardar</button>
        </form>
        </div> 
    )
}

export default AddProducts