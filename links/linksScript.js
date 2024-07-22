document.addEventListener('DOMContentLoaded', function() {
    const titleInput = document.getElementById('title-input');
    const urlInput = document.getElementById('url-input');
    const linksList = document.getElementById('links');
    const addButton = document.getElementById('link-button');

    loadLinks();

    addButton.addEventListener('click', function () {
        const title = titleInput.value.trim()
        const url = urlInput.value.trim

        if (title === '' || url === '') {
            alert('Por favor, ingresa tanto el título como la URL del enlace.');
            return;
        }

        const link = {
            title: title,
            url: url
        };

        saveLink(link);

        addLinkToList(link);

        titleInput.value = '';
        urlInput.value = '';

    })

    function saveLink(link) {
        let links = JSON.parse(localStorage.getItem('links')) || [];
        links.push(link);
        localStorage.setItem('links', JSON.stringify(links));
    }

    function loadLinks() {
        let links = JSON.parse(localStorage.getItem('links')) || [];
        links.forEach(function(link) {
            addLinkToList(link);
        });
    }


    function addLinkToList(link) {
        const listItem = document.createElement('li');
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.textContent = link.title;
        linkElement.target = '_blank';
        listItem.appendChild(linkElement);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function() {
            deleteLink(link);
            listItem.remove();
        });
        listItem.appendChild(deleteButton);

        linksList.appendChild(listItem);
    }

    function deleteLink(linkToDelete) {
        let links = JSON.parse(localStorage.getItem('links')) || [];
        links = links.filter(function(link) {
            return !(link.title === linkToDelete.title && link.url === linkToDelete.url);
        });
        localStorage.setItem('links', JSON.stringify(links));
    }

})