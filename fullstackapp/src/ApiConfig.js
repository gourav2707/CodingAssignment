const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const ApiConfig = {
  ADD_PROJECT: `${BASE_URL}/projects/create `,
  ADD_CLIENT: `${BASE_URL}/clients/create`,
  CONTACT_FORM: `${BASE_URL}/contacts/createContact`,
  SUBSCRIBE: `${BASE_URL}/newsletter/Subscribe`,

  GET_PROJECTS: `${BASE_URL}/projects/fetch`,
  GET_CLIENTS: `${BASE_URL}/clients/fetch`,
  GET_CONTACTS: `${BASE_URL}/contacts/getContact`,
  GET_SUBSCRIBERS: `${BASE_URL}/newsletter/getSubscribe`,
  UPLOAD: `${BASE_URL}//uploads`
};

export default ApiConfig;
