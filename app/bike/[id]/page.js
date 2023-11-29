// Import necessary components and functions
import { getBikes } from "@/lib/firebase/getBikes";
import { PageHeader } from "@/components/header/PageHeader";

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
    // You might want to handle the case where the bike with the given ID is not found
    return <p>Bike not found</p>;
  }

  // Render the UI for the single bike page
  return (
    <>
      <PageHeader title={`Bike: ${bikeData.productName}`} />
      <main className="min-h-screen py-24">
        <div className="max-w-screen-lg m-auto">
          {/* Display individual bike data */}
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
      </main>
    </>
  );
}
