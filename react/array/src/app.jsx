import { useEffect, useState } from 'react'
import { alunos } from './data'

function App() {
	const [data, setData] = useState([])

	useEffect(() => {
		setData(alunos)
	}, [])

	return (
		<main className='p-4'>
			<h1 className=''>Lista de alunos</h1>

			<input
				className='p-2 border border-gray-300 rounded-lg m-1'
				type='search'
				placeholder='filtre seus dados aqui'
				onChange={({ target: { value } }) => {
					value ? setData(alunos.filter((m) => m.nome.includes(value))) : setData(alunos)
				}}
			/>

			<table className='border border-gray-600 w-full my-4'>
				<thead>
					<tr className='border border-gray-600'>
						<th>Nome</th>
						<th>AV1</th>
						<th>AV2</th>
						<th>AV3</th>
					</tr>
				</thead>
				<tbody>
					{data.map((el, ix) => (
						<tr key={ix} className='border border-gray-600'>
							<td>{el.nome}</td>
							<td className='text-center'>{el.av1.toFixed(1)}</td>
							<td className='text-center'>{el.av2.toFixed(1)}</td>
							<td className='text-center'>{el.av3.toFixed(1)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</main>
	)
}

export default App
