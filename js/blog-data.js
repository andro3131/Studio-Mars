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
            <p class="mb-6">Prva skladba je ravnokar dobila končno podobo in je na voljo za predvajanje na različnih platformah, seveda pa tudi tukaj na straneh studia Mars. Lahko rečemo, da Roman prisega na pristen rock-n-roll, njegov melos pa spominja na mešanico Janeza Zmazka Žana in Perota Lovšina, le z občutno bolj uglašenim in točnim vokalom :).</p>
            <div class="mt-8">
                <h3 class="text-lg font-medium text-white mb-4">Videospot</h3>
                <div class="aspect-video rounded-lg overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/L439NaJv2as" title="Roman Opara" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        `,
        image: "https://i.ibb.co/Xk2sZR6c/e8efd0-332a4c313cf94d0ebe8b10322623e5c1-mv2-2.webp",
        tags: ["Glasba", "Snemanje"]
    },
    {
        id: 2,
        title: "V ponudbi je nova storitev \"Podari pesem\"",
        date: "17.03.2025",
        readTime: "1 min branja",
        excerpt: "Pred kratkim sva s prijateljem in odličnim glasbenikom Žanom Ograjškom združila moči in zagnala novo storitev po imenu Podari pesem...",
        content: `
            <p class="mb-4">Pred kratkim sva s prijateljem in odličnim glasbenikom Žanom Ograjškom združila moči in zagnala novo storitev po imenu Podari pesem. Po naročilu ustvarjava pesmi za različne priložnosti, kot so darila za rojstni dan, obletnico, poroko, upokojitev, ali pa izdelava pesem za posebne namene in priložnosti, kot so na primer himna kluba ali društva.</p>
            <p class="mb-4">Morda pa ste mlad glasbenik, ki si želi svojo prvo avtorsko pesem - z veseljem se lotiva vsakega izziva! Seveda v projektu nisva čisto sama, kajti sodelujeva z različnimi vrhunskimi glasbeniki, ki jih vključiva v specifičen projekt po potrebi glede na zahtevnost skladbe ali želje naročnika.</p>
            <p class="mb-4">Naj jih naštejemo le nekaj: Barbara Leben (vokal), Boštjan Bone (bobni), Aljoša Deferri (klarinet in saksofon), Mojca Dolenc (vokal), Igor Osredkar (kitare, bas), Primož Kravcar (bas), Bogdan Turnšek - Poli (bobni), Maja Marinčič - Divana (vokal), Marti koncilija (kontrabas), Andrej Kaferle (harmonika), Aljaž Hrastar (kitare) itd.</p>
            <p class="mb-6">Pred kratkim je tako nastala udarna himna za nogometni klub Trebnje, ki je bila sprejeta z velikim navdušenjem, navijači pa so jo z veseljem sprejeli za svojo, poslušajte si jo tudi spodaj. Obiščite najuno novo spletno stran <a href="https://podaripesem.si" class="text-[#EB462F] hover:underline">podaripesem.si</a> ali pa najin <a href="https://www.facebook.com/profile.php?id=61572442046986" class="text-[#EB462F] hover:underline">Facebook</a>, <a href="https://www.instagram.com/podaripesem/" class="text-[#EB462F] hover:underline">Instagram</a> in <a href="https://tiktok.com" class="text-[#EB462F] hover:underline">TikTok</a> profil in si preberite več, in seveda, naroči svojo pesem že danes :).</p>
            <div class="mt-8">
                <h3 class="text-lg font-medium text-white mb-4">Himna NK Trebnje</h3>
                <div class="aspect-video rounded-lg overflow-hidden">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1h5ugBLWZCI" title="Himna NK Trebnje" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        `,
        image: "https://i.ibb.co/Z6r2Ddgt/Podari-pesem-LOGO-simbol1.jpg",
        tags: ["Storitev", "Podari pesem"]
    }
];

// Helper to get article by ID (simulate API)
function getArticleById(id) {
    return blogPosts.find(post => post.id === parseInt(id));
}
