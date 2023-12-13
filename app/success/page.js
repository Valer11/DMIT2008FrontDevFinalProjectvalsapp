import Link from "next/link";
import { PageHeader } from "@/components/header/PageHeader";

function SuccessPage() {
  return (
    <>
      <PageHeader title="Payment Success" tagline="Thank you for your purchase!" />
      <main className="min-h-screen py-24 flex flex-col items-center">
        <p className="text-lg mb-4 text-center">
          Your payment was successful. Thank you for your purchase!
        </p>
        <Link href="/bikes">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Products
          </button>
        </Link>
      </main>
    </>
  );
}

export default SuccessPage;
