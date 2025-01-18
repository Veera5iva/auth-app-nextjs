"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
   const [user, setUser] = useState({
      email: "",
      password: "",
   });

   const onLogin = async () => {
      
   };


   return (
      <div className="flex flex-col items-center justify-center py-2 min-h-screen gap-y-1">
         <h1 className="text-3xl text-center">Login</h1>
         <label htmlFor="email">email</label>
         <hr className="h-2" />
         <input
            className="p-1 rounded-lg"
            type="text"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            placeholder="email"

         />
         <label htmlFor="password">password</label>
         <input
            className="p-1 rounded-lg"
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            placeholder="password"

         />
         <button
            className="border"
            onClick={onLogin}

         >Login here
         </button>
         <Link href="/signup">Go to sign-up page</Link>






      </div>
   )
}