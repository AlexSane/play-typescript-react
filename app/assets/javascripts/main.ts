/// <reference path="dts/react.d.ts"/>
/// <reference path="dts/require.d.ts"/>


'use strict';

import React = require('react');
import Comment = require('Comment');

var component = Comment.HelloMessage;

React.renderComponent(component({text:"hello"}), document.body);
