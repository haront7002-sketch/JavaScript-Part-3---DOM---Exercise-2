let updateNameBtn = document.getElementById('updateNameBtn');
let profileName = document.getElementById('profileName');
let updateRoleBtn = document.getElementById('updateRoleBtn');
let profileRole = document.getElementById('profileRole');
let toggleStatusBtn = document.getElementById('toggleStatusBtn');
let statusIndicator = document.getElementById('statusIndicator');
let profileImage = document.getElementById('profileImage');
let changeImageBtn = document.getElementById('changeImageBtn');
let profileCard = document.getElementById('profileCard');

updateNameBtn.addEventListener('click', function () {
    let newNameInput = prompt('Enter a new name:', profileName.textContent);
    if (newNameInput && newNameInput.trim() !== '') {
        profileName.textContent = newNameInput.trim();
    }
});

updateRoleBtn.addEventListener('click', () => {
    let roleInput = prompt('Updated role:');
    if (roleInput && roleInput.trim() !== '') {
        profileRole.textContent = roleInput.trim();
    }
});

changeImageBtn.addEventListener('click', () => {
    let ImageInput = prompt('Enter new image URL:');
    if (ImageInput && ImageInput.trim() !== '') {
        profileImage.src = ImageInput.trim();
    }
});

toggleStatusBtn.addEventListener('click', () => {
    profileCard.classList.toggle('active-status');
    if (profileCard.classList.contains('active-status')) {
        statusIndicator.textContent = 'Status: Active';
        statusIndicator.style.color = 'green';
    } else {
        statusIndicator.textContent = 'Status: Inactive';
        statusIndicator.style.color = '#f778afff';
    }
});
