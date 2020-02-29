import React from 'react';
import Multistep from 'react-multistep';
import PersonalInfo from './PersonalInfo';


const steps = [
  { name: 'StepOne', component: <PersonalInfo /> },
  { name: 'StepTwo', component: <PersonalInfo /> },
  { name: 'StepThree', component: <PersonalInfo /> },
  { name: 'StepFour', component: <PersonalInfo /> }
];


export { steps }
