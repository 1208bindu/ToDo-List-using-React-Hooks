import React,{Component} from 'react';
import DisplayTodoHook from "./DiplayTodoHook";
import imm from './a2.jpg'
class App extends Component
{
    render()
    {
        return (
        <div className="container">
            <div className="row">
            <div  className="col s12">
                <h3 className="center header orange-text hide-on-small-only"> "If you love life, don't waste time, 
                        for time is what life is made up of"</h3>
            </div>
        </div>
            <div className="row">
               <div className="col m5 s12"><img className="responsive-img im1"  src={imm} alt="To do"/></div>
                <div className="col m7 s12">
                <div className="card pink lighten-3 center"><h2>To Do List</h2></div>
            <DisplayTodoHook />
            </div>
            </div>
        </div>
        );
    }
}
export default App;




