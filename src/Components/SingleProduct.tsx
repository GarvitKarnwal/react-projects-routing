import React from 'react'
import { Link, useParams } from 'react-router-dom';
export default function SingleProduct() {
    const { prodId } = useParams();
    return (
        <>
            <h3>Product #{prodId} details</h3>
        </>
    )
}