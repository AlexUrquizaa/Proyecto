import { GestorUbicaciones } from "../logica/GestorUbicaciones.js";
import { MetodosAuxiliares } from "../logica/MetodosAuxiliares.js";

export class EncontrarPersonas
{
    static localizarPersonasCercanas(ubicacion, listaPersonasRegistradas){
        let filtrarCercanosSiCumplen = persona => GestorUbicaciones.estaDentroDelRadio(ubicacion, persona.ubicacion);
        let listaFiltrada = MetodosAuxiliares.filtrarListaSegunCondicion(listaPersonasRegistradas, filtrarCercanosSiCumplen);

        if(MetodosAuxiliares.verificarListaVacia(listaFiltrada)) 
            throw new Error('[Lista Vacia] - No hay personas cumpliendo requerimientos del solicitante');
        return listaFiltrada;
    }

    static mostrarPersonasProximas(listado, respectoDe){
        EncontrarPersonas.imprimirPersonasProximas(respectoDe);
        EncontrarPersonas.devolverRolContrario(listado, respectoDe).forEach( 
            persona => { 
                EncontrarPersonas.imprimirPersonasProximas(persona); 
            });
        console.log('\n\n');
    }

    static imprimirPersonasProximas(persona){
        console.log(`[${persona.tipo}]: ${persona.nombreCompleto()} de ${persona.ubicacion}`);
    }

    static devolverRolContrario(lista, persona){
        let filtrarCercanosSiCumplen = personaRegistrada => persona.tipo !== personaRegistrada.tipo;
        return MetodosAuxiliares.filtrarListaSegunCondicion(lista, filtrarCercanosSiCumplen);
    }
}
