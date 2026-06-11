fetch('dati/analisi.json')
  .then(response => response.json())
  .then(dati => {

    const contenitore = document.getElementById('contenitore');

    dati.forEach(item => {

      const card = document.createElement('div');
      card.className = 'card';

      let contenutoDialoghi = `
        <h2>Pagina ${item.pagina}</h2>
      `;

      item.dialoghi.forEach(dialogo => {

        contenutoDialoghi += `
          <p>
            <strong class="${dialogo.personaggio}">
              ${dialogo.personaggio}:
            </strong>
            ${dialogo.frase}
          </p>
        `;

      });

      contenutoDialoghi += `
        <p><strong>Tratti:</strong> ${item.Tratti.join(', ')}</p>

        <button>Visualizza tavola </button>
      `;

      card.innerHTML = contenutoDialoghi;

      const button = card.querySelector('button');

      button.addEventListener('click', () => {

        document.getElementById('popup').classList.remove('hidden');

        document.getElementById('immaginePopup').src = item.immagine;

      });

      contenitore.appendChild(card);

    });

  });

document.getElementById('chiudi')
  .addEventListener('click', () => {

    document.getElementById('popup')
      .classList.add('hidden');

});