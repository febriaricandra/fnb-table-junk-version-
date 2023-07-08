import React from 'react'
import ListMenu from '../components/ListMenu'
import Navbar from '../components/Navbar'
import Tabs from '../components/Tabs'
// import { productData } from '../context/data'
import { Link } from 'react-router-dom'

export default function Menu() {
    const [activeTab, setActiveTab] = React.useState('foods')
    const handleFood = () => setActiveTab('foods')
    const handleDrink = () => setActiveTab('drinks')
    const [productData, setProductData] = React.useState([])
    const getProductData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/menu')
        const data = await response.json()
        setProductData(data.data)
    }
    React.useEffect(() => {
        getProductData()
    }, [])

    console.log(productData);


  return (
    <div className='bg-slate-300 w-full h-screen'>
        <div className='container mx-auto max-w-[375px] border-solid bg-white h-screen flex flex-col'>
            <div>
            <Navbar />
            <Tabs handleFood={handleFood} handleDrink={handleDrink} activeTab={activeTab} />
            </div>
            <div className='overflow-y-auto'>
            {productData.map((product) => {
                if (product.kategori === activeTab) {
                    return (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <ListMenu product={product} />
                        </Link>
                    )
                }
                return null;
            })
            }
            </div>
        </div>
    </div>
  )
}
