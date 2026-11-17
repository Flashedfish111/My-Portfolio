// 1. Gestione della finestra modale per i progetti
const modale = document.getElementById('modale-progetto');
const btnApriModale = document.querySelectorAll('.btn-apri-modale');
const btnChiudiModale = document.getElementById('btn-chiudi-modale');
const btnChiudiSecondario = document.getElementById('btn-chiudi-secondario');

const modaleTitolo = document.getElementById('modale-titolo');
const modaleCategoria = document.getElementById('modale-categoria');
const modaleDescrizione = document.getElementById('modale-descrizione');
const modaleLink = document.getElementById('modale-link');

btnApriModale.forEach(bottone => {
  bottone.addEventListener('click', () => {
    modaleTitolo.textContent = bottone.dataset.titolo;
    modaleCategoria.textContent = bottone.dataset.categoria;
    modaleDescrizione.textContent = bottone.dataset.descrizione;
    modaleLink.href = bottone.dataset.link;
    modale.classList.add('aperta');
  });
});

function chiudiModale() {
  modale.classList.remove('aperta');
}

btnChiudiModale.addEventListener('click', chiudiModale);
btnChiudiSecondario.addEventListener('click', chiudiModale);

// Chiude la modale se clicchi fuori dal riquadro
modale.addEventListener('click', (e) => {
  if (e.target === modale) {
    chiudiModale();
  }
});

// 2. Pulsante per copiare l'email negli appunti
const btnCopiaEmail = document.getElementById('btn-copia-email');
const messaggioCopia = document.getElementById('messaggio-copia');

btnCopiaEmail.addEventListener('click', () => {
  const email = btnCopiaEmail.dataset.email;
  navigator.clipboard.writeText(email).then(() => {
    messaggioCopia.classList.add('visibile');
    btnCopiaEmail.textContent = 'Email Copiata!';
    
    setTimeout(() => {
      messaggioCopia.classList.remove('visibile');
      btnCopiaEmail.textContent = 'Copia Email';
    }, 3000);
  });
});
