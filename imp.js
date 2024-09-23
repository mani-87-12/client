var value =3;
let x=89;
const a=10;
console.log(value,x);
function not(z){
    console.log(z*z);
}
not(10);
//arrow function
var func_value=function(z){
    return z*z;
}
console.log(func_value(5));
//another way is using arrow symbol =>
const y=(a,b)=>{return a+b}
//array creation
var arr=["krish","ravi","gopal"];
var ar=["k","r","g"];
var ab=["kr","ra","go"];
//expand the iterable
const expand=[...ab,...ar];
console.log(expand);
console.log(arr);
//spread operator imp while using react.js
//it converts any data into iterable
//loops
for(i of expand){
    console.log(i);
}
//class creation in js6
class Data{
    constructor(a,b){
        this.a=a;
        this.b=b;
        console.log(a+b);
        return this.a+this.b;
    }

}
let obj=new Data(2,3);
console.log(obj);
//promises and call backs
//promises are js objects which links the preducing and consuming code
const Mypromise=new Promise(function(a,b){
    return a+b;
});
const xy=Mypromise.then()
console.log(xy);
console.log(mani);
var mani=10;
console.log(mani);
//we use promises when the particular block wait to execute
//react.js mainly works on DOM(Document Object Model)
//like jsp we use jsx(javascript xml) in react.js
//npm(node package manager) it manages all the packages and versions
//npm manages all library files
/*react complete based on components(block of code or set of objects)
to create a react app cmd is:npx create-react-app client ->client is name of react app
to start it cmd is:npm start
react use virtual DOM(contains tree structure with tags)
DOM->a website represented in the form of tree
react checks virtaul DOM with Real DOM if there is any change then Virtual DOM is rendered
*/
//Day2
/*components(block of code or collection of elements) can be created in two ways .functional comonents and class components
1.function components syntax: in the return statement we can write the multiple components

*/
/*
props:allows to pass properties as paramaeters(function & class)
state:allows to remember or store a property or a valurthroughout of the life cyce of a react (or) variable capable of storing a value for long time
(function & class)
*/
/* hooks:allows to implement prebuilt functions properties without creating a classes
1.state hooks:allow to implement state without using class,takes one parameter that is initail value
2.useReducerhooks:takes two parameter 1:func 2:initial value
3.effecthooks:to make any change in app or observe the changes 
4.performance hooks,5.contest hooks,6.resource hooks
in hooks: we want two parameters:that is variable,function eg:const [var,func]=useState(initial value of variable)
*/
/*
use effect hook: used to perform side effects(dynamic resonsive changes) on the webpage
takes two parameters 1.func 2.dependency
*/
/*
for hyperlinks we use rooters
rooter:allows us to share multiple components through a single document(spa-single page application)
we have to install react-router
rooter creates a browser rooter class(which tranfers from one html page to another html,it stores the visited pages)
routes class- we can specify which rootes are there 
link class-allows me to link to the other html page(Link tag takes one parameter that is site name)
*/
/*
hooks-used to store data
*/
/* assignment
create a feedback form name,age,roll number ,class and feedback
handle it with hook and present the entered data in the form of table and show a msg that form is submitted
*/
//Day 3
/*
spread operator,array using state,map 
->to overcome the props drawback(is low efficiency) we use contest.api(in this properties are declared globally and can be accessed by any compoent in the tree)
API-used to exchange data/properties b/w components easily
*/
/*
Tailwind css-is a css framework,also known an implementation for frame work
it gives me many class which are predifined
APL CDN-is a tailwind css we can install it tough with npm into reat app

*/

/*
 Context APi is the official library of the React
Redux is unofficial library of the react
to maintain the complex state management we use Redux
React-Redux which is integrated official library of react
Node.js is server-side-scripting language
Node.js uses js, likes a  environment(server)
Apache tomcat uses php
*/
//===========Node============
/*
funtions are two types call-back,non call-back(non-blocking)
for debugging(runtime errors or exceptions) cmd:node --inspect-brk filename 
*/
/*
Event Loops in Node: is a functinality in node.js allows me to set a call back time to any func
functions uses the stack principle
Promise chaining: allows to me to chain multiple asynchronous functions together
*/
/*
(IMP)this binding:allow to bind the data with this keyword
this is only possible in arrow functions not possible in generic and nrml functions
*/
/*
for running the nodemon cmd:nodemon index.js or npx nodemon index.js
*/
//========diff types of http methods==============
/* 
---Method----------API--------------
  1.GET           /user(conatains the data that is fetched from the mongoDB)
  2.Post          /post(allows me to post the data to the url)
  3.put           /user(update the resources i.e to put the updated data) 
*/

/*
            Axios:it is a library helps us to perform all http methods
            it is a promise base methods
            install:install npm axios
            Axios is similar to superagent
*/
// strict equals in js(===)

/*
Express is a wrap above node.js
Express is a library in node
functionality of node.js:server side scripting lang
Express:helps to process and intercept the data from client 
adv of express:uses of concept mildware and routing
through express we develop front-end
express is default request library
*/

/*
postman package:used to test api end points(api end point testing tool)
through it we can send request and receive response
end points:/login,/register
to send request to the server
*/
//midlware which intercepts the request before reaching to backend


//============methods========
/*
delete:delete request
option:shows all the request which are allowed
patch:to make a small update request
*/

/*
Mildware: it intercepts the request before processing the data
types of mildware:
1.Application Level Midleware:
    methods:post(),get(),put(),...
    mildware:.use() which is capable of handling all the methods//use() is async func
    use():1.api endpoint,2.arrow function(default arrow function takes 2 parameters in server 
    but this arrow func takes 3 parameters that are 1.req,2.res,3.next)
    next()-used to call another middle ware func
*/
/*
MiddleWare chaining:is possible using next()

*/
/*
Router:it is wrap library or feature of express
it allows to route data from one particular api to another api
for creating a router we use:express.router
*/

/*
session & cookies
session:contains few parameters like userID,subscription,logout time
session creation and session expiration
it are used to authenticate the user
through session id only,user do all the operations
adv version of sessio if jwt(java web token)
session is always set in the server side,cookie is set in the client side
cookie is local data storage.
cookie can stores thriughout life time of browser(permanent stores)
state gets deleted when the application is renderred or refreshed
session install:npm i express-session
*/

/*
=========================================Mongo DB==========================================
objecctID:6682456a,d9b373,2e00,4ec05e(12)
time stamp(4 bytes),machine id(3 bytes),process id(2 bytes),incrementing obj id(3 bytes)
query:request to data from db
we use find() to execute our query
we can specify the conditions inside the find()
============comparison operator============
$eq-equal;Eg:find({age:{comparision}})
$ne-not eqaul;Eg:find({age:{$eq:21}})
$gt-greater than
$lt-lesser than
$gte
$lte-lesser than or equal
$in-just like in python(only in array)
$nin-not in(only in aray)
=====================logical operators==========================
$and
$or
$not
$nor
=================================================================
db.student.insertMany([{
    _id:1,
    name:"ravi",
    age:21,
    address:{
        city:"vjy",
        state:"AP",
        pincode:54001
    }      
},
{
    _id:2,
        name:"jignesh",
    age:20,
    address:{
        city:"man",
        state:"AP",
        pincode:540002
    }
}
])
db.student.find({age:{$lte:21}})
============================crud(create,read,update,delete) operation=================
Read operation:find();Eg:db.collection_name.find() #db is a pointer
.find({age:{$eq:20}})
Update:update()                      
1.updateOne()Eg:db.student.updateOne({name:"Ram"},{$set:{age:18}})
2.UpdateMany();Eg:db.student.updateMany({})
3.ReplaceOne():replaceOne({name:"raju"},{name:"ravi",age:26,percent:67.07})
Delete:
1.deleteOne();Eg:deleteOne(takes filter as parameter),deleteOne({name:"ram"})
2.deleteMany();Eg:deleteMany({name:{$eq:21}})
==================================================================================
getIndexes():gets id's
cursor():is a internal pointer which is capable of storing queries
Eg:creation of cursor:var_name=query
.pretty():converts data into json
.count()->no.of documents
limit(value)->limits no.of documents to be render
.sort({feild_name:1})-for ascending
===============mongoose=================
is a library allws me to connect my express app to mongoDB
schema(structure or blueprint)
*/
/*
======================================RESTFULL API'S=======================================
rest api:calls from the server (one request from client only)
post,get,delete,patch,put-rest api's
it works on the request method called http
uses a technique called (SOAP)simple object access protocal
the reaponse will be in html,json,xml,any kind of dataset
in rest api calls only one thing can be work (synchronous)
*/
/*
==========================GraphQL=================================
doesn't run express server ,runs on integrated server apollo server
we process gql queries through resolvers
resolvers are the func components of gql which preprocess the query
resolvers contains 3 parameters : parent,arguments,context
parent:from where we fetching the data
arguments:which are queries which are passed through resolvers which processes the particular schema
context:allows me to share the data across multiple resources
mutations:used to change the data
================subscriptions:is used to listen to the data live(right now) or (real time update)========
in notification scenario we use subscription,score updates
in subscription we use web sockets for data live
web sockets always listens
it is used for real time data updation
defining:type subscription
=========================pagination:breaking down bigger data into smaller chunks==============================
eg:pages in website(1,2,3,..)
can be performed by 2 paramters limit and offset which is passed in the form a query
*/
/*
========================================================Password Hashing================================
// Hash the password before updating the user
        const hashedPassword = await bcrypt.hash(password, 10);//A value of 10 is generally considered secure and performant for most applications.
        npm install bcrypt//for installation
*/
/*
axios allows to perform http methods it can use on react,node and express
server doesn't allow response bcz they are two diff origins (3000 and 3001) for security
for this we use cors origin
*/
/*
===============================DEVOPS================================================
DOCKER:is a tool which is a container management tool (or) container technology tool(to containerize the application)
it known as Paas(platform as a service)
the container is stored in docker-hub
Components of DOCKER:
1.docker engine:manages multiple containers together(mostly useful for testing and deployment i.e app should be run on other os)
inside docker engine we have docker-image:(similar vm)contains infrastructure without containg a physical
all these are run through dockerfile
docker running in my local system
*/
/*
========================================GITHUB(online code repository)========================================
code will stored in 2 locations 1.local 2.copy of code in the repository
main purpose of github is version control platform
repository(code storing) in cloud
repository contains many branches contains one main branch is(main)
2 actions 1.push(from local computer to main) 2.pull(from main to local computer)
we use branches mainly for version control and staging
*/
/*
=========================GITHIB ACTIONS===================
1.pull
2.push
3.merge
4.revert
============================================CICD(continous integration and continous deployment) pipieling tools==================
it is possible through pipeling tools(junkeans or github actions)
prototype(stage 1)
    |
development(stage 2)
    |
testing (stage 3)
    |
deployment(stage 4)
-----------------------------------------------------------
for github automatic actions we have to use personal access(pat) token each and every user has a unique pat

--------------JEST(js testing framework)-----------
it is basically used for unit testing
in it we create set of functions takes input in the form of units
for install cmd:npm --save-dev jest
we are using apollo-server so we have to install supertest cmd:npm install supertest
---------------------------------------------------
yml(type of markup lang it contains execution process)
DevOps(development operations)
development tools(docker,kubernetes,cloud aws ,azure)
Operation tools(scrum tools,agile methodology)
*/
/*
=========================================TESTING=============================================
Black Box testing and White Box testing
Types:unit testing,integration testing,system testing,acceptance testing,performance testing,security testing,usalibity testing
through supertest library we check yout hhtp requests
when we run the cmd:npm test. it will search for .test.js file(s)
in .test.js w toBe() for exact match
toEqual()->checks the value in an array
toBeNull()->null only
done:is a callback parameter,checks test case is completed or not only applicable on async functions
Mock functions and Modules: centrakize or isolate the complete unit or functions or  module
this allows us to mock a function i.e that we don't use actual function(eg:validating password)
this can be acheived by jest.fn()
Mock modules:using jest.mock()
======================Setup and Teardown===============
in jest allows me to setup and test my environment
beforeAll()->test my environmet(env) before executing any other test cases
afterEach()->executes the env after every test cases executed
beforeEach()->allows me to execute env before executing every test cases
afterAll()->similar to beforeAll() 
fire events-allows to create components with out human intervention
------------------------------------Integration Testing-------------------------------------------
integrate jest with express
??????????????????????????????????????????????????????????????????????????????????????????????????
creating pipeline
create run-jest-test.yml file
*/
/*
========================================CYPRESS===============================================================
it is used for end-end testing library(functionality of testing)
it is dodne in the last phase after development
functionality of a app depends of UI/UX
end-end to testing tools-cypress(js framework base e2e),selenium,webint etc
cypress folder->conatins cypress library
under it fixtures folder:it stores testing data(using json we store data)
 "" e2e /- cypress testing files [filename].cy.js
 "" plugins/- custom plugins like google auth,facebook auth etc(login authentiication)
 "" support/- external files
in order to handle all above file we have to use config file:cypress.config.js
-----------basic commands in cypress----------
every cmd starts with cy
cy.click()-for clicking button,url
cy.get():css- id,class name,types,tag
cy.type()-to enter input
cy.visit()-to visit url (to visit url we can use visit() or click())
cy.contains()-checks if a text is presenting in the document
Testing components:
cy.describe()-used to describe a group of test cases
it()-to define a test case(is used in cypress like test() in jest)
cy.log()-log something into the console
cypress allows me to test in 2 ways 1.GUI 2.CLI
cmd : npx cypress open (to run on gui)
cmd:npx cypress run(to run cli)
we have Hook functions on cypress
before()-run a test before all test cases
beforeEach()-run a test before running every test case
after()-run a test case after all test cases
afterEach()-run a test case after each test case
===================Cypress Assertion===============
assertions is a function in cypress which is used to validate behaviour of a functionality
should():takes 2 parameters 1.assertion,2.value
======================AWS=========================================
OSI(open system inter-connection)-(7 layers)used to connect to another os.
it provides a cloud infrastructure provider(SaaS{EC2,S3,Dynamo,lambda})
EC2-Elastic Computing Cloud,provides us a cloud infrastructure allow me to run virtual machine on it
8 core- 8 process run simultaneously 
1GB RAM,10GB ROM,8 threads in free tier aws
with these infrastructure we create a os
Vertical and Horizontal Scaling-vertical:adding extra space(RAM,ROM)
Elastic - increases and decreases infrasture automaticaaly
every EC2 has instnace(obj) which is capable of running cloud infrastructure
Eg:EC2 create 2 instances one for os(this os will be access through AWS CLI or SSH(secure shell)),
when we are installing os,os image is imp coatains kernel ,boost up software
*/
/*
s3 buckets:which can store anything like pdf's,images,documents etc
subscriptions:type of query on gql,update the data in real time using web scokets 
install(in server):npm install graphql-ws ws graphql-subscriptions 
type Message{
    id:ID!,
    message:String!
}
type Subscription{
    sendMessage:Message
}
in resolvers.js
Subscription:{//sunscription is a obj
    sendMessage:{
    subscribe:()=>{
        User.insertOne()
        }
    }
},

*/

/* command
    ls
    mkdir 
    cd
    cat >file_name//to create file
*/