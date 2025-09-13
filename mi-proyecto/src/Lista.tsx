function Lista() {
    const mostrarItem = (item:string) => {
        console.log("Item seleccionado:", item);
    };

    return (
        <div>
        <button onClick={() => mostrarItem("Manzana")}>Manzana</button>
        <button onClick={() => mostrarItem("Pera")}>Pera</button>
        </div>
    );
}

export default Lista;