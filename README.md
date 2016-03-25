[![structor compatible](https://img.shields.io/badge/structor%20compatible-v0.2.9-0077dd.svg?style=flat)](http://helmetrex.com)

### Description
Starter project with a set of more than 40 React Bootstrap & React Widgets components. Also, has a scaffold for the server backend.
 
### Documentation

Structor's documentation:

* [Structor's component model representation](https://github.com/ipselon/structor/wiki/Structor's-component-model-representation)
* [Generators metadata overview](https://github.com/ipselon/structor/wiki/Generators-metadata-overview)
* [Structor shortcuts](https://github.com/ipselon/structor/wiki/Structor-shortcuts)

Prepack documentation

* [The files structure description](https://github.com/ipselon/bootstrap-prepack/wiki/The-source-code-structure)
* [Generator for React component](https://github.com/ipselon/bootstrap-prepack/wiki/Generator-for-React-component)
* [Generator for smart Redux component (container)](https://github.com/ipselon/bootstrap-prepack/wiki/Generator-for-smart-Redux-component-(container))
* [Migration guide](https://github.com/ipselon/bootstrap-prepack/wiki/Migration-guide)
 
<br/>
### Technologies and libraries
The following libs and technologies were used:
* ```react```
* ```react-router```
* ```redux```, ```redux-thunk```, ```react-redux```
* ```react-bootstrap```
* ```express```
 
```react-bootstrap``` is a library of reuseable front-end components. You'll get the look-and-feel of Twitter Bootstrap, but with much cleaner code, via Facebook's React.js framework.
In the builder you will have an ability easily compose components right on the page using different variants of Bootstrap components.

But also you can add your own reusable components manually.
Every component has its own quick note which is accessible through "Options" -> "ReadMe"
<br/>
<br/>
### Start backend server
If you want to see the app in action please do the following:
* Go to folder where you unpack downloaded package.
* Run command: ```npm install```
* Run command: ```npm run build-server```
* Run command: ```npm run build-client```
* Run command: ```node ./server.js```
* Go to http://localhost:3000

<br/>
### Starting Structor 
If you still didn't start the backend server please do the following: 
* Run command: ```npm install```
* Run command: ```node ./server.js```

Now you can start Structor from command line. To recognise the path of current project's folder Structor has 
to be started in the root directory of current project or started with command argument ```-d``` pointing to project's folder. 
* in project root dir: ```structor```
* in any other dir: ```structor -d <path to project directory>```

Once you have started Structor you will see the project's workspace. Now you can try to combine components with each other, 
or generate new React components from the combination, or add new pages, or whatever you want.
<br/>
<br/>
### Proxy setup
We need to setup proxy because of CORS restriction, it means that Structor runs on 2222 port on localhost, 
and our application may require to request REST service on 3000 port. That is restricted by browser policy.

To omit that Structor has embedded http proxy, which you can setup while you are working in workspace. 
So, if your application will work with REST service running on ```http://localhost:3000/service```, setup proxy to: ```http://localhost:3000``` 
and then application has to use the following pattern for requests ```/service/...```.

Current project already has proxy setup to http://localhost:3000.
But if you want to direct request from components into another REST or HTTP server you can setup new value in Structor menu:
<br/>
<br/>
### Exporting pages with routes
In any moment of work with Structor you can export existing pages into real pages with routes.
This can be done by selecting option "Export project". 

After that you will get a list of generated files of pages' components. And one more additional file for router configuration.
In current project these files will be generated into ```src/routes/``` folder. But, you can change this path in ```.structor/config.json``` file. 

Also you may edit templates for output React components in ```.structor/templates/``` or add your own new with ".tpl" extension.
<br/>
<br/>
### Building and trying a real Web app
Having exported pages and routes you can run webpack's build script:
* ```npm run build-client```

Then, if everything were built and you didn't stop backend server, just go to http://localhost:3000
<br/>
<br/>
### License
MIT
