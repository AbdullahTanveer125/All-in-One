import React, { useState } from 'react';

//import action generators
// import { increment, decrement, incrementByAmount } from '../Reducer/AnyName';




//import action generators from Slice
import { increment, decrement, incrementByAmount, reset } from '../Slices/sliceName';




import { useDispatch, useSelector } from 'react-redux';//use for import global state
//useSelector is use to access global state in components

function Counter() {

    const amount = useSelector(state => state.amountName.value)
    const dispatch = useDispatch()// use to dispatch the action


    // const [amount, setAmount] = useState(3);
    const [customIncrement, setCustomIncrement] = useState(5);
    const [isPulsing, setIsPulsing] = useState(false);





    const handleIncrement = () => {
        // setAmount(prev => prev + 1);
        dispatch(increment())
        animateButton();
    };

    const handleDecrement = () => {
        // setAmount(prev => (prev > 0 ? prev - 1 : 0));
        dispatch(decrement())
        animateButton();
    };

    const handleCustomIncrement = () => {
        // setAmount(prev => prev + customIncrement);
        dispatch(incrementByAmount(customIncrement))
        animateButton();
    };

    const handleReset = () => {
        // setAmount(0);
        dispatch(reset())
        animateButton();
    };

    const animateButton = () => {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 300);
    };

    // return (
    //     <div className='flex flex-col justify-center items-center gap-10 min-h-screen bg-gradient-to-br from-slate-800 to-slate-900 p-4'>
    //         <div className='text-center'>
    //             <h1 className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2'>
    //                 Interactive Counter
    //             </h1>
    //             <p className='text-slate-300'>Click the buttons to change the value</p>
    //         </div>

    //         <div className='flex flex-col justify-center items-center gap-6 bg-slate-700 p-8 rounded-xl shadow-2xl border border-slate-600 w-full max-w-md'>
    //             <div className={`text-5xl font-bold mb-4 transition-all duration-200 ${isPulsing ? 'scale-110' : 'scale-100'} ${amount >= 10 ? 'text-green-400' : 'text-blue-400'}`}>
    //                 {amount}
    //             </div>

    //             <div className='flex flex-col gap-4 w-full'>
    //                 <button
    //                     className='px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md'
    //                     onClick={handleIncrement}
    //                 >
    //                     Increment (+1)
    //                 </button>
    //                 <button
    //                     className='px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md'
    //                     onClick={handleDecrement}
    //                 >
    //                     Decrement (-1)
    //                 </button>

    //                 <div className='flex gap-2'>
    //                     <input
    //                         type="number"
    //                         value={customIncrement}
    //                         onChange={(e) => setCustomIncrement(Number(e.target.value) || 0)}
    //                         className='flex-1 px-4 py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
    //                         min="1"
    //                     />
    //                     <button
    //                         className='px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md whitespace-nowrap'
    //                         onClick={handleCustomIncrement}
    //                     >
    //                         Add {customIncrement}
    //                     </button>
    //                 </div>

    //                 <button
    //                     className='px-6 py-3 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md mt-4'
    //                     onClick={handleReset}
    //                 >
    //                     Reset Counter
    //                 </button>
    //             </div>
    //         </div>

    //         <div className='text-slate-400 text-sm mt-4'>
    //             Current value: <span className='font-bold'>{amount}</span>
    //         </div>
    //     </div>
    // );








    return (
        <div className='flex flex-col justify-center items-center gap-6 sm:gap-8 min-h-screen p-4 sm:p-6'>
            <div className='text-center'>
                <h1 className='text-2xl xs:text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-1 sm:mb-2'>
                    Interactive Counter
                </h1>
                <p className='text-sm sm:text-base'>Click the buttons to change the value</p>
            </div>

            <div className='flex flex-col justify-center items-center gap-4 sm:gap-6 bg-slate-700 p-4 sm:p-6 md:p-8 rounded-xl shadow-2xl border border-slate-600 w-full max-w-xs xs:max-w-sm sm:max-w-md'>
                <div className={`text-4xl xs:text-5xl font-bold mb-2 sm:mb-4 transition-all duration-200 ${isPulsing ? 'scale-110' : 'scale-100'} ${amount >= 10 ? 'text-green-400' : 'text-blue-400'}`}>
                    {amount}
                </div>

                <div className='flex flex-col gap-3 sm:gap-4 w-full'>
                    <button
                        className='px-4 py-2 sm:px-6 sm:py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium sm:font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md text-sm sm:text-base'
                        onClick={handleIncrement}
                    >
                        Increment (+1)
                    </button>
                    <button
                        className='px-4 py-2 sm:px-6 sm:py-3 bg-red-500 hover:bg-red-600 text-white font-medium sm:font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md text-sm sm:text-base'
                        onClick={handleDecrement}
                    >
                        Decrement (-1)
                    </button>

                    <div className='flex flex-col xs:flex-row gap-2'>
                        <input
                            type="number"
                            value={customIncrement}
                            onChange={(e) => setCustomIncrement(Number(e.target.value) || 0)}
                            className='flex-1 px-3 py-1 sm:px-4 sm:py-2 bg-slate-600 text-white rounded-lg border border-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base'
                            min="1"
                        />
                        <button
                            className='px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium sm:font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md whitespace-nowrap text-sm sm:text-base'
                            onClick={handleCustomIncrement}
                        >
                            Add {customIncrement}
                        </button>
                    </div>

                    <button
                        className='px-4 py-2 sm:px-6 sm:py-3 bg-slate-500 hover:bg-slate-600 text-white font-medium sm:font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md mt-2 sm:mt-4 text-sm sm:text-base'
                        onClick={handleReset}
                    >
                        Reset Counter
                    </button>
                </div>
            </div>

            <div className='text-xs sm:text-sm mt-2 sm:mt-4'>
                Current value: <span className='font-bold'>{amount}</span>
            </div>
        </div>
    );
}

export default Counter;