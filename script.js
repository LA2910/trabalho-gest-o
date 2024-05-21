document.addEventListener('DOMContentLoaded', () => {
    const editButtons = document.querySelectorAll('.edit');
    const modal = document.getElementById('editModal');
    const closeModal = document.querySelector('.close');
    const saveButton = document.getElementById('saveButton');
    const addButton = document.getElementById('addButton');

    let currentObra;

    function openEditModal(obra) {
        currentObra = obra;
        const imgSrc = obra.querySelector('img').src;
        const title = obra.querySelector('h2').textContent;
        const description = obra.querySelector('p:nth-of-type(1)').textContent;
        const location = obra.querySelector('p:nth-of-type(2)').textContent;

        document.getElementById('editImage').value = imgSrc;
        document.getElementById('editTitle').value = title;
        document.getElementById('editDescription').value = description;
        document.getElementById('editLocation').value = location;

        modal.style.display = 'block';
    }

    function addEditEventListeners() {
        document.querySelectorAll('.edit').forEach(button => {
            button.addEventListener('click', (event) => {
                const obra = event.target.closest('.obra');
                openEditModal(obra);
            });
        });
    }

    addEditEventListeners();

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    saveButton.addEventListener('click', () => {
        const newImgSrc = document.getElementById('editImage').value;
        const newTitle = document.getElementById('editTitle').value;
        const newDescription = document.getElementById('editDescription').value;
        const newLocation = document.getElementById('editLocation').value;

        currentObra.querySelector('img').src = newImgSrc;
        currentObra.querySelector('h2').textContent = newTitle;
        currentObra.querySelector('p:nth-of-type(1)').textContent = newDescription;
        currentObra.querySelector('p:nth-of-type(2)').textContent = newLocation;

        modal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    addButton.addEventListener('click', () => {
        const imgSrc = document.getElementById('addImage').value;
        const title = document.getElementById('addTitle').value;
        const description = document.getElementById('addDescription').value;
        const location = document.getElementById('addLocation').value;

        const newObra = document.createElement('div');
        newObra.classList.add('obra');
        newObra.innerHTML = `
            <img src="${imgSrc}" alt="${title}">
            <h2>${title}</h2>
            <p>${description}</p>
            <p>Local: ${location}</p>
            <button class="edit">editar</button>
        `;

        document.querySelector('.obras').appendChild(newObra);

        addEditEventListeners();

        // Limpa os campos após adicionar
        document.getElementById('addImage').value = '';
        document.getElementById('addTitle').value = '';
        document.getElementById('addDescription').value = '';
        document.getElementById('addLocation').value = '';
    });
});