var tagMap = {
"funktioner" : ["haskell", "diskmat", "analys"],
"datastrukturer" : ["haskell", "dstrukt"],
"listor" : ["haskell", "dstrukt"],
"tupler" : ["haskell"],
"användardefinierade typer" : ["haskell"],
"top-down programdesign" : ["haskell"],
"rekursion" : ["haskell", "diskmat"],
"tidskomplexitet" : ["haskell"],
"abstraktion" : ["haskell"],
"verifiering" : ["haskell", "mop"],
"högre ordningens funktioner" : ["haskell"],
"data-centrisk programmering" : ["haskell"],
"mängdlära" : ["diskmat"],
"relationer" : ["diskmat"],
"bevis" : ["diskmat", "matdom", "types"],
"motsägelsebevis" : ["diskmat"],
"heltalsaritmetik" : ["diskmat"],
"kombinatorik" : ["diskmat", "dstrukt"],
"grafteori" : ["diskmat", "dstrukt"],
"boolesk algebra" : ["diskmat", "digodat"],
"kombinatoriska nät" : ["digodat", "syntes"],
"sekvensnät" : ["digodat", "syntes"],
"alu" : ["digodat", "syntes"],
"dataväg" : ["digodat", "syntes", "dst"],
"styrenhet" : ["digodat", "syntes"],
"minne" : ["digodat", "syntes", "dst"],
"in- och ut- enheter" : ["digodat", "syntes", "dst"],
"instruktionsuppsättning" : ["digodat", "syntes"],
"maskinspråk" : ["digodat"],
"assembler" : ["digodat", "mop", "dst"],
"digitalteknik" : ["digodat", "syntes", "dst"],
"matriser" : ["linalg"],
"vektorer" : ["linalg"],
"linjära avbildningar" : ["linalg"],
"ekvationssystem" : ["linalg"],
"egenvektorer" : ["linalg"],
"egenvärden" : ["linalg", "matdom"],
"baser" : ["linalg"],
"dimensioner" : ["linalg"],
"relationsmatriser" : ["linalg"],
"matlab" : ["linalg"],
"objektorienterad" : ["oop"],
"v" : ["oop"],
"klass" : ["oop"],
"datainkapsling" : ["oop"],
"konstruktorer" : ["oop"],
"metoder" : ["oop"],
"instansvariabler" : ["oop"],
"klassvariabler" : ["oop"],
"standardbibliotek" : ["oop"],
"kodningsstandard" : ["oop"],
"namnsättning" : ["oop"],
"kommentering" : ["oop"],
"derivata" : ["analys"],
"intergral" : ["analys"],
"linjärisering" : ["analys"],
"optimalitetskriterier" : ["analys"],
"polynom" : ["analys"],
"potensserier" : ["analys", "matdom"],
"envariabelanalys" : ["analys"],
"paketkoppling" : ["datakom", "computerNetworks"],
"datornätverk" : ["datakom", "computerNetworks"],
"distribuerad" : ["datakom", "computerNetworks"],
"dns" : ["datakom", "networkSecurity"],
"sockets" : ["datakom", "computerNetworks"],
"datagram" : ["datakom"],
"dataöverföring" : ["datakom"],
"tcp" : ["datakom", "networkSecurity", "computerNetworks"],
"udp" : ["datakom", "networkSecurity"],
"stockningskontroll" : ["datakom", "computerNetworks"],
"internet" : ["datakom", "computerNetworks"],
"adressering" : ["datakom"],
"ipv4" : ["datakom", "computerNetworks"],
"ipv6" : ["datakom", "computerNetworks"],
"arp" : ["datakom", "networkSecurity"],
"icmp" : ["datakom", "networkSecurity"],
"autonoma system" : ["datakom"],
"rip" : ["datakom", "oS"],
"ospf" : ["datakom"],
"bgp" : ["datakom"],
"mac" : ["datakom"],
"ethernet" : ["datakom"],
"switching" : ["datakom", "oS"],
"vlan" : ["datakom", "networkSecurity", "oS"],
"trådlös" : ["datakom"],
"wlan" : ["datakom"],
"c" : ["mop"],
"test" : ["mop"],
"systemprogrammering" : ["mop"],
"händelser" : ["mop"],
"avbrott" : ["mop"],
"räknarkretsar" : ["mop"],
"seriekommunikation" : ["mop"],
"tidsdelningssystem" : ["mop"],
"periferikretsar" : ["mop"],
"mikrodatorsystem" : ["dtekproj"],
"mikroprocessor" : ["dtekproj", "compArch", "rts"],
"periferienheter" : ["dtekproj"],
"projektarbete" : ["dtekproj"],
"versionshantering" : ["dtekproj"],
"rapport" : ["dtekproj"],
"dokumentation" : ["dtekproj"],
"sannolikhetslära" : ["matstat"],
"markovkedjor" : ["matstat"],
"stokastisk" : ["matstat"],
"väntevärde" : ["matstat"],
"varians" : ["matstat"],
"korrelation" : ["matstat"],
"stora talens lag" : ["matstat"],
"centrala gränsvärdessatsen" : ["matstat"],
"statistik" : ["matstat"],
"skattningar" : ["matstat"],
"konfidensintervall" : ["matstat"],
"kombinationer" : ["matstat", "diskmat"],
"permutationer" : ["matstat", "diskmat"],
"modeller" : ["matstat"],
"abstrakta datatyper" : ["dstrukt"],
"komplexitetsanalys" : ["dstrukt"],
"träd" : ["dstrukt"],
"fält" : ["dstrukt"],
"hashtabeller" : ["dstrukt"],
"köer" : ["dstrukt"],
"prioritetsköer" : ["dstrukt"],
"lexika" : ["dstrukt", "compilerConst", "prolang"],
"iteratorer" : ["dstrukt"],
"sortering" : ["dstrukt"],
"mekanik" : ["fysik"],
"newton" : ["fysik"],
"rörelser" : ["fysik"],
"komponenterna" : ["fysik"],
"partiklar" : ["fysik"],
"värmelära" : ["fysik"],
"termodynamik" : ["fysik", "fysik2"],
"processer" : ["fysik", "fysik2"],
"vågfysik" : ["fysik"],
"vågor" : ["fysik"],
"interferens" : ["fysik", "concurrent"],
"diffraktion" : ["fysik"],
"arbete" : ["fysik"],
"energi" : ["fysik"],
"rotationsrörelse" : ["fysik"],
"rörelsemängd" : ["fysik"],
"rörelsemängdsmoment" : ["fysik"],
"oscillationer" : ["fysik"],
"superposition" : ["fysik"],
"differentialekvationer" : ["fysik"],
"transienta förlopp" : ["fysik", "el"],
"asic" : ["syntes"],
"fpga" : ["syntes"],
"vhdl" : ["syntes"],
"digitala kretsar" : ["syntes"],
"hårdvarukonstruktion" : ["syntes"],
"processor" : ["syntes", "dst"],
"tillståndsmaskin" : ["syntes"],
"dsl" : ["matdom", "prolang"],
"funktionell programmering" : ["matdom", "types"],
"programkalkyl" : ["matdom"],
"domänspecifikt språk" : ["matdom", "prolang"],
"kategoriteori" : ["matdom"],
"medelvärdessatser" : ["matdom"],
"taylors formel" : ["matdom"],
"haskell" : ["matdom", "haskell", "paraFunc"],
"laplace" : ["matdom", "tss"],
"transformer" : ["matdom", "tss"],
"parallellism" : ["concurrent", "compArch", "paraFunc"],
"synkronisering" : ["concurrent"],
"kritiska regioner" : ["concurrent"],
"ömsesidig uteslutning" : ["concurrent"],
"deadlock" : ["concurrent", "oS", "advDistSys"],
"livelock" : ["concurrent"],
"busy waiting" : ["concurrent"],
"semaforer" : ["concurrent"],
"monitorer" : ["concurrent"],
"rendezvous" : ["concurrent"],
"erlang" : ["concurrent", "paraFunc"],
"linda" : ["concurrent"],
"resource allocation" : ["concurrent"],
"dining philosophers" : ["concurrent"],
"pipelining" : ["dst", "compArch"],
"minneshierarki" : ["dst"],
"cacheminnen" : ["dst"],
"huvudminne" : ["dst"],
"virtuellt minne" : ["dst"],
"fler-kärniga" : ["dst"],
"kretselement" : ["el"],
"ohm" : ["el"],
"kirchhoff" : ["el"],
"effekt" : ["el"],
"elektriska nät" : ["el"],
"växelström" : ["el"],
"frekvensegenskaper" : ["el"],
"bodediagram" : ["el"],
"operationsförstärkare" : ["el"],
"elektromagnetism" : ["el"],
"likström" : ["el"],
"ström" : ["el"],
"spänning" : ["el"],
"absolut summer" : ["tss"],
"energisignaler" : ["tss"],
"bandbegränsade signaler" : ["tss"],
"linjäritet" : ["tss"],
"skift-invarians" : ["tss"],
"kausalitet" : ["tss"],
"bibo" : ["tss"],
"fourierserier" : ["tss"],
"fourier" : ["tss"],
"z-transform" : ["tss"],
"fouriertransform" : ["tss"],
"lti" : ["tss"],
"lti-ekvationen" : ["tss"],
"nyquistkriteriet" : ["tss", "commEng", "dtekproj"],
"samplingsteoremet" : ["tss"],
"dft" : ["tss"],
"sampling" : ["tss"],
"lti-system" : ["tss"],
"signalmodeller" : ["tss"],
"parseval" : ["tss"],
"impulssvar" : ["tss"],
"stegsvar" : ["tss"],
"överföringsfunktion" : ["tss"],
"frekvenssvar" : ["tss"],
"maxwell-boltzmanns fördelningsfunktion" : ["fysik2"],
"fasta tillstånd" : ["fysik2"],
"kristallstruktur" : ["fysik2"],
"röntgen" : ["fysik2"],
"elektrondiffraktion" : ["fysik2"],
"fermi-diracs fördelningsfunktion" : ["fysik2"],
"tillståndstätheter" : ["fysik2"],
"frielektronmodellen" : ["fysik2"],
"elektronstruktur" : ["fysik2"],
"fotoelektronspektra" : ["fysik2"],
"brillouinzoner" : ["fysik2"],
"konduktivitet" : ["fysik2"],
"halvledare" : ["fysik2"],
"isolatorer" : ["fysik2"],
"roman" : ["skon"],
"novell" : ["skon"],
"pjäs" : ["skon"],
"poesi" : ["skon"],
"texter" : ["skon"],
"kreativt skrivande" : ["skon"],
"litteraturteori" : ["skon"],
"narratologi" : ["skon"],
"läsarstrategier" : ["skon"],
"skönlitteratur" : ["skon"],
"tolkning" : ["skon"],
"människa-teknologi-samhälle" : ["skon"],
"mts" : ["skon"],
"algoritm" : ["algoritmer", "dstrukt"],
"o-notation" : ["algoritmer", "dstrukt"],
"ordo" : ["algoritmer", "dstrukt"],
"grafalgoritmer" : ["algoritmer", "dstrukt"],
"giriga algoritmer" : ["algoritmer", "dstrukt"],
"divide-and-conquer" : ["algoritmer"],
"dynamisk programmering" : ["algoritmer"],
"backtracking" : ["algoritmer"],
"implicita sökträd" : ["algoritmer"],
"branch-and-bound" : ["algoritmer"],
"komplexitetsteori" : ["algoritmer", "dstrukt"],
"approximationsalgoritmer" : ["algoritmer"],
"p" : ["algoritmer"],
"np" : ["algoritmer"],
"npc" : ["algoritmer"],
"rummet" : ["flervar", "linalg"],
"gränsvärden" : ["flervar", "analys"],
"kontinuitet" : ["flervar", "analys"],
"differentierbarhet" : ["flervar", "analys"],
"kedjeregeln" : ["flervar", "analys"],
"partiella derivator" : ["flervar", "analys"],
"gradient" : ["flervar", "analys"],
"tangentplan" : ["flervar"],
"differentialer" : ["flervar"],
"funktionalmatriser" : ["flervar"],
"funktionaldeterminanter" : ["flervar"],
"trippelintegraler" : ["flervar"],
"variabelsubstitution" : ["flervar"],
"polärakoordinater" : ["flervar", "analys"],
"sfäriska koordinater" : ["flervar"],
"arean av buktig yta" : ["flervar"],
"greens formel" : ["flervar"],
"kurvintegraler" : ["flervar"],
"normalytintegraler" : ["flervar"],
"stokes satser" : ["flervar"],
"vågekvationen" : ["flervar"],
"hållbara energisystem" : ["barsaft"],
"ekologi" : ["barsaft"],
"växthuseffekten" : ["barsaft"],
"reglerproblem" : ["regler"],
"återkoppling" : ["regler"],
"framkoppling" : ["regler"],
"servofunktioner" : ["regler"],
"parametervariationer" : ["regler"],
"överföringsfunktioner" : ["regler"],
"transient- och frekvensanalys" : ["regler"],
"filter" : ["regler"],
"pi- och pid-regulatorer" : ["regler"],
"kaskadreglering" : ["regler"],
"monader" : ["advFunc"],
"domänspecifika programbibliotek" : ["advFunc"],
"pretty printing" : ["advFunc"],
"syntax" : ["advFunc", "matdom"],
"semantik" : ["advFunc", "matdom"],
"funktorer" : ["advFunc"],
"monadtransformerare" : ["advFunc"],
"resistorer" : ["elektronik"],
"kondensatorer" : ["elektronik"],
"induktorer" : ["elektronik"],
"transistorer" : ["elektronik"],
"effektsteg" : ["elektronik"],
"mönsterkort" : ["elektronik"],
"databas" : ["databas"],
"sql" : ["databas"],
"jdbc" : ["databas"],
"xml" : ["databas"],
"grafiskt gränssnitt" : ["deskonstr"],
"html" : ["web"],
"css" : ["web"],
"javascript" : ["web"],
"ajax" : ["web"],
"java servlet api" : ["web"],
"java server faces" : ["web"],
"satslogik" : ["logik", "diskmat"],
"predikatlogik" : ["logik", "diskmat", "softEng"],
"horn klausuler" : ["logik"],
"konjunktiv normalform" : ["logik", "digodat"],
"temporal logik" : ["logik"],
"modellkontroll (model-checking)" : ["logik", "softEng"],
"typsystem" : ["types"],
"bevissystem" : ["types"],
"typteori" : ["types", "matdom"],
"lambdakalkyl" : ["types", "matdom"],
"agda" : ["types"],
"deduktiv verifikation" : ["softEng"],
"key" : ["softEng"],
"java modelling language (jml)" : ["softEng"],
"verifikation" : ["softEng", "logik"],
"interpretatorer" : ["prolang"],
"kompilatorer" : ["prolang", "compilerConst"],
"syntaxstyrd översättning" : ["prolang"],
"typkontrollerare" : ["prolang"],
"kodgeneratorer" : ["prolang", "compilerConst"],
"polymorf typkontroll" : ["prolang"],
"minneshierarkier" : ["compArch"],
"moores lag" : ["compArch"],
"amdahls lag" : ["compArch"],
"tomasulos algoritm" : ["compArch"],
"church-turings hypotes" : ["models"],
"beräkningsmodeller" : ["models"],
"hashning" : ["Cryptography", "dstrukt"],
"kryptografiska primitiver" : ["Cryptography"],
"asymmetriska chiffer" : ["Cryptography"],
"realtidssystem" : ["rts", "parallelRTS"],
"virus" : ["computerSecurity"],
"logiska bomber" : ["computerSecurity"],
"steganografi" : ["computerSecurity"],
"brandväggar" : ["computerSecurity", "networkSecurity", "datakom"],
"datakriminalitet" : ["computerSecurity"],
"linjär optimering" : ["discopt"],
"heuristik" : ["discopt"],
"matematiska modellering" : ["discopt", "models"],
"grafalgoritmer" : ["discopt"],
"bayes-klassificerare" : ["ml"],
"fisher-diskriminantanalys" : ["ml"],
"perceptron-baserade metoder" : ["ml"],
"support-vektormaskiner" : ["ml"],
"regression" : ["ml"],
"em-algoritmen" : ["ml"],
"dolda markov-modeller" : ["ml"],
"ai" : ["ml", "ai"],
"concurrency" : ["paraFunc"],
"divide and conq" : ["paraFunc"],
"kryptering" : ["networkSecurity"],
"ip" : ["networkSecurity"],
"dos" : ["networkSecurity", "advDistSys"],
"ssl" : ["networkSecurity"],
"ssh" : ["networkSecurity"],
"wep" : ["networkSecurity"],
"wpa" : ["networkSecurity"],
"vpn" : ["networkSecurity", "oS"],
"lexikalanalys" : ["compilerConst"],
"kodgenerator" : ["compilerConst"],
"kodoptimering" : ["compilerConst"],
"runtime-miljö" : ["compilerConst"],
"trojanska hästar" : ["langsecurity"],
"maskar" : ["langsecurity"],
"buffer overrun attacker" : ["langsecurity"],
"programtransformation" : ["langsecurity"],
"stackinspektion" : ["langsecurity"],
"probabilistisk slutledning" : ["ai"],
"tekniskt skrivande" : ["ai", "cscience", "techwrite"],
"etik" : ["ai", "cscience", "energyComp", "techwrite"],
"maskinvaruredundans" : ["ftcs"],
"beredskapssystem" : ["ftcs"],
"feltolerans" : ["ftcs", "distSys", "advDistSys"],
"byzantinska fel" : ["ftcs"],
"stokastiska petrinät" : ["ftcs"],
"tidskontinuerliga markovkedjor" : ["ftcs"],
"felmodsanalys" : ["ftcs"],
"felträdsanalys" : ["ftcs"],
"parallelism" : ["parallelOrganization"],
"flynns taxonomi" : ["parallelOrganization"],
"minneskoherens" : ["parallelOrganization"],
"cachekoherens" : ["parallelOrganization"],
"resurshantering" : ["oS", "advDistSys", "parallelRTS"],
"filsystem" : ["oS"],
"os" : ["oS"],
"unix" : ["oS"],
"linux" : ["oS"],
"windows" : ["oS"],
"schemaläggning" : ["oS", "parallelRTS", "rts"],
"pintos" : ["oS"],
"vlsm" : ["routerSwitch"],
"nat" : ["routerSwitch"],
"dhcp" : ["routerSwitch"],
"wan" : ["routerSwitch"],
"lan" : ["routerSwitch"],
"distribuerade system" : ["distSys", "advDistSys", "parallelRTS"],
"distribuerade algoritmer" : ["advDistSys", "parallelRTS"],
"sensornätverk" : ["advDistSys"],
"effektförbrukning" : ["energyComp"],
"datorarkitektur" : ["energyComp"],
"datorer, nätverk och system." : ["techwrite"],
"shannons modell" : ["commEng"],
"osi-modellen" : ["commEng"],
"länkbudget" : ["commEng"],
"intersymbolinterferens" : ["commEng"],
"wifi" : ["commEng"],
"t-ortogonalitet" : ["commEng"],
"i/q-modulering" : ["commEng"],
"digitalmodulation" : ["commEng"],
"signalrymdsanalys" : ["commEng"],

}




$( function() {
  var availableTags = [
"funktioner",
"datastrukturer",
"listor",
"tupler",
"top-down programdesign",
"rekursion",
"tidskomplexitet",
"abstraktion",
"verifiering",
"högre ordningens funktioner",
"data-centrisk programmering",
"mängdlära",
"relationer",
"bevis",
"motsägelsebevis",
"heltalsaritmetik",
"kombinatorik",
"grafteori",
"boolesk algebra",
"kombinatoriska nät",
"sekvensnät",
"alu",
"dataväg",
"styrenhet",
"minne",
"in- och ut- enheter",
"instruktionsuppsättning",
"maskinspråk",
"assembler",
"digitalteknik",
"matriser",
"vektorer",
"linjära avbildningar",
"ekvationssystem",
"egenvektorer",
"egenvärden",
"baser",
"dimensioner",
"relationsmatriser",
"matlab",
"objektorienterad",
"v",
"klass",
"datainkapsling",
"konstruktorer",
"metoder",
"instansvariabler",
"klassvariabler",
"standardbibliotek",
"kodningsstandard",
"namnsättning",
"kommentering",
"derivata",
"intergral",
"linjärisering",
"optimalitetskriterier",
"polynom",
"potensserier",
"envariabelanalys",
"paketkoppling",
"datornätverk",
"distribuerad",
"dns",
"sockets",
"datagram",
"dataöverföring",
"tcp",
"udp",
"stockningskontroll",
"internet",
"adressering",
"ipv4",
"ipv6",
"arp",
"icmp",
"autonoma system",
"rip",
"ospf",
"bgp",
"mac",
"ethernet",
"switching",
"vlan",
"trådlös",
"wlan",
"c",
"test",
"systemprogrammering",
"händelser",
"avbrott",
"räknarkretsar",
"seriekommunikation",
"tidsdelningssystem",
"periferikretsar",
"mikrodatorsystem",
"mikroprocessor",
"periferienheter",
"projektarbete",
"versionshantering",
"rapport",
"dokumentation",
"sannolikhetslära",
"markovkedjor",
"stokastisk",
"väntevärde",
"varians",
"korrelation",
"stora talens lag",
"centrala gränsvärdessatsen",
"statistik",
"skattningar",
"konfidensintervall",
"kombinationer",
"permutationer",
"modeller",
"abstrakta datatyper",
"komplexitetsanalys",
"träd",
"fält",
"hashtabeller",
"köer",
"prioritetsköer",
"lexika",
"iteratorer",
"sortering",
"mekanik",
"newton",
"rörelser",
"komponenterna",
"partiklar",
"värmelära",
"termodynamik",
"processer",
"vågfysik",
"vågor",
"interferens",
"diffraktion",
"arbete",
"energi",
"rotationsrörelse",
"rörelsemängd",
"rörelsemängdsmoment",
"oscillationer",
"superposition",
"differentialekvationer",
"transienta förlopp",
"asic",
"fpga",
"vhdl",
"digitala kretsar",
"hårdvarukonstruktion",
"processor",
"tillståndsmaskin",
"dsl",
"funktionell programmering",
"programkalkyl",
"domänspecifikt språk",
"kategoriteori",
"medelvärdessatser",
"taylors formel",
"haskell",
"laplace",
"transformer",
"parallellism",
"synkronisering",
"kritiska regioner",
"ömsesidig uteslutning",
"deadlock",
"livelock",
"busy waiting",
"semaforer",
"monitorer",
"rendezvous",
"erlang",
"linda",
"resource allocation",
"dining philosophers",
"pipelining",
"minneshierarki",
"cacheminnen",
"huvudminne",
"virtuellt minne",
"fler-kärniga",
"kretselement",
"ohm",
"kirchhoff",
"effekt",
"elektriska nät",
"växelström",
"frekvensegenskaper",
"bodediagram",
"operationsförstärkare",
"elektromagnetism",
"likström",
"ström",
"spänning",
"absolut summer",
"energisignaler",
"bandbegränsade signaler",
"linjäritet",
"skift-invarians",
"kausalitet",
"bibo",
"fourierserier",
"fourier",
"z-transform",
"fouriertransform",
"lti",
"lti-ekvationen",
"nyquistkriteriet",
"samplingsteoremet",
"dft",
"sampling",
"lti-system",
"signalmodeller",
"parseval",
"impulssvar",
"stegsvar",
"överföringsfunktion",
"frekvenssvar",
"maxwell-boltzmanns fördelningsfunktion",
"fasta tillstånd",
"kristallstruktur",
"röntgen",
"elektrondiffraktion",
"fermi-diracs fördelningsfunktion",
"tillståndstätheter",
"frielektronmodellen",
"elektronstruktur",
"fotoelektronspektra",
"brillouinzoner",
"konduktivitet",
"halvledare",
"isolatorer",
"roman",
"novell",
"pjäs",
"poesi",
"texter",
"kreativt skrivande",
"litteraturteori",
"narratologi",
"läsarstrategier",
"skönlitteratur",
"tolkning",
"människa-teknologi-samhälle",
"mts",
"algoritm",
"o-notation",
"ordo",
"grafalgoritmer",
"giriga algoritmer",
"divide-and-conquer",
"dynamisk programmering",
"backtracking",
"implicita sökträd",
"branch-and-bound",
"komplexitetsteori",
"approximationsalgoritmer",
"p",
"np",
"npc",
"rummet",
"gränsvärden",
"kontinuitet",
"differentierbarhet",
"kedjeregeln",
"partiella derivator",
"gradient",
"tangentplan",
"differentialer",
"funktionalmatriser",
"funktionaldeterminanter",
"trippelintegraler",
"variabelsubstitution",
"polärakoordinater",
"sfäriska koordinater",
"arean av buktig yta",
"greens formel",
"kurvintegraler",
"normalytintegraler",
"stokes satser",
"vågekvationen",
"hållbara energisystem",
"ekologi",
"växthuseffekten",
"reglerproblem",
"återkoppling",
"framkoppling",
"servofunktioner",
"parametervariationer",
"överföringsfunktioner",
"transient- och frekvensanalys",
"filter",
"pi- och pid-regulatorer",
"kaskadreglering",
"monader",
"domänspecifika programbibliotek",
"pretty printing",
"syntax",
"semantik",
"funktorer",
"monadtransformerare",
"resistorer",
"kondensatorer",
"induktorer",
"transistorer",
"effektsteg",
"mönsterkort",
"databas",
"sql",
"jdbc",
"xml",
"grafiskt gränssnitt",
"html",
"css",
"javascript",
"ajax",
"java servlet api",
"java server faces",
"satslogik",
"predikatlogik",
"horn klausuler",
"konjunktiv normalform",
"temporal logik",
"modellkontroll (model-checking)",
"typsystem",
"bevissystem",
"typteori",
"lambdakalkyl",
"agda",
"deduktiv verifikation",
"key",
"java modelling language (jml)",
"verifikation",
"interpretatorer",
"kompilatorer",
"syntaxstyrd översättning",
"typkontrollerare",
"kodgeneratorer",
"polymorf typkontroll",
"minneshierarkier",
"moores lag",
"amdahls lag",
"tomasulos algoritm",
"church-turings hypotes",
"beräkningsmodeller",
"hashning",
"kryptografiska primitiver",
"asymmetriska chiffer",
"realtidssystem",
"virus",
"logiska bomber",
"steganografi",
"brandväggar",
"datakriminalitet",
"linjär optimering",
"heuristik",
"matematiska modellering",
"grafalgoritmer",
"bayes-klassificerare",
"fisher-diskriminantanalys",
"perceptron-baserade metoder",
"support-vektormaskiner",
"regression",
"em-algoritmen",
"dolda markov-modeller",
"ai",
"concurrency",
"divide and conq",
"kryptering",
"ip",
"dos",
"ssl",
"ssh",
"wep",
"wpa",
"vpn",
"lexikalanalys",
"kodgenerator",
"kodoptimering",
"runtime-miljö",
"trojanska hästar",
"maskar",
"buffer overrun attacker",
"programtransformation",
"stackinspektion",
"probabilistisk slutledning",
"tekniskt skrivande",
"etik",
"maskinvaruredundans",
"beredskapssystem",
"feltolerans",
"byzantinska fel",
"stokastiska petrinät",
"tidskontinuerliga markovkedjor",
"felmodsanalys",
"felträdsanalys",
"parallelism",
"flynns taxonomi",
"minneskoherens",
"cachekoherens",
"resurshantering",
"filsystem",
"os",
"unix",
"linux",
"windows",
"schemaläggning",
"pintos",
"vlsm",
"nat",
"dhcp",
"wan",
"lan",
"distribuerade system",
"distribuerade algoritmer",
"sensornätverk",
"effektförbrukning",
"datorarkitektur",
"datorer, nätverk och system.",
"shannons modell",
"osi-modellen",
"länkbudget",
"intersymbolinterferens",
"wifi",
"t-ortogonalitet",
"i/q-modulering",
"digitalmodulation",
"signalrymdsanalys",


  ];
  $("#tags").autocomplete({
    source: availableTags,
	minLength: 2  
  });
} );