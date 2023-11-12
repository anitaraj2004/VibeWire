

export default function About() {
  
  // const verbwire = require('verbwire')('YOUR_API_KEY');

  // verbwire.data.owned({
  //         walletAddress: "0xB9a53045E45A9F3388D08b2d6B7D9180c5336c2D",
  //     }).then(function(response) {
  //         console.log(response);
  //     });
  //     const axios = require('axios');

  //     const options = {
  //       method: 'POST',
  //       url: 'https://api.verbwire.com/v1/nft/deploy/deployContract',
  //       headers: {
  //         accept: 'application/json',
  //         'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
  //         'X-API-Key': 'sk_live_3e40d644-e36a-437e-9d15-874e65e3c53e'
  //       },
  //       data: '-----011000010111000001101001\r\nContent-Disposition: form-data; name="chain"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="contractType"\r\n\r\nnft721\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="contractCategory"\r\n\r\nsimple\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="isCollectionContract"\r\n\r\nfalse\r\n-----011000010111000001101001--\r\n\r\n'
  //     };
      
  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         console.log(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  const verbwire = require('verbwire')('YOUR_API_KEY');

  verbwire.data.owned({
    walletAddress: "0xB9a53045E45A9F3388D08b2d6B7D9180c5336c2D",
  }).then(function(response) {
    console.log(response);
    
    // Assuming 'response' is a JSON object, you can convert it to a string
    const responseString = JSON.stringify(response, null, 2);
    
    // Display the string as needed, for example, in an alert
    res.status(200).json({ axiosResponseString });
  });
  
  const axios = require('axios');
  
  const options = {
    method: 'POST',
    url: 'https://api.verbwire.com/v1/nft/deploy/deployContract',
    headers: {
      accept: 'application/json',
      'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
      'X-API-Key': 'sk_live_3e40d644-e36a-437e-9d15-874e65e3c53e'
    },
    data: '-----011000010111000001101001\r\nContent-Disposition: form-data; name="chain"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="contractType"\r\n\r\nnft721\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="contractCategory"\r\n\r\nsimple\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="isCollectionContract"\r\n\r\nfalse\r\n-----011000010111000001101001--\r\n\r\n'
  };
  
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      
      // Assuming 'response.data' is a JSON object, convert it to a string
      const axiosResponseString = JSON.stringify(response.data, null, 2);
      
      // Display the string as needed, for example, in an alert
      res.status(200).json({ axiosResponseString });

    })
    .catch(function (error) {
      console.error(error);
    });
  
    
    return (
      <div className="font-lexend-deca h-[calc(100vh-80px) pt-[64px] flex justify-center">
     
          <div className="font-light text-[#9e9e9e] mt-[2rem] mb-[24px] max-w-[700px] text-center">
            Our team members, with diverse skills and experiences, played a
            crucial role in designing the UI and developing the back-end for
            GitPT. Together, we are a dynamic and collaborative group dedicated to
            constant innovation and improvement in cost-friendly resources for
            students.
            
          </div>
        </div>
    )
  }