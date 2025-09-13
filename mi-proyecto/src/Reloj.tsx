import { useState, useEffect } from "react";

    function Reloj() {
        const [hora, setHora] = useState(new Date().toLocaleTimeString());

        useEffect(() => {
            const timer = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
            }, 1000);

            // Limpieza cuando el componente se desmonta
            return () => clearInterval(timer);
        }, []);

        return <h2>Hora actual: {hora}</h2>;
    }
    export default Reloj;