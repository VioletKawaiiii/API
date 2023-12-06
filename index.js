const mahasiswaNim = 1102020; // Replace with the actual nim
const updatedData = {
  nama: 'Ronaldo',
  gender: 'L',
  prodi: 'SI',
  alamat: 'Baros',
};

// Update data using PUT method
fetch(`http://localhost:3000/mahasiswa/${mahasiswaNim}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(updatedData),
})
  .then((response) => response.json())
  .then((data) => console.log('Update Result:', data))
  .catch((error) => console.error('Update Error:', error));

// Delete data using DELETE method
fetch(`http://localhost:3000/mahasiswa/`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => console.log('Delete Result:', data))
  .catch((error) => console.error('Delete Error:', error));

// Add new data using POST method
const newData = {
  nim: '20220040',
  nama: 'Haidar',
  gender: 'P',
  prodi: 'TI',
  alamat: 'Jl. Asmara',
};

fetch('http://localhost:3000/mahasiswa', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newData),
})
  .then((response) => response.json())
  .then((data) => console.log('Post Result:', data))
  .catch((error) => console.error('Post Error:', error));
