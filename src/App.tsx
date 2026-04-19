import Sidebar from "./components/Sidebar.tsx";
import Content from "./components/Content.tsx";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <div className="bg-[#0f172a] text-[#cbd5f5] min-h-screen relative">
      <div className="glow-bg" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:gap-28">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  );
}