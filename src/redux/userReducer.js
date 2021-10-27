import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
        userInfo: (state, action)=>{
            const userData = action.payload
            if (action.payload !== ''){
                return {
                    email: userData.email
                }
            }else{
                return null
            }
        }
    }
})

export const {userInfo} = userSlice.actions

export default userSlice.reducer

