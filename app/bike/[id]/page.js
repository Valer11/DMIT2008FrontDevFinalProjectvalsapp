import { getBikes } from "@/lib/firebase/getBikes";
import { PageHeader } from "@/components/header/PageHeader";
import Image from "next/image";
import { BuyNow } from "@/components/buynow/BuyNowForm";  // Import the BuyNow component

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
      <main className="min-h-screen py-24">
        <div className="max-w-screen-lg m-auto">
          <div className="ml-44 mb-10">
            <aside className="md:flex bg-slate-100">
              <Image
                src={`/${bikeData.productImage}`}
                width={380}
                height={380}
                alt={bikeData.productName}
              />

              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <h2 className="text-gray-600 font-semibold">
                  Bike Name: {bikeData.productName}
                </h2>
                <h2 className="text-gray-600 font-semibold">
                  Bike Price: {bikeData.productPrice}
                </h2>
                <h2 className="text-gray-600 font-semibold">
                  Bike Description: {bikeData.shortDescription}
                </h2>
                {bikeData.priceId && (
                  <BuyNow priceId={bikeData.priceId}>
                    Buy Now
                  </BuyNow>
                )}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
