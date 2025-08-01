
import { SendMessageIcon } from '../../assets/icons';
import './ChatBot.css';


const Chatbot = () => {

  return (
    <div className='drawer-option chatbot-option' id='chatbot-option'>
      <div className='drawer-header'>
        <h3 className='drawer-title'>Ask me anything!</h3>
      </div>
      
      <div className='drawer-body' id='chatbot-body'>
        <div className='chat-messages' id='chat-messages'>
          <div className='message received'>
            Hello! How can I help you today?
          </div>
          <div className='message sent'>
            Yeah whatsup!
          </div>
          <div className='message received'>
            Hello! How can I help you today?
          </div>
          <div className='message sent'>
            Yeah whatsup!
          </div>
          <div className='message received'>
            Hello! How can I help you today?
          </div>
          <div className='message sent'>
            Yeah whatsup!
          </div>
        </div>
      </div>
      
      <div className='drawer-footer'>
        <form className='chat-form' id='chat-form'>
          <input id='chat-input'
                 type='text'
                 placeholder='Type your message...'
          />
          <button id='chat-submit-btn'
                  type='submit'
                  aria-label='Send Message'
          >
            <SendMessageIcon />
          </button>
        </form>
      </div>
    </div>
  );
};


export default Chatbot;