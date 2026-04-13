import React, { useState } from 'react'

const Notes = () => {

  const [title, setTitle] = useState("")
  const [detailed, setDetailed] = useState("")
  const [task, setTask] = useState([])

  const submithandler = (e) => {
    e.preventDefault()

    const copyTask = [...task] // to make a copy of array
    copyTask.push({ title: title, detailed: detailed }) // add dynamic data in the array

    setTitle("") // for reset the form
    setDetailed("") //for reset the form
    setTask(copyTask) // stor the dynamic data 
  }

  // note delete func   
  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <>
      {/* ✅ NAVBAR */}
      <nav className='w-full bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md'>
        <h1 className='text-xl font-bold'>PrinceCodes</h1>
        <p className='text-sm text-gray-400'>Notes App</p>
      </nav>

      <div className='min-h-screen flex flex-col lg:flex-row bg-black text-white'>

        <form onSubmit={submithandler} className='flex flex-col w-full lg:w-1/2 p-5 sm:p-8 lg:p-10 gap-4 items-start'>
          <h1 className='text-2xl sm:text-3xl font-bold'>Add Notes</h1>

          <input
            type="text"
            placeholder='Enter Notes heading'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='p-3 sm:p-5 font-medium w-full py-2 border-2 rounded'
          />

          <textarea
            placeholder="Write Details"
            value={detailed}
            onChange={(e) => setDetailed(e.target.value)}
            className='p-3 sm:p-5 font-medium w-full py-2 h-28 sm:h-32 border-2 rounded'
          >
          </textarea>

          <button className='bg-white text-black font-medium w-full px-5 py-2 rounded active:bg-gray-300 active:scale-85'>
            Add notes
          </button>

        </form>

        <div className='w-full lg:w-1/2 gap-5 p-5 sm:p-8 lg:p-10 lg:border-l-2'>
          <h1 className='text-2xl sm:text-3xl font-bold'>Recent Notes</h1>

          <div className='flex flex-wrap items-start justify-center sm:justify-start gap-4 sm:gap-5 mt-5 h-full lg:h-[90%] overflow-auto'>

            {task.map(function (elem, idx) {

              return <div key={idx} className='flex flex-col h-48 sm:h-52 w-36 sm:w-40 rounded-xl 
bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")] 
bg-cover text-black pt-6 pb-4 px-4'>

                <div>
                  <h3 className='text-base sm:text-lg font-bold'><ul>{elem.title}</ul></h3>
                  <p className='mt-2 sm:mt-3 font-semibold text-gray-550 text-[10px] sm:text-xs'>{elem.detailed}</p>
                </div>

                <button onClick={() => { deleteNote(idx) }} className='mt-auto rounded-2xl py-1 w-full cursor-pointer active:scale-95 bg-red-600 text-white text-xs'>
                  Delete Note
                </button>

              </div>

            })}

          </div>
        </div>
      </div>

      {/* ✅ FOOTER */}
      <footer className='w-full bg-gray-900 text-gray-400 text-center py-3'>
        © 2026 PrinceCodes | All Rights Reserved
      </footer>
    </>
  )
}

export default Notes