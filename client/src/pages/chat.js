import React from 'react'
import { ChatEngine } from 'react-chat-engine';
function EventChat() {
	return (
        <div className='chat'>
		<ChatEngine
			projectID='de2df91d-4a02-4c22-9ec1-f1e0a4b91ecd'
			userName='nick'
			userSecret='nick123'
		/>
        </div>
	);

}


export default EventChat


