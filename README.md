# BOS Chatroom Widget

This is the single chatroom version of [ChatV2 Widget App](https://github.com/wpdas/chatv2-near-widget-app). Credits to [Wenderson Pires](https://github.com/wpdas).

A sample usage of the widget can be seen in this community page (please connect/subscribe to the page to view the hidden apps, including his chatroom widget ^_^): [bbclan](https://near.social/gordonjun.near/widget/bbclan.dao)

[**Live App**](https://alpha.near.org/gordonjun.near/widget/bbclanChatRoom)

## Setup & Usage

- Install all the dependencies:

    ```sh
    yarn install
    ```

- Run app locally:

    - Start the app
    ```sh
    yarn start:app
    ```
    - Copy the code in ```widget/ChatV2.dev.jsx``` into [NEAR BOS Sandbox](https://near.org/sandbox) to render the output
        - To change chat room, just edit ***room*** variable before rendering

- Run viewer (not tested):

    ```sh
    yarn start:vm
    ```

    Now, you can see your changes in real time. Both in React App and Widget.

- To build the app after local testing:

    - Delete the following files
    ```sh
    - .firebase
    - .firebaserc
    - firebase.json
    ```
    - Create a production build of the app using
    ```sh
    npm run build
    ```
    - Setup [Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart) for this app (requires GCP Firebase service account permission)
        - Select ***dist*** folder as the public directory
    - After deploy, open up the hosted link to check that it is working.
    - Edit ***externalAppUrl*** variable in ```widget/ChatV2.jsx``` to the hosted link
    - Copy the code in ```widget/ChatV2.jsx``` into [NEAR BOS Sandbox](https://near.org/sandbox) to render the output
        - To change chat room, just edit ***room*** variable before rendering

## Libraries

[**NEAR Social Bridge:**](https://github.com/wpdas/near-social-bridge) A library that allows you to create a common application using ReactJS and inject it in a controlled way into a Widget on Near Social. Therefore, the Widget talks to the React application and vice versa, making it possible to consume Discovery API resources within the React application.

[**NEAR Social Local Viewer:**](https://github.com/wpdas/near-social-local-viewer) A CLI tool that allows you to run and test your Near Social Widgets locally using just your preferred code editor and your default browser.
