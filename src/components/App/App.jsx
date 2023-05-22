import FormComponent from '../Form/Form';
import Morph from '../Morph/Morph';

import './App.css';

function App() {

  return (
    <>
      <div className='container'>
        <div className='form_component'>
          <FormComponent />
        </div>
        <div className='morph_component'>
          <Morph />
        </div>
      </div>


    </>
  )
}

export default App
