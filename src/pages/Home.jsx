import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios"
function Home() {
  const [data, setData] = useState([])
  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products?limit=8')
        setData(res.data)
        console.log("res", res.data)
      } catch (error) {
        console.log("error", error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="font-jost">
      <div className="bg-[url('./slide_02.jpg')] bg-[#f6e6cf]  bg-center bg-cover  lg:bg-contain bg-no-repeat flex items-center h-screen px-4 lg:px-40">
        <div className="inline-block gap-4">
          <h2 className="text-2xl font-bold mb-2">New Collection</h2>
          <h1 className="text-6xl lg:text-7xl font-bold">Luxury Without <br /> Labels</h1>
          <p className="text-xl font-bold">Explore new in product and best sellers</p>
          <button className="bg-[#171717] text-white px-8 py-2 mt-4 ">View Collection</button>
        </div>
      </div>

      <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
        <p className="text-center">Explore our best seller product</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
         {
          data?.map(item => (
            <Card key={item.id} data={item} />
          ))
         }
         

        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-transparent px-8 py-2 border border-[#171717] hover:bg-[#171717] hover:text-white transition-all">Explore More</button>
        </div>
      </div>

    </div>
  )
}

export default Home