import { consumir } from "../API/comentarios_api"
import { useEffect, useState } from "react";

export function Comentarios(){
    let [Refrescar, setRefrescar]  = useState(true);
    let [Listar_Com,setListar_Com] = useState([]);
    
    useEffect ( () => {
        const solicitar_comment= async () => {
            const dato = await consumir();
            setListar_Com(dato);
    
        };
        solicitar_comment();
    }, [Refrescar])


    return (
        <>
            <button type= "button" onClick={()=>setRefrescar(!Refrescar)}> Refresh </button>
            {
                Listar_Com.map(a=>
                    <>
                    <p>{a.email}</p>
                    <p>{a.body}</p>
                    </>

                )
            }
        </>
    );
}