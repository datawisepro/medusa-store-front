import Image from "next/image"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { baseUrl } from "../../utils/client"

export default function Product() {
  const router = useRouter()
  const { id } = router.query

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)

      try {
        const res = await fetch(`${baseUrl}/store/products/${id}`)
        const data = await res.json()
        console.log("data-effect:", data)
        setProduct(data.product)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <p>Loading...</p>
  }

  if (!product) {
    return <p>Product not found.</p>
  }
  console.log("id", product)
  console.log("product:", product)

  return (
    <div className="product-container">
      <h1 className="product-title">{product.title}</h1>
      <p className="product-description">{product.description}</p>
      <p className="product-price">Price: {product.weight}</p>
      <img
        className="product-image"
        src={product.thumbnail}
        alt={product.title}
      />

      <style jsx>{`
        .product-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }

        .product-title {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
        }

        .product-description {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          text-align: center;
        }

        .product-price {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
        }

        .product-image {
          max-width: 200px;
          heigh: 200px;
        }
      `}</style>
    </div>
  )
}
