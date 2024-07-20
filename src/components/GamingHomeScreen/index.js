import {Component} from 'react'
import {Link} from 'react-router-dom'
import {GameCard} from './styledComponents'
import './index.css'

class GamingHomeScreen extends Component {
  render() {
    return (
      <>
        <div className="bg-container">
          <h1 className="main-heading">Games</h1>
          <div className="games-list-container">
            <Link to="/emojiGame">
              <GameCard>
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940215/Group_7471_ghhl2x.png"
                  className="emoji-game-image"
                  alt="emoji game"
                />
              </GameCard>
            </Link>
            <Link to="/memoryMatrixGame">
              <GameCard>
                <p className="game-name">Memory Matrix</p>
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940282/memory_umdawk.png"
                  className="emoji-game-image"
                  alt="emoji game"
                />
              </GameCard>
            </Link>
            <Link to="/rpsGame">
              <GameCard>
                <p className="game-name">ROCK PAPER SCISSOR</p>
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708940372/Group_7469_pgztk8.png"
                  className="emoji-game-image"
                  alt="emoji game"
                />
              </GameCard>
            </Link>
            <Link to="/CardFlipGame">
              <GameCard>
                <img
                  src="https://res.cloudinary.com/dv6ikqksk/image/upload/v1708931172/animals_cfihi9.png"
                  className="emoji-game-image"
                  alt="emoji game"
                />
              </GameCard>
            </Link>
          </div>
        </div>
      </>
    )
  }
}

export default GamingHomeScreen
