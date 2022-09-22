import React, { Component } from 'react';

class ClassState extends Component {
    render(){
        return (
            <div>
                <h2>ClassState</h2>
                <p>por favor, escribe el codigo de seguridad para comprobar que quieres eliminar</p>
                <input placeholder='segurity code' />
                <button>Comprobar</button>
            </div>
        );
    }
}
    

export { ClassState };