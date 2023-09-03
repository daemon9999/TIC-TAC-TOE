interface UserCardProps {
  nickname: string;
  sign: string;

  color: string;
}

const UserCard = ({ color, nickname, sign }: UserCardProps) => {
  return (
    <div className="text-white p-6 bg-slate-800 rounded-md flex flex-col gap-y-6">
      <h4 className="text-3xl font-medium ">{nickname}</h4>

      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2">
          <p className="text-xl">Color: </p>{" "}
          <span className={`w-full flex h-6 rounded-full `} style={{
            backgroundColor: color
          }}/>
        </div>

        <div className="flex items-center justify-between ">
          <p className="text-xl">Sign: </p>{" "}
          <span className="text-xl font-medium" style={{
            color: color
          }}>{sign.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
