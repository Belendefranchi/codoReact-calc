// src/Calculator.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState(null);
  const [operator, setOperator] = useState(null);

  const numbers = (num) => {
    setDisplayValue((prevValue) => (prevValue === '0' ? String(num) : prevValue + num));
  };

  const operators = (op) => {
    setPrevValue(displayValue);
    setDisplayValue('0');
    setOperator(op);
  };

  const equal = () => {
    const currentValue = parseFloat(displayValue);
    const previousValue = parseFloat(prevValue);

    switch (operator) {
      case '+':
        setDisplayValue((previousValue + currentValue).toString());
        break;
      case '-':
        setDisplayValue((previousValue - currentValue).toString());
        break;
      case '*':
        setDisplayValue((previousValue * currentValue).toString());
        break;
      case '/':
        setDisplayValue((previousValue / currentValue).toString());
        break;
      default:
        break;
    }

    setPrevValue(null);
    setOperator(null);
  };

  const clear = () => {
    setDisplayValue('0');
    setPrevValue(null);
    setOperator(null);
  };

  const decimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue((prevValue) => prevValue + '.');
    }
  };

  const back = () => {
    if (displayValue.length === 1) {
      setDisplayValue('0');
    } else {
      setDisplayValue(displayValue.slice(0, -1));
    }
  };

  return (
    <div className="container card my-4 text-bg-secondary border border-black p-3">
      <h1 className="display-4 card-header fw-bold text-center mb-4">{displayValue}</h1>
      <div class="card-body">
        <div className="row m-2">
          <div className="col">
            <button className="btn btn-warning w-100 fs-2" onClick={clear}>
              C
            </button>
          </div>
          <div className="col">
            <button className="btn btn-warning w-100 fs-2" onClick={back}>
              &larr;
            </button>
          </div>
          <div className="col">
            <button className="btn btn-warning w-100 fs-2" onClick={() => operators('/')}>
              /
            </button>
          </div>
        </div>


        <div className="row m-2">
        <div className="col">
            <button className="btn btn-warning w-100 fs-2" onClick={() => operators('+')}>
              +
            </button>
          </div>

          <div className="col">
            <button className="btn btn-warning w-100 fs-2" onClick={() => operators('-')}>
              -
            </button>
          </div>
          <div className="col">
            <button className="btn btn-warning w-100 fs-2" onClick={() => operators('*')}>
              *
            </button>
          </div>
        </div>


        <div className="row m-2">
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(7)}>
              7
            </button>
          </div>
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(8)}>
              8
            </button>
          </div>
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(9)}>
              9
            </button>
          </div>
        </div>


        <div className="row m-2">
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(4)}>
              4
            </button>
          </div>
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(5)}>
              5
            </button>
          </div>
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(6)}>
              6
            </button>
          </div>
        </div>


        <div className="row m-2">
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(1)}>
              1
            </button>
          </div>
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(2)}>
              2
            </button>
          </div>
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(3)}>
              3
            </button>
          </div>

        </div>


        <div className="row m-2">
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={decimal}>
              .
            </button>
          </div>
          <div className="col">
            <button className="btn btn-light w-100 fs-2" onClick={() => numbers(0)}>
              0
            </button>
          </div>
          <div className="col-4">
            <button className="btn btn-info w-100 fs-2" onClick={equal}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
