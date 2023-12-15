import { getBikes } from "@/lib/firebase/getBikes";
import { PageHeader } from "@/components/header/PageHeader";
import Image from "next/image";
import { BuyNow } from "@/components/buynow/BuyNowForm";

async function getBike(id) {
  const payload = await getBikes();
  const bikes = Object.values(payload);
  const singleBike = bikes.find((bike) => bike.uid == id);

  return singleBike;
}

export default async function BikePage({ params }) {
  const { id } = params;
  const bikeData = await getBike(id);

  if (!bikeData) {
    return <p>Bike not found</p>;
  }

  return (
    <>
      <PageHeader
        title={`Bike: ${bikeData.productName}`}
        tagline="example of displaying a single bike"
      />
      <main className="min-h-screen py-24 bg-gray-100">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="mb-10">
              <div className="bg-white shadow-lg rounded-md p-4">
                <Image
                  src={`/${bikeData.productImage}`}
                  width={380}
                  height={380}
                  alt={bikeData.productName}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
            </div>

            <div className="pt-6 md:p-8 text-center md:text-left space-y-4 bg-white shadow-md rounded-md p-4">
              <h2 className="text-indigo-800 font-semibold text-lg mb-2">
                Bike Name: {bikeData.productName}
              </h2>
              <h2 className="text-gray-600 font-semibold mb-2">
                Bike ID: {bikeData.uid}
              </h2>
              <h2 className="text-green-600 font-semibold mb-2">
                Bike Price: {bikeData.productPrice}
              </h2>
              <p className="text-gray-600 mb-2">
                Bike Description: {bikeData.shortDescription}
              </p>
              {bikeData.priceId && (
                <BuyNow priceId={bikeData.priceId}>Buy Now</BuyNow>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
