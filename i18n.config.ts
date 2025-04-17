export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'it',
    messages: {
        en: {
            find: 'Search',
            home: 'Home',
            filters: 'Filters',
            back: 'Back',
            navigate: 'Navigate\n',
            browse: 'Browse',
            project: 'Project',
            research: 'Research group',
            committee: 'Scientific Committee',
            who: 'Who we are',
            collaborators: 'Collaborators',
            developmentTeam: 'Development Team',
            contacts: 'Contacts',
            goToEditor: 'Go to Editor',


            homeParagraph: "<b>DEFrAG-Tragedy</b>, an acronym for Digital Edition of Fragmentary Ancient Greek Tragedy, is a dynamic, collaborative digital critical edition of the fragments of Greek tragedy, beginning with a selection of lost plays by Euripides. The edition, which is open access and adheres to FAIR principles, includes the critical text and translation of both fragments and <i>testimonia</i>, along with commentary and an introduction to each lost play.<br>The DEFrAG-Tragedy viewer allows users to browse the edition’s content on multiple levels and to search material encoded in XML/TEI. The editor—designed to mirror the interface and functionality of a standard word processor—automatically converts content into XML/TEI and enables accredited users to easily contribute to the horizontal and vertical expansion of the edition, by enlarging the corpus of fragmentary tragedies under examination and continuously revising published content.<br>Conceived in 2014, the project has been supported and promoted since January 2021 through a Scientific Collaboration Agreement among the Universities of Bari, Durham, Eastern Piedmont, Trento, and Trieste.",


            thisSite: "This site uses",
            openSource: "an open source project for publishing and exploring texts in TEI/XML format",
            contribute: "If you want to contribute or find out more, visit the project on",
            contribute_second_part: "or explore the repository of",
            license: "Page distributed under Creative Commons 4.0 license.",

            projectParagraph: `An acronym for <b>Digital Edition of Fragmentary Ancient Greek Tragedy</b>, DEFrAG-Tragedy is a project originally funded in 2014 by the Development and Cohesion Fund 2007–2013 – APQ Research Regione Puglia under the initiative Future in Research (FiR). It was conceived by Sabina Castellaneta and launched by her as a FiR researcher at the University of Bari in the spring of 2018. Since January 2021, the project has been supported and promoted through a five-year <b>Scientific Collaboration Agreement</b> among the Universities of <b>Bari, Durham, Eastern Piedmont, Trento, and Trieste.</b><br>DEFrAG-Tragedy is a <b>born-digital, dynamic, and collaborative critical edition of tragic fragments</b>, beginning with a sample of Euripidean plays selected for their exemplary value. The edition includes the critical text and translation of fragments and testimonia, accompanied by extensive philological-literary commentary and an introduction to the lost play.<br>The aim of DEFrAG is to ‘defragment’ disjointed texts by effectively reconstructing their fluidity, which—due to their fragmentary nature—lends itself to interpretation through a dense network of connections. These range from philological and literary-linguistic to mythographical, antiquarian, historical, and geographical dimensions, all linked to the most authoritative open-access digital resources for classical antiquity, in accordance with FAIR principles. To this end, a custom <b>viewer</b> has been developed, allowing users to browse at various levels and to search contents encoded in XML/TEI.<br>The results published for any given play remain open to revision—including updates or corrections assessed by the project’s Scientific Committee and tracked by date and authorship—provided these changes are consistent with the original editorial vision. They may be made either by the original editor or by accredited users affiliated with qualified Italian or international research institutions. The digital edition is thus a living publication: expandable horizontally, by enlarging the corpus of tragedies included, and vertically, through continuous updates based on the latest scholarly research and input from a range of contributors. To facilitate the editorial process, the <b>editor</b> interface, which mirrors the functionality and layout of a common word processor, automatically handles XML/TEI conversion.<br>For a more detailed description of the project (including encoding models and case studies), see: S. Castellaneta, N. Rosso, <i>Digital Edition of Fragmentary Ancient Greek Tragedy (DEFrAG-Tragedy): idea progettuale e modello di codifica</i>, «FuturoClassico» 6, 2020, 153–180; S. Castellaneta, N. Rosso, L. Savignago, <i>Digital Edition of Fragmentary Ancient Greek Tragedy (DEFrAG-Tragedy): tre casi di studio</i>, «FuturoClassico» 7, 2021, 114–142.`,

            sabinaCastellanetaDescription: `Professore associato di Lingua e letteratura greca presso l’Università di Bari, è ideatrice del progetto DEFrAG-Tragedy. Oltre che sulle Digital Scholarly Editions, i suoi interessi di ricerca vertono sul teatro attico, con particolare riferimento alla tragedia euripidea, nonché su epica omerica, lirica stesicorea e poesia alessandrina. Tra le sue pubblicazioni, un volume sul soggiorno macedone di Euripide (Alessandria 2021) e un’edizione del Temeno (Trieste 2023) e dei Temenidi di Euripide (Roma 2025).`,
            andreaGiannottiDescription: `Teaching Fellow in Filologia classica e Storia antica presso l’Università di Durham, si occupa di tragedia greca, in particolare euripidea, attraverso lo studio dell’epigrafia onorifica e delle moderne teorie socio-cognitive. Tra le sue pubblicazioni su tragedia, storia ed epigrafia greca, si annoverano le edizioni delle Supplici (Milano 2023) e degli Eraclidi (Milano 2025) di Euripide e delle Lettere dello Pseudo-Euripide (Liverpool 2026; con G.A. Gazis).`,
            nadiaRossoDescription: `Post-doc e docente a contratto in Lingua e Letteratura greca presso l’Università del Piemonte Orientale. I suoi principali interessi di ricerca ruotano intorno alla tragedia greca, alla metrica greca e al bilinguismo greco-latino in epoca tardo-antica, a cui si aggiunge una specifica attenzione alle Digital Humanities e alle loro applicazioni in ambito filologico-linguistico. Ha pubblicato l’edizione critica con commento del Frisso I e II di Euripide (Trieste 2024).`,
            lorenzaSavignagoDescription: `Professore associato di Lingua e letteratura greca presso l’Università degli Studi di Trieste. Si occupa principalmente di metrica greca e tradizione dei testi drammatici. Ha pubblicato un volume sul sistema dei margini nei papiri dei poeti tragici (Alessandria 2008) e sta attualmente allestendo l’edizione critica degli scolii metrici tricliniani a Sofocle, Trachinie, Filottete, Edipo a Colono.`,
            lorenzoBocchiDescription: `Laureato in Data Science, è sviluppatore web presso l'Università di Trento. Si occupa della costruzione di siti e applicativi web, nonché del mantenimento di risorse digitali.`,


            searchDescription1: "Researcher in Greek Language and Literature at the University of Bari, he is\n" +
                "      creator of DEFrAG-Tragedy. His research interests focus on\n" +
                "      Attic theatre, with particular reference to Euripidean tragedy,\n" +
                "      as well as on Homeric epic, Stesichorean lyric and Alexandrian poetry. Among them\n" +
                "      his publications, a volume on Euripides' Macedonian stay\n" +
                "      (Alessandria 2021) and an edition of the",
            searchDescription2: "Contract professor of Greek language and literature at the University\n" +
                "      of Eastern Piedmont. His main research interests revolve\n" +
                "      around Greek tragedy, ancient metrics and bilingualism\n" +
                "      Greco-Latin in the late ancient period, to which a specification is added\n" +
                "      attention to Digital Humanities. Its edition is currently in print\n" +
                "      criticism with commentary by",
            searchDescription3: "Associate Professor of Greek Language and Literature at the University\n" +
                "      of the Studies of Trieste. He mainly deals with Greek metrics and\n" +
                "      tradition of dramatic texts. He published a volume on the system of\n" +
                "      margins in the papyri of the tragic poets (Alessandria 2008) and sta\n" +
                "      currently preparing the critical edition of the metrical scholia\n" +
                "      triclinians in ",
            searchDescription4: "Graduated in Data Science, he is a web developer at the University of\n" +
                "    Trent. It deals with the construction of websites and web applications, as well as\n" +
                "    maintenance of digital assets.",

            
            researchGroup: "Research group",
            claudioStefaniDescription: "Associate Professor of Greek Literature at the University of Trieste. His scholarly work centers on Hellenistic, Late Antique, and Byzantine poetry, as well as ancient medicine. Among his publications are editions of Nonnus (2002), Paul the Silentiary (2011), Arabic Galen (2011), Manetho (2017), Phoenix of Colophon (2018), and Constantine of Rhodes (2023).",
            georgeAlexanderGazisDescription: "Associate Professor in Greek Literature and Philosophy at the University of Durham, his research interests lie in Archaic Greek Epic and Lyric, Plato and the Early Academy, as well as Athenian drama, with a particular focus on afterlife narratives. His publications include the monograph <i>Homer and the Poetics of Hades</i> (Oxford 2018) and the edited volumes <i>Aspects of Death and the Afterlife in Greek Literature</i> (Liverpool 2021) and <i>Homer in Sicily</i> (Syracuse 2023). ",

            giorgioIeranoDescription: "Full Professor of Greek Literature at the University of Trento and Director of the Laboratory “Dionysos: Archivio digitale del teatro antico”. He specializes in ancient theatre, classical tradition in modern literature, Greek mythology, and archaic Greek choral lyric. His publications include <i>Il Ditirambo di Dioniso</i> (Rome-Pisa 1997), <i>Arianna. Storia di un mito</i> (Rome 2010), <i>La tragedia greca. Origini, storia, rinascite</i> (Rome 2010), and <i>Il mare d’amore. Eros, tempeste e naufragi nella Grecia antica</i> (Rome-Bari 2019).",
            olimpiaImperioDescription: "Full Professor of Greek Literature and Coordinator of the PhD Program in Humanities, Languages, and Arts at the University of Bari. Her primary research area is extant and fragmentary Attic drama. She also works on Greek metrics and the reception of classical antiquity. Her publications include a volume on Aristophanes’ parabases (Bari 2004) and an edition of Aristophanes’ fragments (<i>Pace II, Eroi, Tesmoforiazuse II, Cocalo, Lemnie, Heidelberg 2023</i>).",
            mariaNapoliDescription: "Full Professor of Glottology and Linguistics at the University of Piemonte Orientale. Her main research area is historical linguistics. She specializes in Greek linguistics, particularly morpho-syntax and pragmatics. Her publications include a volume on <i>Aspect and Actionality in Homeric Greek: A Contrastive Analysis</i> (Milan 2006) and an essay on <i>Pragmatic effects of intersubjective evidentiality: on Classical Greek ouch horâis? ‘don't you see?’ in dialogic interaction</i> (Journal of Greek Linguistics 24/2, 2024).",
            francescoSessa: "\n" +
                "Software Engineer with many years of experience, specialized in data management and scalable systems, with a strong focus on efficiency and performance.",
            giuseppeSperanza: "Software Engineer with many years of experience, specialized in creating intuitive interfaces and implementing scalable software, with a strong focus on usability and performance.",
            francescoLupiDescription: "Researcher in Classical Philology at Ca’ Foscari University of Venice. His main research interests include Attic drama of the classical period—particularly the fragmentary tragic production—and the history of classical philology. He has published a monograph on the editorial history of Sophocles’ fragments (Pisa, 2020), an author to whom he has devoted several other studies. Together with Francesco Ginelli, he co-edited the collective volume <i>The Continuity of Classical Literature Through Fragmentary Traditions</i> (Berlin-Boston, 2021).",
            francescoMambriniDescription: "Researcher in Glottology and Linguistics at the Università Cattolica del Sacro Cuore, Milan. He has cooperated with some of the most important projects in the Digital Humanities, including The Perseus Projects, Arachne, and the Index Thomisticus Treebank. He has been one of the collaborators of the Ancient Greek And Latin Dependency Treebank (Perseus Project) since its foundation (2009), and has curated the annotated versions of the tragedies of Aeschylus and Sophocles. Currently, he works on the Linked Opend Data project LiLa: Linking Latin.",


            performSearch: "Perform Search",
            searchIn: "Search In",
            fullTextSearch: "Full text search",
            author: 'Author',
            person: 'Person',
            place: 'Place',
            title: 'Work',
            fragment: 'Fragment',
            testimonium: "Testimonium",
            documents: "Documents",
            noSearches: "No searches performed."
        },
        it: {
            find: 'Cerca',
            noSearches: "Nessuna ricerca effettuata.",
            documents: "Documenti",
            testimonium: "Testimonium",
            title: 'Opera',
            fragment: 'Frammento',
            author: 'Autore',
            person: 'Persona',
            place: 'Luogo',
            searchIn: "Cerca In",
            filterBy: "Filtra per",
            fullTextSearch: "Ricerca libera",
            home: 'Home',
            filters: 'Filtri',
            performSearch: "Effettua Ricerca",
            back: 'Indietro',
            navigate: 'Naviga',
            browse: 'Sfoglia',
            project: 'Progetto',
            research: 'Gruppo di ricerca',
            committee: ' Comitato Scientifico',
            who: 'Chi siamo',
            collaborators: 'Collaboratori',
            developmentTeam: 'Team di sviluppo',
            contacts: 'Contatti',
            goToEditor: 'Passa a Editor',
            and: "e",

            homeParagraph: "<b>DEFrAG-Tragedy</b>, acronimo di Digital Edition of Fragmentary Ancient Greek Tragedy, è un’edizione critica digitale, dinamica e collaborativa dei frammenti della tragedia greca, a partire da una rosa di drammi perduti di Euripide. L’edizione, open access e conforme ai principi FAIR, è comprensiva di testo critico e traduzione di frammenti e <i>testimonia</i>, commento agli stessi e introduzione al dramma perduto. <br>Il viewer di DEFrAG-Tragedy consente di sfogliare a vari livelli e di ricercare i contenuti dell’edizione codificati in XML/TEI. L’editor, del tutto sovrapponibile per interfaccia e funzionalità a un comune word processor, gestisce la conversione automatica dei contenuti nel linguaggio XML/TEI e consente agli utenti accreditati di contribuire senza difficoltà all’espansione in orizzontale e in verticale dell’edizione con l’ampliamento del corpus delle tragedie frammentarie indagate e la revisione continua dei contenuti già diffusi. <br>Ideato nel 2014, il progetto è patrocinato e promosso, a partire dal gennaio 2021, dall’Accordo di Collaborazione Scientifica tra le Università di Bari, Durham, Piemonte Orientale, Trento e Trieste.",
            

            thisSite: "Questo sito utilizza ",
            openSource: "un progetto open source per pubblicare ed esplorare testi in formato TEI/XML",
            contribute: "Se vuoi contribuire o saperne di più, visita il progetto su",
            contribute_second_part: "o esplora il repository del progetto",
            license: "Pagina distribuita sotto licenza Creative Commons 4.0.",

            projectParagraph: `Acronimo di Digital Edition of Fragmentary Ancient Greek Tragedy, <b>DEFrAG-Tragedy</b> è un progetto finanziato nel 2014 dal Fondo di Sviluppo e Coesione 2007-2013 - APQ Ricerca Regione Puglia nell’ambito dell’iniziativa "Future in Research (FiR)", ideato da Sabina Castellaneta e avviato dalla stessa, in qualità di ricercatrice FiR, presso l’Università di Bari nella primavera del 2018. A partire dal gennaio 2021, il progetto è patrocinato e promosso dall’<b>Accordo di Collaborazione Scientifica</b>, di durata quinquennale, tra le Università di <b>Bari, Durham, Piemonte Orientale, Trento e Trieste</b>.<br>DEFrAG-Tragedy è <b>un'edizione critica nativamente digitale, dinamica e collaborativa dei frammenti tragici</b>, a partire da una rosa di drammi euripidei scelti in via esemplare. L’edizione è comprensiva di testo critico e traduzione di frammenti e testimonia, ampio commento filologico-letterario agli stessi e introduzione al dramma perduto.<br>DEFrAG ambisce a 'deframmentare' testi disorganici e, cioè, a rappresentare efficacemente la fluidità di testi che, in virtù della propria natura frammentaria, si prestano a essere decifrati in relazione a una fitta trama di connessioni – che spaziano dall’ambito filologico e linguistico-letterario a quello mitografico, antiquario, storico e geografico – alle più autorevoli risorse elettroniche per l’antichità classica liberamente consultabili secondo i principi FAIR. A questo scopo è progettato il <b>viewer</b> che consente di sfogliare a vari livelli e di ricercare i contenuti dell’edizione codificati in XML/TEI. <br>I risultati raggiunti all’atto della pubblicazione di una data tragedia restano, inoltre, aperti a interventi di modifica – aggiornamenti o correzioni vagliati dal Comitato Scientifico del progetto e tracciati per cronologia e paternità – coerenti con l’impostazione originaria, operati dall’editore medesimo o da utenti accreditati afferenti a qualificati enti di ricerca italiani e stranieri. L’edizione digitale diviene così un prodotto vivo: dilatabile, oltre che in orizzontale con l’ampliamento del corpus delle tragedie indagate, anche in verticale sulla base delle più recenti acquisizioni della critica e grazie all’apporto di ‘mani’ diverse – di utenti accreditati afferenti a qualificati centri di ricerca italiani e stranieri – nell’opera di revisione continua dei contenuti già diffusi. Per semplificare le modalità di introduzione dei contenuti dell’edizione, l’<b>editor</b>, sovrapponibile per interfaccia e funzionalità a un comune word processor, gestisce la conversione automatica in XML/TEI. <br>Per una più dettagliata descrizione del progetto (modello di codifica e concreti casi di studio) si vedano: S. Castellaneta, N. Rosso, <i>Digital Edition of Fragmentary Ancient Greek Tragedy (DEFrAG-Tragedy): idea progettuale e modello di codifica</i>, «FuturoClassico» 6, 2020, 153-180. S. Castellaneta, N. Rosso, L. Savignago, <i>Digital Edition of Fragmentary Ancient Greek Tragedy (DEFrAG-Tragedy): tre casi di studio</i>, «FuturoClassico» 7, 2021, 114-142.`,

            sabinaCastellanetaDescription: `Associate Professor of Ancient Greek Literature at the University of Bari, she is the creator of the DEFrAG-Tragedy project. In addition to the work on Digital Scholarly Editions, her research focuses on Attic drama, with particular attention to Euripidean tragedy, as well as on Homeric epic, Stesichorean lyric, and Hellenistic poetry. Her publications include a volume on Euripides’ stay in Macedonia (Alessandria 2021) and editions of Temenos (Trieste 2023) and Euripides’ Temenidae (Rome 2025).`,
            andreaGiannottiDescription: `Teaching Fellow in Classics and Ancient History at Durham University, his research focuses on Greek tragedy—particularly Euripidean—through the lens of honorific epigraphy and modern socio-cognitive theories. Among his publications on Greek tragedy, history, and epigraphy are editions of Euripides’ Suppliant Women (Milano 2023), Children of Heracles (Milano 2025), and the Pseudo-Euripides’ Letters (Liverpool 2026; with G.A. Gazis).`,
            nadiaRossoDescription: `Post-doctoral Research Fellow and Contract Lecturer in Greek Language and Literature at the University of Eastern Piedmont. Her primary research interests include Greek tragedy, Greek metre, and Greek-Latin bilingualism in Late Antiquity, with a particular focus on Digital Humanities and their applications in philological and linguistic studies. She has published the critical edition with commentary of Phrixus I and II by Euripides (Trieste 2024).`,
            lorenzaSavignagoDescription: `Associate Professor of Greek Literature at the University of Trieste. Her research focuses primarily on Greek metrics and the textual tradition of dramatic texts. She has published a monograph on Eisthesis. Il sistema dei margini nei papiri dei poeti tragici (Alessandria 2008) and is currently preparing the critical edition of the Triclinian metrical scholia on Sophocles’ Trachiniae, Philoctetes, Oedipus at Colonus.`,
            lorenzoBocchiDescription: `With a degree in Data Science, he is a web developer at the University of Trento. He works on the development of websites and web applications, as well as the maintenance of digital resources.`,
            
            searchDescription1: " Ricercatore in Lingua e Letteratura greca presso l’Università di Bari, è\n" +
                "      ideatrice di DEFrAG-Tragedy. I suoi interessi di ricerca vertono sul\n" +
                "      teatro attico, con particolare riferimento alla tragedia euripidea,\n" +
                "      nonché su epica omerica, lirica stesicorea e poesia alessandrina. Tra le\n" +
                "      sue pubblicazioni, un volume sul soggiorno macedone di Euripide\n" +
                "      (Alessandria 2021) e un’edizione del",
            searchDescription2: "Docente a contratto di Lingua e Letteratura greca presso l’Università\n" +
                "      del Piemonte Orientale. I suoi principali interessi di ricerca ruotano\n" +
                "      attorno alla tragedia greca, alla metrica antica e al bilinguismo\n" +
                "      greco-latino in epoca tardo-antica, cui si aggiunge una specifica\n" +
                "      attenzione alle Digital Humanities. In corso di stampa è la sua edizione\n" +
                "      critica con commento del",
            searchDescription3: " Professore associato di Lingua e letteratura greca presso l’Università\n" +
                "      degli Studi di Trieste. Si occupa principalmente di metrica greca e\n" +
                "      tradizione dei testi drammatici. Ha pubblicato un volume sul sistema dei\n" +
                "      margini nei papiri dei poeti tragici (Alessandria 2008) e sta\n" +
                "      attualmente allestendo l’edizione critica degli scolii metrici\n" +
                "      tricliniani a",
            searchDescription4: "Laureato in Data Science, è sviluppatore web presso l'Università di\n" +
                "    Trento. Si occupa della costruzione di siti e applicativi web, nonché\n" +
                "    del mantenimento di risorse digitali.",
            researchGroup: "Gruppo di ricerca",
            claudioStefaniDescription: "Professore associato di Lingua e Letteratura Greca presso l'Università\n" +
                "      di Trieste. I suoi interessi sono rivolti soprattutto alla poesia\n" +
                "      ellenistica, tardoantica e bizantina, e alla medicina antica. Tra le sue\n" +
                "      pubblicazioni, le edizioni di Nonno (2002), Paolo Silenziario (2011),\n" +
                "      Galeno arabo (2011), Manetone (2017), Fenice di Colofone (2018),\n" +
                "      Costantino Rodio (2023).",
            georgeAlexanderGazisDescription: "Professore associato in Letteratura e Filosofia Greca presso l’Università di Durham, i suoi interessi di ricerca riguardano l’epica, la lirica greca, Platone e la prima Accademia e il dramma ateniese, con un’attenzione particolare per la narrativa dell’aldilà. Tra le sue pubblicazioni si annoverano la monografia <i>Homer and the Poetics of Hades</i> (Oxford 2018) e i volumi collettanei <i>Aspects of Death and the Afterlife in Greek Literature</i> (Liverpool 2021) e <i>Homer in Sicily</i> (Syracuse 2023). ",
            giorgioIeranoDescription: "Professore ordinario di Lingua e letteratura greca presso l’Università\n" +
                "      di Trento e Direttore del Laboratorio dipartimentale “Dionysos: Archivio\n" +
                "      digitale del teatro antico\". Studioso di teatro antico, tradizione\n" +
                "      dell’antico nelle letterature moderne, mito greco, lirica corale greca\n" +
                "      d’età arcaica. Tra le sue pubblicazioni," +
                " <i>Il Ditirambo di Dioniso</i> (Roma-Pisa 1997), <i>Arianna. Storia di un mito</i> (Roma 2010), <i>La tragedia greca. Origini, storia, rinascite </i>(Roma 2010), <i>Il mare d’amore. Eros, tempeste e naufragi nella Grecia antica</i> (Roma-Bari 2019).",
                
                olimpiaImperioDescription: " Professore ordinario di Lingua e letteratura greca presso l’Università\n" +
                "      di Bari. Ambito privilegiato della sua attività di ricerca è il dramma\n" +
                "      attico superstite e frammentario. Si occupa anche di metrica greca e di\n" +
                "      ricezione dell’antico. Tra le sue pubblicazioni, un volume sulle\n" +
                "      parabasi di Aristofane (Bari 2004) e un’edizione dei frammenti di\n" +
                "      Aristofane "+
                "      (<i>Pace II, Eroi, Tesmoforiazuse II, Cocalo, Lemnie,</i> Heidelberg 2023).",
            mariaNapoliDescription: "Professore ordinario di Glottologia e Linguistica presso l’Università\n" +
                "      del Piemonte Orientale. Il suo principale ambito di ricerca è la\n" +
                "      linguistica storica. Si occupa di linguistica greca e in particolare di\n" +
                "      morfo-sintassi e pragmatica. Tra le sue pubblicazioni, un volume su" +
                "      <i> Aspect and Actionality in Homeric Greek. A Contrastive Analysis</i> (Milano 2006) e un saggio su <i>Pragmatic effects of intersubjective evidentiality:  on Classical Greek ouch horâis? ‘don’t you see?’ in dialogic interaction</i> (Journal of Greek Linguistics 24/2, 2024).",
            francescoSessa: "Software Engineer con esperienza pluriennale, specializzato nella gestione dati e sistemi scalabili, con un forte focus sull'efficienza e prestazioni.",
            giuseppeSperanza: "Frontend engineer con esperienza pluriennale, specializzato nella creazione di interfacce intuitive e nell’implementazione di software scalabili, con un forte focus su usabilità e performance.\n",
            francescoLupiDescription: "Ricercatore in Filologia greca e latina presso l’Università Ca’ Foscari di Venezia. I suoi principali interessi di ricerca riguardano il dramma attico di età classica, in particolare la produzione tragica oggi frammentaria, e la storia della filologia classica. Ha pubblicato una monografia sulla storia editoriale dei frammenti di Sofocle (Pisa 2020), autore al quale ha dedicato vari altri contributi, e ha curato, con Francesco Ginelli, il volume collettaneo <i>The Continuity of Classical Literature Through Fragmentary Traditions </i>(Berlin-Boston 2021).",
            francescoMambriniDescription: "Ricercatore in Glottologia e Linguistica presso l’Università Cattolica del Sacro Cuore di Milano. Ha collaborato con alcuni dei più importanti progetti nell’ambito delle Digital Humanities, tra cui The Perseus Project, Arachne e l’Index Thomisticus Treebank. È stato tra i collaboratori dell’Ancient Greek and Latin Dependency Treebank (Perseus Project) fin dalla sua fondazione (2009) e ha curato le versioni annotate delle tragedie di Eschilo e Sofocle. Attualmente lavora al progetto Linked Open Data LiLa: Linking Latin."
        }
    }
}))
