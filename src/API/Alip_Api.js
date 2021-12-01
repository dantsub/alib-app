import CONFIG from "../estadisticas/config/config.json"

export const consumirequipo = async () =>{
    const path = new URL(CONFIG.EQUIPOS_API.URL);
    const results = await fetch(path);
    return  await results.json();
    
}

export const consumirjugadores = async () =>{
     const path = new URL(CONFIG.JUGADORES_API.URL);
     const results = await fetch(path);
     return  await results.json();
    
}