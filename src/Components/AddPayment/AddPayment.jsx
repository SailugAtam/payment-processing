import React, { Component } from 'react';

class AddPayment extends Component{
	constructor(props){
		super(props);
		this.state={
			folio: '',
			receptor: '',
			descripcion: '',
			cantidad: ''
		}
	}

	onFolioChange = (event) => {
    	this.setState({folio: event.target.value});
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
    			this.props.onAdd(this.state);
    			this.props.onRouteChange('home');
    	}else{
    		alert('Complete todos los campos');
    	}
    }

    onCancel = () => {
    	this.props.onRouteChange('home');
    }

	render(){
		return (
			<div className='center'>
				<h1>Add Record</h1>
				<div className='input'>
					<p>Folio</p>
					<input type='text' onChange={this.onFolioChange} autoFocus />
				</div>
				<div className='input'>
					<p>Receptor</p>
					<input type='text' onChange={this.onReceptorChange} />
				</div>
				<div className='input'>
					<p>Descripcion</p>
					<input type='text' onChange={this.onDescChange} />
				</div>
				<div className='input'>
					<p>Cantidad</p>
					<input type='text' onChange={this.onCantidadChange} />
				</div>
				<div className='buttons'>
					<input className='btn' onClick={this.onSubmit} type='submit' value='Añadir' />
					<input className='btn' onClick={this.onCancel} type='submit' value='Cancelar' />
				</div>
			</div>
		)
	}
}

export default AddPayment;