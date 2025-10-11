// Chatbot.tsx (or Chatbot.jsx)

"use client";

import React, { useEffect } from 'react';

const ChatbaseEmbed = () => {
    
  useEffect(() => {
    // 1. සම්පූර්ණ JavaScript කේතය string එකක් ලෙස නිර්වචනය කරන්න.
    const chatbaseScript = `
        (function(){
            if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){
                        window.chatbase.q=[]
                    }
                    window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                        if(prop==="q"){
                            return target.q
                        }
                        return(...args)=>target(prop,...args)
                    }
                })
            }
            const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="3lOMCRWGjRBIW34TG7dMW"; // මෙය ඔබේම ID එක බවට වග බලා ගන්න
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
            };
            if(document.readyState==="complete"){
                onLoad()
            }else{
                window.addEventListener("load",onLoad)
            }
        })();
    `;

    // 2. JavaScript කේතය dynamically නිර්මාණය කර DOM එකට එක් කිරීම
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = chatbaseScript;
    scriptElement.type = 'text/javascript';
    document.body.appendChild(scriptElement);

    // 3. Component එක ඉවත් කරන විට Script එකද ඉවත් කිරීම (Cleanup)
    return () => {
      document.body.removeChild(scriptElement);
    };

  }, []); // හිස් array එකක් යනු Component එක load වූ පසු එක් වරක් පමණක් ක්‍රියාත්මක වීමයි.

  return (
    // Chatbot එක සාමාන්‍යයෙන් තනි බොත්තමක් ලෙස දිස්වන බැවින්,
    // මෙහිදී වෙනත් UI elements ඇතුළත් කිරීම අවශ්‍ය නොවේ.
    <></>
  );
};

export default ChatbaseEmbed;