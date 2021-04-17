import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChatPage = ({ location, history }) => {
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    }
    return (
        <div>
            <h1>대화 상대를 입력해주세요</h1>
            <div>
              <input type="text" placeholder="이름" value={value} onChange={onChange} />
              <Link to={{pathname: "/chat", state: value}}>
                <button>채팅방 입장</button>  
              </Link>
            </div>
        </div>
    )
}

export default ChatPage;