import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
    console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Username: {props.name}</h1>
	    <h2>UUID: {props.id}</h2>
        </article>
    );
}

export default SearchResult;