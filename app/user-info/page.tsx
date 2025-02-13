import { auth } from "@/auth";
import Image from "next/image"
import { SignOutButton } from "../ui/components/sign-out-button";

export default async function UserInfo() {
    const session = await auth();
    return (
        <div>
            {""}
            <h1>Orchid</h1>
            <p>User signed in with name: {session?.user?.name}</p>
            <p>User signed in with email: {session?.user?.email}</p>
            {session?.user?.image && (
                <Image
                src={session.user.image}
                width={50}
                height={50}
                alt="Avatar"
                className="absolute top-0 right-0 m-4 rounded-full shadow-lg"
            />
            )}
            <SignOutButton/>
        </div>
    )
}