import React from "react";
import {connect} from "react-redux";

import {StatisticReviews} from "../components";
import {AddComment} from "../components";
import {createComment} from "../actions";

const Main = (props) => {
    return (
        <main>
            <StatisticReviews/>
            {/*<AllComments/>*/}
            <AddComment title={"Name"} comments={props.postComments} createComment={props.createComment}/>
        </main>
    )
};

const mapStateToProps = (state) => ({
    postComments: state.postComments
});

const mapDispatchToProps = {
    createComment
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);