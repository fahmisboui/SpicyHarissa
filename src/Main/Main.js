import './Main.css'
import React, { useState, useEffect } from 'react';


function Main(){
    return(
        <div className="Main">
            <h1 className='tittle'>who we are</h1>
            <List/>
        </div>
    )
}


function List() {
    const texts = [
                    "Unveiling a new era in mobile gaming, we are novice game developers with a vision.",
                    "Through the tip of our creative stylus, we craft captivating mobile games that seamlessly fuse innovation with imagination.",
                    "Our commitment lies in sculpting interactive realms that enchant diverse players. Step into our realm as we pioneer a reimagined mobile gaming experience, driven by passion and a pursuit of perfection."
                  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
            <div className='container'>
                <div className='image-container'>
                <img src='./images/controller.png' alt='controller'/>
                </div>
                
                <div className="text-container">
                {texts.map((text, index) => (
                <p key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                {text}
                </p>
                ))}
                </div>
            </div>
  );
}

  export default Main
