import { alunos } from './data'

function App() {
	return (
		<main className='p-4'>
			<h1>Lista de alunos</h1>
			<table className='border border-gray-600 w-full'>
				<thead>
					<tr className='border border-gray-600'>
						<th>Nome</th>
						<th>AV1</th>
						<th>AV2</th>
						<th>AV3</th>
					</tr>
				</thead>
				<tbody>
					{alunos.map((el, ix) => (
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
