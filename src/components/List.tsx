import React from 'react'
import {IState as IProps} from "../App";
/*when using the following method, although it works
typescript doesnt know that this is a functional component and instead
thinks its a finction that returns some JSX, hence adding React.FC
const List = (props: IProps) => {
    return (
        <div>I am a list</div>
    )

    
}*/
const List: React.FC<IProps> = ({people}) => {

    const renderList = (): JSX.Element[] => {
        return people.map((person)=> {
            return (
            <li className="List">
                <div className="List-header">
                    <img className="List-img" src={person.url}/>
                    <h2>{person.name}</h2>
                </div>
                <p>{person.age} years old</p>
                <p className="List-note">{person.note}</p>
            </li>
            )
        })
    }

    return (
        <ul>
            {renderList()}

        </ul>
    )
}

export default List