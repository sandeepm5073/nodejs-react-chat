import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('', props.user)
    return <>chats...</>
}

export default ChatsPage