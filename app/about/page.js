

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
  // const verbwire = require('verbwire')('YOUR_API_KEY');

  // verbwire.data.owned({
  //   walletAddress: "0xB9a53045E45A9F3388D08b2d6B7D9180c5336c2D",
  // }).then(function(response) {
  //   console.log(response);
    
  //   // Assuming 'response' is a JSON object, you can convert it to a string
  //   const responseString = JSON.stringify(response, null, 2);
    
  //   // Display the string as needed, for example, in an alert
  //   res.status(200).json({ axiosResponseString });
  // });
  
  // const axios = require('axios');
  
  // const options = {
  //   method: 'POST',
  //   url: 'https://api.verbwire.com/v1/nft/deploy/deployContract',
  //   headers: {
  //     accept: 'application/json',
  //     'content-type': 'multipart/form-data; boundary=---011000010111000001101001',
  //     'X-API-Key': 'sk_live_3e40d644-e36a-437e-9d15-874e65e3c53e'
  //   },
  //   data: '-----011000010111000001101001\r\nContent-Disposition: form-data; name="chain"\r\n\r\ngoerli\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="contractType"\r\n\r\nnft721\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="contractCategory"\r\n\r\nsimple\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name="isCollectionContract"\r\n\r\nfalse\r\n-----011000010111000001101001--\r\n\r\n'
  // };
  
  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
      
  //     // Assuming 'response.data' is a JSON object, convert it to a string
  //     const axiosResponseString = JSON.stringify(response.data, null, 2);
      
  //     // Display the string as needed, for example, in an alert
  //     res.status(200).json({ axiosResponseString });

  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });
  
    
    return (
      <div className="font-lexend-deca h-[calc(100vh-80px) pt-[64px] flex justify-center">
     
          <div className="font-light text-[#9e9e9e] mt-[2rem] mb-[24px] max-w-[700px] text-center">
          At VibeWire, we empower artists and creators to secure their artistic legacy in the digital realm. In an era defined by the fusion of creativity and technology, VibeWire stands at the forefront, offering a groundbreaking solution for artists seeking to protect and authenticate their online creations.

          What Sets Us Apart
          Blockchain-Powered Certificates:

          VibeWire utilizes the immutable and transparent nature of blockchain to issue certificates of ownership for every piece of art published on our platform.

          User-Friendly Experience: We believe in making cutting-edge technology accessible. VibeWire offers a seamless and user-friendly experience, allowing artists to effortlessly register their creations on the blockchain and obtain digital certificates.

          Global Recognition: VibeWire certificates can be globally recognized and can be easily verified by anyone with access to the blockchain.

          Community Collaboration: VibeWire is more than just a platform; it's a community of like-minded artists supporting each other.

          Create Your Account: Join the VibeWire community by creating a secure account.

          Submit Your Art: Easily upload your art to the VibeWire platform. Our intuitive interface guides you through the process, ensuring a smooth and efficient submission.
                          
          Blockchain Verification: Once submitted, your art is securely recorded on the blockchain, and you receive a digital certificate of ownership.

          Share and Thrive: With your VibeWire certificate in hand, proudly share your art across online platforms, knowing that you have taken a proactive step to safeguard your creative legacy.
                      
          </div>
        </div>
    )
  }