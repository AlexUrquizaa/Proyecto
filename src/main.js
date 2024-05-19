import { FabricaPersona, PersonaMudanza, PersonaDonante } from '../sistemaMudanza/Personas.js'
import { RedMudanza } from '../sistemaMudanza/RedMudanzas.js'

const persona1 = FabricaPersona.tipoPersona(PersonaMudanza, "Juan", "Martinez", 1134523, "Pilar", 0, "Mudanza");
const persona2 = FabricaPersona.tipoPersona(PersonaMudanza,"Maria", "Garcia", 1198765, "San Miguel", 0, "Mudanza");
const persona3 = FabricaPersona.tipoPersona(PersonaMudanza,"David", "Perez", 1176543, "Villa Brown", 0, "Mudanza");
const persona4 = FabricaPersona.tipoPersona(PersonaMudanza,"Pedro", "Gomez", 1143210, "Virreyes", 0, "Mudanza");
const persona5 = FabricaPersona.tipoPersona(PersonaMudanza,"Sofia", "Diaz", 1112345, "San Isidro", 0, "Mudanza");
const persona6 = FabricaPersona.tipoPersona(PersonaMudanza,"Luisa", "Lopez", 1167890, "La Plata", 0, "Mudanza");
const persona7 = FabricaPersona.tipoPersona(PersonaMudanza,"Carlos", "Gonzalez", 1187654, "Libertad", 0, "Mudanza");
const persona8 = FabricaPersona.tipoPersona(PersonaMudanza,"Ana", "Ruiz", 1154321, "San Antonio de Padua", 0, "Mudanza");
const persona9 = FabricaPersona.tipoPersona(PersonaMudanza,"Pablo", "Sanchez", 1139876, "Villa Libertad", 0, "Mudanza");
const persona10 = FabricaPersona.tipoPersona(PersonaMudanza,"Eva", "Hernandez", 1123456, "San Miguel", 0, "Mudanza");
const persona11 = FabricaPersona.tipoPersona(PersonaMudanza,"Andrea", "Lopez", 1165432, "Villa Alcira", 0, "Mudanza");
const persona12 = FabricaPersona.tipoPersona(PersonaMudanza,"Jorge", "Hernandez", 1145678, "Villa Tesei", 0, "Mudanza");
const persona13 = FabricaPersona.tipoPersona(PersonaMudanza,"Marta", "Garcia", 1181234, "Pilar", 0, "Mudanza");
const persona14 = FabricaPersona.tipoPersona(PersonaMudanza,"Roberto", "Perez", 1194321, "Ramos Mejía", 0, "Mudanza");
const persona15 = FabricaPersona.tipoPersona(PersonaMudanza,"Carla", "Diaz", 1116789, "Ituzaingó", 0, "Mudanza");
const persona16 = FabricaPersona.tipoPersona(PersonaMudanza,"Francisco", "Gomez", 1156789, "Villa Udaondo", 0, "Mudanza");
const persona17 = FabricaPersona.tipoPersona(PersonaMudanza,"Natalia", "Ruiz", 1178901, "Mercedes Partido", 0, "Mudanza");
const persona18 = FabricaPersona.tipoPersona(PersonaMudanza,"Luis", "Sanchez", 1161234, "San Miguel", 0, "Mudanza");
const persona19 = FabricaPersona.tipoPersona(PersonaMudanza,"Silvia", "Martinez", 1198760, "Monte Grande", 0, "Mudanza");
const persona20 = FabricaPersona.tipoPersona(PersonaMudanza,"Pablo", "Fernandez", 1121345, "José C. Paz", 0, "Mudanza");

const persona21 = FabricaPersona.tipoPersona(PersonaDonante, "Diego", "Fernandez", 1076543, "Pilar", 7, "Donador", "2024-05-07");
const persona22 = FabricaPersona.tipoPersona(PersonaDonante, "Elena", "Martinez", 1087654, "San Miguel", 3, "Donador", "2024-05-01");
const persona23 = FabricaPersona.tipoPersona(PersonaDonante, "Alejandro", "Sanchez", 1098765, "Villa Brown", 12, "Donador", "2024-05-11");
const persona24 = FabricaPersona.tipoPersona(PersonaDonante, "Laura", "Hernandez", 1043210, "Virreyes", 8, "Donador", "2024-05-09");
const persona25 = FabricaPersona.tipoPersona(PersonaDonante, "Miguel", "Gonzalez", 1054321, "San Isidro", 10, "Donador", "2024-07-07");
const persona26 = FabricaPersona.tipoPersona(PersonaDonante, "Lucia", "Perez", 1065432, "La Plata", 6, "Donador", "2024-05-10");
const persona27 = FabricaPersona.tipoPersona(PersonaDonante, "Javier", "Ruiz", 1012345, "Libertad", 4, "Donador", "2024-05-03");
const persona28 = FabricaPersona.tipoPersona(PersonaDonante, "Isabel", "Diaz", 1023456, "San Antonio de Padua", 9, "Donador", "2024-05-06");
const persona29 = FabricaPersona.tipoPersona(PersonaDonante, "Gabriel", "Lopez", 1039876, "Villa Libertad", 7, "Donador", "2024-05-04");
const persona30 = FabricaPersona.tipoPersona(PersonaDonante, "Carmen", "Santos", 1078901, "San Miguel", 5, "Donador", "2024-05-01");
const persona31 = FabricaPersona.tipoPersona(PersonaDonante, "Adriana", "Gonzalez", 1081234, "Villa Alcira", 8, "Donador", "2024-05-06");
const persona32 = FabricaPersona.tipoPersona(PersonaDonante, "Manuel", "Lopez", 1094321, "Villa Tesei", 10, "Donador", "2024-05-03");
const persona33 = FabricaPersona.tipoPersona(PersonaDonante, "Valeria", "Hernandez", 1098760, "Pilar", 6, "Donador", "2024-05-09");
const persona34 = FabricaPersona.tipoPersona(PersonaDonante, "Hugo", "Rodriguez", 1034523, "Ramos Mejía", 7, "Donador", "2024-05-05");
const persona35 = FabricaPersona.tipoPersona(PersonaDonante, "Julia", "Perez", 1021345, "Ituzaingó", 4, "Donador", "2024-05-04");
const persona36 = FabricaPersona.tipoPersona(PersonaDonante, "Felipe", "Garcia", 1016789, "Villa Udaondo", 3, "Donador", "2024-05-01");
const persona37 = FabricaPersona.tipoPersona(PersonaDonante, "Patricia", "Sanchez", 1061234, "Mercedes Partido", 2, "Donador", "2024-05-01");
const persona38 = FabricaPersona.tipoPersona(PersonaDonante, "Oscar", "Martinez", 1045678, "San Miguel", 8, "Donador", "2024-05-01");
const persona39 = FabricaPersona.tipoPersona(PersonaDonante, "Monica", "Fernandez", 1056789, "Monte Grande", 6, "Donador", "2024-05-10");
const persona40 = FabricaPersona.tipoPersona(PersonaDonante, "Daniel", "Lopez", 1067890, "José C. Paz", 5, "Donador", "2024-05-01");

RedMudanza.registrarUsuario(persona1);
RedMudanza.registrarUsuario(persona2);
RedMudanza.registrarUsuario(persona3);
RedMudanza.registrarUsuario(persona4);
RedMudanza.registrarUsuario(persona5);
RedMudanza.registrarUsuario(persona6);
RedMudanza.registrarUsuario(persona7);
RedMudanza.registrarUsuario(persona8);
RedMudanza.registrarUsuario(persona9);
RedMudanza.registrarUsuario(persona10);
RedMudanza.registrarUsuario(persona11);
RedMudanza.registrarUsuario(persona12);
RedMudanza.registrarUsuario(persona13);
RedMudanza.registrarUsuario(persona14);
RedMudanza.registrarUsuario(persona15);
RedMudanza.registrarUsuario(persona16);
RedMudanza.registrarUsuario(persona17);
RedMudanza.registrarUsuario(persona18);
RedMudanza.registrarUsuario(persona19);
RedMudanza.registrarUsuario(persona20);
RedMudanza.registrarUsuario(persona21);
RedMudanza.registrarUsuario(persona22);
RedMudanza.registrarUsuario(persona23);
RedMudanza.registrarUsuario(persona24);
RedMudanza.registrarUsuario(persona25);
RedMudanza.registrarUsuario(persona26);
RedMudanza.registrarUsuario(persona27);
RedMudanza.registrarUsuario(persona28);
RedMudanza.registrarUsuario(persona29);
RedMudanza.registrarUsuario(persona30);
RedMudanza.registrarUsuario(persona31);
RedMudanza.registrarUsuario(persona32);
RedMudanza.registrarUsuario(persona33);
RedMudanza.registrarUsuario(persona34);
RedMudanza.registrarUsuario(persona35);
RedMudanza.registrarUsuario(persona36);
RedMudanza.registrarUsuario(persona37);
RedMudanza.registrarUsuario(persona38);
RedMudanza.registrarUsuario(persona39);
RedMudanza.registrarUsuario(persona40);

const persona41 = FabricaPersona.tipoPersona(PersonaMudanza, "Dad", "Lo", 1077890, "José C. Paz", 0, "Mudanza");
persona41.necesitoCajas(8, "2024-05-04", "Villa Libertad");
persona41.necesitoCajas(8, "2024-05-04", "Villa Libertad");

// console.log(' ------------================================== ')
// console.log(' ------------================================== ')
// console.log('\n\n')

// const persona41 = FabricaPersona.tipoPersona(PersonaDonante, "Dad", "Lo", 1077890, "José C. Paz", 15, "Donador", "2024-05-04");
// persona41.necesitoDonarCajas(8, "José C. Paz");
// persona41.necesitoDonarCajas(8, "José C. Paz");
// persona41.necesitoCajas(8, "2024-05-04", "Villa Libertad");

// RedMudanza.listaPersonaRegistradas.map(persona => {
//   if(persona.dni === persona41.dni) console.log('Es el:', persona.nombreCompleto(), persona.dni, persona.tipo, persona.donadorDesde)
//   else console.log( persona.nombreCompleto(), persona.dni, persona.tipo, persona.donadorDesde);
// });

