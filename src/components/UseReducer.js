import React, { useState, useEffect, useReducer } from "react";

const SEGURITY_CODE = 'react'

const UseReducer = ({ name })=> {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(()=> {
        if (state.loading){
            setTimeout(()=> {
                if (SEGURITY_CODE === state.value){
                    dispatch({ type: CONFIRM })
                } else {
                    dispatch({ type: ERROR })
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
                        dispatch({ type: CHANGE, payload: event.target.value })
                    }}
                />
                <button onClick={()=> dispatch({ type: CHECK })}
                >Comprobar</button>
            </div>
        )
    } else if (state.deleted && !state.confirmed){
        return (
            <>
                <p>¿Estas seguro que deseas eliminarlo?</p>
                <div>
                    <button onClick={()=> dispatch({ type: ACEPT })}>Aceptar</button>
                    <button onClick={()=> dispatch({ type: CANCEL })}>Cancelar</button>
                </div>
            </>
        )
    } else {
        return (
            <>
                <p>Eliminado exitosamente</p>
                <button onClick={()=> dispatch({ type: FINISH })}>Recuperar UseState</button>
            </>
        )
    }
}


const CONFIRM = 'CONFIRM'
const ERROR = 'ERROR'
const CHANGE = 'CHANGE'
const CHECK = 'CHECK'
const ACEPT = 'ACEPT'
const CANCEL = 'CANCEL'
const FINISH = 'FINISH'

const initialState = {
    value: '',
    loading: false,
    error: false,
    deleted: false,
    confirmed: false,
}

const reducer = (state, action) => {
    switch(action.type){
        case CONFIRM: 
            return { 
                ...state, 
                loading: false,
                deleted: true, 
            }
        case ERROR: 
            return { 
                ...state, 
                loading: false, 
                error: true 
            }
        case CHANGE: 
            return { 
                ...state, 
                value: action.payload
            }
        case CHECK:
            return { 
                ...state, 
                loading: true,
                error: false
            }
        case ACEPT:
            return {
                ...state,
                confirmed: true, 
            }
        case CANCEL:
            return {
                ...state,
                deleted: false,
            }
        case FINISH:
            return {
                ...state,
                deleted: false,
                confirmed: false,
                value: ''
            }
    }
}

export { UseReducer } 
