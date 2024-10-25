import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState = [
    {
        pName:'Jacket',
        price: 45,
        img: "shop-1.jpg.png",
    },
    {
        pName:'Jacket',
        price: 45,
        img: "shop-1.jpg.png",
    },
    {
        pName:'Jacket',
        price: 45,
        img: "shop-1.jpg.png",
    },
    {
        pName:'Jacket',
        price: 45,
        img: "shop-1.jpg.png",
    },
    {
        pName:'Jacket',
        price: 45,
        img: "shop-1.jpg.png",
    }
]
const productSlice = createSlice({
    name: "Product",
    initialState
})

export default productSlice