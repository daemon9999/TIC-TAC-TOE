import UserCard from "./UserCard"

const GameTable = () => {


    const users = [
        {
            id: 1,
            nickname: 'User 1',
            sign: 'X',
            color: 'green',
        
        },
        {
            id: 2,
            nickname: 'User 2',
            sign: 'O',
            color: 'red',
        
        }
    ]


  return (
    <div className="p-10 space-y-10 w-full">
        <h2 className="text-5xl font-bold text-slate-800 ">TIC TAC TOE</h2>
       <div className="grid grid-cols-2 gap-7 w-full">
            {users.map(({color, nickname, id, sign} : Record<string, any>) =>  (
                <UserCard color={color} nickname={nickname} key={id} sign={sign}/>
            ))}
       </div>
    </div>
  )
}

export default GameTable