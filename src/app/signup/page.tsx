"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Signup() {
   const [user, setUser] = useState({
      username: "",
      email: "",
      password: "",
   });

   const onSignup = async () => {
      
   };


   return (
      <div>
         <h1 className="text-3xl text-center">Sign-up</h1>
      </div>
   )
}