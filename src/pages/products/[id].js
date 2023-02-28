import { baseUrl } from "../../utils/client"

export default function Product({ product }) {
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

export const getStaticPaths = async () => {
  //fetch external paths
  const res = await fetch(`${baseUrl}/store/products`)
  const products = await res.json()

  const paths = products.map(product => ({
    params: { id: product.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const res = await fetch(`${baseUrl}/store/products/${params.id}`)
  const product = await res.json()

  return { props: { product } }
}
