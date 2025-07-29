import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

import { Header } from "./header";


export default function Layout() {
  return (
    <div lang="ptBR">
      <Header />
      <main className="pt-16 p-4 container mx-auto">
        <Outlet />
      </main>
      <Toaster richColors />
    </div>
  );
}

