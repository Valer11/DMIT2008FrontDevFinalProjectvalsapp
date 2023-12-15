import Link from "next/link";
import { PageHeader } from "@/components/header/PageHeader";

function CanceledPage() {
  return (
    <>
      <PageHeader
        title="Payment Canceled"
        tagline="Your transaction has been canceled."
      />
      <main className="min-h-screen py-24 flex flex-col items-center bg-red-100">
        <p className="text-lg mb-8 text-center text-red-800">
          Your transaction has been canceled. Please try again or contact
          support.
        </p>
        <Link href="/bikes">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full">
            Back to Products
          </button>
        </Link>
      </main>
    </>
  );
}

export default CanceledPage;
