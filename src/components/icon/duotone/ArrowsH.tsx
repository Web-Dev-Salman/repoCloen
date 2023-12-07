import React, { SVGProps } from 'react';

const SvgArrowsH = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' opacity={0.3} x={7} y={11} width={10} height={2} rx={1} />
				<path
					d='M15.293 6.707a1 1 0 011.414-1.414l6 6a1 1 0 01.03 1.383l-5.5 6a1 1 0 11-1.474-1.352l4.853-5.294-5.323-5.323zM8.707 17.293a1 1 0 11-1.414 1.414l-6-6a1 1 0 01-.03-1.383l5.5-6a1 1 0 111.474 1.352L3.384 11.97l5.323 5.323z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgArrowsH;
