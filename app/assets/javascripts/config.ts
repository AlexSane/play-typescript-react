/// <reference path="dts/require.d.ts" /> 

require.config({
	paths: {
			react: "vendor/react/react",
            jsx: "vendor/require-jsx/jsx",
            JSXTransformer: 'vendor/react/JSXTransformer'
        },
        
        shim: {
            JSXTransformer: {
                exports: "JSXTransformer"
            }
        },
		waitSeconds: 10		
});

require(['main']);