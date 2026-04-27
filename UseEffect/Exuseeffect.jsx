import React, { useEffect } from 'react'
import { useState } from 'react'

const Exuseeffect = () => {
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  useEffect(() => { 
    aChanging()
    console.log("useEffect is running ") ;
   },[a]
)

  useEffect(() => { 
    bChanging()
    console.log("useEffect is running ") ;
   },[b]
)
  
      function aChanging(){
      console.log('A ki value change ho gai')
    }

        function bChanging(){
      console.log('A ki value change ho gai')
    }
  return (
    <>

<h1>a is :{ a}</h1>
<h1>b is :{ b}</h1>
<button onClick={() => seta(a+1)}>Change A
    </button>
    <button onClick={() => setb(b-1)}>Change B
    </button>
    </>
  )
}

export default Exuseeffect