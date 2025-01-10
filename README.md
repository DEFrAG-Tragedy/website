# DEFrAG-Tragedy Web App

**DEFrAG-Tragedy** (Digital Edition of Fragmentary Ancient Greek Tragedy) è un'edizione critica digitale, dinamica e collaborativa dei frammenti della tragedia greca. Questa applicazione web, sviluppata con **Nuxt 3**, fornisce un viewer per sfogliare e ricercare i contenuti, oltre a un editor per la modifica e l'aggiunta di nuovi frammenti.

## 📜 Funzionalità

- **Viewer**: consente di sfogliare e ricercare i frammenti della tragedia greca.
- **Ricerca avanzata**: possibilità di filtrare i frammenti per autore, dramma e parole chiave.
- **Interfaccia moderna**: basata su Nuxt 3, garantisce un'esperienza fluida e reattiva.

## 🚀 Installazione

### Prerequisiti

Assicurati di avere installato le seguenti dipendenze:

- **Node.js** (versione 18 o successiva) ➜ [Scarica Node.js](https://nodejs.org/)
- **npm** (incluso con Node.js) o **yarn**

### Setup del progetto

1. Clona il repository:

   ```sh
   git clone git@github.com:DEFrAG-Tragedy/website.git defrag-tragedy-website
   cd defrag-tragedy-website
   ```

2. Installa le dipendenze:

   ```sh
   npm install
   ```
   **oppure**
   ```sh
   yarn install
   ```

3. Avvia l'ambiente di sviluppo:

   ```sh
   npm run dev
   ```
   **oppure**
   ```sh
   yarn dev
   ```

   L'app sarà disponibile all'indirizzo `http://localhost:3000/`.

## ⚙️ Configurazione

### Variabili d'ambiente

Crea un file `.env` nella root del progetto e imposta le seguenti variabili:

```env
API_BASE_URL="httpshttp://localhost:8080/exist/apps/DEFrAG"
NODE_ENV="development"
```

## 📦 Build & Deploy

Per generare una build ottimizzata:

```sh
npm run build
```
**oppure**
```sh
yarn build
```

Per avviare il server di produzione:

```sh
npm run start
```
**oppure**
```sh
yarn start
```

## 🤝 Contributi

Contributi, segnalazioni di bug e suggerimenti sono benvenuti! Per contribuire:

1. Fai un **fork** del repository
2. Crea un **branch** per la tua feature o bugfix (`git checkout -b feature/nuova-feature`)
3. Effettua il **commit** delle tue modifiche (`git commit -m "Aggiunta nuova feature"`)
4. Effettua il **push** su GitHub (`git push origin feature/nuova-feature`)
5. Apri una **Pull Request**

## 📄 Licenza

Questo progetto è distribuito sotto licenza **Creative Commons 4.0.**. Per maggiori dettagli, consulta il file [`LICENSE`](./LICENSE).

---

🚀 Sviluppato con ❤️ e Nuxt 3 per l'edizione digitale della tragedia greca frammentaria da [Giuseppe Speranza](https://giuseppesperanza.dev) e [Francesco Sessa](https://francescosessa.com).
