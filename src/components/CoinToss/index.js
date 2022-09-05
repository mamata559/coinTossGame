// Write your code here
import {Component} from 'react'
import './index.css'

const tossedHead = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tossedTail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imageUrl: tossedHead,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickCoinToss = () => {
    const {headsCount, tailsCount} = this.state

    const randomNumber = Math.floor(Math.random() * 2)
    let coinTossed
    let heads = headsCount
    let tails = tailsCount
    if (randomNumber === 0) {
      coinTossed = tossedHead
      heads += 1
    } else {
      coinTossed = tossedTail
      tails += 1
    }
    this.setState({
      imageUrl: coinTossed,
      headsCount: heads,
      tailsCount: tails,
    })
  }

  render() {
    const {imageUrl, headsCount, tailsCount} = this.state
    const total = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="game-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="coin-image" />
          <button
            type="button"
            className="coin-button"
            onClick={this.onClickCoinToss}
          >
            Toss Coin
          </button>

          <div className="count-container">
            <p className="count-value count-value1">Total:{total}</p>
            <p className="count-value">Heads:{headsCount}</p>
            <p className="count-value">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
