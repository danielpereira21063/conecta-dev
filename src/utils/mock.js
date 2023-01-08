import MockAdapter from "axios-mock-adapter";
import axios from "./axios";

const instace = new MockAdapter(axios, { delayResponse: 0 });

export default instace;