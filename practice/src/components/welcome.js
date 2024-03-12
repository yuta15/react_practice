import {useState} from 'react'

export default function Welcome() {
    const [ name, setName ] = useState('');

    function handleChange(e) {
        setName(e.target.value)        
    }

    function handleReset() {
        setName('');
    }

    return (
        <div>
            <form onSubmit={ e=> e.preventDefault()}>
                <input type="text" value={name} onChange={ handleChange }></input>
                <button type="submit" onClick={ handleReset }>リセット</button>
            </form>
            <h2>こんにちは、{ name }</h2>
        </div>
    );    
}