/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <div className="text-blue-900 flex justify-between">
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className="flex gap-2 pr-1 pl-1 text-gray-900 items-center">
          <img src={session?.user?.image} alt="" className="w-5 h-5 rounded-full"></img>
          {session?.user?.name}
        </div>  
      </div>
    </Layout>
  )
}
