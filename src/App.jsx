import { useState } from 'react';
import { GrPowerCycle } from "react-icons/gr";
import { FaRegCopy } from "react-icons/fa6";
import './App.css'

function App() {

  const [input, setinput] = useState("xxx");
  const [range, setrange] = useState(3);
  const [withNums, setwithNums] = useState(true);
  const [withSpecialCharacters, setwithSpecialCharacters] = useState(true);

  const handleInput = (e) => {
    setinput(e.target.value);
    setrange(e.target.value.length);
  }
  const handleCopy = () => { 
    navigator.clipboard.writeText(input);
    alert(`${input} ...copied`);
   }
  const handleRange = (e) => {
    const newRange = Number(e.target.value); // Convert value to number
    setrange(newRange);
    let new_range = e.target.value;
    generatePassword(new_range, withNums, withSpecialCharacters);
  }
  const handleNumbersAllowed = () => {
    setwithNums(prev => !prev);
  }
  const handleSpecialCharactersAllowed = () => {
    setwithSpecialCharacters(prev => !prev);
  }

  const generatePassword = (range, withNums, withSpecialCharacters) => {
    let optionstring = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallcharacters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let specialcharacters = "!@#$%^&*()_+-={}|[]\\:;\"',.<>/?`~";
    let randomIndex = 0;
    let Password = "";

    if (withNums) { optionstring += numbers };
    optionstring += characters;
    if (withSpecialCharacters) { optionstring += specialcharacters };
    optionstring += smallcharacters;

    for (let i = 1; i <= range; i++) {
      randomIndex = Math.floor(Math.random() * optionstring.length);
      Password += optionstring[randomIndex];
    }
    setinput(Password);
  }





  return (
    <>
      <div className='bg-orange-600 h-screen new-amsterdam-regular flex justify-center items-center'>
        <div className="app">
          <h1 className='text-center text-[3rem] font-black'>Password Generator</h1>
          <div className='flex flex-col justify-center items-center  min-h-[60vh]'>
            <div className='bg-black  flex justify-center'>
              {/* input */}
              <input className='rounded-sm min-w-[40vw] pl-2 bg-gray-300' type="text" placeholder='psswd' value={input} onChange={handleInput} />
              {/* copy button */}
              <button name='ankit plz wait' className='text-white m-3 p-2 rounded-lg' onClick={handleCopy}><FaRegCopy /></button>
            </div>
            {/* options */}
            <div className=' min-w-full min-h-[20vh] flex flex-col items-center mt-6 p-2 gap-3 text-[2rem]'>
              <div>
                <button name='regenerate button' className='bg-black text-white p-2 rounded-full' onClick={() => { generatePassword(range, withNums, withSpecialCharacters) }} ><GrPowerCycle /></button>
              </div>
              <div>
                <label className='font-black p-2 m-2' htmlFor="psswdlength.value">{range}</label>
                <input type="range" id="psswdlength" name="psswdlength" min="3" max="120" value={range} onChange={(e) => { handleRange(e) }} />
              </div>
              <div>
                <label className='font-black p-2 m-2' htmlFor="Nums" >Numbers</label>
                <input className='size-[1rem]' type="checkbox" name="Nums" id="Nums" checked={withNums} onChange={handleNumbersAllowed} />
              </div>
              <div>
                <label className='font-black p-2 m-2' htmlFor="SplChar" >Special characters</label>
                <input  className='size-[1rem]' type="checkbox" name="SplChar" id="SplChar" checked={withSpecialCharacters} onChange={handleSpecialCharactersAllowed} />
              </div>
            </div>
            {/* options end */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
