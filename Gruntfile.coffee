'use strict'

module.exports = (grunt) ->
  require('jit-grunt') grunt
  grunt.file.defaultEncoding = 'utf8'
  grunt.initConfig

    symlink:
      options:
        overwrite: true
      jquery:
        src: 'node_modules/jquery'
        dest: 'public/js/jquery'

    requirejs:
      almond:
        options:
          optimize: 'uglify2'
          uglify2:
            warnings: false
            mangle: true
            compress:
              evaluate: false
              sequences: true
              properties: true
              unused: true
              hoist_funs: false
              hoist_vars: false
              drop_debugger: true
              drop_console: true
          optimizeCss: 'none'
          generateSourceMaps: true
          keepAmdefine: true
          preserveLicenseComments: false
          findNestedDependencies: true
          useStrict: true
          baseUrl: 'public/js'
          mainConfigFile: 'public/js/config.js'
          name: '../../node_modules/almond/almond',
          include: [ './app' ]
          out: 'public/bundle.min.js'

  grunt.registerTask 'default', [
    'symlink'
    'requirejs'
  ]

  return
