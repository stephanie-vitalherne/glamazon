import { Layout, Banner } from "../components";

export default function Home() {
  return (
    <Layout title="Glamazon">
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* Product Feed */}
      </main>
    </Layout>
  );
}
