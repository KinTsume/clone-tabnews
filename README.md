# clone-tabnews
A project to clone the tabnews.com.br site and study its concepts

# Concepts

## nvm

### nvm install <version>

Install the given nvm version and select it 

### nvm alias <alias> <version>

Give an alias to the version. The 'default' alias is used to make a version be the default

### .nvmrc

The file is composed of the version of nvm on the first line and a line break. 
It's used to tell nvm which version is recommended to run the app
 
## npm

### npm init 

Starts a npm project by creating the package.json

### npm install <name>@<version> <name>@<version>

Installs the given packages at the given versions

### npm scripts

The scripts configured in package.json are used like a shortcut to run commands. 

In the case of the command to start a next.js dev web server (next dev), the next.js is installed locally on the project not globally so the terminal cant find the command and throws an error. To avoid that we use npm to run the command instead (npm run <script name>).