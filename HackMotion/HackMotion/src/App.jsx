import { useEffect, useRef, useState } from 'react'
import './App.css'
import logo from './assets/Images/Logo.png'
import graph from './assets/Images/graph.png'
import progressBars from './assets/Images/progressBars.png'
import questions from './assets/Images/questions.png'
import drill from './assets/Videos/Impact-Drill.mp4'
import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";

function App() {
  const [breakPar, setBreakPar] = useState(0);
  const video = useRef(null);
  const [seconds, setSeconds] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showST, setShowST] = useState(false);
  const [showDT, setShowDT] = useState(false);
  const [showTF, setShowTF] = useState(false);
  const [videoWidth, setVideoWidth] = useState(0);

  useEffect(() => {
    if(seconds >= 5 && seconds < 14){
      setShowST(true);
      setShowDT(false);
      setShowTF(false);
    }
    else if(seconds >= 14 && seconds < 24){
      setShowST(false);
      setShowDT(true);
      setShowTF(false);
    }
    else if(seconds >= 24 && seconds < 34){
      setShowST(false);
      setShowDT(false);
      setShowTF(true);
    }else{
      setShowST(false);
      setShowDT(false);
      setShowTF(false);
    }
  }, [seconds]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth);
      });
    }
  }, [window.innerWidth]);
  
  useEffect(() => {
    console.log(screenWidth);
  }, [screenWidth]);

  useEffect(() => {
    // get param from url
    const url = new URL(window.location.href);
    const breakPar = url.searchParams.get('pr');
    setBreakPar(breakPar);
    if(breakPar == 0){
      setBreakPar("par");
    }

    if(video.current){
      video.current.addEventListener('timeupdate', () => {
        setSeconds(video.current.currentTime);
      });
      // set video width on video mount 
      video.current.addEventListener('loadedmetadata', () => {
        console.log(video.current.videoWidth);
      });
    }
  }, []);
  useEffect(() => {
  }, [video]);
  return (
    <div className='w-full min-h-full'>
      
      {
        screenWidth > 1400 ?
        <section className='w-full h-screen flex flex-col'>
          <div className='flex justify-start h-32'>
            <img src={logo} alt='logo' className='h-8 ml-12 mt-12' />
          </div>
          <div className='flex justify-center items-center h-full w-full'>
            <div className='w-10/12 h-full flex flex-row justify-around items-center'>
              <div className='flex flex-col items-start w-5/12'>
                <h2 className='text-4xl font-medium'>We have put together a swing<br />improvement solution to help you<br /><span className='text-indigo-500'>break {breakPar}</span></h2>
                <div className='flex flex-col gap-4 mt-8 w-full'>
                  <p className='text-lg'>Pack includes:</p>
                  <div className='border-t border-gray-300 h-32 py-4'>
                    <div className='border-l-4 border-indigo-500 h-28 flex flex-col justify-between px-4'>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Swing Analyzer -  HackMotion Core </h3>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Drills by coach Tyler Ferrell</h3>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Game improvement plan by HackMotion</h3>
                    </div>
                  </div>
                </div>
                <button className='bg-indigo-500 flex items-center gap-2 text-white px-8 py-4 mt-8 rounded-full'>Start Now <GoArrowRight className='font-bold inline-block text-xl' /></button>
              </div>
              <div className='flex flex-col justify-start items-center h-full w-6/12'>
                <img src={graph} alt='graph' className='w-10/12 h-auto' />
                <div className='flex flex-row justify-between mt-8 w-10/12' style={{height: "30%"}}>
                  <img src={progressBars} alt='progressBars' style={{width: "49%"}} />
                  <img src={questions} alt='progressBars' style={{width: "49%"}} />
                </div>
              </div>
            </div>
          </div>
        </section>
        :
        screenWidth > 700 ?
        <>
        <section className='w-full h-screen flex flex-col'>
          <div className='flex justify-start h-32'>
            <img src={logo} alt='logo' className='h-8 ml-12 mt-12' />
          </div>
          <div className='flex justify-center items-center h-full w-full'>
            <div className='w-10/12 h-full flex flex-row justify-around items-center'>
              <div className='flex flex-col items-start w-8/12'>
                <h2 className='text-4xl font-medium'>We have put together a swing<br />improvement solution to help you<br /><span className='text-indigo-500'>break {breakPar}</span></h2>
                <div className='flex flex-col gap-4 mt-8 w-full'>
                  <p className='text-lg'>Pack includes:</p>
                  <div className='border-t border-gray-300 h-32 py-4'>
                    <div className='border-l-4 border-indigo-500 h-28 flex flex-col justify-between px-4'>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Swing Analyzer -  HackMotion Core </h3>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Drills by coach Tyler Ferrell</h3>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Game improvement plan by HackMotion</h3>
                    </div>
                  </div>
                </div>
                <button className='bg-indigo-500 flex items-center gap-2 text-white px-8 py-4 mt-8 rounded-full'>Start Now <GoArrowRight className='font-bold inline-block text-xl' /></button>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-screen flex flex-col justify-center items-center'>
          <div className='w-10/12 h-full flex justify-around items-center flex-col'>
            <img src={graph} alt='graph' className='w-7/12 h-min' />
            <div className='flex flex-row justify-between mt-8 w-10/12' style={{height: "30%"}}>
              <img src={progressBars} alt='progressBars' style={{width: "49%"}} />
              <img src={questions} alt='progressBars' style={{width: "49%"}} />
            </div>
          </div>
        </section>
        </>
        :
        <>
        <section className='w-full h-min flex flex-col'>
          <div className='flex justify-center items-center h-full w-full my-10'>
            <div className='w-10/12 h-full flex flex-row justify-around items-center'>
              <div className='flex flex-col items-start w-full'>
                <h2 className='text-4xl font-medium'>We have put together a swing<br />improvement solution to help you<br /><span className='text-indigo-500'>break {breakPar}</span></h2>
                <div className='flex flex-col gap-4 mt-8 w-full'>
                  <p className='text-lg'>Pack includes:</p>
                  <div className='border-t border-gray-300 h-32 py-4'>
                    <div className='border-l-4 border-indigo-500 h-28 flex flex-col justify-between px-4'>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Swing Analyzer -  HackMotion Core </h3>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Drills by coach Tyler Ferrell</h3>
                      <h3 className={'font-medium ' + (screenWidth < 1000 ? 'text-l' : 'text-xl')}>Game improvement plan by HackMotion</h3>
                    </div>
                  </div>
                </div>
                <button className='bg-indigo-500 flex items-center gap-2 text-white px-8 py-4 mt-8 rounded-full'>Start Now <GoArrowRight className='font-bold inline-block text-xl' /></button>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full h-screen flex flex-col justify-center items-center'>
          <div className='w-10/12 h-full flex justify-around items-center flex-col gap-10'>
            <img src={graph} alt='graph' className='w-auto' style={{height: "30%"}} />
            <img src={progressBars} alt='progressBars' className='w-auto' style={{height: "30%"}} />
            <img src={questions} alt='progressBars' className='w-auto' style={{height: "30%"}} />
          </div>
        </section>
        </>
      }
      <section className='w-full h-screen items-center flex flex-col'>
        <div className={'h-full ' + (screenWidth < 650 ? 'w-full' : 'w-11/12')}>
          <div className={'w-full h-1/6 flex items-center border-b border-gray-300 ' + (screenWidth < 650 ? 'justify-center' : 'justify-start')}>
            <h1 className={'font-medium text-indigo-500 ' + (screenWidth < 650 ? 'text-l bold' : screenWidth < 1000 ? 'text-3xl' : 'text-6xl')}>The best solution for you: Impact Training Program</h1>
          </div>
          <div className={'w-full h-5/6 flex py-5 ' + (screenWidth < 1000 ? 'flex-col justify-around' : 'flex-row')}>
            <div className={'w-full h-full flex justify-around items-center ' + (screenWidth < 1400 ? 'flex-col' : 'flex-row')}>
              <div className={'flex ' + (screenWidth < 650 ? 'h-3/6 w-full flex-col items-center' : screenWidth < 1000 ? 'h-3/6 w-5/6 flex-col items-center justify-between' : screenWidth < 1400 ? 'h-5/6 w-4/6 flex-row items-center justify-between' : 'h-5/6 w-4/6 flex-row justify-between')}>
                <video className={(screenWidth < 1400 ? 'h-min w-2/3' : 'h-full w-min')} controls src={drill} ref={video} onChange={console.log} />
                <div className={'flex flex-col justify-between items-center ' + (screenWidth < 1000 ? 'h-1/6 w-full items-center' : 'h-full w-2/6 items-start')}>
                  <div className={'bg-white rounded-full flex justify-between items-center ' + (screenWidth < 1000 ? 'flex-row px-1 h-5 mt-3 w-2/3' : ' flex-col py-1 w-5 h-full')}>
                    {video.current && <div className={'bg-indigo-500 rounded-full ' + (screenWidth < 1000 ? 'h-1/2' : 'w-1/2')} style={(screenWidth < 1000 ? {width: (seconds / video.current.duration * 100 + '%')} : {height: (seconds / video.current.duration * 100 + '%')})}></div>}
                  </div>
                </div>
              </div>
              <div className={'flex flex-col items-start ' + (screenWidth < 1400 ? 'h-3/6 py-10 gap-10 w-2/3' : 'w-2/6 h-5/6 gap-10')}>
                <div className='w-full flex flex-col justify-start items-start overflow-hidden border-b border-gray-300 transition-all duration-500' style={screenWidth < 1100 ? {height: (showST ? '33%' : '12%')} : screenWidth < 1400 ? {height: (showST ? '33%' : '14%')} : {height: (showST ? '17%' : '7%')}}>
                  <h3 className={'font-medium hover:cursor-pointer text-indigo-500 ' + (screenWidth < 740 ? "text-xl" : screenWidth < 1200 ? "text-2xl" : screenWidth < 1440 ? "text-3xl" : "text-4xl")} onClick={() => setShowST(!showST)}><MdKeyboardArrowDown className={'inline-block text-indigo-500 ' + (showST ? 'rotate-180' : '')} /> Static top drill</h3>
                  <p className='text-lg'>Get a feel for the optimal wrist position at<br />Top of your swing</p>
                </div>
                <div className='w-full flex flex-col justify-start items-start overflow-hidden border-b border-gray-300 transition-all duration-500' style={screenWidth < 1100 ? {height: (showDT ? '33%' : '12%')} : screenWidth < 1400 ? {height: (showDT ? '33%' : '14%')} : {height: (showDT ? '15%' : '7%')}}>
                  <h3 className={'font-medium hover:cursor-pointer text-indigo-500 ' + (screenWidth < 740 ? "text-xl" : screenWidth < 1200 ? "text-2xl" : screenWidth < 1440 ? "text-3xl" : "text-4xl")} onClick={() => setShowDT(!showDT)}><MdKeyboardArrowDown className={'inline-block text-indigo-500 ' + (showDT ? 'rotate-180' : '')} /> Dynamic top drill</h3>
                  <p className='text-lg'>Dynamically train your wrist position at Top</p>
                </div>
                <div className='w-full flex flex-col justify-start items-start overflow-hidden border-b border-gray-300 transition-all duration-500' style={screenWidth < 1100 ? {height: (showTF ? '33%' : '12%')} : screenWidth < 1400 ? {height: (showTF ? '33%' : '14%')} : {height: (showTF ? '15%' : '7%')}}>
                  <h3 className={'font-medium hover:cursor-pointer text-indigo-500 ' + (screenWidth < 740 ? "text-xl" : screenWidth < 1200 ? "text-2xl" : screenWidth < 1440 ? "text-3xl" : "text-4xl")} onClick={() => setShowTF(!showTF)}><MdKeyboardArrowDown className={'inline-block text-indigo-500 ' + (showTF ? 'rotate-180' : '')} /> Top full swing challenge</h3>
                  <p className='text-lg'>Train your maximum power swing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className='w-full h-16 flex justify-center items-center text-white bg-black'>
        <p className='text-lg'>Copyright 2023 © HackMotion | All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App;
