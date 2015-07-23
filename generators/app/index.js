'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the striking ' + chalk.red('Paper') + ' generator!'
    ));
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.projectName = answers.name;
      this.log(answers.name);
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        { projectName: this.projectName }
      );
      this.fs.copyTpl(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json'),
        { projectName: this.projectName }
      );
      this.fs.copy(
        this.templatePath('_gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
      this.fs.copyTpl(
        this.templatePath('src/index.html'),
        this.destinationPath('./src/index.html'),
        { title: this.projectName }
      );
      this.fs.copyTpl(
        this.templatePath('src/script.coffee'),
        this.destinationPath('./src/script.coffee')
      );
      this.fs.copyTpl(
        this.templatePath('src/style.scss'),
        this.destinationPath('./src/style.scss')
      );
    },
  },

  install: function () {
    this.installDependencies();
  }
});
