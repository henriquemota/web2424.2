import React from 'react'
import { useParams } from 'react-router-dom'

const Page = () => {
	const { slug } = useParams()

	return <div>Page {slug}</div>
}

export default Page
