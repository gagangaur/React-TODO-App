import React from 'react';
import Content from './Content';

export class Home extends React.Component{
    render(){
        console.log(this.props.todos);
        return this.props.todos.map((todo)=>(
            <Content key={todo.id} todo={todo}/>
        ));
    }
}