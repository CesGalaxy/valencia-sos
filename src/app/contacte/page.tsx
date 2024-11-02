import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export default function Page() {
    async function contactar(formData: FormData) {
        "use server";

        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        if (!name || !message) return;

        const supabase = await createClient();

        await supabase.from("feedback").insert({ name, email, message });

        redirect("/");
    }

    return <main className="p-4">
        <h1 className="text-center font-bold text-3xl">Contacte</h1>
        <form action={contactar}>
            <label htmlFor="name">Nom</label>
            <Input type="text" name="name" placeholder="Nom" required/>
            <br/>
            <label htmlFor="name">Adreça electrònica</label>
            <Input type="text" name="email" placeholder="nom@exemple.com"/>
            <br/>
            <label htmlFor="message">Missatge</label>
            <Textarea name="message" placeholder="Escriu el teu missatge" rows={12} required/>
            <p className="p-4 text-gray-500">
                <b>Nota:&nbsp;</b>
                <span>Només hi ha una persona gestionant la web. Per favor, paciència.</span>
            </p>
            <Button type="submit">Enviar missatge</Button>
        </form>
    </main>
}