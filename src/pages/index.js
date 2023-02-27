import Head from "next/head"
import Image from "next/image"

import { useRouter } from "next/router"
import * as React from "react"
import { Heading, Card, Flex, Text } from "theme-ui"
import CodeSnippet from "../components/code-snippet"
import Layout from "../components/layout/layout"
import { client } from "../utils/client"

const imageUrl =
  "https://images.unsplash.com/photo-1675295275315-2290405625ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY3NzAxMDA1NQ&ixlib=rb-4.0.3&q=80&w=1080"
const IndexPage = ({ product }) => {
  const router = useRouter()

  return (
    <div className="products-page">
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}

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

export async function getStaticProps({ params }) {
  const response = await client.products.list({ limit: 1 })

  const [product, ...rest] = response.products

  return { props: { product } }
}

export default IndexPage
