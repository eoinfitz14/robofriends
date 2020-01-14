import React from 'react'; // React is needed to write JSX!!! i.e the html code seen in the function below!! NB!!!!!!!!!
import Card from './Card'; 

const CardList = ({ robots }) => {
    return (
        //note we wrap cardComponents in curlies because its JS
        <div>
            {
                //note we can use map or forEach here. Map is a little better.
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;