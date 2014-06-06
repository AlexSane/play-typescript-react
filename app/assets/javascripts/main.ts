/// <reference path="dts/react.d.ts"/>
/// <reference path="dts/require.d.ts"/>


'use strict';

import React = require('react');
import Comment = require('Comment');

var c = Comment.c;
React.renderComponent(c(), document.body);

//React.renderComponent(c, document.body);
