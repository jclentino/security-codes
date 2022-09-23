import React, { Component } from 'react';
import { Loading } from './Loading';

const SEGURITY_CODE = 'react fragment'

class ClassState extends Component {
    constructor(props){
        super(props)
        this.state = {
            loading: false,
            error: false,
            value: '',
            validate: false,
        }
    }
    
    UNSAFE_componentWillMount(){
        console.log('se va a montar')
    }

    componentDidMount(){
        console.log('se monto')
    }

    componentDidUpdate(){
        // this.setState({error: false})
        if (this.state.loading){
            setTimeout(()=> {
                if (SEGURITY_CODE === this.state.value){
                    this.setState({loading: false, validate: true})
                } else {
                    this.setState(() => ({loading: false, error: true}))
                }
            }, 2000)
        }
    }

    render(){
        return (
            <div>
                <h2>{this.props.name}</h2>
                <p>por favor, escribe el codigo de seguridad para comprobar que quieres eliminar</p>
                {this.state.error && (
                    <p className='error'>el codigo es incorrecto</p>
                )}

                {this.state.loading && (
                    <Loading />
                )}

                {this.state.validate && (
                    <p>correcto</p>
                )}

                <input 
                    placeholder='segurity code' 
                    value={this.state.value}
                    onChange={(event)=> {
                        this.setState(state => ({value: event.target.value, error: false, validate: false}))
                    }}
                />
                <button 
                    onClick={()=> this.setState(prevState => ({loading: true}))}
                >Comprobar</button>
            </div>
        );
    }
}
    

export { ClassState };