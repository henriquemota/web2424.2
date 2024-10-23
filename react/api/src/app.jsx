import axios from 'axios'
import { useState } from 'react'

function App() {
	const [cep, setCEP] = useState('')
	const [endereco, setEndereco] = useState(null)

	const buscaCEP = async () => {
		try {
			if (cep.length === 8) {
				const { data } = await axios.get('https://cep.awesomeapi.com.br/json/' + cep)
				setEndereco(data)
			} else setEndereco(null)
		} catch (error) {
			setEndereco(null)
		}
	}

	return (
		<main className='h-screen w-full flex flex-col gap-4 justify-center items-center'>
			<p className='text-3xl'>Informe seu CEP para buscar o endereço</p>
			<input
				type='tel'
				className='border border-blue-600 p-4 rounded-sm text-3xl'
				onChange={({ target: { value } }) => setCEP(value)}
				maxLength={8}
			/>
			<button
				onClick={buscaCEP}
				type='button'
				className='border border-gray-300 bg-slate-200 rounded-lg text-lg p-4 hover:bg-slate-300'
			>
				Pesquisar
			</button>
			{endereco && (
				<section className='p-4 border border-gray-400 bg-gray-200'>
					{endereco?.address}, {endereco?.district} - {endereco?.city} / {endereco?.state}
				</section>
			)}
		</main>
	)
}

export default App
