import { EncontrarPersonas } from "../geoLocalizacion/EncontrarPersonas.js";
import { RedMudanza } from './RedMudanzas.js'

export class FabricaPersona {
    static tipoPersona(instancia, ...args){
        return new instancia(...args);
    }
}

class Persona {
    constructor(nombre, apellido, dni = 0, ubicacion, cajas = 0, tipo = ''){
        this._nombre = nombre;
        this._apellido = apellido;
        thisf._dni = dni;
        this._ubicacion = ubicacion;
        this._cajas = cajas;
        this._tipo = tipo;
    }

    get nombre(){ 
        return this._nombre;
    }

    get apellido(){ 
        return this._apellido; 
    }

    get dni(){ 
        return this._dni; 
    }

    get ubicacion(){
        return this._ubicacion;
    }
    
    get cajas(){
        return this._cajas;
    }

    get tipo(){
        return this._tipo;
    }

    nombreCompleto = () => this.nombre + ' ' + this.apellido;

    restarCajasReservadas(cantidad){
        this._cajas -= cantidad;
    }

    sumarCajasReservadas(cantidad){
        this._cajas += cantidad;
    }

    necesitoCajas(cajasNecesitadas, fechaDeMudanza, ubicacion){}

    necesitoDonarCajas(fecha, cantidadParadonar, ubicacion){}
}

export class PersonaDonante extends Persona 
{
    constructor(nombre, apellido, dni, ubicacion, cajas, tipo, donadorDesde = ''){
        super(nombre, apellido, dni, ubicacion, cajas, tipo);
        this._tipo = 'Donador';
        this._donadorDesde = donadorDesde;
    }

    get donadorDesde(){
        return this._donadorDesde;
    }

    necesitoCajas(cajasNecesitadas, fechaDeMudanza, ubicacion){
        const mudanza = FabricaPersona.tipoPersona(PersonaMudanza, this.nombre, this._apellido, this.dni, this.ubicacion, this.cajas, this.tipo);
        RedMudanza.modificarRegistro(mudanza);
        mudanza.necesitoCajas(cajasNecesitadas, fechaDeMudanza, ubicacion);
    }

    necesitoDonarCajas(cantidadParaDonar, ubicacion)
    {
        if(!RedMudanza.verificarRegistro(this)) return
        let listadoNecesitanCajas = RedMudanza.donarCajas(cantidadParaDonar, ubicacion);
        EncontrarPersonas.mostrarPersonasProximas(listadoNecesitanCajas, this);
    }
}

export class PersonaMudanza extends Persona
{
    constructor(nombre, apellido, dni, ubicacion, cajas, tipo){
        super(nombre, apellido, dni, ubicacion, cajas, tipo);
        this._tipo = 'Mudanza';
    }

    necesitoCajas(cajasNecesitadas, fechaDeMudanza, ubicacion)
    {
        if(!RedMudanza.verificarRegistro(this)) return
        let listadoDonadores = RedMudanza.buscarCajas(cajasNecesitadas, fechaDeMudanza,  ubicacion);
        EncontrarPersonas.mostrarPersonasProximas(listadoDonadores, this);
        
        this.reservarCajas(listadoDonadores, cajasNecesitadas);
        this.necesitoDonarCajas(fechaDeMudanza, cajasNecesitadas, ubicacion);
    }

    necesitoDonarCajas(fecha, cantidadParaDonar, ubicacion){
        const donador = FabricaPersona.tipoPersona(PersonaDonante, this.nombre, this._apellido, this.dni, ubicacion, this.cajas, this.tipo, fecha);
        RedMudanza.modificarRegistro(donador);
        donador.necesitoDonarCajas(cantidadParaDonar, ubicacion);
    }

    reservarCajas(listadoDonadores, cajasRequeridas){
        let cajasInicial = cajasRequeridas;
        let totalEnCajas = 0;
        listadoDonadores.forEach(donador => {
            if(cajasRequeridas > 0){
                if(cajasRequeridas <= donador.cajas){
                    donador.restarCajasReservadas(cajasRequeridas);
                    cajasRequeridas -= cajasRequeridas;
                }
                else {
                    cajasRequeridas -= donador.cajas;
                    donador.restarCajasReservadas(donador.cajas);
                }
            }
        });
        totalEnCajas = cajasInicial - cajasRequeridas;
        this.sumarCajasReservadas(totalEnCajas);
    }
}
