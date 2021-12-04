import {Box, createTheme, Grid} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/core/styles'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import GenreSelect from './components/GenreSelect'
import NameFilm from './components/NameFilm'
import CountrySelect from './components/CountrySelect'
import YearsSlider from './components/YearsSlider'
import Poster from './components/Poster'
import RandomFilmButton from './components/RandomFilmButton'
import RatingSlider from './components/RatingSlider'
import {useAppSelector} from './hooks/redux'
import {kinopoiskSlice} from './store/kinopoiskSlice'


const theme = createTheme({
    palette: {
        background: {
            default: '#c3ecff',
        }
    },
    spacing: 1
})

function App() {
    const {listFilms, currentPageResponse, status, error} = useAppSelector(state => state.kinopoisk)
    const {shuffle} = kinopoiskSlice.actions
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(shuffle())
    }, [dispatch])

    useEffect(() => {
        console.log(listFilms)
    }, [listFilms])

    useEffect(() => {
        console.log(`currentPageResponse: ${currentPageResponse}`)
    }, [currentPageResponse])

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '100vh',
                // Typescript похоже не поддерживает label
                // label: '1'
            }}>
                <div>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        // label: '2'
                    }}>
                        <Poster/>
                        <NameFilm/>
                        <RandomFilmButton/>
                        {status === 'loading' && <h2>Загружается ....</h2>}
                        {error && <h2>Ошибка: {error}</h2>}
                    </Box>
                    {/* Фильтры поиска*/}
                    <Grid container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '30px auto 0',
                        maxWidth: '1400px',
                    }}>
                        <Grid item container columnSpacing={25} rowSpacing={30} xs={12} sm={10} md={7} lg={6}>
                            <Grid item xs={6} md={6}>
                                <CountrySelect/>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <GenreSelect/>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <YearsSlider/>
                            </Grid>
                            <Grid item xs={6} md={6}>
                                <RatingSlider/>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </ThemeProvider>
    )
}

export default App