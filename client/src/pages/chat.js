import React from 'react'
import { ChatEngineWrapper, ChatSocket, ChatFeed } from 'react-chat-engine'


const EventChat = () => {
    return (
        <ChatEngineWrapper>
            <ChatSocket 
                projectID='de2df91d-4a02-4c22-9ec1-f1e0a4b91ecd'
                chatID='137918'
                chatAccessKey='family1'
                senderUsername='alexrogers'
            />

            <ChatFeed activeChat='123' /> 
        </ChatEngineWrapper>
    )
}

export default EventChat

//for connecting chatengine to our back end
var axios = require('axios');
var data = {
    "username": "bob_baker",
    "secret": "secret-123-jBj02",
    "email": "b_baker@mail.com",
    "first_name": "Bob",
    "last_name": "Baker",
    "custom_json": {"fav_game": "Candy Crush", "high_score": 2002}
}

var config = {
    method: 'post',
    url: 'https://api.chatengine.io/users/',
    headers: {
        'PRIVATE-KEY': '543b98f2-680f-47ad-ba4a-eabd7d0b0edd'
    },
    data : data
};

axios(config)
.then(function (response) {
    console.log(JSON.stringify(response.data));
})
.catch(function (error) {
    console.log(error);
});
