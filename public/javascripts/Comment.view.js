/**
 * @jsx React.DOM
 */
define([
  'Utils'
], function(
  React,
  Utils
){
    return {
        render: function(){
            return (
                <span>{this.props.text}</span>
                );
        }
    };
});
