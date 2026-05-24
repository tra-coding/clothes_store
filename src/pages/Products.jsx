import Card from '../components/Card'
import useGetAllProduct from '../hooks/useGetAllProduct'

function Products() {
  const { data, loading } = useGetAllProduct()

  return (
    <div className='my-10 max-[90%] lg:max-w-5xlmx-auto'>
      <h1 className='text-center text-3xl uppercase font-bold'>All Products</h1>
      {
        loading == true &&(
          <div className='flex justify-center items-center my-10'>
            <div className='flex items-center gap-1'>
              <svg className="animate-spin size-6 w-[100px] h-[100px] text-gray-600 mt-20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">

                </path>
              </svg>  
            </div>

          </div>
        )
      }
      {
        loading == false && (

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4">
        
        {
          data?.map(item => (
            <Card key={item.id} data={item} />
          ))
        }

      </div>
        )
      }

    </div>
  )
}

export default Products