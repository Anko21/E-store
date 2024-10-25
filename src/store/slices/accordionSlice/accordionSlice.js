import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const initialState = [
    {
        category: "Men",
        items: ["Coats", "Boots", "Shorts", "Shoes"]
    },
    {
        category: "Women",
        items: ["Coats", "Boots", "Shorts"]
    },
    {
        category: "Kids",
        items: ["Coats", "Boots", "Shorts"]
    }
]

const accordionSlice = createSlice({
    name: "AccordionSlice",
    initialState
})

export default accordionSlice