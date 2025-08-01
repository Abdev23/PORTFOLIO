
import {
  RockIcon,
  PaperIcon,
  ScissorsIcon
} from '../../assets/icons';
import './Game.css';


const Game = () => {

  return (
    <div className='drawer-option game-option' id='game-option'>
      <div className='drawer-header'>
        <h3 className='drawer-title'>Play a simple game</h3>
      </div>

      <div className='drawer-body game-body'>
        <div className='game-screen'>
          <div className='game-score'>
            <span>You</span>
            <span id='player-score'>0</span>
          </div>
          <div className='game-result-area'>
            <p className='game-result-text' id='game-result-text'>
              Choose your move!
            </p>
          </div>
          <div className='game-score'>
            <span>Bot</span>
            <span id='bot-score'>0</span>
          </div>
        </div>

        <div className='game-choices'>
            <button className='game-choice-btn' data-choice='rock' aria-label='Choose Rock'>
              <RockIcon />
            </button>
            <button className='game-choice-btn' data-choice='paper' aria-label='Choose Paper'>
              <PaperIcon />
            </button>
            <button className='game-choice-btn' data-choice='scissors' aria-label='Choose Scissors'>
              <ScissorsIcon />
            </button>
        </div>
          
        <div className='game-controls'>
          <button className='game-reset-btn' id='game-reset-btn'>
            Reset Score
          </button>
        </div>
      </div>
    </div>
  );
};


export default Game;