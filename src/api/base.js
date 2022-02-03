import Airtable from 'airtable';
const API_KEY = process.env.REACT_APP_API_KEY;

const base = new Airtable({apiKey: API_KEY}).base("base_identifier");

export default base;