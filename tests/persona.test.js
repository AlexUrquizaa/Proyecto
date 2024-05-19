import { describe, expect, it } from 'vitest';
import * as Main from '../src/main.js'
import { RedMudanza } from "../sistemaMudanza/RedMudanzas";
// import { PersonaMudanza, PersonaDonante } from '../sistemaMudanza/Personas.js';

describe('Crear persona', () => {
  // Ya no es util, es verificado en un test posterior.
  // it('La persona se registro correctamente', () => {
  //   expect(RedMudanza.listaPersonaRegistradas).contain(Main.personaMudanza1)
  // })

  it('Verificar que este registrado', () => {
    expect(RedMudanza.listaPersonaRegistradas).contain(Main.personaDonante1)
    expect(RedMudanza.listaPersonaRegistradas).contain(Main.personaMudanza3)
  })

  // it('Consigue donadores')
});

