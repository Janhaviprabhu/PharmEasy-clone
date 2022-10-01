import {Route, Routes} from "react-router-dom"
import { Cart } from "../Pages/Cart"
import { Home } from "../Pages/Home"
import { Medicines } from "../Pages/Medicines"
import { SinglePage } from "../Pages/SingleProduct"

export const Allroutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>} /> 
            <Route path="/medicines" element={<Medicines/>}  />
            <Route path="medicines/:id" element={<SinglePage/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route/>
        </Routes>
    )
}