export default class superheroesDataSource{
    //Metodo abstracto para obtener todos los superheroes
    obtenerTodos(){
        throw new Error ('Este metodo debe ser implementado para la subclase');
    }
}