import './style.css';

function createDropdown() {
    let dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';
    dropdownMenu.innerHTML = `
    <button>Select Options</button>
    <ul class='dropdown-list'>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        <li>Option 4</li>
        <li>Option 5</li>
        <li>Option 6</li>
    </ul>
    `;

    return dropdownMenu;
}

document.body.appendChild(createDropdown());