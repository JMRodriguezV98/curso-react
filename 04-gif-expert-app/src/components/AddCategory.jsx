import React, { useState } from 'react'

export const AddCategory = ( { onNewCategory } ) => {
  
    const [ inputValue, setInputvalue] = useState( '' );
  
    const onInputChange = ( { target } ) => {
        setInputvalue( target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;
           
        setInputvalue( '' );
        onNewCategory( inputValue.trim() );
    }

    return (
    <form onSubmit={ onSubmit }>
        <input 
            type='text'
            placeholder='Gifs'
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}
