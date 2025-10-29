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

## VS code

### port forwarding

It's possible to configure a port to access the app on another device forwarding a port an setting its visibility to public. The 'ports' window is in the same tab as the terminal in vs code's default layout.

### VS code Timeline

VS Code have a timeline that shows all the changes on the project even if the program was closed. Clicking in one of those changes shows the difference between the file back then and the current.

## Git

- |git log|: list the repository _commits_
- |git add|: add the changes to the _staging area_
- |git commit|: make new _commits_
- |git commit --amend|: replace the previous _commit_ with a new one, but keep the changes
- |git diff|: Calculate the difference between versions/changes on the files
- |git commit -m "mensagem"|: Shortcut to make new commits with the message written as part of the command
- |git push|: Push local changes to the origin repository
- |git push --force|: Force the push of the local changes to the repository
- |git push -f|: Shorthand form of the previous command

## CD - Continuous Deployment

Vercel has a tool to deploy an app automaticaly on their platform. Just making a push to the origin main branch and it will detect and deploy the app.