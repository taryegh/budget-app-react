import React from "react";

class BudgetInput extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmitAndCalc} action="">
          <select onChange={this.props.handleSelectOpt} className="inp sel">
            <option value="plus">+</option>
            <option value="minus">-</option>
          </select>

          <input
            className="inp"
            type="text"
            placeholder="Add name"
            onChange={this.props.handleChangeName}
            value={this.props.itemName}
          />
          <input
            className="inp inp-price"
            type="text"
            placeholder="Add $"
            onChange={this.props.handleChangePrice}
            value={this.props.itemPrice}
          />
          <button className="btn">Add</button>
        </form>
      </div>
    );
  }
}

export default BudgetInput;
