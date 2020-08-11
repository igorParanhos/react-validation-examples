import React from 'react';
import { useField } from './validation/hooks';
import { string } from './validation/validationRules';

function App() {
  const [name, setName, nameErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Valor vazio'},
    { fn: string.hasWordCountEqualTo(2), errorMessage: 'Menos de 2 palavras'},
  ])
  const [age, setAge, ageErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Valor vazio'},
    { fn: string.hasWordCountEqualTo(2), errorMessage: 'Menos de 2 palavras'},
  ])
  const [address, setAddress, addressErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Valor vazio'},
    { fn: string.hasWordCountEqualTo(2), errorMessage: 'Menos de 2 palavras'},
  ])
  const [phone, setPhone, phoneErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Valor vazio'},
    { fn: string.hasWordCountEqualTo(2), errorMessage: 'Menos de 2 palavras'},
  ])

  const onChange = changeFn => event => changeFn(event.currentTarget.value)

  return (
    <div className="App">
      <div>
        <input type="text" value={name} onChange={onChange(setName)} placeholder="Name"/>
        <div>{nameErrors && nameErrors[0]}</div>
      </div>
      <div>
        <input type="text" value={age} onChange={onChange(setAge)} placeholder="Age"/>
      </div>
      <div>
        <input type="text" value={address} onChange={onChange(setAddress)} placeholder="Address"/>
      </div>
      <div>
        <input type="text" value={phone} onChange={onChange(setPhone)} placeholder="Phone"/>
      </div>
      <div>
        <input type="text" placeholder="Comment"/>
      </div>
    </div>
  );
}

export default App;
