import React, { SVGProps } from 'react';

const SvgUsb = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect fill='currentColor' x={4} y={9} width={16} height={9} rx={2} />
				<path
					d='M7 3h10v6H7V3zm2 2v2h2V5H9zm4 0v2h2V5h-2zM10 18h4v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z'
					fill='currentColor'
					opacity={0.3}
				/>
			</g>
		</svg>
	);
};

export default SvgUsb;
