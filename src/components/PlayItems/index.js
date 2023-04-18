import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const PlayItems = props => {
  const {eachPlayList, playItemsList} = props
  const {id, name, genre, duration, imageUrl} = eachPlayList
  const onChangeListItems = () => {
    playItemsList(id)
  }
  return (
    <li key={eachPlayList.id} className="playlist">
      <img src={imageUrl} className="image" alt="track" />
      <div className="main-playlist">
        <div className="name-genre">
          <p className="name1">{name}</p>
          <p className="genre">{genre}</p>
        </div>
        <div className="duration-delete">
          <p className="duration">{duration}</p>
          <button
            type="button"
            className="button"
            onClick={onChangeListItems}
            testid="delete"
          >
            <AiOutlineDelete className="delete-icon" size={20} />
          </button>
        </div>
      </div>
    </li>
  )
}
export default PlayItems