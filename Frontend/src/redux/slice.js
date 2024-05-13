

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
export const signup = createAsyncThunk('signup/api',async(obj)=>{
    var response = await axios.post('https://finalaffiliate.vercel.app/api/signupinfo',obj)
    return response.data
})
export const login = createAsyncThunk('login/api',async(obj)=>{
    var response = await axios.post('https://finalaffiliate.vercel.app/api/logininfo',obj)
    return response.data
})
export const changer = createAsyncThunk('changer/api',async(obj)=>{
    var response = await axios.post('https://finalaffiliate.vercel.app/api/changepas',obj.formdata,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const uploads =createAsyncThunk('uploads/api',async(obj)=>{
    console.log(obj.formData,'product');
    var response = await axios.post('https://finalaffiliate.vercel.app/api/productinfo',obj.formData,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updatepass = createAsyncThunk('updatepass/api',async(obj)=>{
    console.log(obj);
    var response = await axios.put('https://finalaffiliate.vercel.app/api/updatepasser',obj)
    return response.data
})
export const getproducts = createAsyncThunk('getproducts/api',async()=>{
    var response = await axios.get('https://finalaffiliate.vercel.app/api/getproductinfo')
    return response.data
})
export const  deleteprod = createAsyncThunk('deleteprod/api',async(obj)=>{
    console.log(obj.token,'deletion');
    var response = await axios.post(`https://finalaffiliate.vercel.app/api/deleteproduc/${obj.itemid}`,{},{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const edits = createAsyncThunk('edits/api',async(obj)=>{
    console.log(obj.formData,'tobeedit');
    var response = await axios.put(`https://finalaffiliate.vercel.app/api/updateproduct/${obj.index}`,obj.editpro,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updateimg1 = createAsyncThunk('updateimg1/api',async(obj)=>{
    console.log(obj.formData2);
 
    var response = await axios.put(`https://finalaffiliate.vercel.app/api/updateimage1/${obj.index}`,obj.formData2,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updateimg2 = createAsyncThunk('updateimg2/api',async(obj)=>{
 
    var response = await axios.put(`https://finalaffiliate.vercel.app/api/updateimage2/${obj.index}`,obj.formData3,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const updateimg3 = createAsyncThunk('updateimg3/api',async(obj)=>{
    
    var response = await axios.put(`https://finalaffiliate.vercel.app/api/updateimage3/${obj.index}`,obj.formData4,{
        headers:{
            Authorization:`Bearer: ${obj.token}`
        }
    })
    return response.data
})
export const searching = createAsyncThunk('searching/api',async(value)=>{
    console.log(value);
    
    var response = await axios.get(`https://finalaffiliate.vercel.app/api/getquery/${value}`)
    console.log(response.data,'queryresulta');
    return response.data
})
export const filte = createAsyncThunk('filte/api',async(value)=>{
    console.log(value,'value');
    var response = await axios.get(`https://finalaffiliate.vercel.app/api/getcateg/${value}`)
    console.log(response.data,'queryresulta');
    return response.data
})
export const getprdetail = createAsyncThunk('prdetail/api',async(index)=>{
    console.log(index,'index');
    var response = await axios.get(`https://finalaffiliate.vercel.app/api/getonedetail/${index}`)
    return response.data
})
export const getrelated = createAsyncThunk('getrelated/api',async(index)=>{
  
    var response = await axios.get(`https://finalaffiliate.vercel.app/api/getcatego/${index}`)
    return response.data
})
export const uploadcar = createAsyncThunk('uploadcar/api',async(obj)=>{
    console.log(obj,'obj');
    var response = await axios.post('https://finalaffiliate.vercel.app/api/sendcar',obj)
    return response.data
    

})
export const getcarousel = createAsyncThunk('getcarousel/api',async()=>{
    var response = await axios.get('https://finalaffiliate.vercel.app/api/sendcarousels')
    return response.data
})
export const sendedcar = createAsyncThunk('sendedcar/api',async(obj)=>{
    console.log(obj,'obj');
    var response = await axios.put(`https://finalaffiliate.vercel.app/api/geteditcar/${obj.index}`,obj.formdata)
    return response.data
    

})
export const getusersi = createAsyncThunk('getusersi/api',async()=>{
    var response = await axios.get('https://finalaffiliate.vercel.app/api/getuserinfos')
    return response.data
})

const addingslice = createSlice({
    name:'addingslice',
    initialState:{
        user:[],products:[],query:[],presence:false,indiv:[],related:[],carfile:[]
    },
    reducers:{
        sorting:(state,action)=>{
            console.log(action.payload,'payload');
            if(action.payload==='Low to high'){
                return{
                    ...state,query:state.query.slice().sort((a,b)=>a.price-b.price)
                }
            }
            if(action.payload==='High to low'){
                return{
                    ...state,query:state.query.slice().sort((a,b)=>b.price-a.price)
                }

            }
            else{
                return{
                    ...state
                }
            }
        }
       


    }
    ,extraReducers:(builders)=>{
        builders.addCase(signup.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(login.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(changer.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(updatepass.fulfilled,(state,action)=>{
            return{
                ...state,user:action.payload
            }
        })
        .addCase(uploads.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(getproducts.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(deleteprod.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(edits.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(updateimg1.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(updateimg2.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(updateimg3.fulfilled,(state,action)=>{
            return{
                ...state,products:action.payload
            }
        })
        .addCase(searching.fulfilled,(state,action)=>{
            return{
                ...state,query:action.payload
            }
        })
        .addCase(filte.fulfilled,(state,action)=>{
            if(action.payload){
                return{
                   ...state,presence:true,
                   query:action.payload
                }
            }
            else{

                return{
                    ...state,presence:false
                }
            }
        })
        .addCase(getprdetail.fulfilled,(state,action)=>{
            return{
                ...state,indiv:action.payload
            }
        })
       .addCase(getrelated.fulfilled,(state,action)=>{
        return{
            ...state,related:action.payload
        }
       })
       .addCase(uploadcar.fulfilled,(state,action)=>{
        return{
            ...state,carfile:action.payload
        }
    })
    .addCase(getcarousel.fulfilled,(state,action)=>{
        return{
            ...state,carfile:action.payload
        }
    })
    .addCase(sendedcar.fulfilled,(state,action)=>{
        return{
            ...state,carfile:action.payload
        }
    })
    .addCase(getusersi.fulfilled,(state,action)=>{
        return{
            ...state,user:action.payload
        }
    })
        
       
    }
})
export const {sorting} = addingslice.actions
export default addingslice.reducer