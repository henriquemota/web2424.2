import { useState } from 'react'

function App() {
	const [dados, setDados] = useState({ peso: 0, altura: 0 })

	function calcularIMC() {
		const imc = dados.peso / Math.pow(dados.altura, 2)
		let result = ''
		if (imc < 16) result = 'magreza grave'
		else if (imc < 16.9) result = 'magreza moderada'
		else if (imc < 18.5) result = 'magreza leve'
		else if (imc < 24.9) result = 'peso ideal'
		else if (imc < 29.9) result = 'sobrepeso'
		else if (imc < 34.9) result = 'obesidade grau I'
		else if (imc < 39.9) result = 'obesidade grau II ou severa'
		else result = 'obesidade grau III ou mórbida'

		alert(`Seu IMC é de ${imc.toFixed(1)} - ${result}`)
	}

	return (
		<main>
			<h1 className='title'>Calculadora do IMC</h1>
			<div className='flex flex-col w-[200px]'>
				<label htmlFor='peso' className='label'>
					Informe seu peso
				</label>
				<input
					id='peso'
					type='text'
					className='textinput'
					onChange={({ target }) => setDados({ ...dados, peso: target.value ? Number(target.value) : 0 })}
				/>
			</div>
			<div className='flex flex-col w-[200px]'>
				<label htmlFor='altura' className='label'>
					Informe sua altura
				</label>
				<input
					id='altura'
					type='text'
					className='textinput'
					onChange={({ target }) => setDados({ ...dados, altura: target.value ? Number(target.value) : 0 })}
				/>
			</div>
			<button className='button' onClick={calcularIMC}>
				Calcular IMC
			</button>
			<div>{JSON.stringify(dados)}</div>
		</main>
	)
}

export default App
