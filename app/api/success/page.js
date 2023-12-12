import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/footer/footer";
import { CnsPage } from "@/components/header/cns";
async function successpage({ params }) {
  return (
    <>
      <header className=" justify-between">
        <NavBar></NavBar>
      </header>
      <main className="flex min-h-screen flex-col  items-center max-w-5xl mx-auto">
        <div className="justify-center flex p-9">
          <CnsPage
            title={"Thank you for your Order. The Payment was"}
            t_class={"text-5xl pb-2 font-bold text-lime-600 pb-4"}
            tagline={"Successful"}
          ></CnsPage>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default successpage;
