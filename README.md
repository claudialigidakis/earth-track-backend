# Earth Track Backend
The backend for Earth-Track.  A single page application that allows the user to search any aerial view on Earth using coordinates.

## Deployed Version
https://still-spire-69766.herokuapp.com/

Please make sure to let the application 'wake up' once first started

## Requirements

For development, you will only need Node.js installed on your environement.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

#### Node installation on OS X

You will need to use a Terminal. On OS X, you can find the default terminal in
`/Applications/Utilities/Terminal.app`.

Please install [Homebrew](http://brew.sh/) if it's not already done with the following command.

    $ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

If everything when fine, you should run

    brew install node

#### Node installation on Linux

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs

#### Node installation on Windows

Just go on [official Node.js website](http://nodejs.org/) & grab the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it.

---

## Install

    $ git clone https://github.com/earth-track-backend
    $ cd earth-track-backend
    $ npm install
    
### Set Up ENV Variables

Create a .env file and add:

- API_KEY = 
you can get the token at https://api.nasa.gov/index.html

## Start & watch

    $ npm run dev

## Built With

* Javascript
* NASA Earth API
* Axios
* Node
* Heroku

## Authors

* **Claudia Ligidakis** 

## Acknowledgments

* Thank you to NASA for their Earth API
