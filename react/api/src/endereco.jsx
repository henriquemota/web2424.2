const Endereco = ({ endereco }) => {
	return (
		<section className='p-4 border border-gray-400 bg-gray-200'>
			{endereco?.address}, {endereco?.district} - {endereco?.city} / {endereco?.state}
		</section>
	)
}

export default Endereco
