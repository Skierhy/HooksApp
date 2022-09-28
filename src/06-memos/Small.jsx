import { memo } from 'react';

export const Small = memo(({ value }) => {
	console.log('Me volvi a llamar');
	return <small>{value}</small>;
});
