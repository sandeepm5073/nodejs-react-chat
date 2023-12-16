import { PrettyChatWindow } from 'react-chat-engine-pretty'
const ChatsPage = (props) => {
    return (
        <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId=''
        username={props.user.username}
        

        </div>
    )
}

export default ChatsPage