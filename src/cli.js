#!/usr/bin/env node

const run = require('./index');

async function start() {
    try {
        await run();
    } catch(err) {
        console.error(`Error: ${err.message}`);
        return -1;
    }
}

start();
