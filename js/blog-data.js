const blogPosts = [
    {
        id: 1,
        title: "Roman Opara z novo rock-n-roll skladbo",
        date: "17.03.2025",
        readTime: "2 min branja",
        excerpt: "Pred kratkim se je v studiu mudil zanimiv mož po imenu Roman Opara. Kitarist in vokalist, ki je začel s svojim glasbenim udejstvovanjem...",
        content: `
            <p class="mb-4">Pred kratkim se je v studiu mudil zanimiv mož po imenu Roman Opara. Kitarist in vokalist, ki je začel s svojim glasbenim udejstvovanjem že v sedemdesetih letih prejšnjega tisočletja, je v svojem življenju počel še marsikaj drugega, kot samo prepevanje in igranje kitare.</p>
            <p class="mb-4">V prvi vrsti uspešen programer, v prostem času pa kolesar, hribolazec in vsestranski športnik, se je v časih, ko je nastajala skupina Agropop, aktivno udejstvoval v glasbenem ustvarjanju, potem pa ga je pot ponesla predvsem v podjetniške vode.</p>
            <p class="mb-4">Glasba pa vendar vedno najde pot in po dolgih letih, lahko bi celo rekli desetletjih, je zopet obiskal snemalni studio, in to praktično v rodnem kraju, saj mi je povedal, da je svoje prvo desetletje življenja preživel na domačiji blizu Trebnjega, le streljaj od mojega studia.</p>
            <p class="mb-4">Prva skladba je ravnokar dobila končno podobo in je na voljo za predvajanje na različnih platformah, seveda pa tudi tukaj na straneh studia Mars. Lahko rečemo, da Roman prisega na pristen rock-n-roll, njegov melos pa spominja na mešanico Janeza Zmazka Žana in Perota Lovšina, le z občutno bolj uglašenim in točnim vokalom :).</p>
        `,
        image: "https://i.ibb.co/k2dyLNwQ/mars3.png", // Placeholder, user can update
        tags: ["Glasba", "Snemanje"]
    },
    {
        id: 2,
        title: "Snemanje novega albuma skupine Meteor",
        date: "10.02.2025",
        readTime: "5 min branja",
        excerpt: "Skupina Meteor je zaključila s snemanjem svojega prvenca. Preverite, kako je potekalo delo v studiu...",
        content: `
            <p class="mb-4">Fantje iz skupine Meteor so pri nas preživeli intenziven teden. Snemali smo bobne, bas, kitare in vokale za njihov prihajajoči album.</p>
            <p>Energija je bila neverjetna in komaj čakamo, da slišite končni izdelek!</p>
        `,
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
        tags: ["Studio", "Album"]
    },
    {
        id: 3,
        title: "Nasveti za pripravo na studijsko snemanje",
        date: "05.01.2025",
        readTime: "3 min branja",
        excerpt: "Kako se najbolje pripraviti na snemanje? Preberite nekaj ključnih nasvetov, ki vam bodo prihranili čas in denar.",
        content: `
            <p class="mb-4">Priprava je ključ do uspešnega snemanja. Tukaj je nekaj točk, na katere ne smete pozabiti:</p>
            <ul class="list-disc pl-5 space-y-2 mb-4">
                <li>Vadite s metronomom.</li>
                <li>Zamenjajte strune na kitarah dan ali dva prej.</li>
                <li>Prinesite referenčne posnetke.</li>
            </ul>
        `,
        image: "https://images.unsplash.com/photo-1514320291940-236a2af4d672?q=80&w=1000&auto=format&fit=crop",
        tags: ["Nasveti", "Edukacija"]
    },
    {
        id: 4,
        title: "Nova oprema v studiu: U87 mikrofon",
        date: "15.12.2024",
        readTime: "1 min branja",
        excerpt: "Naš arzenal mikrofonov je bogatejši za legendarni Neumann U87. Vabljeni na preizkus!",
        content: "<p>Neumann U87 je standard v industriji. Zvok je topel, čist in primeren za skoraj vse vire zvoka, od vokalov do akustičnih inštumentov.</p>",
        image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=1000&auto=format&fit=crop",
        tags: ["Oprema", "Neumann"]
    },
    {
        id: 5,
        title: "Video produkcija videospota za Niko",
        date: "20.11.2024",
        readTime: "4 min branja",
        excerpt: "Poleg avdio snemanja smo poskrbeli tudi za video podobo nove pesmi pevke Nike.",
        content: "<p>Snemanje je potekalo na lokaciji v bližnjem gozdu in v samem studiu. Uporabili smo več kamer in dron posnetke.</p>",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop",
        tags: ["Video", "Videospot"]
    },
    {
        id: 6,
        title: "Arhiv: Začetki studia leta 2008",
        date: "01.11.2024",
        readTime: "6 min branja",
        excerpt: "Sprehod skozi zgodovino. Kako je izgledal Studio Mars pred več kot 15 leti?",
        content: "<p>Začeli smo skromno, v kletnih prostorih, z le nekaj mikrofoni in veliko željo po ustvarjanju...</p>",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1000&auto=format&fit=crop",
        tags: ["Zgodovina", "Arhiv"]
    },
    {
        id: 7,
        title: "Mastering: Zakaj je pomemben?",
        date: "15.10.2024",
        readTime: "3 min branja",
        excerpt: "Zadnji korak v produkciji, ki vašo skladbo pripravi za svet. Kaj točno se dogaja med masteringom?",
        content: "<p>Mastering uravnoteži frekvenčni spekter, stisne dinamiko in poskrbi, da skladba zveni glasno in konsistentno na vseh napravah.</p>",
        image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1000&auto=format&fit=crop",
        tags: ["Mastering", "Audio"]
    }
];

// Helper to get article by ID (simulate API)
function getArticleById(id) {
    return blogPosts.find(post => post.id === parseInt(id));
}
