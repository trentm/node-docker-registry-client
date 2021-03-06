#!/usr/bin/env node

/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

/*
 * Copyright (c) 2015, Joyent, Inc.
 */

/*
 * An example showing how a repo string is parsed.
 */

var drc = require('../');

if (process.argv.length < 2) {
    console.error(
        'usage:\n' +
        '    node examples/parseRepo.js [INDEX/]REPO\n');
    process.exit(2);

}

var repo = drc.parseRepo(process.argv[2]);
console.log(JSON.stringify(repo, null, 4));
