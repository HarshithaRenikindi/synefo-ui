 
import React, { useState, useEffect, useRef } from 'react';
import bot from 'assets/img/bot.png';
import botChatIcon from 'assets/img/botChatIcon.png';
import botEC2 from 'assets/img/botEC2.png';
import quillSend from 'assets/img/quillSend.png';
 
const ChatBotGreeting = () => {
    const [isBoxVisible, setIsBoxVisible] = useState(false);
    const chatBoxRef = useRef(null);
 
    const toggleBoxVisibility = () => {
        setIsBoxVisible((prev) => !prev);
    };
 
    const handleClickOutside = (event) => {
        if (chatBoxRef.current && !chatBoxRef.current.contains(event.target)) {
            setIsBoxVisible(false);
        }
    };
 
    useEffect(() => {
        if (isBoxVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
 
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isBoxVisible]);
 
    return (
        <div className="fixed bottom-5 right-5">
            <div className="relative">
                {!isBoxVisible && (
                    <div className="mb-2">
                        <svg width="218" height="91"  viewBox="0 0 218 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8V72C0 76.4183 3.58173 80 8 80H180.506C181.975 80 183.326 80.8054 184.025 82.0977L188.032 89.5092C188.788 90.9078 190.794 90.9078 191.55 89.5093L195.557 82.0977C196.256 80.8054 197.607 80 199.076 80H210C214.418 80 218 76.4183 218 72V8C218 3.58172 214.418 0 210 0H8Z" fill="white" />
                        </svg>
                        <div className="absolute top-3 left-3">
                            <p className="text-[#383874] font-bold mb-2 text-sm">Hey!</p>
                            <p className="text-[#383874] text-sm">How can I help You</p>
                        </div>
                    </div>
                )}
                <button
                    className="rounded-full w-12 h-12 flex items-center justify-center bg-white shadow-md ml-44"
                    onClick={toggleBoxVisibility}
                >
                    <img src={bot} alt='bot' className="w-10 h-10 " />
                </button>
            </div>
 
            {isBoxVisible && (
                <div
                ref={chatBoxRef}
                className="fixed bottom-0 right-2 w-64 md:w-72 h-[91.2vh] md:h-[93.2vh] bg-gradient-to-b from-white to-[rgba(240,239,252,255)] border border-gray-300 rounded-lg shadow-md flex flex-col opacity-96"
              >
                    <div className="flex items-center justify-between p-3 border-b">
                        <div className="flex items-center">
                            <img src={bot} alt='bot' className="w-8 h-8" />
                            <h1 className="text-sm font-bold ml-2">Synthia</h1>
                        </div>
                        <img src={botChatIcon} alt='botChatIcon' className="w-8 h-8" />
                    </div>
 
                    <div className="flex-grow overflow-y-auto p-3">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xs flex-grow pr-4">
                                What is the CPU utilization of EC2 instance?
                            </h2>
                            <img src={botEC2} alt="botEC2" className="w-8 h-8 flex-shrink-0" />
                        </div>
 
                        <div className="flex items-start mb-4">
                            <img src={botEC2} alt="botEC2" className="w-8 h-8 flex-shrink-0 mr-3 mt-1" />
                            <h2 className="text-xs leading-relaxed">
                                CPU utilization of EC2 instance is 65%, check your overall usage in the graph below.
                            </h2>
                        </div>
 
                        {/* Placeholder for graph */}
                        <div className="h-40 bg-gray-200 mb-4 rounded"></div>
 
                        {/* Additional content can be added here */}
                    </div>
 
                    <div className="p-3 border-t">
                        <div className="flex items-center border border-gray-300 rounded-full p-2">
                            <img src={bot} alt="bot" className="w-5 h-5 mr-2" />
                            <input
                                type="text"
                                placeholder="Ask a question"
                                className="flex-1 bg-transparent text-sm outline-none"
                            />
                            <img src={quillSend} alt="sendButton" className="w-5 h-5 cursor-pointer" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
 
export default ChatBotGreeting;
