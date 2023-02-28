import Link from "next/link"
import fetch from "isomorphic-unfetch"

import "../styles/index.module.scss"
import { baseUrl } from "../utils/client"
function IndexPage({ products }) {
  return (
    <div className="products-page">
      <h1>Products</h1>

      <div className="grid">
        {products.map(product => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="card">
              <img src={product.thumbnail} alt={product.name} />
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <style jsx>{`
        h1 {
          color: orange;
          text-align: center;
          margin-bottom: 20px;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2rem;
        }

        .card {
          display: flex;
          flex-direction: column;
          background: white;
          border: 1px solid #ddd;
          border-radius: 4px;
          padding: 1rem;
          text-align: center;
          transition: all 0.2s ease-in-out;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .card img {
          height: 200px;
          object-fit: cover;
          margin-bottom: 1rem;
        }

        .card h2 {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/store/products`)
  const products = await res.json()

  return { props: { products } }
}

export default IndexPage
