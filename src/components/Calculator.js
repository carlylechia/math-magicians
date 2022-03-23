import { Component } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { symbols } = this.props;
    const { result } = this.state;
    return (
      <div id="calculator">
        <section id="result-section">
          <span id="result">{result}</span>
        </section>
        <ul id="opertations-section">
          {
           symbols.map((row) => (
             <li className="row" key={row[0]}>
               <span className="cell">{row[0]}</span>
               <span className="cell">{row[1]}</span>
               <span className="cell">{row[2]}</span>
               { row[3] ? <span className="cell">{row[3]}</span>
                 : ''}
             </li>
           ))
           }
        </ul>
      </div>
    );
  }
}

Calculator.propTypes = {
  symbols: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
export default Calculator;
