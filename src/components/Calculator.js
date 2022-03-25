import { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from './logic/calculate';

const Calculator = (props) => {
  const [result, updateResult] = useState('');
  const [error, updateError] = useState('');
  const handleCalculations = (e) => {
    if (Number.isNaN(Number(e.target.value)) && e.target.value !== 'AC' && e.target.value !== '+/-') {
      const resultSectionLength = result.length;
      if (!resultSectionLength) {
        updateError('Please, add number frist.');
        return;
      }
      if (!resultSectionLength && e.target.value === '=') {
        updateError("You didn't enter an operation.");
        return;
      }
    }
    const { calculationsHandler, whatToCalculate } = props;
    const update = calculate(whatToCalculate, e.target.value);
    const { total, next, operation } = {
      total: update.total || '',
      next: update.next || '',
      operation: update.operation || '',
    };
    let updateScreen = total + operation + next;
    updateScreen = updateScreen.replace(/\+-/, '-');
    updateScreen = updateScreen.replace(/--/, '+');
    updateResult(updateScreen.length || e.target.value === 'AC' ? updateScreen : result);
    updateError(updateScreen.length || e.target.value === 'AC' ? '' : 'Please type in a valid question!');
    calculationsHandler(update);
  };

  const { symbols } = props;
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
               <button type="button" value={row[0]} onClick={handleCalculations} className="cell">
                 {row[0]}
               </button>
               <button type="button" value={row[1]} onClick={handleCalculations} className="cell">
                 {row[1]}
               </button>
               <button type="button" value={row[2]} onClick={handleCalculations} className="cell">
                 {row[2]}
               </button>
               {
               row[3]
                 ? (
                   <button type="button" value={row[3]} onClick={handleCalculations} className="cell">
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
};

Calculator.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
  calculationsHandler: PropTypes.func.isRequired,
  whatToCalculate: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ])).isRequired,
};
export default Calculator;
