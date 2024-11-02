"use server";

import { createClient } from "@/supabase/server";

export default async function Home() {
    const supabase = await createClient();

    const { data, error } = await supabase.from("posts").select("*");

    if (error) {
        return <main>
            <p className="p-8">Pàgina per a ajudar a la gent afectada per la dana.</p>
            <p className="p-8">Hi ha hagut un error al carregar els missatges. Torna-ho a intentar més tard.</p>
        </main>;
    }

    return <main>
        <p className="p-8">Pàgina per a ajudar a la gent afectada per la dana.</p>
        <hr/>
        <p className="p-8 text-center text-3xl font-bold underline">⚠️ Missatges ⚠️</p>
        <ul className="py-4 divide-y-2 divide-gray-500">
            {data.map((post) => (
                <li key={post.id} className="p-4">
                    <p className="font-bold">Autor: {post.author_name}</p>
                    <p>{post.message}</p>
                </li>
            ))}
        </ul>
    </main>;
}
