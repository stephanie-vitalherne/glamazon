import { getSession } from "next-auth/client";
import { Layout, Banner, ProductFeed } from "../components";

export default function Home({ products }) {
  return (
    <Layout title="Glamazon">
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
        <ProductFeed products={products} />
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (response) => response.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}
