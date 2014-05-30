/// <reference path="dts/react.d.ts"/>
/// <reference path="dts/require.d.ts"/>


'use strict'; 

import React = require('react');


require([
	"jsx!CommentBox"
], function(
	CommentBox
){
  React.renderComponent(
    CommentBox(null),
    document.body
  );
});