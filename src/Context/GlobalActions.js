   // Make Qr
    
   export const makeQr = async (text) => {
    const res = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`
    );
    

     
     return res.url   

  };