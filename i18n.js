(function () {
    'use strict';

    var LANGS = [
        ['bg', 'Български'], ['hr', 'Hrvatski'], ['cs', 'Čeština'],
        ['da', 'Dansk'], ['nl', 'Nederlands'], ['en', 'English'],
        ['et', 'Eesti'], ['fi', 'Suomi'], ['fr', 'Français'],
        ['de', 'Deutsch'], ['el', 'Ελληνικά'], ['hu', 'Magyar'],
        ['ga', 'Gaeilge'], ['it', 'Italiano'], ['lv', 'Latviešu'],
        ['lt', 'Lietuvių'], ['mt', 'Malti'], ['pl', 'Polski'],
        ['pt', 'Português'], ['ro', 'Română'], ['sk', 'Slovenčina'],
        ['sl', 'Slovenščina'], ['es', 'Español'], ['sv', 'Svenska']
    ];

    var VALID = {};
    for (var k = 0; k < LANGS.length; k++) VALID[LANGS[k][0]] = true;

    var T = {
        'title.index': {
            en: 'GlyphClock', bg: 'GlyphClock', hr: 'GlyphClock',
            cs: 'GlyphClock', da: 'GlyphClock', nl: 'GlyphClock',
            et: 'GlyphClock', fi: 'GlyphClock', fr: 'GlyphClock',
            de: 'GlyphClock', el: 'GlyphClock', hu: 'GlyphClock',
            ga: 'GlyphClock', it: 'GlyphClock', lv: 'GlyphClock',
            lt: 'GlyphClock', mt: 'GlyphClock', pl: 'GlyphClock',
            pt: 'GlyphClock', ro: 'GlyphClock', sk: 'GlyphClock',
            sl: 'GlyphClock', es: 'GlyphClock', sv: 'GlyphClock'
        },
        'title.about': {
            en: 'About GlyphClock',
            bg: 'За GlyphClock',
            hr: 'O GlyphClock',
            cs: 'O GlyphClock',
            da: 'Om GlyphClock',
            nl: 'Over GlyphClock',
            et: 'GlyphClock\u2019ist',
            fi: 'Tietoa GlyphClock',
            fr: 'À propos de GlyphClock',
            de: 'Über GlyphClock',
            el: 'Σχετικά με GlyphClock',
            hu: 'A GlyphClock-ról',
            ga: 'Maidir le GlyphClock',
            it: 'Informazioni su GlyphClock',
            lv: 'Par GlyphClock',
            lt: 'Apie GlyphClock',
            mt: 'Dwar GlyphClock',
            pl: 'O GlyphClock',
            pt: 'Sobre o GlyphClock',
            ro: 'Despre GlyphClock',
            sk: 'O GlyphClock',
            sl: 'O GlyphClock',
            es: 'Acerca de GlyphClock',
            sv: 'Om GlyphClock'
        },
        'about.desc': {
            en: 'GlyphClock is a timezone and language free time system. The 24-hour day is divided into 16 blocks of 90 minutes, each block with a unique emoji. Each 90 minute period has 3 sub-periods of 30 minutes, shown by displaying one, two, or three copies of the glyph. You can set a current focus task that stays visible beneath the clock when the page fades to clock-only mode.',
            bg: 'GlyphClock е система за време, свободна от часови зони и език. 24-часовият ден е разделен на 16 блока от по 90 минути, всеки блок с уникално емоджи. Всеки 90-минутен период има 3 подпериода от 30 минути, показани чрез една, две или три копия на символа. Можете да зададете текуща фокусна задача, която остава видима под часовника, когато страницата премине в режим само с часовник.',
            hr: 'GlyphClock je vremenski sustav slobodan od vremenskih zona i jezika. Dan od 24 sata podijeljen je u 16 blokova od 90 minuta, svaki blok s jedinstvenim emojijem. Svako 90-minutno razdoblje ima 3 podrazdoblja od 30 minuta, prikazana jednom, dvjema ili trima kopijama simbola. Možete postaviti trenutni fokusni zadatak koji ostaje vidljiv ispod sata kada stranica prijeđe u način samo sa satom.',
            cs: 'GlyphClock je časový systém bez časových pásem a jazyka. 24hodinový den je rozdělen na 16 bloků po 90 minutách, každý blok s jedinečným emoji. Každé 90minutové období má 3 podobdobí po 30 minutách, zobrazená jednou, dvěma nebo třemi kopiemi symbolu. Můžete nastavit aktuální úkol zaměření, který zůstane viditelný pod hodinami, když stránka přejde do režimu pouze s hodinami.',
            da: 'GlyphClock er et tidssystem frit for tidszoner og sprog. Døgnet er opdelt i 16 blokke à 90 minutter, hver blok med en unik emoji. Hver 90-minutters periode har 3 underperioder à 30 minutter, vist ved at vise én, to eller tre kopier af symbolet. Du kan sætte en aktuel fokusopgave, der forbliver synlig under uret, når siden skifter til ur-tilstand.',
            nl: 'GlyphClock is een tijdsysteem vrij van tijdzones en taal. De dag van 24 uur is verdeeld in 16 blokken van 90 minuten, elk blok met een unieke emoji. Elke periode van 90 minuten heeft 3 subperioden van 30 minuten, weergegeven door één, twee of drie kopieën van het symbool. Je kunt een huidige focustaak instellen die zichtbaar blijft onder de klok wanneer de pagina overschakelt naar de klokmodus.',
            et: 'GlyphClock on ajavöönditest ja keelest vaba ajasüsteem. 24-tunnine päev on jagatud 16 plokiks, igaüks 90 minutit, iga plokk unikaalse emojiga. Igal 90-minutilisel perioodil on 3 alamperioodi à 30 minutit, mida kuvatakse ühe, kahe või kolme sümboli koopiaga. Saate määrata praeguse fookusülesande, mis jääb kella all nähtavale, kui leht lülitub ainult kella režiimile.',
            fi: 'GlyphClock on aikavyöhykkeistä ja kielestä vapaa aikajärjestelmä. 24 tunnin vuorokausi on jaettu 16 lohkoon à 90 minuuttia, jokaisella lohkolla oma uniikki emoji. Jokaisella 90 minuutin jaksolla on 3 alajaksoa à 30 minuuttia, jotka esitetään näyttämällä yksi, kaksi tai kolme kopiota symbolista. Voit asettaa nykyisen keskittymistehtävän, joka pysyy näkyvissä kellon alla, kun sivu siirtyy pelkkään kellotilaan.',
            fr: 'GlyphClock est un système horaire libre de fuseaux horaires et de langue. La journée de 24 heures est divisée en 16 blocs de 90 minutes, chaque bloc avec un emoji unique. Chaque période de 90 minutes comporte 3 sous-périodes de 30 minutes, représentées par une, deux ou trois copies du glyphe. Vous pouvez définir une tâche de concentration actuelle qui reste visible sous l\'horloge lorsque la page passe en mode horloge seule.',
            de: 'GlyphClock ist ein zeitzonen- und sprachfreies Zeitsystem. Der 24-Stunden-Tag ist in 16 Blöcke zu je 90 Minuten unterteilt, jeder Block mit einem einzigartigen Emoji. Jede 90-Minuten-Periode hat 3 Unterperioden zu 30 Minuten, dargestellt durch eine, zwei oder drei Kopien des Symbols. Sie können eine aktuelle Fokusaufgabe festlegen, die unter der Uhr sichtbar bleibt, wenn die Seite in den Nur-Uhr-Modus wechselt.',
            el: 'Το GlyphClock είναι ένα σύστημα χρόνου ελεύθερο από ζώνες ώρας και γλώσσα. Η ημέρα των 24 ωρών χωρίζεται σε 16 μπλοκ των 90 λεπτών, κάθε μπλοκ με ένα μοναδικό emoji. Κάθε περίοδος 90 λεπτών έχει 3 υποπεριόδους των 30 λεπτών, που εμφανίζονται με ένα, δύο ή τρία αντίγραφα του συμβόλου. Μπορείτε να ορίσετε μια τρέχουσα εργασία εστίασης που παραμένει ορατή κάτω από το ρολόι όταν η σελίδα μεταβεί σε λειτουργία μόνο ρολογιού.',
            hu: 'A GlyphClock egy időzónáktól és nyelvtől mentes időrendszer. A 24 órás nap 16 blokkra van osztva, mindegyik 90 perces, egyedi emojival. Minden 90 perces időszaknak 3 alperiódusa van, egyenként 30 perc, amelyek a szimbólum egy, két vagy három példányával jelennek meg. Beállíthat egy aktuális fókuszfeladatot, amely az óra alatt látható marad, amikor az oldal csak óra módba vált.',
            ga: 'Is córas ama saor ó chriosanna ama agus ó theanga é GlyphClock. Tá an lá 24 uair an chloig roinnte ina 16 bhloc 90 nóiméad, gach bloc le emoji uathúil. Tá 3 fho-thréimhse 30 nóiméad ag gach tréimhse 90 nóiméad, léirithe trí chóip amháin, dhá chóip nó trí chóip den ghliof a thaispeáint. Is féidir leat tasc fócais reatha a shocrú a fhanann infheicthe faoin gclog nuair a athraíonn an leathanach go mód clog amháin.',
            it: 'GlyphClock è un sistema orario libero da fusi orari e lingua. La giornata di 24 ore è divisa in 16 blocchi da 90 minuti, ogni blocco con un emoji unico. Ogni periodo di 90 minuti ha 3 sottoperiodi da 30 minuti, mostrati con una, due o tre copie del glifo. Puoi impostare un\'attività di focus corrente che rimane visibile sotto l\'orologio quando la pagina passa alla modalità solo orologio.',
            lv: 'GlyphClock ir laika sistēma, brīva no laika joslām un valodas. 24 stundu diena ir sadalīta 16 blokos pa 90 minūtēm, katrs bloks ar unikālu emoji. Katram 90 minūšu periodam ir 3 apakšperiodi pa 30 minūtēm, attēloti ar vienu, divām vai trim simbola kopijām. Jūs varat iestatīt pašreizējo fokusa uzdevumu, kas paliek redzams zem pulksteņa, kad lapa pārslēdzas tikai pulksteņa režīmā.',
            lt: 'GlyphClock yra laiko sistema, laisva nuo laiko juostų ir kalbos. 24 valandų diena suskirstyta į 16 blokų po 90 minučių, kiekvienas blokas su unikaliu emoji. Kiekvienas 90 minučių periodas turi 3 subperiodus po 30 minučių, rodomus viena, dviem arba trim simbolio kopijomis. Galite nustatyti dabartinę fokusavimo užduotį, kuri lieka matoma po laikrodžiu, kai puslapis pereina į tik laikrodžio režimą.',
            mt: 'GlyphClock huwa sistema ta\' ħin ħielsa miż-żoni tal-ħin u l-lingwa. Il-ġurnata ta\' 24 siegħa hija maqsuma fi 16-il blokka ta\' 90 minuta, kull blokka b\'emoji unika. Kull perjodu ta\' 90 minuta għandu 3 sotto-perjodi ta\' 30 minuta, murija billi jintwera kopja waħda, tnejn jew tlieta tas-simbolu. Tista\' tissettja kompitu ta\' fokus attwali li jibqa\' viżibbli taħt l-arloġġ meta l-paġna tinbidel għall-modalità tal-arloġġ biss.',
            pl: 'GlyphClock to system czasu wolny od stref czasowych i języka. Dzień 24-godzinny jest podzielony na 16 bloków po 90 minut, każdy blok z unikalnym emoji. Każdy 90-minutowy okres ma 3 podokresy po 30 minut, przedstawiane przez wyświetlanie jednej, dwóch lub trzech kopii symbolu. Możesz ustawić bieżące zadanie skupienia, które pozostaje widoczne pod zegarem, gdy strona przechodzi w tryb samego zegara.',
            pt: 'GlyphClock é um sistema de tempo livre de fusos horários e língua. O dia de 24 horas é dividido em 16 blocos de 90 minutos, cada bloco com um emoji único. Cada período de 90 minutos tem 3 subperíodos de 30 minutos, mostrados exibindo uma, duas ou três cópias do glifo. Pode definir uma tarefa de foco atual que permanece visível abaixo do relógio quando a página muda para o modo apenas relógio.',
            ro: 'GlyphClock este un sistem de timp liber de fusuri orare și limbă. Ziua de 24 de ore este împărțită în 16 blocuri de 90 de minute, fiecare bloc cu un emoji unic. Fiecare perioadă de 90 de minute are 3 subperioade de 30 de minute, afișate prin una, două sau trei copii ale simbolului. Puteți seta o sarcină de focalizare curentă care rămâne vizibilă sub ceas când pagina trece în modul doar ceas.',
            sk: 'GlyphClock je časový systém bez časových pásiem a jazyka. 24-hodinový deň je rozdelený na 16 blokov po 90 minútach, každý blok s jedinečným emoji. Každé 90-minútové obdobie má 3 podobdobia po 30 minútach, zobrazené jednou, dvoma alebo tromi kópiami symbolu. Môžete nastaviť aktuálnu úlohu zamerania, ktorá zostane viditeľná pod hodinami, keď stránka prejde do režimu iba s hodinami.',
            sl: 'GlyphClock je časovni sistem, osvobojen časovnih pasov in jezika. 24-urni dan je razdeljen na 16 blokov po 90 minut, vsak blok z edinstvenim emojijem. Vsako 90-minutno obdobje ima 3 podobdobja po 30 minut, prikazana z eno, dvema ali tremi kopijami simbola. Nastavite lahko trenutno nalogo osredotočenja, ki ostane vidna pod uro, ko stran preide v način samo z uro.',
            es: 'GlyphClock es un sistema de tiempo libre de zonas horarias e idioma. El día de 24 horas se divide en 16 bloques de 90 minutos, cada bloque con un emoji único. Cada período de 90 minutos tiene 3 subperíodos de 30 minutos, mostrados con una, dos o tres copias del glifo. Puedes establecer una tarea de enfoque actual que permanece visible debajo del reloj cuando la página cambia al modo solo reloj.',
            sv: 'GlyphClock är ett tidssystem fritt från tidszoner och språk. Dygnet är uppdelat i 16 block om 90 minuter, varje block med en unik emoji. Varje 90-minutersperiod har 3 underperioder om 30 minuter, visade genom att visa en, två eller tre kopior av symbolen. Du kan ställa in en aktuell fokusuppgift som förblir synlig under klockan när sidan växlar till enbart klockläge.'
        },
        'about.creator': {
            en: 'Created by <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            bg: 'Създадено от <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            hr: 'Izradio <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            cs: 'Vytvořil <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            da: 'Skabt af <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            nl: 'Gemaakt door <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            et: 'Loonud <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            fi: 'Luonut <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            fr: 'Créé par <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            de: 'Erstellt von <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            el: 'Δημιουργήθηκε από <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            hu: 'Készítette a <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            ga: 'Cruthaithe ag <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            it: 'Creato da <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            lv: 'Izveidoja <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            lt: 'Sukūrė <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            mt: 'Maħluq minn <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            pl: 'Stworzone przez <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            pt: 'Criado por <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            ro: 'Creat de <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            sk: 'Vytvoril <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            sl: 'Ustvaril <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            es: 'Creado por <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            sv: 'Skapat av <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.'
        },
        'focus.add': {
            en: '+ add current focus', bg: '+ добави текущ фокус', hr: '+ dodaj trenutni fokus',
            cs: '+ přidat aktuální zaměření', da: '+ tilføj nuværende fokus', nl: '+ huidige focus toevoegen',
            et: '+ lisa praegune fookus', fi: '+ lisää nykyinen keskittyminen', fr: '+ ajouter le focus actuel',
            de: '+ aktuellen Fokus hinzufügen', el: '+ προσθήκη τρέχουσας εστίασης', hu: '+ aktuális fókusz hozzáadása',
            ga: '+ cuir fócas reatha leis', it: '+ aggiungi focus attuale', lv: '+ pievienot pašreizējo fokusu',
            lt: '+ pridėti dabartinį fokusą', mt: '+ żid il-fokus attwali', pl: '+ dodaj bieżące skupienie',
            pt: '+ adicionar foco atual', ro: '+ adaugă focalizarea curentă', sk: '+ pridať aktuálne zameranie',
            sl: '+ dodaj trenutno osredotočenje', es: '+ añadir enfoque actual', sv: '+ lägg till nuvarande fokus'
        },
        'focus.placeholder': {
            en: 'What are you focusing on?', bg: 'Върху какво се фокусирате?', hr: 'Na što se fokusirate?',
            cs: 'Na co se zaměřujete?', da: 'Hvad fokuserer du på?', nl: 'Waar focus je op?',
            et: 'Millele keskendute?', fi: 'Mihin keskityt?', fr: 'Sur quoi vous concentrez-vous ?',
            de: 'Worauf konzentrieren Sie sich?', el: 'Σε τι εστιάζετε;', hu: 'Mire összpontosít?',
            ga: 'Cad air a bhfuil tú ag díriú?', it: 'Su cosa ti stai concentrando?', lv: 'Uz ko jūs koncentrējaties?',
            lt: 'Į ką sutelkiate dėmesį?', mt: 'Fuq xiex qed tiffoka?', pl: 'Na czym się skupiasz?',
            pt: 'No que está focado?', ro: 'Pe ce vă concentrați?', sk: 'Na čo sa zameriavate?',
            sl: 'Na kaj se osredotočate?', es: '¿En qué te enfocas?', sv: 'Vad fokuserar du på?'
        },
        'meta.description.index': {
            en: 'A timezone-free time system dividing the day into 16 symbolic blocks.',
            bg: 'Система за време без часови зони, разделяща деня на 16 символни блока.',
            hr: 'Sustav vremena bez vremenskih zona koji dijeli dan na 16 simboličnih blokova.',
            cs: 'Systém času bez časových pásem rozdělující den na 16 symbolických bloků.',
            da: 'Et tidszonefrit tidssystem der opdeler døgnet i 16 symbolske blokke.',
            nl: 'Een tijdzonevrij tijdsysteem dat de dag verdeelt in 16 symbolische blokken.',
            et: 'Ajavöönditeta ajasüsteem, mis jagab päeva 16 sümboolseks plokiks.',
            fi: 'Aikavyöhykkeetön aikajärjestelmä, joka jakaa vuorokauden 16 symboliseen lohkoon.',
            fr: 'Un système horaire sans fuseaux horaires divisant la journée en 16 blocs symboliques.',
            de: 'Ein zeitzonenfreies Zeitsystem, das den Tag in 16 symbolische Blöcke unterteilt.',
            el: 'Ένα σύστημα χρόνου χωρίς ζώνες ώρας που χωρίζει την ημέρα σε 16 συμβολικά μπλοκ.',
            hu: 'Időzóna-mentes időrendszer, amely a napot 16 szimbolikus blokkra osztja.',
            ga: 'Córas ama gan chriosanna ama a roinneann an lá ina 16 bhloc siombalach.',
            it: 'Un sistema orario senza fusi orari che divide la giornata in 16 blocchi simbolici.',
            lv: 'Laika sistēma bez laika joslām, kas sadala dienu 16 simboliskos blokos.',
            lt: 'Laiko sistema be laiko juostų, dalinanti dieną į 16 simbolinių blokų.',
            mt: 'Sistema ta\' ħin mingħajr żoni tal-ħin li taqsam il-ġurnata fi 16-il blokka simbolika.',
            pl: 'System czasu bez stref czasowych dzielący dzień na 16 symbolicznych bloków.',
            pt: 'Um sistema de tempo sem fusos horários que divide o dia em 16 blocos simbólicos.',
            ro: 'Un sistem de timp fără fusuri orare care împarte ziua în 16 blocuri simbolice.',
            sk: 'Systém času bez časových pásiem rozdeľujúci deň na 16 symbolických blokov.',
            sl: 'Časovni sistem brez časovnih pasov, ki deli dan na 16 simbolnih blokov.',
            es: 'Un sistema de tiempo sin zonas horarias que divide el día en 16 bloques simbólicos.',
            sv: 'Ett tidszonsfritt tidssystem som delar upp dygnet i 16 symboliska block.'
        },
        'title.privacy': {
            en: 'Privacy Policy — GlyphClock',
            bg: 'Политика за поверителност — GlyphClock',
            hr: 'Pravila privatnosti — GlyphClock',
            cs: 'Zásady ochrany osobních údajů — GlyphClock',
            da: 'Privatlivspolitik — GlyphClock',
            nl: 'Privacybeleid — GlyphClock',
            et: 'Privaatsuspoliitika — GlyphClock',
            fi: 'Tietosuojakäytäntö — GlyphClock',
            fr: 'Politique de confidentialité — GlyphClock',
            de: 'Datenschutzrichtlinie — GlyphClock',
            el: 'Πολιτική Απορρήτου — GlyphClock',
            hu: 'Adatvédelmi irányelvek — GlyphClock',
            ga: 'Polasaí Príobháideachta — GlyphClock',
            it: 'Informativa sulla privacy — GlyphClock',
            lv: 'Privātuma politika — GlyphClock',
            lt: 'Privatumo politika — GlyphClock',
            mt: 'Politika tal-Privatezza — GlyphClock',
            pl: 'Polityka prywatności — GlyphClock',
            pt: 'Política de Privacidade — GlyphClock',
            ro: 'Politica de confidențialitate — GlyphClock',
            sk: 'Zásady ochrany osobných údajov — GlyphClock',
            sl: 'Pravilnik o zasebnosti — GlyphClock',
            es: 'Política de privacidad — GlyphClock',
            sv: 'Integritetspolicy — GlyphClock'
        },
        'meta.description.privacy': {
            en: 'Privacy policy for the GlyphClock Apple Watch widget and web app.',
            bg: 'Политика за поверителност за уиджета за Apple Watch и уеб приложението GlyphClock.',
            hr: 'Pravila privatnosti za GlyphClock Apple Watch widget i web aplikaciju.',
            cs: 'Zásady ochrany osobních údajů pro widget GlyphClock pro Apple Watch a webovou aplikaci.',
            da: 'Privatlivspolitik for GlyphClock Apple Watch-widget og webapp.',
            nl: 'Privacybeleid voor de GlyphClock Apple Watch-widget en webapp.',
            et: 'Privaatsuspoliitika GlyphClocki Apple Watchi vidina ja veebirakenduse jaoks.',
            fi: 'Tietosuojakäytäntö GlyphClock Apple Watch -widgetille ja verkkosovellukselle.',
            fr: 'Politique de confidentialité pour le widget Apple Watch et l\'application web GlyphClock.',
            de: 'Datenschutzrichtlinie für das GlyphClock Apple Watch-Widget und die Web-App.',
            el: 'Πολιτική απορρήτου για το widget Apple Watch και την εφαρμογή ιστού GlyphClock.',
            hu: 'Adatvédelmi irányelvek a GlyphClock Apple Watch widgethez és webalkalmazáshoz.',
            ga: 'Polasaí príobháideachta don ghiuirléid Apple Watch agus don aip ghréasáin GlyphClock.',
            it: 'Informativa sulla privacy per il widget Apple Watch e l\'app web GlyphClock.',
            lv: 'Privātuma politika GlyphClock Apple Watch logrīkam un tīmekļa lietotnei.',
            lt: 'Privatumo politika GlyphClock Apple Watch valdikliui ir žiniatinklio programai.',
            mt: 'Politika tal-privatezza għall-widget tal-Apple Watch u l-app tal-web GlyphClock.',
            pl: 'Polityka prywatności dla widgetu Apple Watch i aplikacji webowej GlyphClock.',
            pt: 'Política de privacidade para o widget Apple Watch e a aplicação web GlyphClock.',
            ro: 'Politica de confidențialitate pentru widgetul Apple Watch și aplicația web GlyphClock.',
            sk: 'Zásady ochrany osobných údajov pre widget GlyphClock pre Apple Watch a webovú aplikáciu.',
            sl: 'Pravilnik o zasebnosti za pripomoček Apple Watch in spletno aplikacijo GlyphClock.',
            es: 'Política de privacidad para el widget de Apple Watch y la aplicación web GlyphClock.',
            sv: 'Integritetspolicy för GlyphClock Apple Watch-widget och webbapp.'
        },
        'privacy.title': {
            en: 'Privacy Policy',
            bg: 'Политика за поверителност',
            hr: 'Pravila privatnosti',
            cs: 'Zásady ochrany osobních údajů',
            da: 'Privatlivspolitik',
            nl: 'Privacybeleid',
            et: 'Privaatsuspoliitika',
            fi: 'Tietosuojakäytäntö',
            fr: 'Politique de confidentialité',
            de: 'Datenschutzrichtlinie',
            el: 'Πολιτική Απορρήτου',
            hu: 'Adatvédelmi irányelvek',
            ga: 'Polasaí Príobháideachta',
            it: 'Informativa sulla privacy',
            lv: 'Privātuma politika',
            lt: 'Privatumo politika',
            mt: 'Politika tal-Privatezza',
            pl: 'Polityka prywatności',
            pt: 'Política de Privacidade',
            ro: 'Politica de confidențialitate',
            sk: 'Zásady ochrany osobných údajov',
            sl: 'Pravilnik o zasebnosti',
            es: 'Política de privacidad',
            sv: 'Integritetspolicy'
        },
        'privacy.updated': {
            en: 'Last updated: 9 March 2026',
            bg: 'Последна актуализация: 9 март 2026 г.',
            hr: 'Posljednje ažuriranje: 9. ožujka 2026.',
            cs: 'Poslední aktualizace: 9. března 2026',
            da: 'Sidst opdateret: 9. marts 2026',
            nl: 'Laatst bijgewerkt: 9 maart 2026',
            et: 'Viimati uuendatud: 9. märts 2026',
            fi: 'Viimeksi päivitetty: 9. maaliskuuta 2026',
            fr: 'Dernière mise à jour : 9 mars 2026',
            de: 'Zuletzt aktualisiert: 9. März 2026',
            el: 'Τελευταία ενημέρωση: 9 Μαρτίου 2026',
            hu: 'Utolsó frissítés: 2026. március 9.',
            ga: 'Nuashonraithe go deireanach: 9 Márta 2026',
            it: 'Ultimo aggiornamento: 9 marzo 2026',
            lv: 'Pēdējo reizi atjaunināts: 2026. gada 9. marts',
            lt: 'Paskutinį kartą atnaujinta: 2026 m. kovo 9 d.',
            mt: 'Aġġornat l-aħħar: 9 ta\' Marzu 2026',
            pl: 'Ostatnia aktualizacja: 9 marca 2026',
            pt: 'Última atualização: 9 de março de 2026',
            ro: 'Ultima actualizare: 9 martie 2026',
            sk: 'Posledná aktualizácia: 9. marca 2026',
            sl: 'Nazadnje posodobljeno: 9. marec 2026',
            es: 'Última actualización: 9 de marzo de 2026',
            sv: 'Senast uppdaterad: 9 mars 2026'
        },
        'privacy.overview.heading': {
            en: 'Overview',
            bg: 'Преглед',
            hr: 'Pregled',
            cs: 'Přehled',
            da: 'Oversigt',
            nl: 'Overzicht',
            et: 'Ülevaade',
            fi: 'Yleiskatsaus',
            fr: 'Aperçu',
            de: 'Überblick',
            el: 'Επισκόπηση',
            hu: 'Áttekintés',
            ga: 'Forbhreathnú',
            it: 'Panoramica',
            lv: 'Pārskats',
            lt: 'Apžvalga',
            mt: 'Ħarsa ġenerali',
            pl: 'Przegląd',
            pt: 'Visão geral',
            ro: 'Prezentare generală',
            sk: 'Prehľad',
            sl: 'Pregled',
            es: 'Descripción general',
            sv: 'Översikt'
        },
        'privacy.overview.text': {
            en: 'GlyphClock is built with privacy as a core principle. The GlyphClock Apple Watch widget and web app do not collect, store, or transmit any personal data.',
            bg: 'GlyphClock е създаден с поверителността като основен принцип. Уиджетът за Apple Watch и уеб приложението GlyphClock не събират, съхраняват или предават лични данни.',
            hr: 'GlyphClock je izgrađen s privatnošću kao temeljnim načelom. GlyphClock Apple Watch widget i web aplikacija ne prikupljaju, pohranjuju niti prenose osobne podatke.',
            cs: 'GlyphClock je vytvořen s ochranou soukromí jako základním principem. Widget GlyphClock pro Apple Watch a webová aplikace neshromažďují, neukládají ani nepřenášejí žádné osobní údaje.',
            da: 'GlyphClock er bygget med privatlivsbeskyttelse som et kerneprinicip. GlyphClock Apple Watch-widgeten og webappen indsamler, gemmer eller overfører ikke personlige data.',
            nl: 'GlyphClock is gebouwd met privacy als kernprincipe. De GlyphClock Apple Watch-widget en webapp verzamelen, bewaren of verzenden geen persoonlijke gegevens.',
            et: 'GlyphClock on loodud privaatsust põhiprintsiibina järgides. GlyphClocki Apple Watchi vidin ja veebirakendus ei kogu, salvesta ega edasta isikuandmeid.',
            fi: 'GlyphClock on rakennettu yksityisyys perusperiaatteena. GlyphClock Apple Watch -widget ja verkkosovellus eivät kerää, tallenna tai lähetä henkilötietoja.',
            fr: 'GlyphClock est conçu avec la confidentialité comme principe fondamental. Le widget Apple Watch et l\'application web GlyphClock ne collectent, ne stockent et ne transmettent aucune donnée personnelle.',
            de: 'GlyphClock wurde mit Datenschutz als Kernprinzip entwickelt. Das GlyphClock Apple Watch-Widget und die Web-App sammeln, speichern oder übertragen keine persönlichen Daten.',
            el: 'Το GlyphClock είναι κατασκευασμένο με το απόρρητο ως βασική αρχή. Το widget Apple Watch και η εφαρμογή ιστού GlyphClock δεν συλλέγουν, αποθηκεύουν ή μεταδίδουν προσωπικά δεδομένα.',
            hu: 'A GlyphClock az adatvédelmet alapelvként kezeli. A GlyphClock Apple Watch widget és webalkalmazás nem gyűjt, tárol vagy továbbít személyes adatokat.',
            ga: 'Tógadh GlyphClock le príobháideachas mar bhunphrionsabal. Ní bhailíonn, ní stórálann agus ní tharchuireann giuirléid Apple Watch agus aip ghréasáin GlyphClock aon sonraí pearsanta.',
            it: 'GlyphClock è costruito con la privacy come principio fondamentale. Il widget Apple Watch e l\'app web GlyphClock non raccolgono, memorizzano o trasmettono dati personali.',
            lv: 'GlyphClock ir veidots ar privātumu kā pamatprincipu. GlyphClock Apple Watch logrīks un tīmekļa lietotne neievāc, neglabā un nepārsūta nekādus personas datus.',
            lt: 'GlyphClock sukurtas su privatumu kaip pagrindiniu principu. GlyphClock Apple Watch valdiklis ir žiniatinklio programa nerenka, nesaugo ir neperduoda jokių asmens duomenų.',
            mt: 'GlyphClock huwa mibni bil-privatezza bħala prinċipju ewlieni. Il-widget tal-Apple Watch u l-app tal-web GlyphClock ma jiġbrux, ma jaħżnux u ma jittrażmettux data personali.',
            pl: 'GlyphClock został zbudowany z prywatnością jako podstawową zasadą. Widget GlyphClock dla Apple Watch i aplikacja webowa nie zbierają, nie przechowują ani nie przesyłają żadnych danych osobowych.',
            pt: 'O GlyphClock foi construído com a privacidade como princípio fundamental. O widget Apple Watch e a aplicação web GlyphClock não recolhem, armazenam ou transmitem quaisquer dados pessoais.',
            ro: 'GlyphClock este construit cu confidențialitatea ca principiu fundamental. Widgetul Apple Watch și aplicația web GlyphClock nu colectează, stochează sau transmit date personale.',
            sk: 'GlyphClock je vytvorený s ochranou súkromia ako základným princípom. Widget GlyphClock pre Apple Watch a webová aplikácia nezhromažďujú, neukladajú ani neprenášajú žiadne osobné údaje.',
            sl: 'GlyphClock je zgrajen z zasebnostjo kot temeljnim načelom. Pripomoček GlyphClock za Apple Watch in spletna aplikacija ne zbirata, shranjujeta ali prenašata nobenih osebnih podatkov.',
            es: 'GlyphClock está construido con la privacidad como principio fundamental. El widget de Apple Watch y la aplicación web GlyphClock no recopilan, almacenan ni transmiten datos personales.',
            sv: 'GlyphClock är byggt med integritet som en grundprincip. GlyphClock Apple Watch-widgeten och webbappen samlar inte in, lagrar eller överför några personuppgifter.'
        },
        'privacy.collection.heading': {
            en: 'Data Collection',
            bg: 'Събиране на данни',
            hr: 'Prikupljanje podataka',
            cs: 'Shromažďování údajů',
            da: 'Dataindsamling',
            nl: 'Gegevensverzameling',
            et: 'Andmete kogumine',
            fi: 'Tietojen kerääminen',
            fr: 'Collecte de données',
            de: 'Datenerfassung',
            el: 'Συλλογή Δεδομένων',
            hu: 'Adatgyűjtés',
            ga: 'Bailiú Sonraí',
            it: 'Raccolta dati',
            lv: 'Datu vākšana',
            lt: 'Duomenų rinkimas',
            mt: 'Ġbir tad-Data',
            pl: 'Zbieranie danych',
            pt: 'Recolha de dados',
            ro: 'Colectarea datelor',
            sk: 'Zhromažďovanie údajov',
            sl: 'Zbiranje podatkov',
            es: 'Recopilación de datos',
            sv: 'Datainsamling'
        },
        'privacy.collection.text': {
            en: 'GlyphClock does not collect any personal information. The app reads the current UTC time from your device to calculate which glyph block to display. This time data is used locally and is never sent to any server.',
            bg: 'GlyphClock не събира лична информация. Приложението чете текущото UTC време от вашето устройство, за да изчисли кой блок с глиф да покаже. Тези данни за времето се използват локално и никога не се изпращат към сървър.',
            hr: 'GlyphClock ne prikuplja osobne podatke. Aplikacija čita trenutno UTC vrijeme s vašeg uređaja kako bi izračunala koji blok glifa prikazati. Ti vremenski podaci koriste se lokalno i nikad se ne šalju na poslužitelj.',
            cs: 'GlyphClock neshromažďuje žádné osobní údaje. Aplikace čte aktuální čas UTC z vašeho zařízení pro výpočet zobrazeného bloku glyfů. Tato časová data se používají lokálně a nikdy se neodesílají na žádný server.',
            da: 'GlyphClock indsamler ikke personlige oplysninger. Appen læser den aktuelle UTC-tid fra din enhed for at beregne hvilken glyfblok der skal vises. Disse tidsdata bruges lokalt og sendes aldrig til nogen server.',
            nl: 'GlyphClock verzamelt geen persoonlijke informatie. De app leest de huidige UTC-tijd van uw apparaat om te berekenen welk glyfblok moet worden weergegeven. Deze tijdgegevens worden lokaal gebruikt en worden nooit naar een server gestuurd.',
            et: 'GlyphClock ei kogu isikuandmeid. Rakendus loeb teie seadmest praegust UTC-aega, et arvutada, millist glüüfiplokki kuvada. Neid ajaandmeid kasutatakse lokaalselt ja neid ei saadeta kunagi ühelegi serverile.',
            fi: 'GlyphClock ei kerää henkilötietoja. Sovellus lukee laitteesi nykyisen UTC-ajan laskeakseen näytettävän glyyfilohkon. Tätä aikatietoa käytetään paikallisesti eikä sitä koskaan lähetetä palvelimelle.',
            fr: 'GlyphClock ne collecte aucune information personnelle. L\'application lit l\'heure UTC actuelle de votre appareil pour calculer quel bloc de glyphe afficher. Ces données temporelles sont utilisées localement et ne sont jamais envoyées à un serveur.',
            de: 'GlyphClock sammelt keine persönlichen Informationen. Die App liest die aktuelle UTC-Zeit von Ihrem Gerät, um zu berechnen, welcher Glyphenblock angezeigt werden soll. Diese Zeitdaten werden lokal verwendet und niemals an einen Server gesendet.',
            el: 'Το GlyphClock δεν συλλέγει προσωπικές πληροφορίες. Η εφαρμογή διαβάζει την τρέχουσα ώρα UTC από τη συσκευή σας για να υπολογίσει ποιο μπλοκ γλυφών να εμφανίσει. Αυτά τα χρονικά δεδομένα χρησιμοποιούνται τοπικά και δεν αποστέλλονται ποτέ σε κανέναν διακομιστή.',
            hu: 'A GlyphClock nem gyűjt személyes adatokat. Az alkalmazás az eszköze aktuális UTC idejét olvassa le annak kiszámításához, hogy melyik glifablokkot jelenítse meg. Ezeket az időadatokat helyben használja, és soha nem küldi el egyetlen szerverre sem.',
            ga: 'Ní bhailíonn GlyphClock aon fhaisnéis phearsanta. Léann an aip an t-am UTC reatha ó do ghléas chun a ríomh cén bloc gliof atá le taispeáint. Úsáidtear na sonraí ama seo go háitiúil agus ní sheoltar chuig aon fhreastalaí iad riamh.',
            it: 'GlyphClock non raccoglie informazioni personali. L\'app legge l\'ora UTC corrente dal tuo dispositivo per calcolare quale blocco di glifi visualizzare. Questi dati temporali vengono utilizzati localmente e non vengono mai inviati a nessun server.',
            lv: 'GlyphClock neievāc nekādu personisku informāciju. Lietotne nolasa pašreizējo UTC laiku no jūsu ierīces, lai aprēķinātu, kuru glifu bloku attēlot. Šie laika dati tiek izmantoti lokāli un nekad netiek nosūtīti uz serveri.',
            lt: 'GlyphClock nerenka jokios asmeninės informacijos. Programa nuskaito dabartinį UTC laiką iš jūsų įrenginio, kad apskaičiuotų, kurį glifų bloką rodyti. Šie laiko duomenys naudojami lokaliai ir niekada nesiunčiami į jokį serverį.',
            mt: 'GlyphClock ma jiġborx informazzjoni personali. L-app taqra l-ħin UTC attwali mill-apparat tiegħek biex tikkalkula liema blokka tal-glifu għandha turi. Din id-data tal-ħin tintuża lokalment u qatt ma tintbagħat lil-ebda server.',
            pl: 'GlyphClock nie zbiera żadnych danych osobowych. Aplikacja odczytuje bieżący czas UTC z urządzenia, aby obliczyć, który blok glifów wyświetlić. Te dane czasowe są używane lokalnie i nigdy nie są wysyłane na żaden serwer.',
            pt: 'O GlyphClock não recolhe informações pessoais. A aplicação lê a hora UTC atual do seu dispositivo para calcular qual bloco de glifos exibir. Estes dados temporais são utilizados localmente e nunca são enviados para nenhum servidor.',
            ro: 'GlyphClock nu colectează informații personale. Aplicația citește ora UTC curentă de pe dispozitivul dvs. pentru a calcula ce bloc de glife să afișeze. Aceste date temporale sunt utilizate local și nu sunt niciodată trimise către vreun server.',
            sk: 'GlyphClock nezhromažďuje žiadne osobné údaje. Aplikácia číta aktuálny čas UTC z vášho zariadenia na výpočet zobrazeného bloku glyfov. Tieto časové údaje sa používajú lokálne a nikdy sa neodosielajú na žiadny server.',
            sl: 'GlyphClock ne zbira osebnih podatkov. Aplikacija bere trenutni UTC čas iz vaše naprave, da izračuna, kateri blok glifov prikazati. Ti časovni podatki se uporabljajo lokalno in se nikoli ne pošiljajo na noben strežnik.',
            es: 'GlyphClock no recopila información personal. La aplicación lee la hora UTC actual de tu dispositivo para calcular qué bloque de glifos mostrar. Estos datos temporales se usan localmente y nunca se envían a ningún servidor.',
            sv: 'GlyphClock samlar inte in personlig information. Appen läser aktuell UTC-tid från din enhet för att beräkna vilket glyfblock som ska visas. Dessa tidsdata används lokalt och skickas aldrig till någon server.'
        },
        'privacy.analytics.heading': {
            en: 'Analytics & Tracking',
            bg: 'Анализ и проследяване',
            hr: 'Analitika i praćenje',
            cs: 'Analytika a sledování',
            da: 'Analyse og sporing',
            nl: 'Analyse en tracking',
            et: 'Analüütika ja jälgimine',
            fi: 'Analytiikka ja seuranta',
            fr: 'Analyse et suivi',
            de: 'Analyse und Tracking',
            el: 'Αναλυτικά και Παρακολούθηση',
            hu: 'Elemzés és nyomon követés',
            ga: 'Anailísíocht agus Rianú',
            it: 'Analisi e tracciamento',
            lv: 'Analītika un izsekošana',
            lt: 'Analitika ir sekimas',
            mt: 'Analitika u Traċċar',
            pl: 'Analityka i śledzenie',
            pt: 'Análise e rastreamento',
            ro: 'Analiză și urmărire',
            sk: 'Analytika a sledovanie',
            sl: 'Analitika in sledenje',
            es: 'Análisis y seguimiento',
            sv: 'Analys och spårning'
        },
        'privacy.analytics.text': {
            en: 'GlyphClock does not use analytics, tracking, cookies, or any third-party services. There are no ads.',
            bg: 'GlyphClock не използва анализ, проследяване, бисквитки или услуги на трети страни. Няма реклами.',
            hr: 'GlyphClock ne koristi analitiku, praćenje, kolačiće ili usluge trećih strana. Nema oglasa.',
            cs: 'GlyphClock nepoužívá analytiku, sledování, cookies ani služby třetích stran. Nejsou zde žádné reklamy.',
            da: 'GlyphClock bruger ikke analyse, sporing, cookies eller tredjepartstjenester. Der er ingen reklamer.',
            nl: 'GlyphClock gebruikt geen analyse, tracking, cookies of diensten van derden. Er zijn geen advertenties.',
            et: 'GlyphClock ei kasuta analüütikat, jälgimist, küpsiseid ega kolmandate osapoolte teenuseid. Reklaame ei ole.',
            fi: 'GlyphClock ei käytä analytiikkaa, seurantaa, evästeitä tai kolmannen osapuolen palveluja. Mainoksia ei ole.',
            fr: 'GlyphClock n\'utilise pas d\'analyse, de suivi, de cookies ou de services tiers. Il n\'y a pas de publicités.',
            de: 'GlyphClock verwendet keine Analyse, kein Tracking, keine Cookies oder Drittanbieterdienste. Es gibt keine Werbung.',
            el: 'Το GlyphClock δεν χρησιμοποιεί αναλυτικά, παρακολούθηση, cookies ή υπηρεσίες τρίτων. Δεν υπάρχουν διαφημίσεις.',
            hu: 'A GlyphClock nem használ elemzést, nyomon követést, sütiket vagy harmadik féltől származó szolgáltatásokat. Nincsenek hirdetések.',
            ga: 'Ní úsáideann GlyphClock anailísíocht, rianú, fianáin ná seirbhísí tríú páirtí. Níl aon fhógraí ann.',
            it: 'GlyphClock non utilizza analisi, tracciamento, cookie o servizi di terze parti. Non ci sono pubblicità.',
            lv: 'GlyphClock neizmanto analītiku, izsekošanu, sīkdatnes vai trešo pušu pakalpojumus. Reklāmu nav.',
            lt: 'GlyphClock nenaudoja analitikos, sekimo, slapukų ar trečiųjų šalių paslaugų. Reklamų nėra.',
            mt: 'GlyphClock ma jużax analitika, traċċar, cookies jew servizzi ta\' partijiet terzi. M\'hemm l-ebda reklami.',
            pl: 'GlyphClock nie korzysta z analityki, śledzenia, plików cookie ani usług stron trzecich. Nie ma reklam.',
            pt: 'O GlyphClock não utiliza análise, rastreamento, cookies ou serviços de terceiros. Não há anúncios.',
            ro: 'GlyphClock nu folosește analiză, urmărire, cookie-uri sau servicii terțe. Nu există reclame.',
            sk: 'GlyphClock nepoužíva analytiku, sledovanie, cookies ani služby tretích strán. Nie sú tu žiadne reklamy.',
            sl: 'GlyphClock ne uporablja analitike, sledenja, piškotkov ali storitev tretjih oseb. Oglasov ni.',
            es: 'GlyphClock no utiliza análisis, seguimiento, cookies ni servicios de terceros. No hay anuncios.',
            sv: 'GlyphClock använder inte analys, spårning, cookies eller tredjepartstjänster. Det finns inga annonser.'
        },
        'privacy.network.heading': {
            en: 'Network Usage',
            bg: 'Използване на мрежа',
            hr: 'Korištenje mreže',
            cs: 'Využití sítě',
            da: 'Netværksbrug',
            nl: 'Netwerkgebruik',
            et: 'Võrgukasutus',
            fi: 'Verkon käyttö',
            fr: 'Utilisation du réseau',
            de: 'Netzwerknutzung',
            el: 'Χρήση Δικτύου',
            hu: 'Hálózathasználat',
            ga: 'Úsáid Líonra',
            it: 'Utilizzo della rete',
            lv: 'Tīkla izmantošana',
            lt: 'Tinklo naudojimas',
            mt: 'Użu tan-Netwerk',
            pl: 'Użycie sieci',
            pt: 'Utilização de rede',
            ro: 'Utilizarea rețelei',
            sk: 'Využitie siete',
            sl: 'Uporaba omrežja',
            es: 'Uso de red',
            sv: 'Nätverksanvändning'
        },
        'privacy.network.text': {
            en: 'The Apple Watch widget operates entirely offline. It does not make any network requests.',
            bg: 'Уиджетът за Apple Watch работи изцяло офлайн. Не прави мрежови заявки.',
            hr: 'Apple Watch widget radi potpuno offline. Ne šalje mrežne zahtjeve.',
            cs: 'Widget pro Apple Watch funguje zcela offline. Nevytváří žádné síťové požadavky.',
            da: 'Apple Watch-widgeten fungerer helt offline. Den foretager ingen netværksanmodninger.',
            nl: 'De Apple Watch-widget werkt volledig offline. Er worden geen netwerkverzoeken gedaan.',
            et: 'Apple Watchi vidin töötab täielikult võrguühenduseta. See ei tee ühtegi võrgupäringut.',
            fi: 'Apple Watch -widget toimii täysin offline-tilassa. Se ei tee verkko­pyyntöjä.',
            fr: 'Le widget Apple Watch fonctionne entièrement hors ligne. Il n\'effectue aucune requête réseau.',
            de: 'Das Apple Watch-Widget funktioniert vollständig offline. Es stellt keine Netzwerkanfragen.',
            el: 'Το widget Apple Watch λειτουργεί εντελώς εκτός σύνδεσης. Δεν πραγματοποιεί αιτήματα δικτύου.',
            hu: 'Az Apple Watch widget teljesen offline működik. Nem küld hálózati kéréseket.',
            ga: 'Oibríonn giuirléid Apple Watch go hiomlán as líne. Ní dhéanann sé aon iarratais líonra.',
            it: 'Il widget Apple Watch funziona interamente offline. Non effettua richieste di rete.',
            lv: 'Apple Watch logrīks darbojas pilnībā bezsaistē. Tas neveic nekādus tīkla pieprasījumus.',
            lt: 'Apple Watch valdiklis veikia visiškai neprisijungęs. Jis nevykdo jokių tinklo užklausų.',
            mt: 'Il-widget tal-Apple Watch jaħdem kompletament offline. Ma jagħmel l-ebda talbiet tan-netwerk.',
            pl: 'Widget Apple Watch działa całkowicie offline. Nie wykonuje żadnych żądań sieciowych.',
            pt: 'O widget Apple Watch funciona totalmente offline. Não faz quaisquer pedidos de rede.',
            ro: 'Widgetul Apple Watch funcționează complet offline. Nu efectuează cereri de rețea.',
            sk: 'Widget pre Apple Watch funguje úplne offline. Nevykonáva žiadne sieťové požiadavky.',
            sl: 'Pripomoček Apple Watch deluje povsem brez povezave. Ne izvaja nobenih omrežnih zahtev.',
            es: 'El widget de Apple Watch funciona completamente sin conexión. No realiza solicitudes de red.',
            sv: 'Apple Watch-widgeten fungerar helt offline. Den gör inga nätverksförfrågningar.'
        },
        'privacy.storage.heading': {
            en: 'Data Storage',
            bg: 'Съхранение на данни',
            hr: 'Pohrana podataka',
            cs: 'Ukládání dat',
            da: 'Datalagring',
            nl: 'Gegevensopslag',
            et: 'Andmete salvestamine',
            fi: 'Tietojen tallennus',
            fr: 'Stockage des données',
            de: 'Datenspeicherung',
            el: 'Αποθήκευση Δεδομένων',
            hu: 'Adattárolás',
            ga: 'Stóráil Sonraí',
            it: 'Archiviazione dati',
            lv: 'Datu glabāšana',
            lt: 'Duomenų saugojimas',
            mt: 'Ħażna tad-Data',
            pl: 'Przechowywanie danych',
            pt: 'Armazenamento de dados',
            ro: 'Stocarea datelor',
            sk: 'Ukladanie údajov',
            sl: 'Shranjevanje podatkov',
            es: 'Almacenamiento de datos',
            sv: 'Datalagring'
        },
        'privacy.storage.text': {
            en: 'The web app stores your theme preference and language selection locally in your browser using localStorage. This data never leaves your device.',
            bg: 'Уеб приложението съхранява вашите предпочитания за тема и избор на език локално в браузъра ви чрез localStorage. Тези данни никога не напускат устройството ви.',
            hr: 'Web aplikacija pohranjuje vaše postavke teme i odabir jezika lokalno u vašem pregledniku pomoću localStorage. Ti podaci nikada ne napuštaju vaš uređaj.',
            cs: 'Webová aplikace ukládá vaše předvolby motivu a výběr jazyka lokálně v prohlížeči pomocí localStorage. Tato data nikdy neopustí vaše zařízení.',
            da: 'Webappen gemmer dit temavalg og sprogvalg lokalt i din browser via localStorage. Disse data forlader aldrig din enhed.',
            nl: 'De webapp slaat uw themavoorkeur en taalkeuze lokaal op in uw browser via localStorage. Deze gegevens verlaten nooit uw apparaat.',
            et: 'Veebirakendus salvestab teie teemaeelistuse ja keelevaliku lokaalselt teie brauserisse localStorage abil. Need andmed ei lahku kunagi teie seadmest.',
            fi: 'Verkkosovellus tallentaa teemavalintasi ja kielivalintasi paikallisesti selaimeen localStoragen avulla. Nämä tiedot eivät koskaan poistu laitteeltasi.',
            fr: 'L\'application web stocke votre préférence de thème et votre sélection de langue localement dans votre navigateur via localStorage. Ces données ne quittent jamais votre appareil.',
            de: 'Die Web-App speichert Ihre Designeinstellung und Sprachauswahl lokal in Ihrem Browser über localStorage. Diese Daten verlassen niemals Ihr Gerät.',
            el: 'Η εφαρμογή ιστού αποθηκεύει την προτίμηση θέματος και την επιλογή γλώσσας τοπικά στον περιηγητή σας μέσω localStorage. Αυτά τα δεδομένα δεν εγκαταλείπουν ποτέ τη συσκευή σας.',
            hu: 'A webalkalmazás a témabeállítást és a nyelvválasztást helyben tárolja a böngészőjében a localStorage segítségével. Ezek az adatok soha nem hagyják el az eszközét.',
            ga: 'Stórálann an aip ghréasáin do rogha téama agus rogha teanga go háitiúil i do bhrabhsálaí ag úsáid localStorage. Ní fhágann na sonraí seo do ghléas riamh.',
            it: 'L\'app web memorizza la preferenza del tema e la selezione della lingua localmente nel browser tramite localStorage. Questi dati non lasciano mai il tuo dispositivo.',
            lv: 'Tīmekļa lietotne saglabā jūsu motīva izvēli un valodas atlasi lokāli jūsu pārlūkprogrammā, izmantojot localStorage. Šie dati nekad neatstāj jūsu ierīci.',
            lt: 'Žiniatinklio programa saugo jūsų temos nuostatą ir kalbos pasirinkimą lokaliai naršyklėje naudodama localStorage. Šie duomenys niekada nepalieka jūsų įrenginio.',
            mt: 'L-app tal-web taħżen il-preferenza tat-tema tiegħek u l-għażla tal-lingwa lokalment fil-browser tiegħek permezz ta\' localStorage. Din id-data qatt ma titlaq mill-apparat tiegħek.',
            pl: 'Aplikacja webowa przechowuje preferencje motywu i wybór języka lokalnie w przeglądarce za pomocą localStorage. Te dane nigdy nie opuszczają urządzenia.',
            pt: 'A aplicação web armazena a sua preferência de tema e seleção de idioma localmente no seu navegador usando localStorage. Estes dados nunca saem do seu dispositivo.',
            ro: 'Aplicația web stochează preferința de temă și selecția de limbă local în browserul dvs. folosind localStorage. Aceste date nu părăsesc niciodată dispozitivul dvs.',
            sk: 'Webová aplikácia ukladá vaše preferencie témy a výber jazyka lokálne v prehliadači pomocou localStorage. Tieto údaje nikdy neopustia vaše zariadenie.',
            sl: 'Spletna aplikacija shranjuje vašo nastavitev teme in izbiro jezika lokalno v brskalniku s pomočjo localStorage. Ti podatki nikoli ne zapustijo vaše naprave.',
            es: 'La aplicación web almacena tu preferencia de tema y selección de idioma localmente en tu navegador mediante localStorage. Estos datos nunca abandonan tu dispositivo.',
            sv: 'Webbappen lagrar ditt temaval och språkval lokalt i din webbläsare via localStorage. Dessa data lämnar aldrig din enhet.'
        },
        'privacy.children.heading': {
            en: 'Children\u2019s Privacy',
            bg: 'Поверителност на децата',
            hr: 'Privatnost djece',
            cs: 'Ochrana soukromí dětí',
            da: 'Børns privatliv',
            nl: 'Privacy van kinderen',
            et: 'Laste privaatsus',
            fi: 'Lasten yksityisyys',
            fr: 'Confidentialité des enfants',
            de: 'Datenschutz für Kinder',
            el: 'Απόρρητο Παιδιών',
            hu: 'Gyermekek adatvédelme',
            ga: 'Príobháideachas Leanaí',
            it: 'Privacy dei minori',
            lv: 'Bērnu privātums',
            lt: 'Vaikų privatumas',
            mt: 'Privatezza tat-Tfal',
            pl: 'Prywatność dzieci',
            pt: 'Privacidade das crianças',
            ro: 'Confidențialitatea copiilor',
            sk: 'Ochrana súkromia detí',
            sl: 'Zasebnost otrok',
            es: 'Privacidad de los niños',
            sv: 'Barns integritet'
        },
        'privacy.children.text': {
            en: 'GlyphClock does not collect any data from anyone, including children under 13.',
            bg: 'GlyphClock не събира данни от никого, включително деца под 13 години.',
            hr: 'GlyphClock ne prikuplja podatke ni od koga, uključujući djecu mlađu od 13 godina.',
            cs: 'GlyphClock neshromažďuje žádné údaje od nikoho, včetně dětí mladších 13 let.',
            da: 'GlyphClock indsamler ikke data fra nogen, herunder børn under 13 år.',
            nl: 'GlyphClock verzamelt geen gegevens van wie dan ook, inclusief kinderen onder de 13.',
            et: 'GlyphClock ei kogu andmeid kelleltki, sealhulgas alla 13-aastastelt lastelt.',
            fi: 'GlyphClock ei kerää tietoja keneltäkään, mukaan lukien alle 13-vuotiailta lapsilta.',
            fr: 'GlyphClock ne collecte aucune donnée de quiconque, y compris les enfants de moins de 13 ans.',
            de: 'GlyphClock sammelt keine Daten von niemandem, einschließlich Kindern unter 13 Jahren.',
            el: 'Το GlyphClock δεν συλλέγει δεδομένα από κανέναν, συμπεριλαμβανομένων παιδιών κάτω των 13 ετών.',
            hu: 'A GlyphClock nem gyűjt adatokat senkitől, beleértve a 13 év alatti gyermekeket.',
            ga: 'Ní bhailíonn GlyphClock aon sonraí ó aon duine, lena n-áirítear leanaí faoi 13 bliana d\'aois.',
            it: 'GlyphClock non raccoglie dati da nessuno, compresi i minori di 13 anni.',
            lv: 'GlyphClock neievāc nekādus datus no neviena, tostarp bērniem līdz 13 gadu vecumam.',
            lt: 'GlyphClock nerenka jokių duomenų iš niekio, įskaitant vaikus iki 13 metų.',
            mt: 'GlyphClock ma jiġborx data mingħand ħadd, inklużi tfal taħt it-13-il sena.',
            pl: 'GlyphClock nie zbiera danych od nikogo, w tym od dzieci poniżej 13 roku życia.',
            pt: 'O GlyphClock não recolhe dados de ninguém, incluindo crianças menores de 13 anos.',
            ro: 'GlyphClock nu colectează date de la nimeni, inclusiv copii sub 13 ani.',
            sk: 'GlyphClock nezhromažďuje žiadne údaje od nikoho, vrátane detí mladších ako 13 rokov.',
            sl: 'GlyphClock ne zbira podatkov od nikogar, vključno z otroki, mlajšimi od 13 let.',
            es: 'GlyphClock no recopila datos de nadie, incluidos niños menores de 13 años.',
            sv: 'GlyphClock samlar inte in data från någon, inklusive barn under 13 år.'
        },
        'privacy.changes.heading': {
            en: 'Changes to This Policy',
            bg: 'Промени в тази политика',
            hr: 'Promjene ovih pravila',
            cs: 'Změny těchto zásad',
            da: 'Ændringer af denne politik',
            nl: 'Wijzigingen in dit beleid',
            et: 'Muudatused selles poliitikas',
            fi: 'Muutokset tähän käytäntöön',
            fr: 'Modifications de cette politique',
            de: 'Änderungen dieser Richtlinie',
            el: 'Αλλαγές σε αυτήν την Πολιτική',
            hu: 'Az irányelv módosításai',
            ga: 'Athruithe ar an bPolasaí seo',
            it: 'Modifiche a questa informativa',
            lv: 'Izmaiņas šajā politikā',
            lt: 'Šios politikos pakeitimai',
            mt: 'Bidliet f\'din il-Politika',
            pl: 'Zmiany w niniejszej polityce',
            pt: 'Alterações a esta política',
            ro: 'Modificări ale acestei politici',
            sk: 'Zmeny týchto zásad',
            sl: 'Spremembe tega pravilnika',
            es: 'Cambios en esta política',
            sv: 'Ändringar av denna policy'
        },
        'privacy.changes.text': {
            en: 'If this policy changes, the updated version will be posted on this page with a revised date.',
            bg: 'Ако тази политика се промени, актуализираната версия ще бъде публикувана на тази страница с ревизирана дата.',
            hr: 'Ako se ova pravila promijene, ažurirana verzija bit će objavljena na ovoj stranici s revidiranim datumom.',
            cs: 'Pokud se tyto zásady změní, aktualizovaná verze bude zveřejněna na této stránce s upraveným datem.',
            da: 'Hvis denne politik ændres, vil den opdaterede version blive offentliggjort på denne side med en revideret dato.',
            nl: 'Als dit beleid wijzigt, wordt de bijgewerkte versie op deze pagina geplaatst met een herziene datum.',
            et: 'Kui see poliitika muutub, avaldatakse uuendatud versioon sellel lehel muudetud kuupäevaga.',
            fi: 'Jos tämä käytäntö muuttuu, päivitetty versio julkaistaan tällä sivulla tarkistetulla päivämäärällä.',
            fr: 'Si cette politique change, la version mise à jour sera publiée sur cette page avec une date révisée.',
            de: 'Wenn sich diese Richtlinie ändert, wird die aktualisierte Version mit einem überarbeiteten Datum auf dieser Seite veröffentlicht.',
            el: 'Εάν αυτή η πολιτική αλλάξει, η ενημερωμένη έκδοση θα δημοσιευτεί σε αυτήν τη σελίδα με αναθεωρημένη ημερομηνία.',
            hu: 'Ha ez az irányelv megváltozik, a frissített verzió ezen az oldalon lesz közzétéve módosított dátummal.',
            ga: 'Má athraíonn an polasaí seo, foilseofar an leagan nuashonraithe ar an leathanach seo le dáta athbhreithnithe.',
            it: 'Se questa informativa cambia, la versione aggiornata sarà pubblicata su questa pagina con una data rivista.',
            lv: 'Ja šī politika mainās, atjauninātā versija tiks publicēta šajā lapā ar pārskatītu datumu.',
            lt: 'Jei ši politika pasikeistų, atnaujinta versija bus paskelbta šiame puslapyje su peržiūrėta data.',
            mt: 'Jekk din il-politika tinbidel, il-verżjoni aġġornata tiġi ppubblikata fuq din il-paġna b\'data riveduta.',
            pl: 'Jeśli ta polityka ulegnie zmianie, zaktualizowana wersja zostanie opublikowana na tej stronie ze zmienioną datą.',
            pt: 'Se esta política mudar, a versão atualizada será publicada nesta página com uma data revista.',
            ro: 'Dacă această politică se modifică, versiunea actualizată va fi publicată pe această pagină cu o dată revizuită.',
            sk: 'Ak sa tieto zásady zmenia, aktualizovaná verzia bude zverejnená na tejto stránke s upraveným dátumom.',
            sl: 'Če se ta pravilnik spremeni, bo posodobljena različica objavljena na tej strani s spremenjenim datumom.',
            es: 'Si esta política cambia, la versión actualizada se publicará en esta página con una fecha revisada.',
            sv: 'Om denna policy ändras kommer den uppdaterade versionen att publiceras på denna sida med ett reviderat datum.'
        },
        'privacy.contact.heading': {
            en: 'Contact',
            bg: 'Контакт',
            hr: 'Kontakt',
            cs: 'Kontakt',
            da: 'Kontakt',
            nl: 'Contact',
            et: 'Kontakt',
            fi: 'Yhteystiedot',
            fr: 'Contact',
            de: 'Kontakt',
            el: 'Επικοινωνία',
            hu: 'Kapcsolat',
            ga: 'Teagmháil',
            it: 'Contatti',
            lv: 'Kontakti',
            lt: 'Kontaktai',
            mt: 'Kuntatt',
            pl: 'Kontakt',
            pt: 'Contacto',
            ro: 'Contact',
            sk: 'Kontakt',
            sl: 'Kontakt',
            es: 'Contacto',
            sv: 'Kontakt'
        },
        'privacy.contact.text': {
            en: 'If you have questions about this privacy policy, please contact us at <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            bg: 'Ако имате въпроси относно тази политика за поверителност, моля свържете се с нас на <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            hr: 'Ako imate pitanja o ovim pravilima privatnosti, kontaktirajte nas na <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            cs: 'Máte-li dotazy k těmto zásadám ochrany osobních údajů, kontaktujte nás na <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            da: 'Hvis du har spørgsmål om denne privatlivspolitik, kontakt os på <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            nl: 'Als u vragen heeft over dit privacybeleid, neem dan contact met ons op via <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            et: 'Kui teil on küsimusi selle privaatsuspoliitika kohta, võtke meiega ühendust aadressil <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            fi: 'Jos sinulla on kysyttävää tästä tietosuojakäytännöstä, ota meihin yhteyttä osoitteessa <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            fr: 'Si vous avez des questions sur cette politique de confidentialité, veuillez nous contacter à <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            de: 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns bitte unter <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            el: 'Εάν έχετε ερωτήσεις σχετικά με αυτήν την πολιτική απορρήτου, επικοινωνήστε μαζί μας στο <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            hu: 'Ha kérdése van ezzel az adatvédelmi irányelvvel kapcsolatban, kérjük, lépjen kapcsolatba velünk a <a href="https://bang-labs.eu">bang-labs.eu</a> oldalon.',
            ga: 'Má tá ceisteanna agat faoin bpolasaí príobháideachta seo, déan teagmháil linn ag <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            it: 'Per domande su questa informativa sulla privacy, contattaci su <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            lv: 'Ja jums ir jautājumi par šo privātuma politiku, lūdzu, sazinieties ar mums vietnē <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            lt: 'Jei turite klausimų apie šią privatumo politiką, susisiekite su mumis adresu <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            mt: 'Jekk għandek mistoqsijiet dwar din il-politika tal-privatezza, ikkuntattjana fuq <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            pl: 'Jeśli masz pytania dotyczące tej polityki prywatności, skontaktuj się z nami pod adresem <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            pt: 'Se tiver questões sobre esta política de privacidade, contacte-nos em <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            ro: 'Dacă aveți întrebări despre această politică de confidențialitate, contactați-ne la <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            sk: 'Ak máte otázky k týmto zásadám ochrany osobných údajov, kontaktujte nás na <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            sl: 'Če imate vprašanja o tem pravilniku o zasebnosti, nas kontaktirajte na <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            es: 'Si tienes preguntas sobre esta política de privacidad, contáctanos en <a href="https://bang-labs.eu">bang-labs.eu</a>.',
            sv: 'Om du har frågor om denna integritetspolicy, kontakta oss på <a href="https://bang-labs.eu">bang-labs.eu</a>.'
        },
        'privacy.footer': {
            en: '<a href="index.html">Back to GlyphClock</a> &middot; Created by <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            bg: '<a href="index.html">Обратно към GlyphClock</a> &middot; Създадено от <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            hr: '<a href="index.html">Natrag na GlyphClock</a> &middot; Izradio <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            cs: '<a href="index.html">Zpět na GlyphClock</a> &middot; Vytvořil <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            da: '<a href="index.html">Tilbage til GlyphClock</a> &middot; Skabt af <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            nl: '<a href="index.html">Terug naar GlyphClock</a> &middot; Gemaakt door <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            et: '<a href="index.html">Tagasi GlyphClocki juurde</a> &middot; Loonud <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            fi: '<a href="index.html">Takaisin GlyphClockiin</a> &middot; Luonut <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            fr: '<a href="index.html">Retour à GlyphClock</a> &middot; Créé par <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            de: '<a href="index.html">Zurück zu GlyphClock</a> &middot; Erstellt von <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            el: '<a href="index.html">Πίσω στο GlyphClock</a> &middot; Δημιουργήθηκε από <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            hu: '<a href="index.html">Vissza a GlyphClockhoz</a> &middot; Készítette a <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            ga: '<a href="index.html">Ar ais go GlyphClock</a> &middot; Cruthaithe ag <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            it: '<a href="index.html">Torna a GlyphClock</a> &middot; Creato da <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            lv: '<a href="index.html">Atpakaļ uz GlyphClock</a> &middot; Izveidoja <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            lt: '<a href="index.html">Grįžti į GlyphClock</a> &middot; Sukūrė <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            mt: '<a href="index.html">Lura lejn GlyphClock</a> &middot; Maħluq minn <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            pl: '<a href="index.html">Powrót do GlyphClock</a> &middot; Stworzone przez <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            pt: '<a href="index.html">Voltar ao GlyphClock</a> &middot; Criado por <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            ro: '<a href="index.html">Înapoi la GlyphClock</a> &middot; Creat de <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            sk: '<a href="index.html">Späť na GlyphClock</a> &middot; Vytvoril <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            sl: '<a href="index.html">Nazaj na GlyphClock</a> &middot; Ustvaril <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            es: '<a href="index.html">Volver a GlyphClock</a> &middot; Creado por <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.',
            sv: '<a href="index.html">Tillbaka till GlyphClock</a> &middot; Skapat av <a href="https://bang-labs.eu" class="banglabs-brand">Bang Labs</a>.'
        },
    };

    function detect() {
        try {
            var stored = localStorage.getItem('lang');
            if (stored && VALID[stored]) return stored;
        } catch (e) {}
        var candidates = navigator.languages || [navigator.language || 'en'];
        for (var i = 0; i < candidates.length; i++) {
            var code = candidates[i].split('-')[0].toLowerCase();
            if (VALID[code]) return code;
        }
        return 'en';
    }

    function apply(lang) {
        var els = document.querySelectorAll('[data-i18n]');
        for (var i = 0; i < els.length; i++) {
            var key = els[i].getAttribute('data-i18n');
            if (T[key] && T[key][lang]) {
                els[i].innerHTML = T[key][lang];
            }
        }

        var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
        for (var j = 0; j < placeholders.length; j++) {
            var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
            if (T[pKey] && T[pKey][lang]) {
                placeholders[j].setAttribute('placeholder', T[pKey][lang]);
            }
        }

        document.documentElement.lang = lang;

        var page = document.body.getAttribute('data-page');
        var titleKey = 'title.' + page;
        if (T[titleKey] && T[titleKey][lang]) {
            document.title = T[titleKey][lang];
        }

        var metaDesc = document.querySelector('meta[name="description"]');
        var descKey = 'meta.description.' + page;
        if (metaDesc && T[descKey] && T[descKey][lang]) {
            metaDesc.setAttribute('content', T[descKey][lang]);
        }
    }

    function createSwitcher(lang) {
        var toolbar = document.querySelector('.nav-actions');
        if (!toolbar) return;

        var div = document.createElement('div');
        div.className = 'lang-switcher';

        var btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = lang.toUpperCase();
        btn.setAttribute('aria-label', 'Change language');

        var list = document.createElement('div');
        list.className = 'lang-switcher__list';
        list.style.display = 'none';

        for (var i = 0; i < LANGS.length; i++) {
            var opt = document.createElement('button');
            opt.className = 'lang-switcher__option';
            opt.setAttribute('data-lang', LANGS[i][0]);
            opt.textContent = LANGS[i][1];
            if (LANGS[i][0] === lang) opt.classList.add('lang-switcher__option--active');
            list.appendChild(opt);
        }

        btn.addEventListener('click', function () {
            var visible = list.style.display !== 'none';
            list.style.display = visible ? 'none' : 'block';
        });

        list.addEventListener('click', function (e) {
            var target = e.target;
            if (!target.hasAttribute('data-lang')) return;
            var newLang = target.getAttribute('data-lang');
            try { localStorage.setItem('lang', newLang); } catch (ex) {}
            apply(newLang);
            btn.textContent = newLang.toUpperCase();
            var opts = list.querySelectorAll('.lang-switcher__option');
            for (var j = 0; j < opts.length; j++) {
                opts[j].classList.toggle('lang-switcher__option--active',
                    opts[j].getAttribute('data-lang') === newLang);
            }
            list.style.display = 'none';
        });

        document.addEventListener('click', function (e) {
            if (!div.contains(e.target)) list.style.display = 'none';
        });

        div.appendChild(btn);
        div.appendChild(list);
        toolbar.appendChild(div);
    }

    var lang = detect();
    apply(lang);
    createSwitcher(lang);
})();
