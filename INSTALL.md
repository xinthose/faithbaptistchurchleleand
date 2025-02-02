# Xinthose Installation

## Visual Studio Code

- Install Github extension
- Set your Visual Studio Code Personal Access Token
- Test commit and push

## Linux

- `cd /home/adam/Documents/workspace/git/faithbaptistchurchleland`
- `apt-get install nodejs npm build-essential`

## Angular

### Installation

#### General 

- `npm i @angular/cli @angular/core @angular/forms @angular/http @angular/forms @angular/localize terser typescript rxjs express compression`

#### Kendo-UI (Progress)

- `ng add @progress/kendo-angular-buttons @progress/kendo-angular-dropdowns @progress/kendo-data-query`
- `npm i @progress/kendo-theme-material`

#### MDBootstrap Pro

- tutorial: <https://mdbootstrap.com/angular/5min-quickstart/>
  - click "PRO" underneath "npm iation"
- `npm i git+https://oauth2:XXXXXXXXXX_XXXXXXXXX@git.mdbootstrap.com/mdb/angular/ng-uikit-pro-standard.git --save`
- `npm i chart.js@2.5.0 @types/chart.js easy-pie-chart@2.1.7 hammerjs@2.0.8 screenfull@3.3.0 @fortawesome/fontawesome-free animate.css`
  - 3rd party libraries

### Create App (client directory)

- `ng new faithbaptistchurchleland --style=scss --enableIvy=false --routing=true`
  
#### Components

- `for i in home bible about page-not-found services; do ng g c "${i}"; done`

#### Services

- `ng g service bible`

## References

- Bible in JSON: <https://github.com/thiagobodruk/bible>

## Hosting Website with Amazon Web Services

- copy `package.json` into `dist/faithbaptistchurchleland` before zipping files
- when zipping files for update, select all files in `dist/faithbaptistchurchleland` and ZIP them, do not zip parent folder `dist/faithbaptistchurchleland`

## Commands -------------------------------------------------------------------------------------------------------------------------

### Angular Commands (ng)

- `ng --version`    // show angular version
- `ng update --all --force` // update all angular packages (ignore peer dependency errors)
- `ng build --prod --aot`   // build for production
- `ng serve --host 0.0.0.0` // allow outside PC's access to the app

### Node Commands

- `node -v` // show node version

### NPM Commands (Node Package Manager)

- `npm -v`  // show npm version
- `npm i -g npm`  // update npm version
- `npm update`  # update all packages in the app
- npm i [package]@[version]   // install specific version of a package
- `npm ls @progress/kendo-angular-scheduler`  // show version of a package
- `npm i --package-lock-only` // only create `package-lock.json` file

### Install dependencies

- `npm i -g npm-install-peers`
- `npm-install-peers`
- `npm i @angular/cli@latest`  // install latest version of angular cli

### Typescript Commands

- `tsc -v`  // show typescript version

### Github

- `git config --global user.email "your github login email address"`  // set email address
- `git config --global user.email`  // check email address

### Troubleshooting

- `ERROR in The Angular Compiler requires TypeScript >=3.4.0 and <3.5.0 but 3.5.1 was found instead.`
  - `npm i typescript@">=3.4.0 <3.5.0"`
