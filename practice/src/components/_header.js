import { useState } from 'react';


function HeaderButton({ value, onHeaderButtonClick }) {
    return (
        <button onClick={onHeaderButtonClick}>{value}</button>
    );
}


function Header({ action }) {
    function buttonClick(value) {
        action(value);
    }

    return (    
        <header>
            <p className='header'>First React App</p>
            <HeaderButton value="about" onHeaderButtonClick={() => buttonClick("about")}></HeaderButton>
            <HeaderButton value="Reference" onHeaderButtonClick={() => buttonClick("Reference")}></HeaderButton>
            <HeaderButton value="Community" onHeaderButtonClick={() => buttonClick("Community")}></HeaderButton>        
        </header>    
    );
}


export default function Result() {
    const [history, setHistory ] = useState([]);
    console.log(history)
    
    function clickAction(clickedValue) {
        let nextHistory = history.concat();
        if (nextHistory.length === 10) {
            nextHistory = nextHistory.splice(1);
            console.log("test:",nextHistory);
        }
        nextHistory.push(clickedValue);
        setHistory(nextHistory);
    }    

    const values = history.map((val, num) => {
        return (
            <p key={ num }>{num+1}:{ val }</p>
        )
    })


    return (
        <div>
            <Header action={clickAction}></Header>
            <div>
                { values }
            </div>
        </div>
    );
}