import axios from "axios";
import { useEffect, useState } from "react";
const useGetOneProduct = (id) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        const fetchData = async () => {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
                setData(res.data)
                console.log("res", res.data)
            } catch (error) {
                console.log("error", error)
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    }, [id])
    return {
        data,
        loading

    }
}
export default useGetOneProduct