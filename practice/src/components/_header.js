

function Logo({name}){
    return(
        <div className="logo">
            <p>{name}</p>
        </div>
    );
}


function NavButton({name, link}){
    return(
        <li><a href={link}>{name}</a></li>
    )
}


export default function Header(){
    return (
        <header>
            <Logo name="Logo"/>
            <nav className="menu">
                <ol>
                    <NavButton name="HOME" link="#"/>
                    <NavButton name="ABOUT" link="#"/>
                    <NavButton name="CONTACT" link="#"/>
                </ol>
            </nav>
        </header>
    )
}