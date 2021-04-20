import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChatPage = ({ location, history }) => {
    const [name, setName] = useState('');
    const onChangeName = (e) => {
      setName(e.target.value);
    }
    return (
        <div>
            <h1>대화 상대를 입력해주세요</h1>
            <div>
              <form onSubmit={onChangeName}>
                <input type="text" placeholder="이름" onChange={onChangeName}/>
                <Link to={{pathname: "/chat", state: name}}>
                  <input type="submit" value="채팅방 입장"/>
                </Link>
              </form>
            </div>
        </div>
    )
}

export default ChatPage;