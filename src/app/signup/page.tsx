"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
   const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
   });

   const onSignup = async () => {
      
   };


   return (
      <div className="flex flex-col items-center justify-center py-2 min-h-screen gap-y-1">
         <h1 className="text-3xl text-center">Sign-up</h1>
         <label htmlFor="username">username</label>
         <input
            className="p-1 rounded-lg"
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
            placeholder="Username"

         />
         <label htmlFor="email">email</label>
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
            onClick={onSignup}

         >Signup here
         </button>
         <Link href="/login">Go to login page</Link>






      </div>
   )
}