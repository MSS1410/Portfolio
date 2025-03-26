export function mostrarMenu(paginaActual, mostrarPagina) {
  // pagina actual seran home projects info o contact
  // usaremos esto porque quiero que el item que se encuentre en la pagina actual tenga una caracteristica diferente, asi luego
  // con unn condicional miraremos que el item seleccionado sea el mismo que uno de los items del menu
  // por otra parte mostrarPagina, manejo la funcion de mostrarpagina relacionado directamente con el evento click
  const menu = document.createElement('ul')
  menu.classList.add('menu')

  // genero un array con los nombres de las paginas y los paso a un for each

  const paginas = ['Home', 'Projects', 'Info', 'Contact']
  paginas.forEach((pagina) => {
    const item = document.createElement('li')
    item.classList.add('itemlista')
    // añado valor al item de la lista
    item.textContent = pagina
    // genero el evento de click enlazado con la funcion mostrar pagina, como en la funcion tengo los nombres en minuscula tengo que to lowercase
    item.addEventListener('click', () => mostrarPagina(pagina.toLowerCase()))
    // quiero añadir clase caracteristica item select
    if (pagina.toLowerCase() === paginaActual) {
      item.classList.add('select')
    }
    menu.appendChild(item)
  })
  return menu
}
