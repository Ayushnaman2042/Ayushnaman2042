import React, { useState } from 'react';

function Tasklist() {
    const [task, setTask] = useState("");
    const [desc, setDesc] = useState("");
    const [maintask,setmaintask] = useState([]);

    const submithandler = (e) => {
        e.preventDefault();
        setmaintask([...maintask,{task,desc}]);
        setTask("");
        setDesc("");
    };
    const deletehandler = (i) => {
        let copytask = [...maintask];
        copytask.splice(i,1)
        setmaintask(copytask);
    }
    let rendertask = <h2>No task found please add some task !</h2>
    if(maintask.length > 0){
        rendertask = maintask.map((t,i)=>{
            return (
                <li key={i}>
                    <div className='flex flex-wrap justify-between'>
                    <h5 className='text-xl'>{t.task}</h5>
                    <h6 className='text-xl'>{t.desc}</h6>
                    <button className='bg-blue-700 text-white px-2 rounded-lg mb-2'
                    onClick={()=>{
                        deletehandler(i)
                    }}
                    >Delete</button>
                </div>
                </li>
            )
        })
    }
    return (
        <div>
            <form className='flex flex-wrap justify-evenly' onSubmit={submithandler}>
                <input
                    type="text"
                    placeholder='Enter your task'
                    className='border-zinc-900 border-2 px-2 py-2 mt-3 mx-3 rounded-lg'
                    value={task}
                    onChange={(e) => {
                        setTask(e.target.value);
                    }}
                />

                <input
                    type="text"
                    placeholder='Enter the description'
                    className='border-zinc-900 border-2 px-2 py-2 mt-3 mx-3 rounded-lg'
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value);
                    }}
                />
                <button className='bg-blue-600 text-white px-2 rounded-lg mt-2'>
                    <b>ADD TASK</b>
                </button>
            </form>
    
            <div className='bg-blue-300 p-6 mt-5'>
                {/* <h1><b>Here are your tasks</b></h1> */}
                <ul>
                    {rendertask}
                </ul>
            </div>
        </div>
    );
}

export default Tasklist;
