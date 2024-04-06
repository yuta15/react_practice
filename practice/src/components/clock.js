
export default function Clock(interval){
    let now, date
    function makeTime(){
        now = new Date();
        date = now.toLocaleTimeString();
        return date
    }    
    return (
        <>
            <h1 >{date}</h1>
        </>
    );
}