const lista = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  lista.push(nombre);
  actualizarLista();
  input.value = '';
  input.focus();
}

function actualizarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = '';

  lista.forEach((nombre, index) => {
    const li = document.createElement('li');
    li.textContent = `${index + 1}. ${nombre}`;
    ul.appendChild(li);
  });

  // Limpiar resultado anterior si se vuelve a agregar nombres
  document.getElementById('resultado').innerHTML = '';
}

function sortearAmigo() {
  if (lista.length === 0) {
    alert('Primero agrega al menos un nombre a la lista.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  const nombreSorteado = lista[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong> 🎉</li>`;
}
