import './style.css';

function createDropdown(options) {
    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.innerHTML = `
    <button>Select Options</button>
    <ul class='dropdown-list'>
    </ul>
    `;

    const [selectBtn, dropdownList] = dropdownMenu.children;
    selectBtn.className = 'select-button';

    function toggleActiveClasses() {
        selectBtn.classList.toggle('active');
        dropdownList.classList.toggle('active');
    };

    options.forEach((option, index) => {
        const optionElement = document.createElement('li');
        optionElement.innerHTML = option;
        optionElement.setAttribute('value', `Option ${index}`);

        optionElement.addEventListener('click', (e) => {
            selectBtn.textContent = e.target.getAttribute('value');
            toggleActiveClasses();
        });

        dropdownList.appendChild(optionElement);
    })
    
    selectBtn.addEventListener('click', () => {
        toggleActiveClasses();
    })

    document.onclick = (e) => {
        if (!dropdownMenu.contains(e.target)) {
            selectBtn.classList.remove('active');
            dropdownList.classList.remove('active');
        };
    };

    return dropdownMenu;
}

document.body.appendChild(createDropdown(['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']));