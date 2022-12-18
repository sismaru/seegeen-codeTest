import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './Items';

const ProductList = () => {
	const articles = useSelector((state) => state.data);

	return (
		<ul>
			{articles?.map((v) => (
				<ProductItem key={v.seq} article={v} />
			))}
		</ul>
	);
};

export default ProductList;
