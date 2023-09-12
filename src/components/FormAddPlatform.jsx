import { useState } from "react";

const FormAddPlatform = ({ setType,
  setPrice,
  type,
  price,
  setSubs,
  subs,
  editId,
  setEditId,
  spent,
  count }) => {
    //estados de error y error de presupuesto
  const [error, setError] = useState(false);
  const [errorMoney, setErrorMoney] = useState(false);

  //subscripción de plataformas
  const handleSubs = e => {
    e.preventDefault();
    //precio null, precio menor a 0, tipo null
    if (price === "" || Number(price) < 0 || type === "") {
      setError(true);
      return;
    }
    //si el presupuesto es menor a lo gastado error
    if (count - spent < Number(price)) {
      setErrorMoney(true);
      return;
    }
    setError(false);
    setErrorMoney(false);
    if (editId != "") {
      setEditId("");
      const newSubs = subs.map(item => {
        if (item.id === editId) {
          item.type = type;
          item.price = price;
        }
        return item;
      })
      setSubs(newSubs);
    } else {
      const data = {
        type: type,
        price: price,
        id: Date.now()
      }
      setSubs([...subs, data]);
    }

    setType("");
    setPrice("");
   
  }

  return (
    <div className="add-subscription">
      <h3>Agregar Suscripciones</h3>
      <form onSubmit={handleSubs}>
        <p>Servicio</p>
        <select onChange={e => setType(e.target.value)} value={type}>
          <option value="">-- Elegir --</option>
          <option value="netflix">Netflix</option>
          <option value="disneyPlus">Disney Plus</option>
          <option value="hboMax">HBO Max</option>
          <option value="starPlus">Star Plus</option>
          <option value="primeVideo">Prime Videos</option>
          <option value="spotify">Spotify</option>
        </select>
        <p>Cantidad</p>
        <input type="number" placeholder="Costo $" onChange={e => setPrice(e.target.value)} value={price} />
        {editId != "" ? <input type="submit" value="Guardar" />
          : <input type="submit" value="Agregar" />}
{/* Manejo de errores */}
      </form>
      {error ? <p className="error">Campos inválidos</p> : null}
      {errorMoney ? <p className="error">No tienes presupuesto</p> : null}

    </div>
  );
}

export default FormAddPlatform;