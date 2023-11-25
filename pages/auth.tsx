import Input from "@/components/input"
import { useState } from "react"


const Auth = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [pswd, setPswd] = useState('')

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-fixed bg-cover" >
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
            <img src="/images/logo.png" alt="logo" className="h-12"/>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-30 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold">
                    Sign In
                </h2>
                <div className="flex flex-col gap-4">
                    <Input id="name" label="Username" onChange={(e: any) => setName(e.target.value)} value={name} type="text"/>
                    <Input id="email" label="Email" onChange={(e: any) => setEmail(e.target.value)} value={email} type="email"/>
                    <Input id="password" label="Password" onChange={(e: any) => setPswd(e.target.value)} value={pswd} type="password"/>
                </div>
                </div>
            </div>
            </nav>
        </div>
    </div>
  )
}

export default Auth