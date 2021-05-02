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
        return this.type;
    }

}

class pokemonDetailClass extends pokemonClass {
    constructor (id, name,image, type, attack, pixelImage, baseExperience, weight) {
        super(id, name, image, type);
        this.attack=attack;
        this.pixelImage=pixelImage
        this.baseExperience=baseExperience
        this.weight=weight
    }
    getPokemonAttacks() {
        return this.attack;
    }
    getPixelImage() {
        return this.pixelImage;
    }
    getBaseExperience() {
        return this.baseExperience
    }
    getWeight () {
        return this.weight
    }
}

export {pokemonClass, pokemonDetailClass}