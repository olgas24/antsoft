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

    const  keydownHandler = (e) =>{
        if(e.keyCode===13 && e.ctrlKey) {
            handleSubmit();
            e.preventDefault();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", keydownHandler);
        // document.getElementsByClassName('btn')[0].addEventListener("keydown", keydownHandler);
    }, );

    // const btn = document.getElementsByClassName("btn");
    // console.log(btn, "btn");
    //
    // useEffect(() => {
    //     btn[0].addEventListener('keydown', keydownHandler);
    // }, );


    return (
        <div>
            <div className="comment-block">
                <textarea name="comment" value={comment} onChange={handleChangeComment}/>
            </div>
            <div className="btn" onClick={handleSubmit}>Написать консультанту</div>
        </div>
    )
};