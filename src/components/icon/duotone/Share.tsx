import React, { SVGProps } from 'react';

const SvgShare = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<path
					d='M15.123 19.011L7.838 14.82a3.996 3.996 0 001.024-1.774l7.236 4.202a3.993 3.993 0 00-.975 1.764zm-7.367-9.91l7.321-4.313c.14.698.461 1.33.913 1.846l-7.125 4.332A3.998 3.998 0 007.755 9.1z'
					fill='currentColor'
				/>
				<circle fill='currentColor' opacity={0.3} cx={19} cy={4} r={3} />
				<circle fill='currentColor' opacity={0.3} cx={19} cy={20} r={3} />
				<circle fill='currentColor' opacity={0.3} cx={5} cy={12} r={3} />
			</g>
		</svg>
	);
};

export default SvgShare;
