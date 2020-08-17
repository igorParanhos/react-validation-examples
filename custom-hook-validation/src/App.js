import React from 'react';
import { useField } from './validation/hooks';
import { string } from './validation/validationRules';

function App() {
  const [name, setName, nameErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Preencha o campo corretamente.'},
    { fn: string.hasWordCountEqualTo(2), errorMessage: 'Digite seu nome completo'},
  ])
  const [age, setAge, ageErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Preencha o campo corretamente'},
    { fn: string.isDigit, errorMessage: 'Somente números'},
  ])
  const [address, setAddress, addressErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Preencha o campo corretamente'},
  ])
  const [phone, setPhone, phoneErrors] = useField('', [
    { fn: string.isNotEmpty, errorMessage: 'Preencha o campo corretamente'},
    { fn: string.isDigit, errorMessage: 'Somente números'},
  ])

  const onChange = changeFn => event => changeFn(event.currentTarget.value)

  return (
    <div className="base">
      <div className="App">
        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={onChange(setName)}
            placeholder="Name"/>
          {
            nameErrors &&
              <div className="error-message">{nameErrors[0]}</div>
          }
        </div>
        <div className="input-group">
          <input
            type="text"
            value={age}
            onChange={onChange(setAge)}
            placeholder="Age"/>
          {
            ageErrors &&
              <div className="error-message">{ageErrors[0]}</div>
          }
        </div>
        <div className="input-group">
          <input
            type="text"
            value={address}
            onChange={onChange(setAddress)}
            placeholder="Address"/>
          {
            addressErrors &&
              <div className="error-message">{addressErrors[0]}</div>
          }
        </div>
        <div className="input-group">
          <input
            type="text"
            value={phone}
            onChange={onChange(setPhone)}
            placeholder="Phone"/>
          {
            phoneErrors &&
              <div className="error-message">{phoneErrors[0]}</div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
