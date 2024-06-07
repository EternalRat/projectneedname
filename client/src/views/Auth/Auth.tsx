export const Auth = () => {
	return (
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<div
				style={{
					width: '25%',
					height: '40%',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: '#4e4e4e12',
				}}>
				<div
					style={{
						width: '100%',
						height: '10%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'center',
						alignSelf: 'center',
						color: 'white',
						backgroundColor: '#4e4e4e12',
						position: 'relative',
					}}>
					<div
						style={{
							right: '0%',
							width: '50%',
							height: '100%',
							position: 'absolute',
							zIndex: 2,
							backgroundColor: '#8080804b',
						}}
					/>
					<div
						style={{
							width: '50%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: 'pointer',
							borderRightColor: '#8080804b',
							borderBottom: '1px solid #8080804b',
						}}>
						<span style={{ fontSize: 18, fontWeight: 'bold' }}>
							Login
						</span>
					</div>
					<div
						style={{
							width: '50%',
							height: '100%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							cursor: 'pointer',
							borderBottom: '1px solid #8080804b',
						}}>
						<span style={{ fontSize: 18, fontWeight: 'bold' }}>
							Register
						</span>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	);
};
