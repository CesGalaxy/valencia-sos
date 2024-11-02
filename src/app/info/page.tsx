import Link from "next/link";
import { IconLink } from "@tabler/icons-react";
import React from "react";

const EMAILS = [
    "dana_educació@gva.es",
    "dana_cultura@gva.es",
    "dana_universitats@gva.es",
    "dana_ocupacio@gva.es",
]

export default function Home() {
    return <main className="grid lg:grid-cols-2 gap-4 p-4 *:bg-slate-100 *:p-4">
        <section>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-2">Medi de comunicació</h2>
            <ExtLink href="https://www.apuntmedia.es/">Pàgina web de apunt</ExtLink>
        </section>
        <section>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-2">Altres</h2>
            <ExtLink href="https://cac.es/noticia/centrovoluntariado-museuciencies/">
                Centre de Voluntariat de la CAC
            </ExtLink>
        </section>
        <section>
            <h2 className="text-3xl font-bold flex items-center gap-2 mb-2">Contactes (email)</h2>
            <ul className="gap-2 flex flex-col">
                {EMAILS.map((email) => <li key={email}>
                    <ExtLink href={`mailto:${email}`}>{email}</ExtLink>
                </li>)}
            </ul>
        </section>
    </main>;
}

function ExtLink({ children, ...props }: React.ComponentProps<typeof Link>) {
    return <Link
        target="_blank"
        className="flex items-center gap-2 bg-blue-200 px-2 py-1 rounded-full hover:bg-blue-300 hover:underline border-2 border-blue-400"
        {...props}
    >
        <IconLink/>
        <span>{children}</span>
    </Link>
}
