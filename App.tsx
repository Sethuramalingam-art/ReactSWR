import { SWRConfig } from 'swr';
import Users from './Users';

const fetcher = (...args:any) => fetch(args).then((response)=>response.json());

function App() {
  return (
    <SWRConfig value={{fetcher}}>
      <Users />
    </SWRConfig>
  )
}

export default App
