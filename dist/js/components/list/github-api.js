/// <reference path='../../../typings/index.d.ts' />
'use strict';
var GitHubAPI = (function () {
    function GitHubAPI($http, url) {
        if (url === void 0) { url = null; }
        this.url = 'https://api.github.com/repos/Microsoft/TypeScript/pulls';
        this.$http = $http;
        if (url)
            this.url = url;
    }
    // Type? Eigentlich promise.
    GitHubAPI.prototype.get = function (length) {
        return this.$http.get(this.url + '?per_page=' + length);
    };
    return GitHubAPI;
}());
App.service('githubAPI', GitHubAPI);
