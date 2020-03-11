const React = require('react');

function FormHamburger() {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="inputHamburgerTextArea">Enter Burger Type</label>
        <p><textarea className="form-control" id="inputHamburgerTextArea" rows="3"></textarea></p>
        <p><button type="button" className="btn btn-primary btn-lg" id="submitHamburger">Add to Menu</button></p>
      </div>
    </form>
  );
}
module.exports = FormHamburger;