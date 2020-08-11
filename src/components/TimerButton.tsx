import React from 'react';
import PropTypes from 'prop-types';
import '../components/style/TimerButton.css';

const TimerButton = ({ buttonAction, buttonValue }) => (
  <div className="button-container" onClick={() => buttonAction()}>
    <p className="button-value">{buttonValue}</p>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;