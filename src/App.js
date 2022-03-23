import { Component } from 'react';
import Calculator from './components/Calculator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      symbols: [
        [
          'AC',
          String.fromCharCode(0x207A) + String.fromCharCode(0x2215)
      + String.fromCharCode(0x208B),
          '%',
          String.fromCharCode(0x00F7),
        ],

        [7, 8, 9, String.fromCharCode(0x00D7)],

        [4, 5, 6, String.fromCharCode(0x002D)],

        [1, 2, 3, String.fromCharCode(0x002B)],

        [0, String.fromCharCode(0x065C), String.fromCharCode(0x003D)],

      ],
    };
  }

  render() {
    const { symbols } = this.state;
    return (
      <div className="tool">
        <Calculator symbols={symbols} />
      </div>
    );
  }
}

export default App;
