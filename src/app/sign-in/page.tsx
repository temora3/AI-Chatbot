"use client"
import { CustomButton } from "../../../components"
import {
    Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle
} from "../../../components/card" 
import Separator from "../../../components/separator"
import Input from "../../../components/input"
import Link from "next/link"
import { useRouter } from 'next/navigation';

//react icons
import{SiGmail} from "react-icons/si"
import {FcGoogle} from "react-icons/fc"
const SignIn = () => {
    const router = useRouter();

    const handleScroll = () => {
        router.push('')
    };
    
    return (
    <div className="h-full flex items-center justify-center bg-blue-100">
        <Card className = "md:h-auto w-[80%] sm:w-[420px] p-4 sm:p-8">
            <CardHeader>
                <CardTitle className = "text-center font-bold text-4xl mb-0.2" >
                    Sign Up
                    </CardTitle>
                    <CardDescription className = "text-sm text-center text-accent-foreground">
                        Use email or service, to sign in

                    </CardDescription>
                
            </CardHeader>
            <CardContent className = "px-2 sm:px-6">
                <form action= "" className="space-y-3 space-x-0.5">
                
                    <Input
                    type="email"
                    disabled ={false}
                    placeholder="Email"
                    value = {""}
                    onChange={()=>{}}
                    required 
                    />
                    <Input
                    type="password"
                    disabled ={false}
                    placeholder="Password"
                    value = {""}
                    onChange={()=>{}}
                    required 
                    />
                    
                    <CustomButton
                    title="Continue"
                    containerStyles="w-full bg-blue-600 text-white rounded-full px-2 py-3 hover:bg-blue-700 transition"
                    btnType="submit"
                    handleClick={handleScroll}
                    />
                    

                </form>

            </CardContent>
        

            
        </Card>
    </div>
)
}

export default SignIn