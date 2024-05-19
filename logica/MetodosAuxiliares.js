export class MetodosAuxiliares 
{
    static verificarObjetoVacio = (objeto) => !objeto || Object.keys(objeto).length === 0;

    static filtrarListaSegunCondicion = (listado, filtro) => listado.filter(filtro);

    static verificarListaVacia = (listado) => !listado.length;
}
