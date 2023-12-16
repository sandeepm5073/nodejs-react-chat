import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='1ef570fe-1717-4d27-9ebc-f4c449d6c70a'
        username={props.user.username}
        secret={props.user.secret}
        style={{height: '100%'}}
        />
        </div>
    )
}

export default ChatsPage