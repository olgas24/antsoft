import React from "react";
import {Form} from "./Form";
import {Comment} from "./Comment";

export const AddComment = ({createComment, comments = []}) => {


    const handleSubmit = (data) => {
        createComment(data);
    };

    return (
        <div className="postComments">
            <div>
                <span>Самуил</span>
                <span>13 октября 2011</span>
                <p>Привет, Верунь! ниче себе ты крутая. фотка класс!!!!</p>
            </div>
            <div>
                <span>Лилия Семёновна</span>
                <span>14 октября 2011</span>
                <p>Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно
                известный центр огранки алмазов и торговли бриллиантами?</p>
            </div>
            <div>
                <span>Лилия Семёновна</span>
                <span>14 октября 2011</span>
                <p>Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?</p>
            </div>
            <div>
                {
                    comments.map(item => {
                        return (
                            <Comment key={item.id} {...item}/>
                        )
                    })
                }
            </div>
            <div className="column">
                <Form createComment={handleSubmit}/>
            </div>
        </div>
    )

};