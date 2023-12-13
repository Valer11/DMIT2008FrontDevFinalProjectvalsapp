import Link from "next/link";
import { PageHeader } from "@/components/header/PageHeader";

function CanceledPage() {
  return (
    <>
      <PageHeader title="Payment Canceled" tagline="Your transaction has been canceled." />
      <main className="min-h-screen py-24 flex flex-col items-center">
        <p className="text-lg mb-4 text-center">
          Your transaction has been canceled. Please try again or contact support.
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

export default CanceledPage;
