import Link from "next/link";
import Image from "next/image";
import { PageHeader } from "@/components/header/PageHeader";
import { getBikes } from "@/lib/firebase/getBikes";

// Link element to create a dynamic route.
function Card({
  uid,
  productName,
  shortDescription,
  productImage,
  productPrice,
}) {
  return (
    <div className="max-w-screen-lg">
      <div className="ml-44 mb-10">
        <aside className="md:flex bg-slate-100">
          <Image
            src={`/${productImage}`}
            width={380}
            height={380}
            alt={productName}
          />

          <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            <h2 className="text-gray-600 font-semibold ">
              Product Name: {productName}
            </h2>

            <h2 className="text-gray-600 font-semibold">
              Product Price: {productPrice}
            </h2>

            <Link href={`/bike/[id]`} as={`/bike/${uid}`}>
            <h2 className="text-gray-600 font-semibold">
              Bike ID: {uid}</h2>
            </Link>

            <h2 className="text-gray-600 font-semibold">
              Product Description: {shortDescription}
            </h2>
          </div>
        </aside>
      </div>
    </div>
  );
}

async function BikesPage() {
  const payload = await getBikes();
  const keys = Object.keys(payload);
  const values = Object.values(payload);
  const entries = Object.entries(payload);
  const dataLoading = true;

  //  conditional rendering data loading
  // if(dataLoading) {
  //   return  null
  // }

  // if(!dataLoading) {
  //   return <p>You have the data</p>
  // }

  return (
    <>
      <PageHeader
        title="All Bikes Display"
        tagline="example of displaying all items in database"
      />
      <main className=" min-h-screen py-24">
        {values.map((item) => (
          <Card key={item.uid} {...item} />
        ))}
      </main>
    </>
  );
}

export default BikesPage;
