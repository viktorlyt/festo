export const requestToServer = async (url, options) => {
  return new Promise(function(resolve, reject) {
    let formData = new FormData();

    if(options){
      for (const [key, value] of Object.entries(options)) {
        if(key && value)
          formData.append(key, value);
      }
    }

    fetch(`https://api.festoapp.co.uk/v1${url}`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(req => {
          alert('Successfully!');
          resolve(req);
        }
      )
      .catch(err => {
        // console.error(err, 'err')
        reject(err)
        alert(err.message);
      })
  })
};