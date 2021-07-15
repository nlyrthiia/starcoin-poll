## Version dependency in development

`$node -v`\
v10.12.0

`$npm -v`\
6.4.1

`$tsc -v`\
Version 4.1.3

`$yarn -v`\
1.22.10

`$npx -v`\
6.4.1


`$npx create-react-app  starcoin-poll  --template typescript`

## Set Environment Variables
```
export REACT_APP_STARCOIN_NETWORKS=main,barnard,halley,proxima
export REACT_APP_STARCOIN_POLL_API_URL=https://poll-api.starcoin.org
```

## How to run

> check for updates first if needed
>
>`$git clone git@github.com:starcoinorg/starcoin-poll.git`\
>`$cd starcoin-poll`\
>`$npm install`

`$yarn start`

Runs the app in the development mode.\
Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## How to test

`$yarn test`

Launches the test runner in the interactive watch mode.

## How to test deploy

`$yarn build`

Builds the app for production to the `build` folder.

Your app is ready to be deployed!

>You may serve it locally with a static server for test before deploying.
>
>  `npm install -g serve`\
>  `serve -s build`
>
>then visit: [http://localhost:5000](http://localhost:5000)


## How to publish

1. use aws cli to upload the files to AWS S3 Bucket:

`$aws s3 cp ./build s3://poll.starcoin.org/ --recursive`

2. use shell to build and upload files to AWS S3 Bucket:

`./publish.sh`

> PS: use proxy to speed up
