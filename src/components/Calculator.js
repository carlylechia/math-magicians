import { Component } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from './logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      error: '',
    };
    this.handleCalculations = this.handleCalculations.bind(this);
  }

  handleCalculations(e) {
    const { result } = this.state;
    if (Number.isNaN(Number(e.target.value)) && e.target.value !== 'AC' && e.target.value !== '+/-') {
      const resultSectionLength = result.length;
      if (!resultSectionLength) {
        this.setState({ error: 'Please, add number frist.' });
        return;
      }
      if (!resultSectionLength && e.target.value === '=') {
        this.setState({ error: "you didn't enter an operation" });
        return;
      }
    }
    const { calculationsHandler, whatToCalculate } = this.props;
    const update = calculate(whatToCalculate, e.target.value);
    const { total, next, operation } = {
      total: update.total || '',
      next: update.next || '',
      operation: update.operation || '',
    };
    let updateScreen = total + operation + next;
    updateScreen = updateScreen.replace(/\+-/, '-');
    updateScreen = updateScreen.replace(/--/, '+');
    this.setState(
      {
        result: updateScreen.length || e.target.value === 'AC' ? updateScreen : result,
        error: updateScreen.length || e.target.value === 'AC' ? ''
          : 'Please, type in a valid question!',
      },
    );
    calculationsHandler(update);
  }

  render() {
    const { symbols } = this.props;
    const { result, error } = this.state;
    return (
      <div id="calculator">
        <small>{error}</small>
        <section id="result-section">
          <span id="result">{!result.length ? 0 : result}</span>
        </section>
        <ul id="opertations-section">
          {
           symbols.map((row) => (
             <li className="row" key={row[0]}>
               <button type="button" value={row[0]} onClick={this.handleCalculations} className="cell">
                 {row[0]}
               </button>
               <button type="button" value={row[1]} onClick={this.handleCalculations} className="cell">
                 {row[1]}
               </button>
               <button type="button" value={row[2]} onClick={this.handleCalculations} className="cell">
                 {row[2]}
               </button>
               {
               row[3]
                 ? (
                   <button type="button" value={row[3]} onClick={this.handleCalculations} className="cell">
                     {row[3]}
                   </button>
                 )
                 : ''
               }
             </li>
           ))
           }
        </ul>
      </div>
    );
  }
}

Calculator.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  calculationsHandler: PropTypes.func.isRequired,
  whatToCalculate: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};
export default Calculator;
