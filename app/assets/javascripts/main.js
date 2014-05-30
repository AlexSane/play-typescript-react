require([
	"react",
	"jsx!CommentBox"
], function(
	React,
	CommentBox
){
  React.renderComponent(
    CommentBox(null),
    document.body
  );
});