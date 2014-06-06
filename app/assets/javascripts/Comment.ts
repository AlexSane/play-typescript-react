/// <reference path="dts/require.d.ts"/>
/// <reference path="dts/react.d.ts"/>
/// <amd-dependency path="jsx!Comment.view" />

import React = require('react');

var view = require('jsx!Comment.view');

class CommentSpec implements React.ReactComponentSpec<{text:string},{}>{
    render:()=>React.ReactComponent<any, any>;

    constructor(){
        console.log(view);
        this.render = ()=>React.DOM.div(null, "Hello");
    }
}


export var c = React.createClass(new CommentSpec());
