class Movie {
    constructor(title, year, imdbID, type, poster) {
        this.title = title;
        this.year = year;
        this.imdbID = imdbID;
        this.type = type;
        this.poster = poster;
    }

    getTypeToTag() {
        return `tag-${this.type.toLowerCase()}`;
    }

    static fromJson(res) {
        return new Movie(
            res['Title'],
            res['Year'],
            res['imdbID'],
            res['Type'],
            res['Poster'],
        );
    }
}