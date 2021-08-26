import Image from "next/image";
import { useSelector } from "react-redux";
import { Layout, CheckoutProduct } from "../components";
import { selectItems } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);

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
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Cart is empty"
                : "Your Shopping Cart"}
            </h1>

            {items.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                rating={item.rating}
                category={item.category}
                image={item.image}
                hasPrime={item.hasPrime}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className=""></div>
      </main>
    </Layout>
  );
}

export default Checkout;
