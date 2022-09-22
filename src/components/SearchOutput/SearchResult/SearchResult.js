import React from "react";
import classes from './SearchResult.module.css';

const SearchResult = (props) => {
	console.log(props);
    return (
        <article className={classes.Result}>
            <h1>Username: {props.name}</h1>
	    <h2>UUID: {props.id}</h2>
	    <h3 className={classes.Author}>
                {Object.entries(props.textures).map(a => (
			<div>
				<p>{a[0]}</p>
				<img src={a[1].url}/>
			</div>
		))}
            </h3>
        </article>
    );
}

export default SearchResult;