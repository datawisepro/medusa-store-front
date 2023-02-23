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
    <main>
      <Head>
        <title>Medusa</title>
        <meta name="description" content="One-page checkout" />
      </Head>
      <Layout>
        <Card sx={{ maxWidth: 256 }}>
          <Flex>
            <Image src={imageUrl} width="50" height="50" />
            <Flex>
              <Heading css={{ display: "blocks" }}>Product</Heading>
              <Text css={{ display: "block" }}>Nice clean and Fresh</Text>
            </Flex>
          </Flex>
        </Card>
      </Layout>
    </main>
  )
}

export async function getStaticProps({ params }) {
  const response = await client.products.list({ limit: 1 })

  const [product, ...rest] = response.products

  return { props: { product } }
}

export default IndexPage
