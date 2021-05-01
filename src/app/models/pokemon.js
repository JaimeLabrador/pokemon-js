class pokemonClass {
    constructor (id, name, image, type) {
        this.id = id;
        this.name=name;
        this.image=image;
        this.type=type;
    }
    getPokemonId(){
        return this.id;
    }
    getPokemonName(){
        return this.name;
    }
    getPokemonImage(){
        return this.image;
    }
    getPokemonType(){
        return this.type
    }
    setPokemonAlias(pokemonAlias) {
        this.name=pokemonAlias;
    }
}

class pokemonDetailClass extends pokemonClass {
    constructor (id, name,image, type, attacks) {
        super(id, name, image, type);
        this.attacks=attacks;
    }
    getPokemonAttacks() {
        return this.attacks;
    }
}

export {pokemonClass, pokemonDetailClass}