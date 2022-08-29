import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [ categories, setCategories] = useState( [ 'One Punch','Naruto' ] );

    const onAddCategory = ( newCategory ) => {
        if( categories.includes( newCategory ) ){
            return
        }
        // setCategories( categories => [ 'Valorant', ...categories]);
        // console.log(newCategory);
        setCategories( [ newCategory, ...categories ] )
    }
  
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory = { onAddCategory }
            />

            {/* Listado de Gif */}
            <ol>
                { categories.map( category => {
                    return(
                            <li key={category}>{ category }</li>
                        )
                    })
                }
            </ol>
                {/* Gif ITem */}
        </>
  )
}