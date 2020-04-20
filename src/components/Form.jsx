import React, {useState, useEffect} from "react";

export const Form = (props) => {
    const [comment, setComment] = useState("");
    const title = "Anonymous";
    const date = new Date();
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    };

    const postDate = date.toLocaleString("ru", options);

    const handleChangeComment = (event) => {
        setComment(event.target.value);
    };

    const handleSubmit = () => {
        props.createComment({
            title,
            postDate,
            comment
        });
        setComment("");
    };

    const  keydownHandler = (event) =>{
        if(event.keyCode===13 && event.ctrlKey) handleSubmit()
    };

    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
    }, []);


    return (
        <div>
            <div className="comment-block">
                <textarea name="comment" value={comment} onChange={handleChangeComment}/>
            </div>
            <div className="btn" onClick={handleSubmit}>Написать консультанту</div>
        </div>
    )
};