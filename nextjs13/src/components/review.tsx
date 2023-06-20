import Image from 'next/image';

export default function Review({id}:{id:number}) {
    return (<div className="card content mx-auto my-2">
    <div className="flex space-x-4">
      <Image src={`/${id%9+1}.png`} alt={`Image ${id%9+1}`} width={'100'} height={'100'} />
      <p>
          He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
          <br/>
          <span className="underline">Score:</span> 5/5
      </p>
    </div>
  </div>)
}