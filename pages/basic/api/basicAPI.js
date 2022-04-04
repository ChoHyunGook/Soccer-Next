import axios from 'axios';
const SERVER=`http://localhost:5000`

export const memberBmi = bmiRequest=> axios.post(`${SERVER}/basic/bmi`,bmiRequest)
export const memberCalc = calcRequest=> axios.post(`${SERVER}/basic/calc`,calcRequest)
