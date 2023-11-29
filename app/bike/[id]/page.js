import { getBikes } from "@/lib/firebase/getBikes";
import { PageHeader } from "@/components/header/PageHeader";
import Image from "next/image";

// Function to fetch a single bike based on ID
async function getBike(id) {
  const payload = await getBikes();
  const bikes = Object.values(payload);
  const singleBike = bikes.find((bike) => bike.uid == id);

  return singleBike;
}

// Page component for the single bike
export default async function BikePage({ params }) {
  const { id } = params;

  // Fetch data for the single bike
  const bikeData = await getBike(id);

  // Check if the bikeData exists
  if (!bikeData) {
    return <p>Bike not found</p>;
  }

  // Render the UI for the single bike page
  return (
    <>
      <PageHeader title={`Bike: ${bikeData.productName}`} tagline="example of displaying a single bike"/>
      <main className="min-h-screen py-24">
        <div className="max-w-screen-lg m-auto">
          {/* Display individual bike data */}
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
                {/* Add other bike details as needed */}
              </div>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
