import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
	iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
	iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
	shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const Mapa = ({ marcador = null }) => {
	// const position = [-3.71722, -38.5433] // Fortaleza, Ceará
	const [position, setPosition] = useState([-3.71722, -38.5433])
	const [mark, setMark] = useState()

	useEffect(() => {
		if (marcador) {
			setPosition([Number(marcador.lat), Number(marcador.lng)])
			setMark(marcador.endereco)
		} else {
			setPosition([-3.71722, -38.5433])
			setMark(null)
		}
	}, [marcador])

	return (
		<MapContainer center={position} zoom={13} className='h-screen' style={{ width: '100%' }}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>

			{mark && (
				<Marker position={position}>
					<Popup>{mark}</Popup>
				</Marker>
			)}
		</MapContainer>
	)
}

export default Mapa
