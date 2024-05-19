import { localidadesCoordenadas } from '../geoLocalizacion/BDCoordenadas.js';

export class GestorUbicaciones
{
    static radioTierra = 6371;
    static radioMaximoProximidad = 20;

    static pasarARadianes = (pasarRadianes) => Math.cos(pasarRadianes * Math.PI / 180);
    
    static puntoMedioCoordenadas = (inicial, final) => Math.sin((final - inicial) * (Math.PI / 180)/2)**2;

    static truncarNumero = (valor) => Math.trunc(valor);

    static distanciaDosPuntos = (distanciaEsfera) => 2 * Math.atan2(Math.sqrt(distanciaEsfera), Math.sqrt(1 - distanciaEsfera));

    static calcularDistancia(ubicacion, ubicacion2){
        const coordenadas1 = GestorUbicaciones.obtenerCoordenadasPorNombreLugar(ubicacion);
        const coordenadas2 = GestorUbicaciones.obtenerCoordenadasPorNombreLugar(ubicacion2);

        const distanciaEsfera =
        GestorUbicaciones.puntoMedioCoordenadas(coordenadas1.latitud, coordenadas2.latitud) +
        GestorUbicaciones.pasarARadianes(coordenadas1.latitud) * 
        GestorUbicaciones.pasarARadianes(coordenadas2.latitud) *
        GestorUbicaciones.puntoMedioCoordenadas(coordenadas1.longitud, coordenadas2.longitud);

        const distancia = GestorUbicaciones.radioTierra * GestorUbicaciones.distanciaDosPuntos(distanciaEsfera);
        return GestorUbicaciones.truncarNumero(distancia);
    }

    static obtenerCoordenadasPorNombreLugar(nombreUbicacion){
        const objetoBuscado = localidadesCoordenadas.find(ubicacion => {
            return ubicacion.nombre.toLowerCase() === nombreUbicacion.toLowerCase();
        });

        if (!objetoBuscado)
            throw new Error(`No se logro encontrar la ubicacion "${nombreUbicacion}".`);

        return objetoBuscado;
    }

    static estaDentroDelRadio(ubicacion, ubicacion2){
        const distancia = GestorUbicaciones.calcularDistancia(ubicacion, ubicacion2);
        return distancia <= GestorUbicaciones.radioMaximoProximidad;
    }
}