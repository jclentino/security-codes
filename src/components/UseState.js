import React, { useState, useEffect } from "react";

const SEGURITY_CODE = 'react'

const UseState = ({ name })=> {
    const [state, setState] = useState({
        value: '',
        loading: false,
        error: false,
        deleted: false,
        confirmed: false,
    })


    const onConfirm = ()=> {
        setState({ 
            ...state, 
            loading: false,
            deleted: true, 
        })
    }

    const onError = ()=> {
        setState({ 
            ...state, 
            loading: false, 
            error: true 
        })
    }

    const onChangeValue = (event) => {
        setState({ 
            ...state, 
            value: event.target.value
        })
    }

    const onComprobate = ()=> {
        setState({ 
            ...state, 
            loading: true,
            error: false
        })
    }

    const onAceptDelete = ()=> {
        setState({
            ...state,
            confirmed: true, 
        })
    }

    const onCancelDelete = ()=> {
        setState({
            ...state,
            deleted: false,
        })
    }

    const onFinishDelete = ()=> {
        setState({
            ...state,
            deleted: false,
            confirmed: false,
            value: ''
        })
    }

    useEffect(()=> {
        if (state.loading){
            setTimeout(()=> {
                if (SEGURITY_CODE === state.value){
                    onConfirm()
                } else {
                    onError()
                }
            }, 2000)
        }
    }, [state.loading])

    if (!state.deleted && !state.confirmed){
        return (
            <div>
                <h1>{name}</h1>
                <p>por favor, escribe el codigo de seguridad para comprobar que quieres eliminar</p>
                {state.loading && (
                    <p className="loading">loading ...</p>
                )}
                
                {state.error && (
                    <p className="error">el codigo es incorrecto</p>
                )}
    
                <input 
                    placeholder="segurity code" 
                    value={state.value} 
                    onChange={(event)=> {
                        onChangeValue(event)
                    }}
                />
                <button onClick={()=> onComprobate()}
                >Comprobar</button>
            </div>
        )
    } else if (state.deleted && !state.confirmed){
        return (
            <>
                <p>¿Estas seguro que deseas eliminarlo?</p>
                <div>
                    <button onClick={()=> onAceptDelete()}>Aceptar</button>
                    <button onClick={()=> onCancelDelete()}>Cancelar</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <p>Eliminado exitosamente</p>
                <button onClick={()=> onFinishDelete()}>Recuperar UseState</button>
            </>
        )
    }
}

export { UseState } 