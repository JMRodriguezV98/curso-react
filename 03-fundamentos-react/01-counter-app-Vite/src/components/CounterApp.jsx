import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ( { value } ) => {
  
  const [ valueCounter, setValueCounter ] = useState( value );

  const handleAdd = () => {
    setValueCounter( valueCounter + 1 );
    // setValueCounter( ( c ) => c + 1 );
  }

  const handleReset = () => {
    setValueCounter( value );
  }

  const handleSubstrac = () => {
    setValueCounter( valueCounter - 1 );
  }
  
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { valueCounter } </h2>
        <button onClick={ handleAdd }> +1 </button>
        <button onClick={ handleReset }> Reset </button>
        <button onClick={ handleSubstrac }> -1 </button>
    </>
  )
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

