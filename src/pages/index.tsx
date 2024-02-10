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
        <div className="flex justify-center gap-1 mb-8">
          <div className="h-24 w-24 bg-white rounded-bl-xl" />
          <div className="h-24 w-24 bg-neutral-600 rounded-tr-xl" />
        </div>
        <div className="text-center flex text-5xl font-bold text-white inline-block">
          <div className="flex flex-col text-right">
            <p>Pandas</p>
            <p className="text-xl pt-0.5">House</p>
          </div>
          <div className="pl-0.5 text-left text-neutral-600">
            <p className="">oftware</p>
            <div className="text-xl w-full h-4 mt-2 rounded-md bg-neutral-600"></div>
          </div>
          {/* <div className="text-md font-bold text-neutral-300 uppercase flex flex-col">
            <div><span className="text-5xl font-bold normal-case">s</span></div> */}
          {/* <div><span className="">o</span></div>
            <div><span className="">f</span></div>
            <div><span className="">t</span></div>
            <div><span className="">w</span></div>
            <div><span className="">a</span></div>
            <div><span className="">r</span></div>
            <div><span className="">e</span></div> */}
          {/* </div> */}
          {/* <h1 className="text-5xl font-bold text-white inline-block pl-3">House</h1> */}
        </div>
        {/* <p className="text-4xl font-semibold">House</p> */}
      </div>
    </>
  )
}
