import React from "react";
import Card from "./Card";

function Results({ results }) {
    return (
        <div className="select-none sm:grid grid-cols-2 lg:grid-cols-3 duration-100 transition-transform xl:grid-cols-4 2xl:grid-cols-5">
            {results.map((res) => (
                <Card key={res.id} res={res} />
            ))}
        </div>
    );
}

export default Results;
