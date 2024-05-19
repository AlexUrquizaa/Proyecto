import { ControlRedMudanza } from '../logica/ControlRedMudanza.js'

export class RedMudanza extends ControlRedMudanza
{
    static buscarCajas(cajasNecesitadas, fechaMudanza, ubicacion){
        if(cajasNecesitadas > 0){
            let filtrarCercanosSiCumplen = persona => persona.donadorDesde === fechaMudanza;
            return RedMudanza.elegirCercanosQueSatisfacen(ubicacion, filtrarCercanosSiCumplen);
        }
    }

    static donarCajas(cajasParaDonar, ubicacion){
        if(cajasParaDonar > 0){
            let filtrarCercanosSiCumplen = persona => persona.cajas < cajasParaDonar;
            return RedMudanza.elegirCercanosQueSatisfacen(ubicacion, filtrarCercanosSiCumplen);
        }
    }
}
