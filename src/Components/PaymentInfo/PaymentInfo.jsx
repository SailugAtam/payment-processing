import React from 'react';

import './PaymentInfo.css';

const PaymentInfo = ({folio, receptor, descripcion, cantidad, handleEdit, handleDelete}) => {
	return (
		<div className='box'>
			<p>{`${folio}`}</p>
			<p>{`${receptor}`}</p>
			<p>{`${descripcion}`}</p>
			<p>{`${cantidad}`}</p>
			<p className='btn' onClick={() => handleEdit('edit', folio)}>Edit</p>
			<p className='btn' onClick={() => handleDelete(folio)}>Delete</p>
		</div>
	);
}

export default PaymentInfo;