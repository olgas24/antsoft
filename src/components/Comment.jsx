import React from "react";

export const Comment = ({title, postDate, comment}) => {
    return (
        <div className="comment">
            <span>{title}</span>
            <span>{postDate}</span>
            <p>{comment}</p>
        </div>
    )
};