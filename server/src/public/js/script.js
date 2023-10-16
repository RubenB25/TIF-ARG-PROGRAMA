const contenedor = document.getElementById("container-row");
const btnCrear = document.getElementById("btn-new");
const myModal = new bootstrap.Modal(document.getElementById("myModal"));
const btnEdit = document.getElementById("btn-edit");
const form = document.getElementById("formulario");
const btnDelete = document.getElementById("btn-delete");
const btnSave = document.getElementById('btn-save');
const inputPosterI = document.getElementById('inputPoster');
const inputTitleI = document.getElementById('ititle');
let descriptionUpdate = document.getElementById('inputDescription').value;
let urlUpdate;
const btnLight = document.querySelector('[data-bs-theme="light"]');
const btnDark = document.querySelector('[data-bs-theme="dark"]');
let html = "";
let option = "";
let idForm = "";
const textareaElement = document.createElement("textarea");
textareaElement.className = "form-control";
textareaElement.id = "inputDescription";

const inputTitle = document.getElementById("inputTitle");
const inputTitleView = document.getElementById("inputTitleView");
const inputDescription = document.getElementById("inputDescription");
const inputPoster = document.getElementById("inputPoster");
let idToDelete = null;
let idArticle=null;
const inputPosterModal= document.getElementById("iposter");
const posterModal = document.getElementById("contenedor-img");
btnCrear.addEventListener("click", () => {
  option = "new";
  inputPosterModal.style.display = "block";
  btnSave.textContent = "Agregar";
  btnSave.style.display = "block";
  inputTitleI.style.display="block";
  btnDelete.style.display = "none";
  posterModal.style.display = "none";
  inputTitle.value = "";
  inputPoster.value = "";
  inputPoster.setAttribute('required','required');
  inputTitleView.style.display= "none";
  // Busca el elemento existente por su id
  const existingElement = document.getElementById("inputDescription");

  if (existingElement && existingElement.tagName.toLowerCase() == "p") {
    // Si el elemento existe y es una etiqueta 'p', crea un textarea
    const textareaElement = document.createElement("textarea");
    textareaElement.className = "form-control";
    textareaElement.id = "inputDescription";
    textareaElement.value = "";
    textareaElement.setAttribute('required','required')
    // Reemplaza el elemento 'p' existente con el textarea
    existingElement.parentNode.replaceChild(textareaElement, existingElement);
  } else if (existingElement.tagName.toLowerCase() === "textarea") {
    existingElement.value = "";

  }

  myModal.show();
});

document.addEventListener('click', (event) => {
  if (event.target.matches('#btn-view')) {
    
    const article = event.target.closest('.card');
    const pElement = document.getElementById("inputDescription");
    pElement.className = "form-control";
    pElement.id = "inputDescription";
    // Reemplazar pElement con textareaElement
    pElement.parentNode.replaceChild(inputDescription, pElement);
    const urlUpdate = article.querySelector('img').src;
    const descriptionEdit = article.querySelector('.card-body p.card-text').textContent;
    inputDescription.textContent = descriptionEdit;
    btnSave.style.display = "none";
    btnDelete.style.display = "none";
    inputTitleView.textContent = article.querySelector('.card-body h5.card-title').textContent.trim();
    inputPosterModal.style.display = "none";
    inputTitleView.style.display= "block";
    inputTitleI.style.display= "none";
    posterModal.style.display = "flex";
    const inputPosterClicked = document.getElementById("modalImage");
    inputPosterClicked.src = article.querySelector('img').src;
    myModal.show();
  }
});


//------------ BOTON GUARDAR ---------------//


document.addEventListener('click', (event) => {
  if (event.target.matches('#btn-save')) {
    inputTitle.value=document.getElementById('inputTitle').value;
    urlUpdate = document.getElementById('inputPoster').value;
    descriptionUpdate = document.getElementById('inputDescription').value;
    if (btnSave.textContent == "Agregar") {
      option = "new";
    } else {
      option = "edit";
    }
 
  }
});



//------------ BOTON BORRAR ---------------//


document.addEventListener('click', (event) => {
  if (event.target.matches('#btn-delete')) {
    fetch(`http://localhost:3000/api/tasks/${idForm}`, {
      method: 'DELETE'
    }).then(res => {
      if (res.ok) {
        const articleToDelete = document.querySelector(`[data-id="${idForm}"]`);
        articleToDelete.remove()
        alert("Entrada eliminada exitosamente.");
        myModal.hide();
        location.reload();
      }
    }).catch(err => {
      console.error(err)
    })
  }
})


//------------ BOTON EDITAR ---------------//


document.addEventListener("click", (event) => {
  if (event.target.matches("#btn-edit")) {
    const article = event.target.closest('.card'); 
    const idArticle = article.dataset.id;
    const descriptionEdit = article.querySelector('.card-body p.card-text').textContent;
    inputPosterModal.style.display = "block";
    inputTitleView.style.display= "none";
    const existingElement = document.getElementById("inputDescription");
    if (existingElement || existingElement.tagName.toLowerCase() === "p") {
      // Si el elemento inputDescription no existe o no es un párrafo, crea un textarea
      const textareaElement = document.createElement("textarea");
      
      textareaElement.className = "form-control";
      textareaElement.id = "inputDescription";
      textareaElement.setAttribute('required','required');
      textareaElement.value = descriptionEdit.trim();

      // Reemplaza el elemento existente con el textarea
      if (existingElement) {
        existingElement.parentNode.replaceChild(textareaElement, existingElement);
      } else {
        // Si el elemento no existe, agrega el textarea al modal
        const modalBody = document.querySelector("#myModal #modal-body");
        modalBody.appendChild(textareaElement);
      }
    } else inputDescription.value = descriptionEdit;
    const urlPosterEdit = article.querySelector('img').src;
    const titleEdit = article.querySelector('.card-body h5.card-title').textContent.trim();
    const inputPosterClicked = document.getElementById("modalImage");
    inputTitle.value = titleEdit;
    inputPosterClicked.style.width = "50";
    inputPosterClicked.src = urlPosterEdit;
    console.log(urlPosterEdit)
    btnSave.textContent = "Guardar cambios";
    btnSave.style.display = "block";
    btnDelete.style.display = "block";
    btnDelete.textContent = "Eliminar";
    inputPosterI.value = urlPosterEdit;
    posterModal.style.display = "flex";
    inputPosterI.style.display="block";
    inputTitleI.style.display= "block";
    inputPoster.setAttribute('required','required')
    idForm = idArticle;
    myModal.show();
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Encuentra todos los botones con el atributo data-bs-toggle="theme"
  const themeButtons = document.querySelectorAll('[data-bs-toggle="theme"]');

  // Escucha los clics en los botones y cambia el tema
  themeButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Elimina la clase "active" de todos los botones antes de agregarla al botón actual
      themeButtons.forEach(function (btn) {
        btn.classList.remove('active');
      });

      // Agrega la clase "active" al botón actual
      this.classList.add('active');

      const theme = this.getAttribute('data-bs-theme');
      document.documentElement.setAttribute('data-bs-theme', theme);
    });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // console.log("submit");

  if (option === "new") {
    const newTask = {
      title: inputTitle.value,
      description: descriptionUpdate,
      poster: urlUpdate,
    };

    fetch('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(res => {
      console.log(res)
      if (res.ok) {
        alert("Entrada agregada exitosamente.");
        myModal.hide();
        location.reload();
      }
    })
      .catch((err) => {
        console.error(err);
      });
  }

  if (option === "edit") {
    const newTask = {
      title: inputTitle.value,
      description: descriptionUpdate,
      poster: urlUpdate,
    };

    fetch(`http://localhost:3000/api/tasks/${idForm}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTask)
    }).then(res => {
      if (res.ok) {
        alert('Entrada editada exitosamente.')
        myModal.hide();
        location.reload();
      }
    })
  }
});

