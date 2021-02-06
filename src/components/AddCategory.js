import React, {useState} from 'react';
import PropTypes from 'prop-types';


 const AddCategory = ({setcategories}) => {
     const [inputValue, setinputValue] = useState('');

     
     //   recibe el valor por funcion que le da el onChange 
     const handleInputChange = (e) =>{
        setinputValue( e.target.value);
     }

        // Define el comportamiento del onSubmit en el form   

        const handleSubmit = (e) =>{
         e.preventDefault();

         //   hace una validacion del valor del form verifica que no tenga espacios en blanco
        // y ejecuta la accion del submit introduciendo lo que esta en el inputValue dentro 
        // de la categories con el setcategories importado del componente GifExpertApp

        if (inputValue.trim().length > 2){
            setcategories(cats => [inputValue,...cats,]);
            setinputValue('');
         }

     }

    return (
        
        <form onSubmit={ handleSubmit }>
          <input
                type= "text"
                value={ inputValue }
                onChange={ handleInputChange }
                placeholder="Busca aquí los gifs"
          />
        </form>
        
    )
};

// Prevents for the use of this component 

AddCategory.propTypes = {
    setcategories:PropTypes.func.isRequired
}

export default AddCategory


