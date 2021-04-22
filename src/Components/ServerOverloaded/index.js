import { useState } from 'react';
import asyncFns from './asyncFns';
import { v4 as uuidv4 } from 'uuid';
import './styles.css';

const ServerOverloaded = () => {
    const [data, setData] = useState({});

    const handleErr = async (delay, func) => {
        setTimeout(async () => {
            try {
                await func()
                    .then(res => setData(value => ({...value, [func.name]: [...value[func.name], res]})))
            } catch (err) {
                setData(value => ({...value, [func.name]: [...value[func.name], err]}))
                await handleErr(delay + 2000, func);
            }
        }, delay)
    };

    const handleAsync = async (funcs = asyncFns) => {
        for (let func of funcs) {
            try {
                await func()
                .then(res => {
                    setData(value => ({...value, [func.name]: [res]}))
                })
            } catch (err) {
                setData(value => ({...value, [func.name]: ['rejected']}))
                await handleErr(1000, func)
            }
        }

    };
    
    return (
        <div className="App">
            <div>
                <span>Effort Upload to Server</span>
            </div>
            <button onClick={() => handleAsync()}>Upload to server</button>
            <div class='upload_main'>
                {asyncFns.map(fn => {
                    return (
                        <div class='upload_server' key={uuidv4()}>
                            <span class='upload_funcion'>{fn.name}: </span>    
                            <span> { data[fn.name] && data[fn.name].join(' ,')} </span>  
                            <span style={{fontWeight: 'bold'}}> { data[fn.name] && data[fn.name].length && '.  Attempts: '} { data[fn.name] && data[fn.name].length && data[fn.name].length}</span>  
                        </div>
                    )
                })}     
            </div>
            <button onClick={() => setData({})}>Reset</button>
        </div>
    );
};

export default ServerOverloaded;