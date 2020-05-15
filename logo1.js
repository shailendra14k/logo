'use strict';

(function() {

angular
  .module('openshiftOnlineExtensions', ['openshiftConsole'])
  .run([
    'extensionRegistry',
    function(extensionRegistry) {
    
      extensionRegistry
        .add('nav-help-dropdown', function() {
          return [
            {
              type: 'dom',
              node: '<li class="divider"></li>'
            }, {
              type: 'dom',
              node: '<li><a href="https://ttt-test.apps.ee33.example.opentlc.com/11.png" target="_blank">Stack Overflow</a></li>'
            }
          ];
        });

    }
  ]);
}());

pluginLoader.addModule('openshiftOnlineExtensions');
