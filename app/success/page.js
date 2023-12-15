import Link from "next/link";
import { PageHeader } from "@/components/header/PageHeader";

function SuccessPage() {
  return (
    <>
      <PageHeader
        title="Payment Success"
        tagline="Thank you for your purchase!"
      />
      <main className="min-h-screen py-24 flex flex-col items-center bg-green-100">
        <p className="text-lg mb-8 text-center text-green-800">
          Your payment was successful. Thank you for your purchase!
        </p>
        <Link href="/bikes">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full">
            Back to Products
          </button>
        </Link>
      </main>
    </>
  );
}

export default SuccessPage;
