import * as ReactDOMClient from 'react-dom/client';
const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);
root.render(<h1>Тут главная страница</h1>);