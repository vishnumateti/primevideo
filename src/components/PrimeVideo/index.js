// Write your code here
import {Component} from 'react'
import MoviesSlider from '../MoviesSlider'
import './index.css'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    const comedyMovies = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )
    return (
      <div className="bg-container">
        <div>
          <img
            className="image-prime"
            alt="prime video"
            src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          />
        </div>
        <div className="movies-container">
          <h1 className="action-head">Action Movies</h1>
          <MoviesSlider movies={actionMovies} />
          <h1 className="action-head">Comedy Movies</h1>
          <MoviesSlider movies={comedyMovies} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo
