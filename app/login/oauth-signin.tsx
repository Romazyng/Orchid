'use client'

import { Provider } from "@supabase/supabase-js"
import { JSX } from "react"
import {Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { oAuthSignIn } from "./actions"


type OauthProvider = {
    name: Provider,
    displayName: string,
    icon?: JSX.Element
}

export function OAuthButtons() {
    const oAuthProviders: OauthProvider[] = [
        {
            name: 'github',
            displayName: 'GitHub',
            icon: <Github className='size-5' />,
        },
    ];

    return (
        <>
            {oAuthProviders.map((provider) => (
                <Button 
                    key={provider.name} // Добавили key
                    className="flex items-center justify-center gap-2" 
                    variant='outline'
                    onClick={async () => {
                        await oAuthSignIn(provider.name);
                    }}
                >
                    {provider.icon}
                    Login with {provider.displayName}
                </Button>
            ))}
        </>
    );
}
