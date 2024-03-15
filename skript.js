let form = document.querySelector('form');


form.addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    let nama = form.querySelector('input[name="nama"]').value;
    let pekerjaan = form.querySelector('input[name="pekerjaan"]').value;
    let hobby = form.querySelector('input[name="hobby"]').value;

   
    let hasilElemen = document.getElementById('hasil');
    hasilElemen.innerHTML = `
        <h2>Hasil Input:</h2>
        <p>Nama: ${nama}</p>
        <p>Pekerjaan: ${pekerjaan}</p>
        <p>Hobby: ${hobby}</p>
    `;
});
