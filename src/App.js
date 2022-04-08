import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Quote from './components/Quote/Quote';
import './App.css';

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
        <Navbar />
        <Routes>
          <Route
            exact
            path="Calculator"
            element={(
              <Calculator
                whatToCalculate={whatToCalculate}
                calculationsHandler={handleCalculations}
                symbols={symbols}
              />
)}
          />
          <Route exact path="/" element={<Home />} />
          <Route exact path="Quote" element={<Quote />} />
        </Routes>
      </div>
    );
  }
}

export default App;
