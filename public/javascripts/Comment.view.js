/**
 * @jsx React.DOM
 */
define([
    'react'
], function(
  React
){
    return {
        render: function(){
            return (
                <span>{this.props.text} {this.getText()}</span>
                );
        }
    };
});
