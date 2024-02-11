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
          <div className="h-24 w-24 bg-neutral-700 rounded-tr-xl" />
        </div>
        <div className="text-center flex text-5xl font-bold text-white inline-block">
          <div className="flex flex-col text-right">
            <p>Pandas</p>
            <p className="text-xl pt-0 pr-0.5">HOUSE</p>
          </div>
          <div className="text-left text-neutral-700">
            <p className="tracking-tight semi">oftware</p>
            <div className="text-xl w-full h-4 mt-[6px] pl-[1px]">
              <div className="rounded-[3px] bg-neutral-700 w-full h-[16px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
