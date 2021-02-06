import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

 const GifGrid = ({category}) => {

    const {data:images,loading} =  useFetchGifs( category );

    return (
        <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className="animate__animated animate__flash">loading</p>}
          {/* el image.map retorna la info que hay en image llamando al nuevo componente GifGridItem  */}
        <div className="card-grid">
            
          
                {
                    images.map( img => (
                        <GifGridItem
                        key = {img.id} 
                        {...img}
                        />
                    ))
                }
            
        </div>
        </>
    )
}

export default GifGrid;
