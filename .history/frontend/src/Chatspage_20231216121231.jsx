import { Pre } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '1ef570fe-1717-4d27-9ebc-f4c449d6c70a',
         props.user.username,
          props.user.secret
          )
    return (
    <div style={{height: '100vh'}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage