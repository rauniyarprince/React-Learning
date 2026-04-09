import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <>
    <div id= 'right' className='h-full flex flex-nowrap  overflow-auto rounded-4xl gap-10 p-6 w-2/3'>

    {props.users.map(function(elem,idx){
               
               return <RightCard key={idx} id={elem.id} color={elem.color}img={elem.img} tag={elem.tag} intro={elem.intro}/>
    })}
    
    </div>
    </>
  )
}

export default RightContent