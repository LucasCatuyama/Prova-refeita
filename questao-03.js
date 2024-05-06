document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const people = document.getElementById('people').value.trim();
        const hour = document.getElementById('hour').value;
        const pizza = document.getElementById('pizza').value;

        if (!name || !phone || !people || hour === "" || pizza === "") {
            alert('Por favor, preencha todos os campos antes de submeter.');
        }
    });
});
