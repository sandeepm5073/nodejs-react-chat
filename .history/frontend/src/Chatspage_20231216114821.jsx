import { MultiChatSocket, useMultiChatLogic, MultiChatWindow } from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('1ef570fe-1717-4d27-9ebc-f4c449d6c70a', props.user.username, propes.user.secret)
    return <div style={{height: '100vh'}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...}style={{height: '100%'}}/>

    </div>
}

export default ChatsPage