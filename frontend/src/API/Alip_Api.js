import CONFIG from "../estadisticas/config/config.json";

export const consumirequipo = async () => {
  const path = new URL(CONFIG.EQUIPOS_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumirjugadores = async () => {
  const path = new URL(CONFIG.JUGADORES_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumircampeonatos = async () => {
  const path = new URL(CONFIG.CAMPEONATOS_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumircampeonatosequip = async () => {
  const path = new URL(CONFIG.CAMPEONATOS_EQUIP_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumirlistarequipos = async () => {
  const path = new URL(CONFIG.LISTAR_EQUIPOS_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumirpartidos = async () => {
  const path = new URL(CONFIG.PARTIDOS_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumirposiciones = async () => {
  const path = new URL(CONFIG.POSICIONES_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumirfechas = async () => {
  const path = new URL(CONFIG.FECHAS_API.URL);
  const results = await fetch(path);
  return await results.json();
};

export const consumirlistarusuarios = async () => {
  const path = new URL(CONFIG.LISTAR_USUARIOS_API.URL);
  const results = await fetch(path);
  return await results.json();
};
