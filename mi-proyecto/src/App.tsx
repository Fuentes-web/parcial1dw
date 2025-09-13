   import Contador from "./Contador";
   import Boton from "./Boton";
   import Lista from "./Lista";
   import Reloj from "./Reloj";
   interface SaludoProps {
        nombre: string;
        edad: number;
    }
    function Saludo({ nombre, edad }: SaludoProps) {
        return <h2>Hola {nombre}, tienes {edad} años</h2>;
    }
    function App() {
        return (
            <div>
            <Reloj/>
            <Lista/>
            <Boton/>
            <Contador/>
            <Saludo nombre="Luis" edad={30} />
            <Saludo nombre="Fernando" edad={25} />
            </div>
        );
    }
export default App;