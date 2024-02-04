import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Panda Software House</title>
      </Head>
      <div key="1" className={`min-h-screen bg-black flex flex-col items-center justify-center ${inter.className}`}>
        <div className="flex justify-center gap-4 mb-8">
          <div className="h-24 w-24 bg-white" />
          <div className="h-24 w-24 bg-neutral-500" />
        </div>
        <div className="text-center flex">
          <h1 className="text-5xl font-bold text-white inline-block">Panda</h1>
          <div className="text-sm font-semibold text-neutral-400 flex flex-col">
            <div><span className="text-5xl font-bold">s</span></div>
            <div><span className="">o</span></div>
            <div><span className="">f</span></div>
            <div><span className="">t</span></div>
            <div><span className="">w</span></div>
            <div><span className="">a</span></div>
            <div><span className="">r</span></div>
            <div><span className="">e</span></div>
          </div>
          <h1 className="text-5xl font-bold text-white inline-block pl-3">House</h1>
        </div>
      </div>
    </>
  )
}
