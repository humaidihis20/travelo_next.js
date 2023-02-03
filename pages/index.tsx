import Layout from "components/Layout"

import Container from "components/Container"

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <div className="text-yellow-70 font-label text-3xl font-bold mt-5">Hello, Travelo!</div>
        <div className="text-blue-70 font-sans text-2xl font-semibold">Hello, World!</div>
      </Container>
    </Layout>
  )
}