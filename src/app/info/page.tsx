import Link from "next/link";

const IG_OFFICIAL = [
    "https://www.instagram.com/generalitatvalenciana/",
    "https://www.instagram.com/apunt_media/",
    "https://www.instagram.com/bombersvalencia/",
    "https://www.instagram.com/diputaciodevalencia/",
    "https://www.instagram.com/lesartsvalencia/",
    "https://www.instagram.com/emtvalencia/",
]

export default function Home() {
    return <main>
        <p>Help</p>
        <section>
            <h2>Instagram Oficial</h2>
            <ul>
                {IG_OFFICIAL.map((instagram) => <li key={instagram}>
                    <Link href={instagram}>{instagram.replace("https://www.instagram.com/", "")}</Link>
                </li>)}
            </ul>
        </section>
    </main>;
}
