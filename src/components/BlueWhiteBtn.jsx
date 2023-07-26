import { useContext } from "react"
import { ShopContext } from "../utils/ShopContext"

const BlueWhiteBtn = ({text,data}) => {
  const {addToCart}=useContext(ShopContext)
  return (
    <button className="blue-white-btn " onClick={()=>addToCart(data)}>{text}</button>
  )
}

export default BlueWhiteBtn