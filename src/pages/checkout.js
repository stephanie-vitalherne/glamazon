import Image from "next/image";
import { useSelector } from "react-redux";
import { Layout, CheckoutProduct } from "../components";
import { selectItems, selectTotal } from "../slices/basketSlice";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const [session] = useSession();

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
        <div className="flex flex-col bg-white p-10 shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):{" "}
                <span className="font-bold">
                  <Currency quantity={total} />
                </span>
              </h2>

              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign In to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </Layout>
  );
}

export default Checkout;
