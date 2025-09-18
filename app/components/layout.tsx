import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "./header";
import { Footer } from "./footer";


export default function Layout() {
  return (
    <div lang="ptBR">
      <Header />
      <main className="pt-16 p-4">
        <Outlet />
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}

