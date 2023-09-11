import { useState } from "react";
import Balance from "./Balance";
import DisplayItems from "./DisplayItems";
import FormAddPlatform from "./FormAddPlatform";

const MainControl = ({ count }) => {
    //estados, subscripcion, tipos, precio, Id del item, gasto
    const [subs, setSubs ] = useState([]);
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [editId, setEditId] = useState("");
    const [spent, setSpent] = useState(0);

    //borrar
    const eliminarItem = id => {
        const newList = subs.filter(item => item.id != id);
        setSubs(newList);
    }
    //editar
    const editItem = id => {
        setEditId(id);
        subs.map(item => {
            if (item.id === id) {
                setType(item.type);
                setPrice(item.price);
            }
        })
    }

    return ( 
        <>
            <div className="main-form">
                <Balance count={count} subs={subs} spent={spent} setSpent={setSpent}/>
                <FormAddPlatform 
                setType={setType} 
                setPrice={setPrice}
                type={type} 
                price={price}
                setSubs={setSubs}
                subs={subs} 
                editId={editId}
                setEditId={setEditId}
                spent={spent}
                count={count}
                />
            </div>
            <DisplayItems subs={subs} eliminarItem={eliminarItem} editItem={editItem}/>
        </>
    );
}
 
export default MainControl;