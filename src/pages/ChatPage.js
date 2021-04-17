import React, { useState } from 'react';
import './ChatPage.css';

const ChatPage = ({location, history}) => {
    const name = location.state;
    const [message, setMessage] = useState([]);
    const userText=['안녕하세요', '샘플 데이터입니다', '반가워요', '날씨가 어때요?', '감사합니다', '좋은하루 되세요', '사랑해요ㅎ.ㅎ'];
    const [value, setValue] = useState('');
    const onChange = (event) => {
        setValue(event.target.value);
    };
    
    const sendFunc = () => {
        if(value === '')  return;
        let tok = false;
        let idx = 0;
        if(Math.floor(Math.random() * 2)){
            tok = true;
            idx = Math.floor(Math.random() * userText.length);
        }
        if(tok){
            setMessage([...message, {'isMine': true, 'text': value}, {'isMine': false, 'text': userText[idx]}]);
        }else{
            setMessage([...message, {'isMine': true, 'text': value}]);
        }
        setValue('');
    }

    return (
        <div className="container">
            <div className="header">
                {name}
            </div>
            <div className="chatBox">
                {message.map(item => {
                    return item['isMine'] ? <div style={{textAlign: 'right'}}><div className="mySendBox">{item['text']}</div></div> : <div className="userSendBox">{item['text']}</div>
                })}
            </div>
            <div className="inputBox">
                <textarea type="text" value={value} onChange={onChange} className="textBox"/>
                <button className={value.length === 0? "sendBox" : "sendTextingBox"} onClick={sendFunc}>전송</button>
            </div>
        </div>
    )
}
export default ChatPage;