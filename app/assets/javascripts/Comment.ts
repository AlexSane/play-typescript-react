/// <reference path="dts/require.d.ts"/>
/// <reference path="dts/react-typescript.d.ts"/>
/// <reference path="dts/react.d.ts"/>
/// <amd-dependency path="jsx!Comment.view" />

import React = require('react');
import ReactTypescript = require('react-typescript');
var view = require('jsx!Comment.view');

export class HelloMessageDefinition extends ReactTypescript.ReactComponentViewBase<{text:string},{}> {

    getText(){
        return this.props.text;
    }

}

export var HelloMessage = ReactTypescript.toReactViewComponent(HelloMessageDefinition, view);