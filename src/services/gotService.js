export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
    
        return await res.json();
    };
    async getAllCharacters() {
        const res = await this.getResourse('/characters?page=5&pageSize=10');
        return res.map(this._transformCharacter);
    };
    async getCharater(id) {
        const character =await this.getResourse(`/characters/${id}`);
        return this._transformCharacter(character);
    };

    async getAllBooks() {
        const books = await this.getResourse('/books');
        return books.map(this._transformBook);
    };
    async getBook(id) {
        const book = await this.getResourse(`/books/${id}`);
        return this._transformBook(book);
    };

    async getAllHouses() {
        const houses = await this.getResourse('/houses?page=5&pageSize=10');
        return houses.map(this._transformHouse);
    };
    async getHous(id) {
        const hous = await this.getResourse(`/houses/${id}`);
        return this._transformHouse(hous);
    }

    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }

    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }

    _transformBook(book) {
        return {
            name: book.name,
            numberOfPage: book.numberOfPage,
            publiser: book.publiser,
            released: book.released
        }
    }
}

