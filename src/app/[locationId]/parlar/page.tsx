import { createClient } from "@/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default async function Page({ params }: { params: Promise<{ locationId: string }> }) {
    const { locationId } = await params;

    const supabase = await createClient();
    const {data, error} = await supabase
        .from("locations")
        .select("*")
        .eq("id", locationId)
        .single();

    if (error) {
        return <main>
            <h1>Error!</h1>
            <p>Hi ha un problema amb aquest pàgina</p>
            <Link href={"/"}>Torna a la pàgina principal</Link>
        </main>
    }

    async function demanarAjuda(formData: FormData) {
        "use server";

        const author_name = formData.get("author_name") as string;
        const message = formData.get("message") as string;

        const supabase = await createClient();

        await supabase.from("location_messages").insert({ location: locationId, author_name, message });

        redirect("/" + locationId);
    }

    return <main className="p-4">
        <h1 className="text-center font-bold">⚠️ Publica un missatge d&#39;ajuda ⚠️</h1>
        <h1 className="text-center font-bold text-xl">Zona: {data.name}</h1>
        <form action={demanarAjuda}>
            <label htmlFor="name">Nom</label>
            <Input type="text" name="author_name" placeholder="Nom"/>
            <label htmlFor="message">Missatge</label>
            <Textarea name="message" placeholder="Escriu el teu missatg d'ajuda"/>
            <p className="p-4">
                Recuerda dejar información de contacto, ubicación y cualquier otra información relevante.
            </p>
            <hr/>
            <p className="p-4 font-bold text-red-500 text-lg">
                Por favor, usa este canal de comunicación sólo para emergencias.
            </p>
            <Button type="submit">Demanar ajuda</Button>
        </form>
    </main>
}