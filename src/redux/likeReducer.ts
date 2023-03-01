import { createSlice } from "@reduxjs/toolkit";


type likeProductType = {
    [id:number]: boolean
}

export const initialState: likeProductType = {
    1: true,
    2: true,
}


export const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {}
})

export default likeSlice.reducer