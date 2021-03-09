import React from 'react'
import './NotFound.css'
import notFound from '../CRUD_with_Json/img/404_2.jpg'

export default function NotFound() {
    return (
        <img src={notFound} className='notFound' alt='404 NOT FOUND'/>
    )
}
