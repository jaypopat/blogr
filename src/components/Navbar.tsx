import {auth, signIn, signOut} from "@/lib/auth";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {Github, LogOut} from "lucide-react";

export default async function Navbar() {
    const session = await auth();
    return (
        <nav className="flex items-center gap-6 sm:gap-8">
            <Link className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors" href="#">
                Features
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors" href="#">
                Pricing
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors" href="#">
                Blog
            </Link>
            {session?.user ? (
                <form
                    action={async () => {
                        "use server"
                        await signOut({redirectTo: "/"})
                    }}
                >
                    <Button type="submit" variant="outline" className="flex items-center gap-2">
                        <LogOut className="h-5 w-5"/>
                        <span>Sign out</span>
                    </Button>
                </form>
            ) : (
                <form
                    action={async () => {
                        "use server"
                        await signIn("github")
                    }}
                >
                    <Button type="submit" variant="outline" className="flex items-center gap-2">
                        <Github className="h-5 w-5"/>
                        <span>Sign in with GitHub</span>
                    </Button>
                </form>
            )}
        </nav>
    )
}