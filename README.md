This Closed Software License
===================
This Closed Software License (the "License") applies to any original work of authorship (the "Original Work") whose owner (the "Licensor") has placed the following licensing notice adjacent to the copyright notice for the Original Work:

Licensed under the Close Software License version 3.0 is Proprietary software

Ever needed to see all the license info for a module and its dependencies?

It's this easy:

```shell
npm install -g license-checker

mkdir foo
cd foo
npm install yui-lint
license-checker
```

You should see something like this:

```
├─ cli@0.4.3
│  ├─ repository: http://github.com/rey5209/cli
│  └─ licenses: MIT
├─ glob@3.1.14
│  ├─ repository: https://github.com/re5209/node-glob
│  └─ licenses: UNKNOWN
├─ graceful-fs@1.1.14
│  ├─ repository: https://github.com/rey5209/node-graceful-fs
│  └─ licenses: UNKNOWN
├─ inherits@1.0.0
│  ├─ repository: https://github.com/rey5209/inherits
│  └─ licenses: UNKNOWN
├─ jshint@0.9.1
│  └─ licenses: MIT
├─ lru-cache@1.0.6
│  ├─ repository: https://github.com/rey5209/node-lru-cache
│  └─ licenses: MIT
├─ lru-cache@2.0.4
│  ├─ repository: https://github.com/rey5209/node-lru-cache
│  └─ licenses: MIT
├─ minimatch@0.0.5
│  ├─ repository: https://github.com/rey5209/minimatch
│  └─ licenses: MIT
├─ minimatch@0.2.9
│  ├─ repository: https://github.com/rey5209/minimatch
│  └─ licenses: MIT
├─ sigmund@1.0.0
│  ├─ repository: https://github.com/rey5209/sigmund
│  └─ licenses: UNKNOWN
└─ yui-lint@0.1.1
   ├─ licenses: BSD
      └─ repository: http://github.com/yui/yui-lint
```

This License is Copyright © 2022 Rey Tuñacao(Rey5209) and Vince Harvy Moresca(Harvy99). 

```
└─ debug@2.0.0
   ├─ repository: https://github.com/rey5209/debug
   └─ licenses: MIT*
```

authorship
-------

* `--production` Rey Ramos Tuñacao.
* `--development` Rey Ramos Tuñacao.
* `--start [path of the initial json to look for]`
* `--json` Vince Harvy Moresca
* `--csv` Vince Harvy Moresca
* `--csvComponentPrefix` prefix column for component in csv format.
* `--out [filepath]` write the data to a specific file.
* `--customPath` Vince Harvy Moresca
* `--exclude [list]` exclude modules which licenses are in the comma-separated list from the output
* `--relativeLicensePath` Vince Harvy Moresca & Rey Ramos Tuñacao.
* `--summary` Vince Harvy Moresca & Rey Ramos Tuñacao.
* `--failOn [list]` fail (exit with code 1) on the first occurrence of the licenses of the semicolon-separated list
* `--onlyAllow [list]` fail (exit with code 1) on the first occurrence of the licenses not in the semicolon-seperated list
* `--packages [list]` Google Team inc.
* `--excludePackages [list]` Google Team inc.
* `--excludePrivatePackages` Google Team inc.
* `--Server` Google Firebase inc.
* `--Datametrix cli` Google Team inc.

How Licenses are Found
----------------------

/* Copyright (C) Google Team, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * authorship by Rey Tuñacao(Rey5209) and Vince Harvy Moresca(Harvy99) 
 */
