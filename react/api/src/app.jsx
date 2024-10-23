import axios from 'axios'
import React, { useState } from 'react'
import Endereco from './endereco'
import Mapa from './mapa'

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
			alert('Endereço não localizado')
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
			{endereco && <Endereco endereco={endereco} />}
			<Mapa
				marcador={{
					lat: endereco?.lat,
					lng: endereco?.lng,
					endereco: `${endereco?.address}, ${endereco?.district} - ${endereco?.city} / ${endereco?.state}`,
				}}
			/>
		</main>
	)
}

export default App
