import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/header/PageHeader";
import { getBikes } from "@/lib/firebase/getBikes";

function Card({
  uid,
  productName,
  shortDescription,
  productImage,
  productPrice,
}) {
  return (
    <div className="max-w-screen-lg bg-white shadow-lg rounded-md p-4 mx-auto mb-8">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2 md:mr-6">
          <Image
            src={`/${productImage}`}
            width={150}
            height={150}
            alt={productName}
            className="object-cover w-full h-full rounded-md"
          />
        </div>

        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-indigo-800 font-semibold text-lg mb-2">
            {productName}
          </h2>

          <h2 className="text-gray-600 font-semibold mb-2">Bike ID: {uid}</h2>

          <p className="text-gray-600 mb-2">{shortDescription}</p>

          <div className="flex items-center mb-2">
            <span className="text-gray-700 font-semibold mr-2">Price:</span>
            <span className="text-green-600 font-bold">${productPrice}</span>
          </div>

          <Link href={`/bike/[id]`} as={`/bike/${uid}`}>
            <h2 className="text-blue-500 hover:underline cursor-pointer">
              View Details
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

async function BikesPage() {
  const payload = await getBikes();
  const values = Object.values(payload);

  return (
    <>
      <PageHeader
        title="All Bikes Display"
        tagline="Example of displaying all items in the database"
      />
      <main className="min-h-screen py-24 bg-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {values.map((item) => (
            <Card key={item.uid} {...item} />
          ))}
        </div>
      </main>
    </>
  );
}

export default BikesPage;
