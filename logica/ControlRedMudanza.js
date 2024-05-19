import { EncontrarPersonas } from "../geoLocalizacion/EncontrarPersonas.js";
import { MetodosAuxiliares } from "./MetodosAuxiliares.js";

export class ControlRedMudanza
{
    static listaPersonaRegistradas = [];

    static registrarUsuario(persona){
        ControlRedMudanza.listaPersonaRegistradas.push(persona);
    }

    static verificarRegistro(persona){
        if(MetodosAuxiliares.verificarObjetoVacio(persona))
            throw new Error(`Se ha enviado una persona sin datos, por favor, intente denuevo.`);

        const estaRegistrado = ControlRedMudanza.listaPersonaRegistradas.some(personaRegistrada => personaRegistrada.dni === persona.dni);
        if(!estaRegistrado)
            ControlRedMudanza.registrarUsuario(persona);

        return estaRegistrado;
    }

    static modificarRegistro(persona){
        let listaDNI = ControlRedMudanza.listaPersonaRegistradas.map(personaRegistrada => personaRegistrada.dni);
        let indexPersona = listaDNI.indexOf(persona.dni);
        if(indexPersona > -1){
            ControlRedMudanza.listaPersonaRegistradas.splice(indexPersona, 1, persona);
        }
    }

    static elegirCercanosQueSatisfacen(ubicacion, filtrarABaseDe){
        let listadoPersonasCercanas = EncontrarPersonas.localizarPersonasCercanas(ubicacion, ControlRedMudanza.listaPersonaRegistradas);
        return MetodosAuxiliares.filtrarListaSegunCondicion(listadoPersonasCercanas, filtrarABaseDe);
    }
}
