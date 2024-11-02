import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export default function Page() {
    async function demanarAjuda(formData: FormData) {
        "use server";

        const author_name = formData.get("author_name") as string;
        const message = formData.get("message") as string;

        const supabase = await createClient();

        await supabase.from("posts").insert({ author_name, message });

        redirect("/");
    }

    return <main className="p-4">
        <h1 className="text-center font-bold">⚠️ Publica un missatge d&#39;ajuda ⚠️</h1>
        <form action={demanarAjuda}>
            <label htmlFor="name">Nom</label>
            <Input type="text" name="author_name" placeholder="Nom"/>
            <label htmlFor="message">Missatge</label>
            <Textarea name="message" placeholder="Escriu el teu missatge d'ajuda"/>
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