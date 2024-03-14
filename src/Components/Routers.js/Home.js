import { Link, useNavigate } from "react-router-dom"

export const Home = () => {
    const navigate = useNavigate()
    return (
        <>
        <div>Home Page</div>
        <button onClick={()=>navigate('orderSuccessful')}>Place Order</button>
        {/* <><img src={"C:/Users/SAI TEJA/Desktop/ReactPro/projectsst/src/IMG-20220223-WA0010.jpg"}/></> */}
        </>
    )
}