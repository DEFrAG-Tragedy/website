<script setup lang="ts">
import {
    useRoute
} from 'vue-router';
import {
    useSaveLastUpdatesValue
} from "~/composables/useLocalStorage";

import {
    useAppStore
} from "~/store/app";

const route = useRoute();
const filepath = route.query.document;
const teiBiblElements = ref([])


onMounted(() => {
    useSaveLastUpdatesValue(route.query.document!.toString())
})

//const documentName = computed(() => {return filepath ? parseDocumentName(filepath!.toString()) : "Dettaglio";});
var bibliographyElements =  [];
var fragmentElements = [];
var apparatusCriticusElements = [];
let mergedElements = {};
var combinedArray = [];

window.addEventListener('pb-update', function(event) {

  const root = event.detail.root;

  const bibliografia = document.getElementById('bibliografia');
  const fragment = document.getElementById('fragment');
  const apparatusCriticus = document.getElementById('apparatus-critico');

  const bibliografiaItems = bibliografia.shadowRoot.querySelectorAll('[id]');
  const fragmentItems = fragment.shadowRoot.querySelectorAll('[id]');
  const apparatusCriticusItems = apparatusCriticus.shadowRoot.querySelectorAll('[id]');
  
  bibliographyElements = Array.from(bibliografiaItems).map(item => {
      return {
          id: item.id,          // Get the id of the <li> element
          content: item.outerHTML // Get the content (HTML) inside the <li> element
      };
  });

  fragmentElements = Array.from(fragmentItems).map(item => {
      return {
          id: item.id,          // Get the id of the <li> element
          content: item.outerHTML // Get the content (HTML) inside the <li> element
      };
  });

  apparatusCriticusElements = Array.from(apparatusCriticusItems).map(item => {
      return {
          id: item.id,          // Get the id of the <li> element
          content: item.outerHTML // Get the content (HTML) inside the <li> element
      };
  });

  function mergeItem(item) {
      if (mergedElements[item.id]) {
          // Se l'elemento con lo stesso id esiste già, uniamo i contenuti
          mergedElements[item.id].content = item.content;
          mergedElements[item.id].children.push(item.content)
      } else {
          // Altrimenti lo aggiungiamo come nuovo elemento
          mergedElements[item.id] = { id: item.id, content: item.content, children: [item.content] };
      }
  }

    // Mappiamo entrambi gli array e inseriamo gli elementi nell'oggetto di raccolta
    bibliographyElements.forEach(item => mergeItem(item));
    fragmentElements.forEach(item => mergeItem(item));
    apparatusCriticusElements.forEach(item => mergeItem(item));

    // Convertiamo l'oggetto risultante in un array
    combinedArray.push(...Object.values(mergedElements));


  root.querySelectorAll('a').forEach((element: any) => {

    element.addEventListener('click', function(event) {
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        const href = target.getAttribute('href');
        if(href !== null){
          if (!href.startsWith('#')) {
            window.open(href, '_blank');
          }
        }
        var popover = document.getElementById('popover-template');
        const closeIcon = document.getElementById('close-popover');
        const popoverContent = document.getElementById('popover-content');

        if (popover.style.display === 'block') {
          popover.style.display = 'none';
        }
        if(href !== null){
          let eventId = href.replace('#', '')
          const foundObject = combinedArray.find(obj => obj.id.toLowerCase() === eventId.toLowerCase());
          if(foundObject && foundObject.hasOwnProperty('children')){
            // Calcolo delle coordinate dell'elemento cliccato
            const rect = element.getBoundingClientRect();
            const scrollTop = document.documentElement.scrollTop || window.scrollY;
            const scrollLeft = document.documentElement.scrollLeft || window.scrollX;

            // Posiziona il popover sopra l'elemento cliccato
            popover.style.top = (rect.top + scrollTop - popover.offsetHeight) + 'px';
            popover.style.left = (rect.left + scrollLeft) + 'px';
            popoverContent.innerHTML = '';  
            let children = [...new Set(foundObject.children)].map((item) => {
              const contieneLi = item.includes('</li>');
              if(contieneLi === false) {
                return '<li>' + item +'</li>';
              }
              return item;
            })
            popoverContent.innerHTML = children.join('');
            popover.style.display = 'block';
          }
        }
           // Rimuovi il popover cliccando l'icona di chiusura
          closeIcon.addEventListener('click', function() {
            popover.style.display = 'none';
          });
    });
  });
})
</script>

<template>
<section class="container p-5 mx-auto">
  <div id="popover-template" class="custom-popover" style="display: none;">
    <span id="close-popover" style="cursor: pointer; font-size: 14px; float: right;">&#10006;</span>
  <div id="popover-content"></div>
</div>

  <div class="bg-white p-[2rem]">
    <pb-progress subscribe="transcription"></pb-progress>
    <pb-document id="document1" :path="filepath!.toString().substring(1)" odd="annotations" view="single"></pb-document>
    <div class="flex flex-col  font-bold text-red mb-12">
      <div class="flex flex-col justify-start items-center">
        <div>
          <!-- Titolo -->
          <pb-view class="animated " src="document1" xpath="//teiHeader/fileDesc/titleStmt/title[not(@type) or @type='main']" odd="serafin" subscibe="transcription" emit="transcription"></pb-view>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-24">
      <div class="grid grid-cols-2 gap-24">
        <!-- Apparatus -->
        <div class="flex flex-col gap-12">
          <div>
            <pb-view id="fragment" class="animated" odd="teipublisher" src="document1" xpath="//text/body/div1[@type='fragment']" highlights="false" subscibe="transcription" emit="transcription"></pb-view>
          </div>
        </div>
        <!-- Transaltions -->
        <div>
          <pb-view class="animated" src="document1" xpath="//text/body/div1/div2[@type='translation']" odd="serafin" subscibe="transcription" emit="transcription"></pb-view>
        </div>
      </div>
      <div class="hs-accordion-group">
        <div class="hs-accordion" id="accordion-apparatus-critico">
          <button class="text-2xl hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none hs-accordion-active:text-black text-black-200 hover:text-black-400 focus:text-black-400" aria-expanded="false" aria-controls="accordion-apparatus-critico">
            <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg> Apparatus criticus</button>
          <div id="accordion-apparatus-critico" class="hidden hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="accordion-apparatus-critico">
            <pb-view id="apparatus-critico" class="animated" src="document1" xpath="//text/body/div1/div2[@type='apparatus']" highlights="false" subscibe="transcription" emit="transcription"></pb-view>
          </div>
        </div>

        <div class="hs-accordion" id="accordion-apparatus-fontium">
          <button class="text-2xl hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none hs-accordion-active:text-black text-black-200 hover:text-black-400 focus:text-black-400" aria-expanded="false" aria-controls="accordion-apparatus-fontium">
            <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg> Apparatus fontium </button>
          <div id="accordion-apparatus-fontium" class="hidden hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="accordion-apparatus-fontium">
            <pb-view id="apparatus-fontium" class="animated" src="document1" xpath="//text/body/div1/div2[@type='apparatus-fontium']" highlights="false" subscibe="transcription" emit="transcription"></pb-view>
          </div>
        </div>
        <div class="hs-accordion" id="accordion-commentary">
          <button class="text-2xl hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none hs-accordion-active:text-black text-black-200 hover:text-black-400 focus:text-black-400" aria-expanded="false" aria-controls="accordion-commentary">
            <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg> Commento </button>
            <div id="accordion-commentary" class="hidden hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="accordion-commentary">
              <pb-view id="commento" class="animated" src="document1" odd="teipublisher" xpath="//text/body/div1/div2[@type='commentary']" view="single" emit="transcription" subscibe="transcription"></pb-view>
            </div>
        </div>
        <div class="hs-accordion" id="accordion-bibliography">
          <button class="text-2xl hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none hs-accordion-active:text-black text-black-200 hover:text-black-400 focus:text-black-400" aria-expanded="false" aria-controls="accordion-bibliography">
            <svg class="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            <svg class="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
            </svg> Bibliografia </button>
          <div id="accordion-bibliography" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="accordion-bibliography">
            <pb-view id="bibliografia" class="animated" src="document1" odd="teipublisher" xpath="//text/back" view="single" emit="transcription" subscibe="transcription"></pb-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style  lang="scss">
.title {
  font-size: 1.5rem;
}
::part(content) {
  font-size: 1.5rem;
  .tei-title1 {
    font-size: 3rem;
  }
}

/* Aggiunta di padding per evitare sovrapposizioni */
body {
    padding: 1rem;
}

.custom-popover {
  background-color: #fff;
  color: #333;
  border: 1px solid #ccc;
  padding: 15px;
  position: absolute;
  z-index: 1000;
  max-width: 400px;
  min-width: 220px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px; /* Arrotonda gli angoli */
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(-10px); /* Inizia leggermente spostato */
  white-space: normal; /* Assicura che il testo si avvolga */
  word-wrap: break-word; /* Forza la rottura delle parole se troppo lunghe */
  overflow: hidden; /* Nasconde il contenuto che va oltre i bordi */
}

/* Mostra il popover con l'effetto */
.custom-popover[style*="display: block;"] {
  opacity: 1;
  transform: translateY(0); /* Torna alla posizione normale */
}

#close-popover {
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  color: #888; /* Colore più chiaro */
  transition: color 0.3s ease;
}

/* Cambia il colore al passaggio del mouse */
#close-popover:hover {
  color: #333; /* Colore più scuro al passaggio del mouse */
}

/* Tipografia del contenuto */
.custom-popover {
  font-family: 'Cardo', sans-serif; /* Font moderni */
  font-size: 14px;
  line-height: 1.5; /* Aumenta lo spazio tra le righe */
}

.custom-popover li {
  margin-bottom: 10px; /* Spazio tra gli elementi */
}

.custom-popover li div {
  display: inline-block; /* Assicura che il contenuto della lista rimanga in linea */
}

/* Evidenziazione in grassetto */
.tei-hi.bold {
  font-weight: bold;
  font-size: 16px; /* Aumenta la dimensione */
  color: #007BFF; /* Cambia colore per maggiore visibilità */
}

.tei-l {
  font-size: 14px;
  color: #555; /* Testo meno invadente */
}

/* Aggiunta del triangolo indicatore */
.custom-popover::before {
  content: '';
  position: absolute;
  top: -10px; /* Posizionalo sopra il popover */
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent #fff transparent;
}

.custom-popover::after {
  content: '';
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 12px 12px 12px;
  border-style: solid;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
}

</style>
