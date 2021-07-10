import { FaChartPie, FaHandHoldingUsd, FaChartLine } from 'react-icons/fa'
import { PieChart, Pie, Sector, Cell, LineChart, Line, YAxis, XAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import './ChartScreen.css'
import Data from './data'
import SimplePieChart from '../Charts/SimplePieChart'
import SimpleLineChart from '../Charts/SimpleLineChart'
const ChartScreen = () => {
	return (
		<div class="charts">
			
			<div className="charts-left">
				<div className="charts-left-title">
					<div>
						<h1>New Vs Returning  </h1>
						<p>From June to July</p>
					</div>
					<FaChartPie style={{ color: '#6666ff' }} size={65} />

				</div>
				<div className="line-chart" >
					<div className='chart-info'>
					</div>

					<SimplePieChart />
				</div>
			</div>

			<div className="charts-right">
				<div className="charts-right-title">
					<div>
						<h1>Stats Reports </h1>
						<p>Playa Vista, Califorina, USA </p>
			
					</div>
					<FaHandHoldingUsd style={{ color: '#ffcc33' }} size={65} />
				</div>

				<div className="charts-right-cards" >
					<div class='card1'>
						<h1>Income</h1>
						<p>$67,000</p>
					</div>

					<div class='card2'>
						<h1>Sales</h1>
						<p>137,000</p>
					</div>

					<div class='card3'>
						<h1>Users</h1>
						<p>2800</p>
					</div>

					<div class='card4'>
						<h1>Orders</h1>
						<p>1300</p>
					</div>
				</div>
			</div>

			<div className="charts-full">
				<div className="charts-left-title">
					<div>
						<h1>Product A Product B </h1>
						<p>Playa Vista, Califorina, USA </p>
					</div>
					<FaChartLine style={{ color: '#35a5ba' }} size={65} />
				</div>
				<div className="line-chart" >
					<SimpleLineChart />

				</div>
			</div>


		</div>
	)
}

export default ChartScreen