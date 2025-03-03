import { Inter } from "next/font/google";
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from "./Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({children}) {
  const { data: session } = useSession()
  if (!session) { 
    return (
      <>
          <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
            <div className="text-center w-full">
              <button onClick={() => signIn('google')} className={"bg-white p-2 px-4 rounded-lg"}>Login with Google</button>
            </div>
        </div>
      </>
    )
  }
  
  return (
    <div className="bg-blue-900 min-h-screen flex">
      <Nav />
          <div className="bg-white flex-grow rounded-lg p-6">{children}</div>
    </div>  
  )
}
