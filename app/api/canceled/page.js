import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/footer/footer";
import { CnsPage } from "@/components/header/cns";

async function canceledpage({ params }) {
  return (
    <>
      <header className=" justify-between">
        <NavBar></NavBar>
      </header>
      <main className="flex min-h-screen flex-col  items-center max-w-5xl mx-auto">
        <div className="justify-center flex p-9">
          <CnsPage
            title={"Thank you. Your Order has been"}
            t_class={"text-5xl pb-2 font-bold text-red-600 pb-4"}
            tagline={"Cancelled"}
          ></CnsPage>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default canceledpage;
