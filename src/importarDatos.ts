// Importa los datos JSON
import dades from "./data.json";
// Importa AJV para validación de esquemas JSON
import Ajv from "ajv";
// Esquema de validación para objetos Estacio
import schema from "./json-schema/estacioSchema.json";
// Añade soporte para formatos (ej. date-time) a AJV
import addFormats from "ajv-formats";
// Tipado de errores de validación
import type { ErrorObject } from "ajv";

// Define el tipo Estacio con todas sus propiedades
export type Estacio = {
  date: Date;
  route_short_name: string;
  trip_headsign: string;
  stop_name: string;
  stop_id: string;
  arrival_time: string;
  departure_time: string;
  exception_type: number;
  stop_sequence: number;
  shape_id: number;
  timepoint: number;
  route_long_name: string;
  route_type: number;
  route_url: string;
  route_color: string;
  route_text_color: string;
  stop_lat: number;
  stop_lon: number;
  wheelchair_boarding: number;
};

// Crea una instancia de AJV y le añade formatos extra  (SI EL CODIGO DA FALLAS, HAZ bun add ajv-formats)
const ajv = new Ajv();
addFormats(ajv);

// Compila el esquema para validar datos tipo Estacio
const validate = ajv.compile(schema);

/**
 * Valida un objeto como Estacio.
 * @param data El objeto a validar.
 * @returns `true` si es válido, o un array de errores si no.
 */
export function validateEstacio(data: any): true | ErrorObject[] {
  const valid = validate(data);
  return valid ? true : validate.errors!;
}

// Castea los datos importados como array de Estacio
export const estacions: Estacio[] = dades as Estacio[];


