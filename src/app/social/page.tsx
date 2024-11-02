import Link from "next/link";
import { IconBrandInstagram } from "@tabler/icons-react";

const IG_OFFICIAL = [
    "https://www.instagram.com/generalitatvalenciana/",
    "https://www.instagram.com/apunt_media/",
    "https://www.instagram.com/bombersvalencia/",
    "https://www.instagram.com/diputaciodevalencia/",
    "https://www.instagram.com/lesartsvalencia/",
    "https://www.instagram.com/emtvalencia/",
    "https://www.instagram.com/ajuntamentvlc/",
];

const IG_OTHERS = [
    "https://www.instagram.com/valencia_viva_walks/",
    "https://www.instagram.com/es.decirdiario/",
    "https://www.instagram.com/danadesaparecidos/"
];

export default function Home() {
    return <main className="grid lg:grid-cols-2 gap-4 p-4 *:bg-slate-100 *:p-4">
        <section>
            <h1 className="text-3xl font-bold flex items-center gap-2">
                <IconBrandInstagram size={32}/>
                Instagram oficial
            </h1>
            <br/>
            <ul className="gap-2 flex flex-col">
                {IG_OFFICIAL.map((instagram) => <li key={instagram}>
                    <Link target="_blank" href={instagram}>{instagram.replace("https://www.instagram.com/", "")}</Link>
                </li>)}
            </ul>
        </section>
        <section>
            <h1 className="text-3xl font-bold flex items-center gap-2">
                <IconBrandInstagram size={32}/>
                Altres comptes
            </h1>
            <br/>
            <ul className="gap-2 flex flex-col">
                {IG_OTHERS.map((instagram) => <li key={instagram}>
                    <Link target="_blank" href={instagram}>{instagram.replace("https://www.instagram.com/", "")}</Link>
                </li>)}
            </ul>
        </section>
    </main>;
}
