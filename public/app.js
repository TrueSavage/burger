// function to create a new hamburger
const createHamburger = () => {
  // Ajax request hitting the POST route defined in our burgerRoutes.js
  axios.post('/api/burgers', {
    // grabbing the value of the burger_name text input to pass in the request body
    burger_name: document.getElementById('inputHamburgerTextArea').value,
    devoured: 0
  })
    .then(() => renderBurger())
    .catch(e => console.error(e))
}

const renderBurger = () => {
  axios.get(`/api/burgers`)
    // destructuring the list of items found off the payload
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
  // axios DELETE request, which takes the data-id property off of the x badge on the <li> to identify the item to be deleted
  axios.put(`/api/burgers/${id}`, { devoured: !parseInt(devoured) })
    // once finished, a GET request for the user and all their items is run
    .then(() => renderBurger())
    .catch(e => console.error(e))
}

renderBurger();

document.addEventListener('click', event => event.target.classList.contains('Devour') ? devoureBurger(event.target) : null)
document.getElementById('submitHamburger').addEventListener('click',
  event => {
    createHamburger();
  })