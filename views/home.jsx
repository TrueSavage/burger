const React = require('react')
const Html = require('./layouts/default.jsx')
const FormHamburger = require('./components/formHamburger.jsx')
const DisplayHamburgerList = require('./components/displayHamburgerList.jsx')
const DevouredHamburgerList = require('./components/devouredHamburgerList.jsx')

const Home = props => {
  return (
    <Html>
      <div className="card addishClass" >
        <img className="card-img-top burgerFix" src="./images/burger.png" alt="Eat A Hamburger" />
        <div className="card-body">
          <h5 className="card-title ">Welcome to Eat-a-Burger</h5>
          <p className="card-text">Type in your order to add to menu, then click next to your order to devour!</p>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <div id='hamburgerHeader'></div>
                <DisplayHamburgerList burgers={props.burgers} />
              </div>
              <div className='col-md-6'>
                <div id='devouredHeader'></div>
                <DevouredHamburgerList burgers={props.burgers} />
              </div>
            </div>
          </div>
          <FormHamburger />
        </div>
      </div>
    </Html>
  )
}

module.exports = Home