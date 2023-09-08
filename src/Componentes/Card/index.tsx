import './style.css'
function Card() {
    return(
        <div className="">
            <div className="container">
    <div className="container_terminal"></div>
    <div className="terminal_toolbar">
        <div className="butt">
            <button className="btn btn-color"></button>
            <button className="btn"></button>
            <button className="btn"></button>
        </div>
        <p className="user">johndoe@admin: ~</p>
    </div>
    <div className="terminal_body">
        <div className="terminal_promt">
            <span className="terminal_user">johndoe@admin:</span>
            <span className="terminal_location">~</span>
            <span className="terminal_bling">$</span>
            <span className="terminal_cursor"> Mi nombre es Vladimir Farrera Vera, un desarrollador web, me e enfocado en Frontend usando Javascript, Tyscript, HTML y CSS; asi mismo, e usado Framework como React para desarrollar aplicaciones web.

He completado tomado varios cursos en bootcamp y en mi tiempo libre e practicado como este portafolio hecho en React y otros proyectos que tengo en Github.

Estoy buscando oportunidades desafiantes para seguir creciendo como desarrollador web.</span>
        </div>
    </div>
</div>
        </div>
    );
}

export default Card;