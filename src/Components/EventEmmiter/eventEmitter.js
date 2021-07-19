class EventEmitter {
    constructor() {
      this._events = {}
    }
  
    on(name, listener) {
      if (!this._events[name]) {
        this._events[name] = []
        this._events[name].push(listener)
      }
    }
  
    removeListener(name, listenerToRemove) {
      if (!this._events[name]) {
        throw new Error(`Can not remove a listener. Event ${name} does not exist`)
      }
      const filterListeners = listener => listener !== listenerToRemove
  
      this._events[name] = this._events.filter(filterListeners)
    }
  
    emit(name, data) {
      if (!this._events[name]) {
        throw new Error(`Can not remove a listener. Event ${name} does not exist`)
      }
  
      const fireCallbacks = callback => callback(data)
  
      this._events[name].forEach(fireCallbacks)
    }
  
  }
  
  const testEmmiter = new EventEmitter();
  const handleTestEvent = data => console.log(`Event has been fired with data - ${data}`)
  
  testEmmiter.on('testEvent', handleTestEvent)
  
  testEmmiter.emit('testEvent', 'blabla')