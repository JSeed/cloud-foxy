#!/usr/bin/env node

const run = require('./index');

async function start() {
    try {
        run();
    } catch(err) {
        console.error(`Error: ${err}`);
        return -1;
    }
}

start();
