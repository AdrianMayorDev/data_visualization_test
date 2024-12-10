import styles from "./CovidGraph.module.scss";
import { ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Legend } from "recharts";
import { DailyData } from "@/types/covid";

const { covidGraphContainer } = styles;

const CovidGraph = ({ data, dateRange }: { data: DailyData; dateRange: [string, string] }) => {
	const filteredData = data.data
		.filter((entry) => {
			const date = new Date(entry.date).getTime();
			return date >= new Date(dateRange[0]).getTime() && date <= new Date(dateRange[1]).getTime();
		})
		.reverse();

	const formatXAxis = (tickItem: string) => {
		const date = new Date(tickItem);
		const month = date.toLocaleString("default", { month: "short" });
		const day = date.getDate();

		return `${month} ${day}`;
	};

	const formatYAxis = (tickItem: number) => {
		if (tickItem >= 1000000) {
			return `${(tickItem / 1000000).toFixed(1)}M`;
		} else if (tickItem >= 1000) {
			return `${(tickItem / 1000).toFixed(1)}K`;
		}
		return tickItem.toString();
	};

	return (
		<div className={covidGraphContainer}>
			<ResponsiveContainer width='100%' height={400}>
				<LineChart data={filteredData}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' tickFormatter={formatXAxis} />
					<YAxis tickFormatter={formatYAxis} />
					<Tooltip />
					<Legend />
					<Line type='monotone' dataKey='cases.total.value' stroke='#8884d8' dot={false} activeDot={{ r: 8 }} name='Cases' />
					<Line type='monotone' dataKey='testing.total.value' stroke='#82ca9d' dot={false} activeDot={{ r: 8 }} name='Tests' />
					<Line
						type='monotone'
						dataKey='outcomes.death.total.value'
						stroke='#ff7300'
						dot={false}
						activeDot={{ r: 8 }}
						name='Deaths'
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default CovidGraph;
