import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { lable: 'Salad', type: 'salad' },
    { lable: 'Bacon', type: 'bacon' },
    { lable: 'Cheese', type: 'cheese' },
    { lable: 'Meet', type: 'meet' },

];

const buildControls = (props) => (
   <div className={classes.BuildControls}>
       {controls.map(ctrl => (
           <BuildControl key={ctrl.lable} lable={ctrl.lable}/>
       ))}
   </div>
);

export default buildControls;