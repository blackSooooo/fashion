import React, { useState, useRef } from 'react';
import styles from './ChatPage.module.css';
import { Link } from 'react-router-dom';
import profile from '../logo.svg';

const ChatPage = ({location, history}) => {
    const name = location.state;
    const [messages, setMessages] = useState([]);
    const userTexts=['안녕하세요', '샘플 데이터입니다', '반가워요', '날씨가 어때요?', '감사합니다', '좋은하루 되세요', '사랑해요ㅎ.ㅎ'];
    const [typing, setTyping] = useState(false);
    const [fullScreen, setFullScreen] = useState(false);
    const inputRef = useRef();
    const onChangeInputMessage = e => {
        setTyping(e.target.value !== '');
    };
    const sendMessage = (e) => {
        e.preventDefault();
        if(inputRef.current.value === '')  return;
        Math.random() < 0.5 
            ? setMessages([...messages, {'isMine': true, 'text': inputRef.current.value}, {'isMine': false, 'text': userTexts[Math.floor(Math.random() * userTexts.length)]}])
            : setMessages([...messages, {'isMine': true, 'text': inputRef.current.value}])
        inputRef.current.value = '';
        setTyping(false);
    }
    const resizeScreen = () => {
        setFullScreen(!fullScreen);
    }

    return (
        <div style={{backgroundColor: 'rgb(225,225,225)'}}>
            <div className={`${styles.screen} ${fullScreen ? styles.big : styles.small}`}>
                <div className={styles.header}>
                    <div style={{paddingTop: 10}}> 
                        <div>
                            <Link to={{pathname: "/"}}>
                                <button className={`${styles.menu} ${styles.exit}`} />
                            </Link>
                            <button className={`${styles.menu} ${styles.size}`} onClick={resizeScreen}/>
                        </div>
                        <img src={profile} style={{width: 40, height: 40}}/>
                    </div>
                    <div style={{alignSelf: 'center'}}>{name}</div>
                </div>
                <div className={styles.chatBox}>
                    {messages.map(({isMine, text}) => {
                        return <div style={isMine===true ? {textAlign: 'right'} : {}}><div className={`${styles.sendBox} ${isMine === true
                        ? styles.myMessage : styles.userMessage}`}>{text}</div></div>})}
                </div>
                <div className={styles.inputBox}>
                    <form onSubmit={sendMessage}>
                        <input className={`${fullScreen ? styles.bigTextBox : styles.smallTextBox}`} onChange={onChangeInputMessage} ref={inputRef}/>
                        <input type="submit" className={`${styles.sendButton} ${typing ? styles.typing : null }`} value="전송"/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default ChatPage;