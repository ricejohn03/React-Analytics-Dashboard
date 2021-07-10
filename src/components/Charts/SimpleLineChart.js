import { LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Data from './data'


const SimpleLineChart = () => {
    return (
		<ResponsiveContainer width="99%" aspect={1.3}>
			<LineChart data={Data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="Product A" stroke="#0095FF" />
				<Line type="monotone" dataKey="Procuct B" stroke="#FF0000" />
			</LineChart>

		</ResponsiveContainer>
        )
}

export default SimpleLineChart