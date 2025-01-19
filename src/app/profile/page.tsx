"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";


export default function ProfilePage() {
   const router = useRouter();
   const logout = async () => {
      try {
         await axios.get("/api/users/logout");
         toast.success("Logout successful");
         router.push("/login");

      } catch (error) {
         if(error instanceof Error) toast.error(error.message);
         console.log("Logout error occured", error);
      }

   }
   return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-y-1">
         <Toaster position="top-right" reverseOrder={false}/>
         <h1 className="text-3xl">Profile</h1>
         <hr />
         <p className="text-2xl">Profile page</p>
         <hr />
         <button
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onClick={logout}
         >Logout</button>

      </div>
   )
}