async function createWidget() {
  function getAccessToken() {
    return connectApi('token');
  }

  // const callback = () => {};
  const onSuccessConnection = async (link, institution) => {
    const response = await connectApi('auth', 'POST', {link, institution});
    localStorage.token = response.token;
    window.location.href = 'account';
  };

  const onExitConnection = (data) => {
    connectApi('close', 'POST', data);
  };

  const onEventUser = (data) => {
    connectApi('event', 'POST', data);
  };

  const config = {
    // Add your startup configuration here.
    callback: (link, institution) => onSuccessConnection(link, institution),
    onEvent: (data) => onEventUser(data),
    onExit: (data) => onExitConnection(data),
    show_intro: true,
    country_codes: ['MX'],
    institution_types: ['business', 'retail'],
  };

  const {access} = await getAccessToken();
  window.belvoSDK.createWidget(access, config).build();
}

function connectApi(route, method = 'GET', body = {}) {
  const options = {
    method: method,
    mode: 'cors',
  };

  if (Object.keys(body).length > 0) {
    options['body'] = JSON.stringify(body);
    options['headers'] = {
      'Content-Type': 'application/json'
    }
  }

  return (
    fetch(`https://ammper-api.herokuapp.com/api/belvo/${route}`, options)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.error('Error:', error))
  );
}

export default createWidget;
