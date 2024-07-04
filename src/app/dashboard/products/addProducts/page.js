import styles from "../../../ui/dashboard/product/addProducts/addProducts.module.css"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify'

const AddProducts = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locations, setLocations] = useState([])
  const [checked, setChecked] = useState(false)
  const [res, setRes] = useState(null);
  
  const notify = () => {
    res.status === 'success' ? toast.success(res.message) : toast.error(res.message)
  }

  //Metodo que serializa los datos del form y los envia a la api
  const formAction = async (formData) => {
    let data = Object.fromEntries(formData.entries())
    data.freight = checked
    console.log( data);

    const response = await axios.post(`http://localhost:3000/product/insert`, data)
      .then(function (res) {
        setRes({ status: 'success', message: "Insert con exito" })
        return res
      })
      .catch(function (err) {
        setRes({ status: 'error', message: "Insert sin exito" })
        return err
      })
  }
//Use effect escucha res 
  useEffect(() => {
    if (res != null) {
      notify()
      setRes(null)
    }
  }, [res]);

  useEffect(() => {
  const getCategories = async () => {
   await axios.get(`http://localhost:3000/category`)
      .then(function (res) {
    setCategories(res.data)
  })
  .catch(function (err) {
    setError(err)
  })
  }
   const getLocations = async () => {
   await axios.get(`http://localhost:3000/location`)
      .then(function (res) {
        setLocations(res.data)
  })
  .catch(function (err) {
    setError(err) 
  })
  }  
    getLocations()
   getCategories()
  }, []);
  
  const handleChecked = async () => {
    checked == true ? setChecked(false) :  setChecked(true)
  } 
  
    return (
      <div className={styles.container}>
        <form action={formAction} className={styles.form}>
        <input type="text" placeholder="Titulo" name="name" required/>
         <select name="category" placeholder="Categoria" id="category">
    {categories.map(category => (
      <option key={category.id} value={category.id}>
        {category.cat}
      </option>
    ))}
  </select>
     {/* Cambiar inputs por select y fetchear datos de location y shift */}
          <input type="number"  placeholder="Precio" name="price" required />
          <input type="text" placeholder="Proveedor" name="supplier" required />
          <select name="location" placeholder="Lugar de Actividad" id="location">
    {locations.map(location => (
      <option key={location.id} value={location.id}>
        {location.name}
      </option>
    ))}
  </select>
          <select name="shift" placeholder="Lugar de Actividad" id="shift">
          <option key="1" value="1">Día</option>
          <option key="2" value="2">Noche</option>
          </select>
            <div>          
          <input className={styles.checkBox}
              type="checkbox"
              checked={checked}
              onChange={handleChecked}
            />
         Necesita Transporte?
            </div>
          <textarea type="text" placeholder="Descripción" name="desc" id="desc" rows={4} required />
          <button type="submit">Guardar</button>
        </form>
        </div> 
    )
}

export default AddProducts