import axios from 'axios';

let palvelin = 'http://localhost:8080/';

// Kirja functions
export const getKirjat = async () => {
  try {
    const response = await axios.get(palvelin + 'kirja/all');
    return response;
  } catch (error) {
    return { status: 500, message: 'Haku ei onnistunut: ' + error.message };
  }
}

export const addKirja = async (kirja) => {
  try {
    const formData = new FormData();
    Object.keys(kirja).forEach(key => formData.append(key, kirja[key]));

    const response = await axios.post(palvelin + 'kirja/add', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    return response;
  } catch (error) {
    return { status: 500, message: 'Lisäys ei onnistunut: ' + error.message };
  }
}

export const deleteKirja = async (id) => {
  try {
    const response = await axios.delete(palvelin + 'kirja/delete/' + id);
    return response;
  } catch (error) {
    return { status: error.status, message: 'Poisto ei onnistunut: ' + error.message };
  }
}

// Lukija functions
export const getLukijat = async () => {
  try {
    const response = await axios.get(palvelin + 'lukija/all');
    return response;
  } catch (error) {
    return { status: 500, message: 'Haku ei onnistunut: ' + error.message };
  }
}

export const addLukija = async (lukija) => {
  try {
    const response = await axios.post(palvelin + 'lukija/add', lukija, {
      headers: { 'Content-Type': 'application/json' }
    });

    return response;
  } catch (error) {
    return { status: 500, message: 'Lisäys ei onnistunut: ' + error.message };
  }
}

export const deleteLukija = async (id) => {
  try {
    const response = await axios.delete(palvelin + 'lukija/delete/' + id);
    return response;
  } catch (error) {
    return { status: error.status, message: 'Poisto ei onnistunut: ' + error.message };
  }
}


// import axios from 'axios';

// let palvelin = 'http://localhost:8080/';

// export const getKirjat = async () => {
//   try {
//     const response = await axios.get(palvelin + 'kirja/all');
//     return (response);
//   } catch (error) {
//     return ({ status: 500, message: 'Haku ei onnistunut: ' + error.message });
//   }
// }

// export const addKirja = async (kirja) => {
//   try {
//     /* Kun EI ole kuvaa
//     const response = await axios.post(palvelin + 'kirja/add', kirja, {
//       headers: {'Content-Type': 'application/json' }
//     });
//     */

//     // Kun ON kuva
//     const response = await axios.post(palvelin + 'kirja/add', kirja, {
//       headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
//     });

//     return (response);
//   } catch (error) {
//     return ({ status: 500, message: 'Lisäys ei onnistunut: ' + error.message });
//   }
// }

// export const deleteKirja = async (id) => {
//   try {
//     const response = await axios.delete(palvelin + 'kirja/delete/' + id);
//     return (response);
//   } catch (error) {
//     return ({ status: error.status, message: 'Poisto ei onnistunut: ' + error.message });
//   }
// }

