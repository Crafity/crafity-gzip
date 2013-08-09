/*jslint node:true, white: true*/
require("../test/package.test.js").on("complete", function () {
	require("../test/gzip.test.js");
	require("../test/staticGzip.test.js");
});
