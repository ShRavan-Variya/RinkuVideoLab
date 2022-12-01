import React from 'react';
import styled from 'styled-components';
// Components
import PricingTable from '../Elements/PricingTable';

export default function Pricing() {
	return (
		<Wrapper id='pricing'>
			<div className='whiteBg'>
				<div className='container'>
					<HeaderInfo>
						<h1 className='font40 extraBold'>Check Our Pricing</h1>
						<p className='font13'>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut
							<br />
							labore et dolore magna aliquyam erat, sed diam voluptua.
						</p>
					</HeaderInfo>
					<TablesWrapper className='flexSpaceNull'>
						<TableBox className='shadow'>
							<PricingTable
								icon='roller'
								price='₹200/1'
								title='Basic'
								text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
								offers={[
									{ name: 'Reel - 30 sec.', checked: true },
									{ name: 'Teaser - 60-90 sec.', checked: false },
									{ name: 'Brand - 90-120 sec.', checked: false },
									{ name: 'Repeat', checked: false },
								]}
								action={() => alert('clicked')}
							/>
						</TableBox>
						<TableBox className='shadow'>
							<PricingTable
								icon='monitor'
								price='₹500/1'
								title='Smart'
								text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
								offers={[
									{ name: 'Reel - 30 sec.', checked: true },
									{ name: 'Teaser - 60-90 sec.', checked: true },
									{ name: 'Brand - 90-120 sec.', checked: false },
									{ name: '1 Repeat', checked: true },
								]}
								action={() => alert('clicked')}
							/>
						</TableBox>
						<TableBox className='shadow'>
							<PricingTable
								icon='browser'
								price='₹800/1'
								title='Business'
								text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.'
								offers={[
									{ name: 'Reel - 30 sec.', checked: true },
									{ name: 'Teaser - 60-90 sec.', checked: true },
									{ name: 'Brand - 90-120 sec.', checked: true },
									{ name: '2 Repeat', checked: true },
								]}
								action={() => alert('clicked')}
							/>
						</TableBox>
					</TablesWrapper>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
	padding: 50px 0;
`;
const HeaderInfo = styled.div`
	margin-bottom: 50px;
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const TablesWrapper = styled.div`
	@media (max-width: 860px) {
		flex-direction: column;
	}
`;
const TableBox = styled.div`
	width: 31%;
	@media (max-width: 860px) {
		width: 100%;
		max-width: 370px;
		margin: 0 auto;
	}
`;
