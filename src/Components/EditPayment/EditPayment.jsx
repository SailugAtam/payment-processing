import React, { Component } from 'react';

class EditPayment extends Component{
	constructor(props){
		super(props);
		const item = this.props.list.filter(item => item.folio === this.props.target);
		this.state={
			folio: item[0].folio,
			receptor: item[0].receptor,
			descripcion: item[0].descripcion,
			cantidad: item[0].cantidad
		}
	}

    onReceptorChange = (event) => {
    	this.setState({receptor: event.target.value});
    }

    onDescChange = (event) => {
    	this.setState({descripcion: event.target.value});
    }

    onCantidadChange = (event) => {
    	this.setState({cantidad: event.target.value});
    }

    onSubmit = () => {
    	if(this.state.folio && 
    		this.state.receptor &&
    		this.state.descripcion &&
    		this.state.cantidad){
    			this.props.onEdit(this.state);
    			this.props.onRouteChange('home');
    	}else{
    		alert('Complete todos los campos');
    	}
    }

    onCancel = () => {
    	this.props.onRouteChange('home');
    }

	render(){
		const { folio, receptor, descripcion, cantidad } = this.state; 
		return (
			<div className='center'>
				<h1>Edit Record</h1>
				<div className='input'>
					<p>Folio</p>
					<input type='text' value={folio} disabled />
				</div>
				<div className='input'>
					<p>Receptor</p>
					<input type='text' onChange={this.onReceptorChange} value={receptor} autoFocus />
				</div>
				<div className='input'>
					<p>Descripcion</p>
					<input type='text' onChange={this.onDescChange} value={descripcion} />
				</div>
				<div className='input'>
					<p>Cantidad</p>
					<input type='text' onChange={this.onCantidadChange} value={cantidad} />
				</div>
				<div className='buttons'>
					<input className='btn' onClick={this.onSubmit} type='submit' value='Guardar' />
					<input className='btn' onClick={this.onCancel} type='submit' value='Cancelar' />	
				</div>
			</div>
		)
	}
}

export default EditPayment;