import React from "react";
import {HeartOutlined, CommentOutlined} from '@ant-design/icons';


export const StatisticReviews = () => {
    return (
        <div className="statistic">
            <div>
                Последние отзывы
            </div>
            <div>
                Все отзывы
            </div>
            <div>
                <HeartOutlined/>
                <span>131</span>
            </div>
            <div>
                <CommentOutlined/>
                <span>14</span>
            </div>
        </div>
    )
};
