const thisYear = (new Date()).getFullYear()

const initialState = {
   selectedCountry: {id: 0, country: "Все страны"},
   // selectedGenre: {id: 0, genre: "Все жанры"},
   genres: {
      list: [
         {id: 0, genre: "Все жанры"},
         {id: 1750, genre: "аниме"},
         {id: 22, genre: "биография"},
         {id: 3, genre: "боевик"},
         {id: 13, genre: "вестерн"},
         {id: 19, genre: "военный"},
         {id: 17, genre: "детектив"},
         {id: 456, genre: "детский"},
         {id: 12, genre: "документальный"},
         {id: 8, genre: "драма"},
         {id: 27, genre: "игра"},
         {id: 23, genre: "история"},
         {id: 6, genre: "комедия"},
         {id: 15, genre: "короткометражка"},
         {id: 16, genre: "криминал"},
         {id: 7, genre: "мелодрама"},
         {id: 14, genre: "мультфильм"},
         {id: 9, genre: "мюзикл"},
         {id: 10, genre: "приключения"},
         {id: 11, genre: "семейный"},
         {id: 24, genre: "спорт"},
         {id: 4, genre: "триллер"},
         {id: 1, genre: "ужасы"},
         {id: 2, genre: "фантастика"},
         {id: 18, genre: "фильм-нуар"},
         {id: 5, genre: "фэнтези"},
      ],
      selectedGenre: "Все жанры"
   },
   years: {
      marks: [
         {
            value: 1920,
            label: "1920"
         },
         {
            value: thisYear,
            label: `${thisYear}`
         }
      ],
      selectedYears: [1920, thisYear]
   },
   rating: {
      marks: [
         {
            value: 0,
            label: "0"
         },
         {
            value: 10,
            label: "10"
         }
      ],
      selectedRating: [0, 10]
   },
   filmsAPI: {
      shuffleListFilms: {},
      currentFilmNumber: 0
   }

}

export default initialState