import foto from '../imagenes/Foto.jpeg';
import turismo from '../imagenes/Turismo.png';
import tienda from '../imagenes/Tienda.png';
import tiendaJava from '../imagenes/java-proyect.png';
import To_Do from '../imagenes/To-Do.png'

function Contenido() {
    return(
        <>
            <div className="Contenido" id="sobre-mi">
                <div className="YO">
                    <img src={foto} alt="Foto" className="foto" />
                    <div className="SobreMi">  
                    <h1>Desarrollador Full stack</h1>
                    <p>
                    Soy un estudiante de la Licenciatura en Informática con conocimientos en Java , Python y bases de datos relacionales.
                    Me interesa desarrollar proyectos personales que me permitan aplicar mis conocimientos y adquirir experiencia práctica,
                    con el objetivo de incorporarme a mi primer empleo en el entorno IT y seguir creciendo junto a un equipo profesional.
                    </p>
                </div>
                </div>
            </div>
            <div className="Proyectos" id="Proyectos">
                <h2>Proyectos</h2>
                <ul>
                    <li>
                        <h3>Ecommerce con React</h3>
                        <a href="https://github.com/Lion11700/PreEntrega-Talento-Tech-React" target="_blank">Ver codigo</a>
                        <a href="https://preentrega-react.netlify.app/" target="_blank">Ver proyecto</a>
                        <img src={tienda} alt="Ecommerce con React" />
                    </li>
                    <li>
                        <h3>To Do List (aplicacion de escritorio)</h3>
                        <a href="https://github.com/Lion11700/To_Do_List" target="_blank">Ver codigo</a>
                        <img src={To_Do} alt="Pagina de turismo" />
                    </li>
                    <li>
                        <h3>Ecommerce Con Java + SpringBoot</h3>
                        <a href="https://github.com/Lion11700/Proyecto-Api-Back-Java-Talento-Tech" target="_blank">Ver codigo</a>
                        <img src={tiendaJava} alt="Ecommerce Con Java + SpringBoot" />
                    </li>
                    <li>
                        <h3>Pagina de turismo</h3>
                        <a href="https://github.com/Lion11700/Odin-project" target="_blank">Ver codigo</a>
                        <a href="https://lion11700.github.io/Odin-project/" target="_blank">Ver proyecto</a>
                        <img src={turismo} alt="Pagina de turismo" />
                    </li>
                </ul>
            </div>
        </>
    )
};

export default Contenido;