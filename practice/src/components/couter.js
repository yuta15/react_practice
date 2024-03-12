import { useState } from 'react';

export default function Counter() {
    const [count, setCount ] = useState(0);

    return (
        <div>
            <p>あなたのカウント数:{ count }</p>
            <button onClick={ () => setCount(count + 1) }>クリック</button>
        </div>
    )
}