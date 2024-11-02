"use server";

import { createClient } from "@/supabase/server";
import Link from "next/link";

export default async function Home() {
    const supabase = await createClient();

    const { data: posts, error: postsError } = await supabase.from("posts").select("*");
    const { data: locations, error: locationsError } = await supabase.from("locations").select("*");

    if (postsError || locationsError) {
        return <main>
            <p className="p-8">Pàgina per a ajudar a la gent afectada per la dana.</p>
            <p className="p-8">Hi ha hagut un error al carregar els missatges. Torna-ho a intentar més tard.</p>
        </main>;
    }

    return <main>
        <p className="p-8">Pàgina per a ajudar a la gent afectada per la dana.</p>
        <hr/>
        <p className="text-center text-xl font-bold underline">Fes clic per a veure detalls de la zona</p>
        <ul className="flex items-center justify-stretch flex-wrap divide-x divide-black">
            {locations.map((location) => (
                <li key={location.id}>
                    <Link href={"/" + location.id} className="px-2 py-1 bg-gray-100 hover:underline hover:bg-gray-300">
                        {location.name}
                    </Link>
                </li>
            ))}
        </ul>
        <hr/>
        <p className="p-8 text-center text-3xl font-bold underline">⚠️ Missatges ⚠️</p>
        <ul className="py-4 divide-y-2 divide-gray-500">
            {posts.map((post) => (
                <li key={post.id} className="p-4">
                    <p className="font-bold">Autor: {post.author_name}</p>
                    <p>{post.message}</p>
                </li>
            ))}
        </ul>
    </main>;
}
