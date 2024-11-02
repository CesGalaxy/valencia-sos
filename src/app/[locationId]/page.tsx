import { createClient } from "@/supabase/server";
import Link from "next/link";

export default async function Page({ params }: { params: Promise<{ locationId: string }> }) {
    const { locationId } = await params;

    const supabase = await createClient();
    const {data, error} = await supabase
        .from("locations")
        .select("*, messages:location_messages(*)")
        .eq("id", locationId)
        .single();

    if (error) {
        return <main>
            <h1>Error!</h1>
            <p>Hi ha un problema amb aquest pàgina</p>
            <Link href={"/"}>Torna a la pàgina principal</Link>
        </main>
    }

    return <main>
        <h1 className="text-center text-3xl font-bold mt-4">{data.name}</h1>
        <hr className="my-2"/>
        <nav className="flex items-center justify-between flex-wrap px-2">
            <p className="text-xl font-bold underline">Missatges</p>
            <Link href={locationId + "/parlar"} className="px-2 py-1 bg-gray-100 underline hover:bg-gray-300">
                Publica un missatge
            </Link>
        </nav>
        <ul className="py-4 divide-y-2 divide-gray-500">
        {data.messages.map((message: { id: number, author_name: string, message: string }) => (
                <li key={message.id} className="p-4">
                    <p className="font-bold">Autor: {message.author_name}</p>
                    <p>{message.message}</p>
                </li>
            ))}
        </ul>
    </main>
}