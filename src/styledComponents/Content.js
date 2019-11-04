import React,{useState} from 'react'
export default function Content(props){
    return <h1 className={props.Color}>The Count is {props.Counter}</h1>;
}