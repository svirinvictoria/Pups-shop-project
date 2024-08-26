import React from "react";
import './Selector.scss';

const Selector=(props)=>{
      const classes = "select-frame border-green " + props.className;
    return(<div className="selection-home">
        <select className={classes} onChange={props.onChangeTypeHandler}>
            {props.items.map((type)=>{
                return <option key={type}>{type}</option>})}
        </select>
    </div>);
}

export default Selector;