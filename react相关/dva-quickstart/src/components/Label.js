const Style = {
	default: {
		label: {
			fontSize: 16,
			color: 'red'
		},
		value: {
			background: 'red',
		}
	},
	userTheme: {
		label: {
			fontSize: 20,
			color: 'blue'
		},
		value: {
			background: 'red',
		}
	}
}


export default function Label(props){
	let name = props.name;
	const style = Style[props.style] || Style.default;
	return(<div>
			<label style={{...style.label}} name={name} >{name}</label>
			<div style={style.value}>
				{
					props.children
				}
			</div>
	</div>)
}
