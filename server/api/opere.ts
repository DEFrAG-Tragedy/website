
export default defineEventHandler(async (event) => {
    const query = getQuery(event);
    const searchTerm = query.search?.toString().toLowerCase() || ''; // Parametro di ricerca

    console.log('searchTerm ---', searchTerm);

    return [
        {
            titolo: "Prometeo Incatenato",
            autore: "Eschilo",
            dataCaricamento: "2023-09-01",
            frammenti: [
                { numero: 179, testo: "…ἔχεις, εὖ μοι δόσῃς δεσπότη, ἄνδρός Οἰνόμης…" },
                { numero: 180, testo: "Ὑγιαί" },
                { numero: 181, testo: "τὸν μὲν κίκλησκε Ζηνύν· ἐζήτησε γὰρ τόκοις…" },
                { numero: 212, testo: "εἰ νοῦς ἔνεστιν εἴ δὲ μή, τί δεῖ καλῆς γυναικός, εἴ μὴ τὰς χρείας χρηστὰς ἔχεις;" },
                { numero: 213, testo: "κάρος δὲ πάντων· καὶ γὰρ ἐκ καλλιόνων λέκτρων…" },
                { numero: 214, testo: "κῆδος καθ' αὑτὸν τὸν σοφὸν κτᾶσθαι χρεών." },
            ]
        },
        {
            titolo: "Edipo Re",
            autore: "Sofocle",
            dataCaricamento: "2023-08-28",
            frammenti: [
                { numero: 179, testo: "…ἔχεις, εὖ μοι δόσῃς δεσπότη, ἄνδρός Οἰνόμης…" },
                { numero: 180, testo: "Ὑγιαί" },
                { numero: 181, testo: "τὸν μὲν κίκλησκε Ζηνύν· ἐζήτησε γὰρ τόκοις…" },
                { numero: 212, testo: "εἰ νοῦς ἔνεστιν εἴ δὲ μή, τί δεῖ καλῆς γυναικός, εἴ μὴ τὰς χρείας χρηστὰς ἔχεις;" },
                { numero: 213, testo: "κάρος δὲ πάντων· καὶ γὰρ ἐκ καλλιόνων λέκτρων…" },
                { numero: 214, testo: "κῆδος καθ' αὑτὸν τὸν σοφὸν κτᾶσθαι χρεών." },
            ]
        },
        {
            titolo: "Medea",
            autore: "Euripide",
            dataCaricamento: "2023-08-25",
            frammenti: [
                { numero: 179, testo: "…ἔχεις, εὖ μοι δόσῃς δεσπότη, ἄνδρός Οἰνόμης…" },
                { numero: 180, testo: "Ὑγιαί" },
                { numero: 181, testo: "τὸν μὲν κίκλησκε Ζηνύν· ἐζήτησε γὰρ τόκοις…" },
                { numero: 212, testo: "εἰ νοῦς ἔνεστιν εἴ δὲ μή, τί δεῖ καλῆς γυναικός, εἴ μὴ τὰς χρείας χρηστὰς ἔχεις;" },
                { numero: 213, testo: "κάρος δὲ πάντων· καὶ γὰρ ἐκ καλλιόνων λέκτρων…" },
                { numero: 214, testo: "κῆδος καθ' αὑτὸν τὸν σοφὸν κτᾶσθαι χρεών." },
            ]
        },
        {
            titolo: "Le Nuvole",
            autore: "Aristofane",
            dataCaricamento: "2023-08-20",
            frammenti: [
                { numero: 179, testo: "…ἔχεις, εὖ μοι δόσῃς δεσπότη, ἄνδρός Οἰνόμης…" },
                { numero: 180, testo: "Ὑγιαί" },
                { numero: 181, testo: "τὸν μὲν κίκλησκε Ζηνύν· ἐζήτησε γὰρ τόκοις…" },
                { numero: 212, testo: "εἰ νοῦς ἔνεστιν εἴ δὲ μή, τί δεῖ καλῆς γυναικός, εἴ μὴ τὰς χρείας χρηστὰς ἔχεις;" },
                { numero: 213, testo: "κάρος δὲ πάντων· καὶ γὰρ ἐκ καλλιόνων λέκτρων…" },
                { numero: 214, testo: "κῆδος καθ' αὑτὸν τὸν σοφὸν κτᾶσθαι χρεών." },
            ]
        }
    ];
});
