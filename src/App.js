import { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      symbols: [
        [
          'AC',
          '+/-',
          '%',
          String.fromCharCode(0x00F7),
        ],

        [7, 8, 9, 'x'],

        [4, 5, 6, String.fromCharCode(0x002D)],

        [1, 2, 3, String.fromCharCode(0x002B)],

        [0, '.', String.fromCharCode(0x003D)],

      ],
      whatToCalculate: {
        total: null,
        next: null,
        operation: null,
      },
    };
    this.handleCalculations = this.handleCalculations.bind(this);
  }

  handleCalculations(update) {
    const { whatToCalculate } = this.state;
    this.setState({
      whatToCalculate: { ...whatToCalculate, ...update },
    });
  }

  render() {
    const { symbols, whatToCalculate } = this.state;
    const { handleCalculations } = this;
    return (
      <div className="App">
        <Calculator
          whatToCalculate={whatToCalculate}
          calculationsHandler={handleCalculations}
          symbols={symbols}
        />
      </div>
    );
  }
}

export default App;
