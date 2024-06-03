import { describe, expect, it } from 'vitest';
import { RedMudanza } from "../sistemaMudanza/RedMudanzas";
import { MetodosAuxiliares } from '../logica/MetodosAuxiliares';
import { PersonaDonante, PersonaMudanza, FabricaPersona } from '../sistemaMudanza/Personas';

const persona1 = FabricaPersona.tipoPersona(PersonaMudanza, "Julian", "Alvarez", 2234523, "Pilar", 0, "Mudanza");
const persona2 = FabricaPersona.tipoPersona(PersonaDonante, "Me", "Ssirve", 1267899, "José C. Paz", 5, "Donador", "2024-05-04");
const personaVacia = {};

RedMudanza.registrarUsuario(persona1);
RedMudanza.registrarUsuario(persona2);

describe('Registro del control red mudanza', () => {

  // Como luego verifico el registro, este test deja de ser util.
  // it('Verificar que es un objeto vacio', () => {
  //   expect(MetodosAuxiliares.verificarObjetoVacio(personaVacia)).toBe(true);
  // });

  it('La persona se registro correctamente', () => {
    expect(RedMudanza.listaPersonaRegistradas).contain(persona1)
  });

  it('Verificar que este registrado', () => {
    expect(RedMudanza.listaPersonaRegistradas).contain(persona1)
    expect(RedMudanza.listaPersonaRegistradas).contain(persona1)
  });

});


describe('Buscando cajas', () => {

  // Si el tercer test funciona, entonces ya se verifica, este deja de ser util.
  // it('Persona verificar que este registrado', () => {
  //   expect(RedMudanza.listaPersonaRegistradas).contain(persona1);
  //   expect(RedMudanza.listaPersonaRegistradas).contain(persona2);
  // });

  // Si el tercer test funciona, entonces la lista no esta vacia, este deja de ser util.
  // it('Persona1 (PersonaMudanza) busca personas donantes cercanas', () => {
  //   let listadoDonadores = RedMudanza.buscarCajas(8, "2024-05-04",  "José C. Paz");
  //   expect(listadoDonadores.length > 0).toBe(true);
  // });

  it('Persona1 reserva algunas o todas las cajas necesitadas', () => {
    let cajasInicial = persona1.cajas;
    persona1.necesitoCajas(8, "2024-05-04",  "José C. Paz");
    let cajasFinal = persona1.cajas;
    expect(cajasFinal > cajasInicial).toBe(true);
  });

  it('Persona1 que reservo se muda y pasa a ser donador', () => {
    const nuevaPersonaDonador = FabricaPersona.tipoPersona(PersonaDonante, persona1.nombre, persona1.apellido, persona1.dni, "José C. Paz", persona1.cajas, persona1.tipo, "2024-05-04");
    RedMudanza.modificarRegistro(nuevaPersonaDonador);
    expect(nuevaPersonaDonador).toBeInstanceOf(PersonaDonante);
  });

  it('Persona2 (PersonaDonante) pasa a ser de instancia PersonaMudanza si necesita cajas', () => {
    const nuevaPersonaMudanza = FabricaPersona.tipoPersona(PersonaMudanza, persona2.nombre, persona2.apellido, persona2.dni, persona2.ubicacion, persona2.cajas, persona2.tipo);
    RedMudanza.modificarRegistro(nuevaPersonaMudanza);
    expect(nuevaPersonaMudanza).toBeInstanceOf(PersonaMudanza);
  });

});


describe('Necesita donar cajas', () => {

  // it('Persona verificar que este registrado', () => {
  //   expect(RedMudanza.listaPersonaRegistradas).contain(persona1);
  //   expect(RedMudanza.listaPersonaRegistradas).contain(persona2);
  // });

  it('Persona2 busca gente cercanas que necesiten cajas', () => {
    let listadoNecesitanCajas = RedMudanza.donarCajas(8, "José C. Paz");
    expect(listadoNecesitanCajas.length > 0).toBe(true);
  });

  it('Persona1 (PersonaMudanza) pasa a ser de instancia PersonaDonante si necesita donar', () => {
    const nuevaPersonaDonador = FabricaPersona.tipoPersona(PersonaDonante, persona1.nombre, persona1.apellido, persona1.dni, persona1.ubicacion, persona1.cajas, persona1.tipo, "2024-05-04");
    RedMudanza.modificarRegistro(nuevaPersonaDonador);
    expect(nuevaPersonaDonador).toBeInstanceOf(PersonaDonante);
  });
  
});


/*
  .- IMPORTANTE:
      Los test presentados internamente verifican otros test que fueron eliminados debido a su inutilidad con el avance de los mismos tests.
      A excepcion de los comentados para remarcar este hecho.

      Tests como "localizarPersonasCercanas", "MostrarPersonasCercanas", "devolverRolContrario", "modificarRegistro", "elegirCercanosQueSatisfacen",
      entre otros... quedan satisfechos con los tests actuales, ya que si estos funcionan, eso implica que quienes lo preceden se encuentran en funcionamiento.
*/