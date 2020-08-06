import * as React from 'react';
import * as SocketIOClient from 'socket.io-client';

interface MessagesProps {
  title: string
}

interface Message {
  createdAt: string;
  text: string
}

interface MessageData {
  data: Message[]
}

const Messages: React.FunctionComponent<MessagesProps> = (props: MessagesProps) => {

  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<MessageData>({ data: [] });
  const [socket, setSocket] = React.useState<any>(null);

  React.useEffect((): void => {
    let socketClient: SocketIOClient.Socket = SocketIOClient('http://localhost:3000');
    socketClient.on('message', (results: Message[]) => {
      setMessages({ data: results });
    });
    setSocket(socketClient);
  }, []);

  const handleInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const { value } = event.currentTarget;
    setInput(value);
  }

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    const payload: Message = {
      createdAt: `${new Date()}`,
      text: input,
    }

    socket.emit('message', payload);
  }

  console.log(messages);
  return (
    <>
      <h2>{props.title}</h2>
      <ul>{messages.data.map((data: Message) => <li>{data.text}</li>)}</ul>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInput} />
        <button>Send</button>
      </form>
    </>
  );
}

export default Messages;