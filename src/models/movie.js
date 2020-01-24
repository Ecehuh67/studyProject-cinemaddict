export default class Movie {
  constructor(data) {
    // console.log(data);
    this.id = data[`id`];
    this.comments = data[`comments`];
    // this.filmInfo = data[`film_info`];
    this.title = data[`film_info`][`title`];
    this.alternativeTitle = data[`film_info`][`alternative_title`];
    this.totalRating = data[`film_info`][`total_rating`];
    this.poster = data[`film_info`][`poster`];
    this.ageRating = data[`film_info`][`age_rating`];
    this.director = data[`film_info`][`director`];
    this.writers = data[`film_info`][`writers`];
    this.actors = data[`film_info`][`actors`];
    // this.release = data[`film_info`][`release`];
    this.dataRelease = data[`film_info`][`release`][`date`];
    this.countryRelease = data[`film_info`][`release`][`release_country`];
    this.runtime = data[`film_info`][`runtime`];
    this.genre = data[`film_info`][`genre`];
    this.description = data[`film_info`][`description`];
    // this.userDetails = data[`user_details`];
    this.personalRating = data[`user_details`][`personal_rating`];
    this.watchlist = Boolean(data[`user_details`][`watchlist`]);
    this.watched = Boolean(data[`user_details`][`already_watched`]);
    this.watchingDate = data[`user_details`][`watching_date`];
    this.favorite = Boolean(data[`user_details`][`favorite`]);
  }

  toRAW() {
    return ({
      'id': this.id,
      'comments': this.comments,
      'film_info': {
        'title': this.title,
        'alternative_title': this.alternativeTitle,
        'totalRating': this.totalRating,
        'poster': this.poster,
        'age_rating': this.ageRating,
        'director': this.director,
        'writers': this.writers,
        'actors': this.actors,
        'release': this.release,
        'date': this.dataRelease,
        'release_country': this.release_country,
        'runtime': this.runtime,
        'genre': this.genre,
        'description': this.description
      },
      'user_details': {
        'personal_rating': this.personalRating,
        'watchlist': this.watchlist,
        'already_watched': this.watched,
        'watching_date': this.watchingDate,
        'favorite': this.favorite
      }
    });
  }

  _getComments(cards, handler) {
    cards.map((card) => ({'id': card.id, 'comments': handler({url: `comments/${card.id}`})}));
  }

  static parseCard(data) {
    return new Movie(data);
  }

  static parseCards(data) {
    return data.map(Movie.parseCard);
  }

  static clone(data) {
    return new Movie(data.toRAW);
  }
}