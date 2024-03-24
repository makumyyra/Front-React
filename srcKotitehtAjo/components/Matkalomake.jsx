import { useState } from 'react';

function Matkalomake() {
 
 
  return (
    <form>
      <label>Otsikko
        <input type='text' name='otsikko' value={ } onChange={ } /><br />
      </label>
      <label>Paikka
        <input type='text' name='paikka' value={ } onChange={ } /><br />
      </label>
      <label>Päivä
        <input type='text' name='paiva' value={ } onChange={ } /><br />
      </label>
      <label>Sää
        <input type='text' name='saa' value={ } onChange={ } /><br />
      </label>
      <label>Kuvaus
        <input type='text' name='kuvaus' value={ } onChange={ } /><br />
      </label>
      <input type='button' value='Lisää' onClick={ } />
    </form>
  );
}

export default Matkalomake;
