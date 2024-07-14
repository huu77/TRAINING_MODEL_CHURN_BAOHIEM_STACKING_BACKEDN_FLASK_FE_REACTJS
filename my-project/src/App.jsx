import Loading from "@compoments/Loading";
import Change from "@compoments/Change";
import { useState } from "react";
import Phone from "@compoments/Phone";
import Web from "@compoments/Web";

function App() {
  const [isChange, setIsChange] = useState(false);
  return (
    <>
      <Loading />
      <div className="mockup-browser border-base-300 border h-screen">
        <div className="mockup-browser-toolbar">
          <div className="input border-base-300 border">https://Chunrk.com</div>
    
         <Change isChange={isChange} setIsChange={setIsChange}/>
 
        </div>
        <div className="border-base-300 flex justify-center border-t px-4 py-16   w-full h-full">
          {isChange?(<Phone/>):(<Web/>)}
        </div>
      </div>
    </>
  );
}

export default App;
