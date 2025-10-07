import { useEffect, useState } from "react"
import axios from "axios"

//XMLHttpRequest
function MainSection() {
    const [products, setProducts] = useState([])

    //useEffect - lets you run a code on mount and / or re-render

    useEffect(() => {
        fetchProducts()
    }, [])

    async function fetchProducts() {
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data)
        setProducts(response.data)

    }
    console.log(products)


    return (
        <main>
            <div className="p-5 bg-gray-50">
                <h2 className="text-4xl font-semibold text-center mb-10 after:mx-auto after:mt-3 pt-3">
                    Products
                </h2>

                <div className="flex flex-wrap justify-center gap-6">
                    {products.map((obj) => (
                        <div
                            key={obj.id}
                            className="bg-white w-64 rounded-2xl shadow-md p-4 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <img
                                src={obj.image}
                                alt=""
                                className="h-52 object-contain mx-auto mb-4 transition-transform duration-300 hover:scale-105"
                            />
                            <h3 className="text-gray-800 font-medium text-base h-12 overflow-hidden text-ellipsis">
                                {obj.title}
                            </h3>
                            <p className="text-red-500 text-lg font-semibold mt-2">₹{obj.price}</p>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    )
}

export default MainSection