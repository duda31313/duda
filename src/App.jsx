import './styles.css'
import loginImage from './assets/loginimg.svg'

function Formulario() {
  return (
    <>
      <form className='formulario'>
        <div className='formulario-img'>
          <img src={loginImage} alt="" srcSet='' />
        </div>
        <label htmlFor="email">email</label>
        <input type="email" id="email"  required/>

        <label htmlFor="passaword">Senha</label>
        <input type="passaword" id="Senha" required />
        <MyButton />
      </form>
    </>
  )
}

function MyButton() {
  return (
    <button className='botao'>login</button>
  )
}

function App() {

  return (
    <>
      <h1>Olá mundo!</h1>
      <Formulario />
    </>
  )
}


export default App
