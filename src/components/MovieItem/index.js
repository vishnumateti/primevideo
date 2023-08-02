// Write your code here
import {IoMdClose} from 'react-icons/io'
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'

import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={<img alt="thumbnail" src={thumbnailUrl} />}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            data-testid="closeButton"
            type="button"
            className="trigger-button"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <div>
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
