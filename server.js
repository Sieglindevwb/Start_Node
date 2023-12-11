const fs = require('fs');
const path = require('path');
const os = require('os');

//creating files
try {
  const indexFilePath = path.join(__dirname, 'index.html');
  fs.writeFileSync(
    indexFilePath,
    '<!DOCTYPE html><html><head><title>Homepage Client</title><link rel= "stylesheet" href= "style.css"></head><body><h1>Hello, World!</h1></body></html>'
  );
  console.log('Succesfully created index page');

  const cssFilePath = path.join(__dirname, 'style.css');
  fs.writeFileSync(cssFilePath, 'body {background-color: pink}');
  console.log('Succefully created css file');
} catch (error) {
  console.error('Error creating files', error);
}

const contactFolderPath = path.join(__dirname, 'contact');
try {
  const indexFilePath = path.join(contactFolderPath, 'index.html');
  fs.writeFileSync(
    indexFilePath,
    '<!DOCTYPE html><html><head><title>Contact page</title><link rel= "stylesheet" href= "style.css"></head><body><h1>Hello, Contact here!</h1></body></html>'
  );
  console.log('Succesfully created index page in the contact folder');

  const cssFilePath = path.join(contactFolderPath, 'style.css');
  fs.writeFileSync(cssFilePath, 'body {background-color: blue}');
  console.log('Succefully created css file in contact page');
} catch (error) {
  console.error('Error creating contact folder', error);
}

const aboutFolderPath = path.join(__dirname, 'about');
try {
  const indexFilePath = path.join(aboutFolderPath, 'index.html');
  fs.writeFileSync(
    indexFilePath,
    '<!DOCTYPE html><html><head><title>About page</title><link rel= "stylesheet" href= "style.css"></head><body><h1>Hello, About us here</h1></body></html>'
  );
  console.log('Succesfully created index page in the about folder');

  const cssFilePath = path.join(aboutFolderPath, 'style.css');
  fs.writeFileSync(cssFilePath, 'body {background-color: red}');
  console.log('Succefully created css file in about us page');
} catch (error) {
  console.error('error creating about folder');
}

const blogFolderPath = path.join(__dirname, 'blog');
try {
  const indexFilePath = path.join(blogFolderPath, 'index.html');
  fs.writeFileSync(
    indexFilePath,
    '<!DOCTYPE html><html><head><title>Blog page</title><link rel= "stylesheet" href= "style.css"></head><body><h1>Hello, bloggers</h1></body></html>'
  );
  console.log('Succesfully created index page in the blog folder');

  const cssFilePath = path.join(blogFolderPath, 'style.css');
  fs.writeFileSync(cssFilePath, 'body {background-color: brown}');
  console.log('Succefully created css file in blog us page');
} catch (error) {
  console.error('error creating blog folder');
}

//created the os
const osName = os.type();
