import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = ["Men", "Women", "Kids", "Best Offers", "All"]

const categorySlice = createSlice({
    name:"Category",
    initialState,
})

export default categorySlice