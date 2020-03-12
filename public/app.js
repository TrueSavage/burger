const createHamburger = () => {

  axios.post('/api/burgers', {
    burger_name: document.getElementById('inputHamburgerTextArea').value,
    devoured: 0
  })
    .then(() => renderBurger())
    .catch(e => console.error(e))
}

const renderBurger = () => {
  axios.get(`/api/burgers`)
    .then(({ data: list }) => {
      renderBurgerList(list)
    })
}

const renderBurgerList = list => {
  document.getElementById('displayHamburgerList').innerHTML = ''
  document.getElementById('devouredHamburgerList').innerHTML = ''
  document.getElementById('hamburgerHeader').innerHTML = ''
  document.getElementById('devouredHeader').innerHTML = ''

  if (list.length > 0) {
    document.getElementById('hamburgerHeader').innerHTML = 'Burger List'
    document.getElementById('devouredHeader').innerHTML = 'Devoured List'

    list.forEach(({ id, burger_name, devoured }) => {

      const burgerElem = document.createElement('li')
      burgerElem.id = id
      burgerElem.dataset.devoured = devoured
      burgerElem.className = `burgers list-group-item ${devoured ? 'list-group-item-success' : ''}
      d-flex justify-content-between align-items-center`

      if (devoured === 0) {
        burgerElem.innerHTML = `${burger_name} <span data-id=${id} data-devoured=${devoured} class="Devour badge badge-danger badge-pill">Devour</span>`
        document.getElementById('displayHamburgerList').append(burgerElem)
      }
      else {
        burgerElem.innerHTML = `${burger_name} `
        document.getElementById('devouredHamburgerList').append(burgerElem)

      }
    })
  }
}



const devoureBurger = ({ dataset: { id, devoured } }) => {
  axios.put(`/api/burgers/${id}`, { devoured: !parseInt(devoured) })
    .then(() => renderBurger())
    .catch(e => console.error(e))
}

renderBurger();

document.addEventListener('click', event => event.target.classList.contains('Devour') ? devoureBurger(event.target) : null)
document.getElementById('submitHamburger').addEventListener('click',
  event => {
    createHamburger();
  })