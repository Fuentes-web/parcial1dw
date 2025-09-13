function Boton() {
        const manejarClick = () => {
            alert("¡Hiciste clic en el botón!");
        };

        return <button onClick={manejarClick}>Haz clic</button>;
    }
    export default Boton;