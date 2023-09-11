import { moneyFormat } from "../helpers.js";

const SingleItem = ({ price, type, id, eliminarItem, editItem }) => {

    const HandleDelete = (e) => {
        //confirmación de borrar suscripción
        e.preventDefault();
        const answer = window.confirm(`Borrar Suscripción a${type}`);
        if(answer){
            eliminarItem(id);
        }
    }
//selecciona el id del item seleccionado
    const HandleEdit = e => {
        e.preventDefault();
        editItem(id);
    }

    //ruta para la imagen según la seleccion de tipo del usuario
    const urlImage = `/${type}.png`;
    return ( 
        <div className="single-item">
            <img src={ urlImage } alt="Services" />
            <h3>Precio: {moneyFormat(Number(price))}</h3>
            <a href="" className="delete" onClick={HandleDelete} >Borrar</a>
            <a href="" className="edit" onClick={HandleEdit} >Editar</a>
        </div>
    );
}
 
export default SingleItem;