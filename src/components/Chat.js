import React from 'react';

const Chat = (props) => {
    let content = [];
    props.text.split("").forEach((char, i)=>{
        content.push(char);
        if ((i+1) % 10 === 0) content.push(<br/>);
    });

    return (
        <div className="chatBox">
            {content}
        </div>
    )
}

export default Chat