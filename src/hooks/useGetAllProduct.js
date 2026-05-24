import { useEffect, useState } from "react";
import axios from "axios";
const useGetAllProduct = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const res = await axios.get('https://fakestoreapi.com/products')
                setData(res.data)
                console.log("res", res.data)
            } catch (error) {
                console.log("error", error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    return {
       data,
        loading
    }
}

export default useGetAllProduct;