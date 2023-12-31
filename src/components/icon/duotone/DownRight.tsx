import React, { SVGProps } from 'react';

const SvgDownRight = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg viewBox='0 0 24 24' className='svg-icon' {...props}>
			<g fill='none' fillRule='evenodd'>
				<path d='M0 0h24v24H0z' />
				<rect
					fill='currentColor'
					opacity={0.3}
					transform='rotate(135 11.646 12.146)'
					x={10.646}
					y={5.146}
					width={2}
					height={14}
					rx={1}
				/>
				<path
					d='M15.596 8.61a1 1 0 112 0v8.486a1 1 0 01-.956 1l-8.132.353a1 1 0 11-.087-1.998l7.175-.312V8.61z'
					fill='currentColor'
				/>
			</g>
		</svg>
	);
};

export default SvgDownRight;
