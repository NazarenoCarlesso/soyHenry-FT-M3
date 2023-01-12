'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise {
    constructor(executor) {
        if (typeof executor !== 'function') throw new TypeError('executor is not a function')
        this.executor = executor
        this._state = 'pending'
        this._value = undefined
        this._handlerGroups = []
        const callHandlers = (value) => {
            while (this._handlerGroups.length) {
                const { successCb, errorCb, downstreamPromise } = this._handlerGroups.shift()
                // if (this._state === 'fulfilled' && successCb) successCb(value)
                // if (this._state === 'rejected' && errorCb) errorCb(value)
                if (this._state === 'fulfilled') {
                    if (!successCb) downstreamPromise._internalResolve(value)
                    else {
                        try {
                            const result = successCb(value)

                            if (result instanceof $Promise) {
                                result
                                    .then(
                                        value => downstreamPromise._internalResolve(value),
                                        error => downstreamPromise._internalReject(error)
                                    )
                            }
                            else {
                                downstreamPromise._internalResolve(result)
                            }
                        } catch (error) {
                            downstreamPromise._internalReject(error)
                        }
                    }
                }
                if (this._state === 'rejected') {
                    if (!errorCb) downstreamPromise._internalReject(value)
                    else {
                        try {
                            const result = errorCb(value)

                            if (result instanceof $Promise) {
                                result
                                    .then(
                                        value => downstreamPromise._internalResolve(value),
                                        error => downstreamPromise._internalReject(error)
                                    )
                            }
                            else {
                                downstreamPromise._internalResolve(result)
                            }
                        } catch (error) {
                            downstreamPromise._internalReject(error)
                        }
                    }
                }
            }
        }
        this._internalResolve = (value) => {
            if (this._state === 'rejected') return null
            if (this._state === 'pending') this._value = value
            this._state = 'fulfilled'
            callHandlers(this._value)
        }
        this._internalReject = (value) => {
            if (this._state === 'fulfilled') return null
            if (this._state === 'pending') this._value = value
            this._state = 'rejected'
            callHandlers(this._value)
        }
        const resolve = (value) => {
            this._internalResolve(value)
        }
        const reject = (value) => {
            this._internalReject(value)
        }
        this.executor(resolve, reject)
        this.then = (success, error) => {
            const downstreamPromise = new $Promise(() => { })
            const handlerGroup = {
                successCb: typeof success === 'function' ? success : false,
                errorCb: typeof error === 'function' ? error : false,
                downstreamPromise
            }
            this._handlerGroups.push(handlerGroup)
            if (this._state !== 'pending') callHandlers(this._value)

            return downstreamPromise
        }
        this.catch = (error) => {
            return this.then(null, error)
        }
    }

    static resolve(value) {
        if (value instanceof $Promise) return value
        return new $Promise(function (resolve) { resolve(value) })
    }

    static all(values) {
        if (!Array.isArray(values)) throw new TypeError()
        console.log(values)
        const newArray = values.map(value => {
            if (value instanceof $Promise) {
                console.log(value._value)
                return value._value
            }
            else {
                return value
            }
        })
        return new $Promise(function (resolve) { resolve(newArray) })
    }
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
