import React, { Component } from 'react';
import PaymentInfo from '../PaymentInfo/PaymentInfo';

class Payments extends Component{
	constructor(props) {
		super(props);
		this.state = {
			list: props.list
		};
	}

	handleDelete = folio => {
		this.props.onDelete(folio);
		this.setState(state => {
	      const list = state.list.filter(item => item.folio !== folio);

	      return {
	        list
	      };
	    });
	}

	handleEdit = (route, folio) => {
		this.props.onEditRoute(route, folio);
	}

	render() {
		const records = this.state.list;
		const { onRouteChange } = this.props;
		return (
			<div>
				<div>
					<div className="between">
						<h1>Payment Records</h1>
						<button onClick={() => onRouteChange('add')}>Add Payment</button>
					</div>
					<hr />
				</div>
				<div>
					{records.map(item => (
						<PaymentInfo 
							folio={item.folio} 
							receptor={item.receptor} 
							descripcion={item.descripcion}
							cantidad={item.cantidad}
							handleEdit={this.handleEdit}
							handleDelete={this.handleDelete} />
					))}
				</div>
			</div>
		);
	}
}

export default Payments;