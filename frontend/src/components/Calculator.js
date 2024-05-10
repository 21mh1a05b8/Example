import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div>
      <h1>React Calculator</h1>
      <table align='center' border='2px' cellSpacing='0'>
        <tbody>
          <tr>
            <td colSpan="4">
              <input type="text" value={input} readOnly />
            </td>
          </tr>
          <tr>
            <td><button onClick={handleInput} value="1">1</button></td>
            <td><button onClick={handleInput} value="2">2</button></td>
            <td><button onClick={handleInput} value="3">3</button></td>
            <td><button onClick={handleInput} value="+">+</button></td>
          </tr>
          <tr>
            <td><button onClick={handleInput} value="4">4</button></td>
            <td><button onClick={handleInput} value="5">5</button></td>
            <td><button onClick={handleInput} value="6">6</button></td>
            <td><button onClick={handleInput} value="-">-</button></td>
          </tr>
          <tr>
            <td><button onClick={handleInput} value="7">7</button></td>
            <td><button onClick={handleInput} value="8">8</button></td>
            <td><button onClick={handleInput} value="9">9</button></td>
            <td><button onClick={handleInput} value="*">*</button></td>
          </tr>
          <tr>
            <td><button onClick={handleInput} value="0">0</button></td>
            <td><button onClick={clearInput}>C</button></td>
            <td><button onClick={calculateResult}>=</button></td>
            <td><button onClick={handleInput} value="/">/</button></td>
          </tr>
        </tbody>
      </table>
      <p>Result: {result}</p>
    </div>
  );
}

export default Calculator;