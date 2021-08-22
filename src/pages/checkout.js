import Image from "next/image";
import { Layout } from "../components";

function Checkout() {
  return (
    <Layout title="Checkout">
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <Image
            width={1020}
            height={250}
            objectFit="contain"
            src={"https://links.papareact.com/ikj"}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">Your Shopping Cart</h1>
          </div>
        </div>

        {/* Right */}
        <div className=""></div>
      </main>
    </Layout>
  );
}

export default Checkout;
