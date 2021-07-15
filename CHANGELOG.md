# Changelog

All notable changes to this project will be documented in this file.

### [3.2.6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.2.5...v3.2.6) (2021-07-15)


### Bug Fixes

* **package:** move `pino-pretty` to production dependency list ([#295](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/295)) ([a474d00](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a474d00ec4e198f293eefe29f88f1f178ecaf1eb))


### Improvements

* **routes/healthcheck:** do not treat routes as plugin ([b2bdbce](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b2bdbcece6523e77ac1c713ebef87e03b9c878a9))
* **routes/healthcheck:** move `Accept` header handling back to hook ([51d6db9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/51d6db9b518da10e002361ca134af6908e5183d3))
* **server:** use full media type for `Accept` header filtering ([db66901](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/db669010643f68f17268643347bb0960da568a56))


### Miscellaneous

* change mentions of "MIME type" to "media type" ([#290](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/290)) ([f114fc8](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/f114fc80a5323154b58d74759780612b18166e86))
* **env.template:** use double quotes ([e00a4c9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e00a4c96f2f356e3beeaa3e455062bccb78811da))
* **server:** sort plugin registering alphabetically ascending ([06a7de5](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/06a7de54218cb8ca51c9241fda23450d83b4c040))
* **test_resources:** fix name of test requests file ([e53bcb4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e53bcb4522cdbeefb536b3859bb98aa9bbcd9e99))
* **test_resources:** minor header tweaks ([add6319](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/add631908938d42a4aed86de89075f32c9e31357))
* **test_resources:** update test calls with new headers ([3bc9915](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3bc9915f96e2641df061af7139e9884fe972fdae))
* update plugin metadata for server dependency graph ([1ff74b6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/1ff74b6353b5d533936f4ee52c331212ba40345a))

### [3.2.5](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.2.4...v3.2.5) (2021-07-12)


### Bug Fixes

* **routes:** `Accept` header handling encapsulation ([#282](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/282)) ([8e780a7](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8e780a7ef06a8310bc1ef7e276d5bbd3233261b5))


### Miscellaneous

* **vscode:** remove user space config setting ([63df0ad](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/63df0ad2035b74500e25b40e2f4fecdba281fd79))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 35.4.2 to 35.4.3 ([fecb242](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/fecb242588f0dc917809c41e131f440ec75300da))
* **deps-dev:** bump nodemon from 2.0.10 to 2.0.12 ([9a44dd6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/9a44dd6de6920b98cd7a8876a34bba0c25f4e957))
* **deps:** bump env-schema from 3.0.1 to 3.1.0 ([8f99ce3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8f99ce392cd62eec31dba9003824a54a04c44d6d))
* **deps:** bump fastify-swagger from 4.8.2 to 4.8.3 ([c1d7a9c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c1d7a9c5beafbf2b62f1f519f813fcfe36d6f2d3))
* **deps:** bump fluent-json-schema from 3.0.0 to 3.0.1 ([472aa2d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/472aa2de8e27c2674f48fedc8d9303921df321d5))
* **deps:** bump pino from 6.11.3 to 6.12.0 ([2cb11e2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/2cb11e2a72a78fac4f2c9141ecd50a67b20b7278))

### [3.2.4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.2.3...v3.2.4) (2021-07-09)


### Bug Fixes

* **routes/healthcheck:** add `Accept` request header handling ([a9d7a48](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a9d7a487086eedbe73330f4ee4e64b94d9bac2ba))


### Miscellaneous

* **server:** clarify on accept request header handling ([3caae5c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3caae5c8c355d1506b78a860ed2e804ef511dc96))
* **vscode:** disable redhat telemetry ([6b52968](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/6b529687f6085afdb4afaa86d018bd27348e16d9))


### Dependencies

* **deps-dev:** bump autocannon from 7.3.0 to 7.4.0 ([1319036](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/131903606f9f38221f7788fc5f29a4a7621e9cca))
* **deps-dev:** bump eslint from 7.29.0 to 7.30.0 ([b532323](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b53232351a1a5d6884da67e9359bff741fc0dff8))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.4.0 to 35.4.1 ([b3a6160](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b3a6160ecf8da262bc0a6c3302fe5b6f0e038520))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.4.1 to 35.4.2 ([61e2542](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/61e2542a2998f896fe77fbca13f1669716c0672f))
* **deps-dev:** bump husky from 6.0.0 to 7.0.0 ([3fe468f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3fe468f49c1d064b93ad111aa81e11a0fea872bd))
* **deps-dev:** bump husky from 7.0.0 to 7.0.1 ([8d4ee30](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8d4ee30147f0fc541aab28bce02f586fbe33d315))
* **deps-dev:** bump jest from 27.0.5 to 27.0.6 ([b24365e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b24365e0b418e41da8610d3ae1239db7e46d694c))
* **deps-dev:** bump nodemon from 2.0.7 to 2.0.9 ([7c3471d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7c3471d5bdc6b13a9bec23d3d7d56f4064285b82))
* **deps-dev:** bump nodemon from 2.0.9 to 2.0.10 ([b7b589d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b7b589dd5595c192cd683b89928731e2a1d7a768))
* **deps-dev:** bump pino-pretty from 5.0.2 to 5.1.0 ([b6e26fc](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b6e26fca3b7cedc663fc1d62d1b61adffa1f16d9))
* **deps-dev:** bump pino-pretty from 5.1.0 to 5.1.1 ([17455d4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/17455d40a8d7a47d61283dc148e6e45de707ffd6))
* **deps-dev:** bump prettier from 2.3.1 to 2.3.2 ([b14ce27](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b14ce275f7bb6d8b4fb0fbce8e1ba930c23e953c))
* **deps:** bump actions/setup-node from 2.1.5 to 2.2.0 ([37155d8](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/37155d813240f9bc86914182eff7d4115ed2599e))
* **deps:** bump coverallsapp/github-action from 1.1.2 to 1.1.3 ([e77554c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e77554c2145d42eed2d17b625db772a959699336))
* **deps:** bump fastify from 3.18.0 to 3.18.1 ([074c9dd](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/074c9dd720bad855e46a03eade780440ed99b4f5))
* **deps:** bump fastify from 3.18.1 to 3.19.0 ([247fc5c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/247fc5c8474e4f47295e228be65ef355162e4bfa))
* **deps:** bump fastify-helmet from 5.3.1 to 5.3.2 ([3df5f6c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3df5f6c29c1467838b8ffe06d7a289a0e35c7e18))
* **deps:** bump fastify-swagger from 4.8.0 to 4.8.2 ([add1e99](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/add1e998e7cbd0272bffcaae7262c32f8113be98))

### [3.2.3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.2.2...v3.2.3) (2021-06-22)


### Bug Fixes

* **server:** increase `Strict-Transport-Security` max age to 365 days ([052fb0f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/052fb0fc663381a007dcd782cf9da2e08b104402))
* **server:** revert `Referrer-Policy` directives to "no-referrer" only ([c0e5017](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c0e5017dbfaced7ec65ca46f5f4807869d086279))
* **server:** use stricter `Content-Security-Policy` values ([888ea32](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/888ea32e4bac43ce508a0c47570c00ffd7c65c99))


### Continuous Integration

* **link-check:** reduce frequency from weekly to monthly ([#251](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/251)) ([2223459](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/2223459640c31b0a17bdf19b10d282bce633f6c7))


### Miscellaneous

* **server:** clarify on what each registered plugin does ([439341a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/439341a6516e23842862bf57317f7ae8da78e08f))


### Dependencies

* **deps-dev:** bump eslint from 7.28.0 to 7.29.0 ([698d4eb](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/698d4eb21aec6f136a022bf31145f3daaa6961cb))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.3.0 to 35.4.0 ([6d0b65e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/6d0b65eccc0e3d4f4ee1d9244b9e504556038611))
* **deps-dev:** bump jest from 27.0.4 to 27.0.5 ([4b540f1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4b540f1314c8e88d66d56b125b32c7c6cda6b3eb))
* **deps:** bump fastify-autoload from 3.7.1 to 3.8.0 ([0a18dab](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0a18dab0cc7fbd3492d2420b116e1f6240579a7c))
* **deps:** bump fastify-bearer-auth from 5.1.0 to 6.0.0 ([feda524](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/feda52480af1d0ab8e95fdc828db8b9d7fdb3ae3))
* **deps:** bump fastify-swagger from 4.7.0 to 4.8.0 ([46b3f97](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/46b3f978a497ae250f46255c61bc24595834e806))
* **deps:** bump under-pressure from 5.6.0 to 5.7.0 ([651c05c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/651c05cf39d355539c3885d5f7b3dcfe076cf089))

### [3.2.2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.2.1...v3.2.2) (2021-06-17)


### Dependencies

* **deps:** bump actions/upload-artifact from 2.2.3 to 2.2.4 ([c8c2225](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c8c22251891fb140194f3fa528f3f627c1a51d86))
* **deps:** bump fastify from 3.17.0 to 3.18.0 ([68d4858](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/68d48580aaabd2ed8a22bb207a1f56ccf8476a75))
* **deps:** bump fastify-disablecache from 2.0.1 to 2.0.2 ([12edee1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/12edee15ee6e6b67eb26daf22d81d6749f5b4b0e))

### [3.2.1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.2.0...v3.2.1) (2021-06-16)


### Bug Fixes

* **config:** prettyprint conditional ([#242](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/242)) ([fddc5cc](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/fddc5ccc6c93aa3a95e3f99d461b066db0080c4b))


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 35.1.3 to 35.3.0 ([e46c14c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e46c14cbf51f78537d7b1d7f84790391d00c8fe3))
* **deps:** bump fastify-compress from 3.5.0 to 3.6.0 ([cf43d57](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/cf43d578bc6847efe046a796f5e9fdf6bdeb9a32))
* **deps:** bump fastify-disablecache from 2.0.0 to 2.0.1 ([a3375b6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a3375b67c426f34630621ff6d50370975bd6a951))

## [3.2.0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.1.3...v3.2.0) (2021-06-11)


### Features

* **server:** add content-encoding support ([#239](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/239)) ([174477e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/174477ea3cd014a62262a855e3b86bb4330b1ad3))


### Dependencies

* **deps:** bump mssql from 7.1.0 to 7.1.3 ([521b08c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/521b08c5353b9e0897ddb93df34a323213bcfb8e))

### [3.1.3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.1.2...v3.1.3) (2021-06-09)


### Bug Fixes

* **server:** remove swagger from csp for all routes apart from doc route ([dbdbf3b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/dbdbf3bf5fdeefb9fdee7c0d9807c5811d132106))
* **server:** set `frame-ancestors` csp to `'none'`; add `child-src` csp ([debc025](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/debc025c0a0fb5910915bd7e36a87f06202a5dde))


### Dependencies

* **deps-dev:** bump eslint from 7.27.0 to 7.28.0 ([8dad2f3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8dad2f30fc564944d119ff4bdb907535e16511c2))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.1.2 to 35.1.3 ([c78756c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c78756c476fa73676153950e0f85ec0cc81efaf5))
* **deps-dev:** bump jest from 27.0.3 to 27.0.4 ([1816d23](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/1816d23d8515a9d57385548c7147bece96c7e8e0))
* **deps-dev:** bump prettier from 2.3.0 to 2.3.1 ([4f1a013](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4f1a013199f6c5a869e70e62b18f98b48bf858ce))
* **deps:** bump glob-parent from 5.1.1 to 5.1.2 ([130e5b8](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/130e5b809f2e99637e36d092ed99f688b36eef83))
* **deps:** bump normalize-url from 4.5.0 to 4.5.1 ([d65535d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d65535dbc2bf90de5ad266f3ee19f2a08927c1c9))
* **deps:** bump trim-newlines from 3.0.0 to 3.0.1 ([b20a9a2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b20a9a2eb1e56144b789dbc07c95a8fc157c8ddd))

### [3.1.2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.1.1...v3.1.2) (2021-06-02)


### Continuous Integration

* remove redundant docker build job ([a919aab](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a919aab356e54b775688a3a47476449027cd9312))


### Documentation

* **readme:** add note regarding using `docker compose up` ([fd09508](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/fd09508754f4769d1cc28d5d0f1ddbf9dad30e17))
* **readme:** grammar and wordiness fixes ([a5b9987](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a5b998710ce382e81ca4b9c7b11ee38bc20340f0))
* **readme:** update contributing section ([7ab1851](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7ab1851e9641547a53000454f5643e6996bdf03f))


### Dependencies

* **deps-dev:** bump eslint-plugin-import from 2.23.3 to 2.23.4 ([72ebee6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/72ebee6ea45b59b0a1e85a49d0167913ce83264a))
* **deps-dev:** bump eslint-plugin-jsdoc from 35.0.0 to 35.1.2 ([56dd3f8](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/56dd3f8fbdc1b1b362b3e4b4fb8c5f756f90866d))
* **deps-dev:** bump jest from 27.0.1 to 27.0.3 ([20491c0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/20491c0d5f418e978109d80e0419a847df805965))
* **deps-dev:** bump pino-pretty from 5.0.0 to 5.0.1 ([3211cf9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3211cf985565135231155f452dc79d34b70b0cec))
* **deps-dev:** bump pino-pretty from 5.0.1 to 5.0.2 ([06e8fa2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/06e8fa2a5c5587255d6f4fea05623410e8a5ba49))
* **deps:** bump actions/cache from 2.1.5 to 2.1.6 ([fa2f514](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/fa2f514e08fe738e4ae2d9285c9fb1cd36c1bdee))
* **deps:** bump fastify from 3.16.2 to 3.17.0 ([11e1d6d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/11e1d6d1e9cef0363f7d48f53b45c6e7c63e5d9f))
* **docker-compose:** use oci labels ([e60f447](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e60f447632ee5ac59d2339802d9e91f533830fed))
* **dockerignore:** add test and dev files ([9cb7808](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/9cb78089f5022f85b83c8d9e1e6e95ed0f64f522))
* **docker:** update workdir; install curl ([bfa9067](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/bfa90671c0956eb05e2050ed35e0dd33224106f9))
* **docker:** use correct curl version ([5035e9b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/5035e9be6bac7075581da7207e905787873bc99e))
* **docker:** use native logging, healthcheck, restart and res handling ([68128b2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/68128b2a6a3edbfcb40b8aab9ed56730f2c251ee))

### [3.1.1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.1.0...v3.1.1) (2021-05-27)


### Miscellaneous

* **workflows:** remove `stale.yml` ([ba47733](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/ba477335d6f93076a689da57e5c3b72eb51f11b8))


### Dependencies

* **deps-dev:** bump jest from 27.0.0 to 27.0.1 ([34a9ecc](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/34a9eccf56a09e877acb111f5cbad5219618fb24))
* **deps-dev:** bump pino-pretty from 4.8.0 to 5.0.0 ([5d2d881](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/5d2d88145a6dfb3d09d31d768156eda4eba82c33))
* **deps:** bump fastify from 3.15.1 to 3.16.2 ([c12e11f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c12e11fef30871133fdd71d9861ebbe3470bc9e3))


### Continuous Integration

* **cd:** move perf optimizations and refactoring into same section ([659c4c0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/659c4c03c2ec2dff21aaad813b51f2b84ad46f6b))

## [3.1.0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.0.3...v3.1.0) (2021-05-25)


### Features

* **routes/documents/register:** support multiple `lastModified` params ([0116bf1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0116bf1b8f4432bd4841e1a95f8be263d06c4f8e))


### Continuous Integration

* fix key usage in `action/setup-node` ([b47430c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b47430ca6a4f5fd8b85b00da923843a3de5128ce))


### Miscellaneous

* **ci:** replace `node-version` key with shorter `node` ([#198](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/198)) ([1ea352d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/1ea352de12c0e04357744c39f1b52ec528aa73d0))
* **dockerfile:** consolidate consecutive `run` instructions ([#200](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/200)) ([d50ada2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d50ada20296b3028d40293170178eaf1f886d530))
* **env:** remove pre-filled process load env values in template ([#203](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/203)) ([8ec0afc](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8ec0afc604ae3a314b66e0f13ef7a90f6abd98a9))
* **routes/documents/register:** remove redundant branches ([db40ded](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/db40ded640e06130e37d17f1d83e976ea4f777ae))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 12.1.1 to 12.1.4 ([b37b72e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b37b72ee00405a9fee9fc9bcc2a66b3c2610e6b2))
* **deps-dev:** bump @commitlint/config-conventional ([3f7c1d6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3f7c1d6a1a4ba11d516caa9eb2b3e51826c2c2bc))
* **deps-dev:** bump eslint from 7.26.0 to 7.27.0 ([cc58fbc](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/cc58fbcbb4db2cfaab87e4f9523aee81baaff4e0))
* **deps-dev:** bump eslint-plugin-import from 2.22.1 to 2.23.3 ([caf4b0c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/caf4b0c1f78b246b097de6a17914dc95ab074073))
* **deps-dev:** bump eslint-plugin-jsdoc from 34.0.1 to 35.0.0 ([17e3f8f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/17e3f8fa669636488127246e00f262ea27edd0db))
* **deps-dev:** bump jest from 26.6.3 to 27.0.0 ([31d1211](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/31d121123de22f40c51f87ac33abf0d6b746a03a))
* **deps:** bump actions/stale from 3.0.18 to 3.0.19 ([4014ec6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4014ec6d3aeeb5be1fbe6f1143c81b024eaf29b5))
* **deps:** bump dotenv from 9.0.2 to 10.0.0 ([59fed6f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/59fed6f5fde32d9d9e53e09c60b079d8b65f3c60))
* **deps:** bump mssql from 7.0.0 to 7.1.0 ([7216d3a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7216d3a36454a55205b1cf12c9538ec293276732))
* **deps:** bump wagoid/commitlint-github-action from 3.1.3 to 3.1.4 ([a9db0c2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a9db0c2cb7613154928a66e7fddca2d6bb12e03c))

### [3.0.3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.0.2...v3.0.3) (2021-05-11)


### Bug Fixes

* **config:** `LOG_LEVEL` env variable validation ([d36fd1f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d36fd1f528f4c950738e341b98ad482b4ed02fd7))


### Continuous Integration

* **link-check:** run once a week on monday ([cf86213](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/cf86213b418188b07aac375f22dbf3ab811bbed3))


### Dependencies

* **deps-dev:** bump autocannon from 7.2.0 to 7.3.0 ([77554b3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/77554b3955debc6aaffaec5681e750267f5300c7))
* **deps-dev:** bump eslint from 7.25.0 to 7.26.0 ([34efbf4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/34efbf4aa6c9108c4e5e4ead76a11d64bbb0670d))
* **deps-dev:** bump eslint-plugin-jsdoc from 33.1.0 to 34.0.1 ([3f67485](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3f6748596395cebacf1604bbfc69245d5e4fe8a9))
* **deps-dev:** bump pino-pretty from 4.7.1 to 4.8.0 ([ae530f9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/ae530f9a898ca5476c5b82e41b76fd1db8f39e1b))
* **deps-dev:** bump prettier from 2.2.1 to 2.3.0 ([#194](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/194)) ([647a42b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/647a42b948be2344f4dfd11853bc47a95c025899))
* **deps:** bump brpaz/hadolint-action from 1.4.0 to 1.5.0 ([c5541fc](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c5541fccf93f0ee909966f0bdd458db829874b4e))
* **deps:** bump dotenv from 9.0.0 to 9.0.2 ([fadebb9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/fadebb95d3f97426eb8fffb10742bb868c35ad09))
* **deps:** bump fastify-cors from 6.0.0 to 6.0.1 ([c137f1e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c137f1e3eee988afa794b61a329cb982963203bc))
* **deps:** bump fluent-json-schema from 2.0.4 to 3.0.0 ([90feb81](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/90feb81a522601bdd6d6cdfc7090412ac8383401))
* **deps:** bump wagoid/commitlint-github-action from 3.1.1 to 3.1.3 ([85f04df](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/85f04df0254cbebc7551c256f8a3ed0aee0b77a9))

### [3.0.2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.0.1...v3.0.2) (2021-05-07)


### Dependencies

* **deps-dev:** bump eslint-plugin-jsdoc from 33.0.0 to 33.1.0 ([0676da0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0676da04e895a134e676c3019683d2bf9a15fa7c))
* **deps-dev:** bump glob from 7.1.6 to 7.1.7 ([4debfbc](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4debfbcd43e0dbb809dba54f061644a184bd5c1d))
* **deps:** bump dotenv from 8.2.0 to 9.0.0 ([84c74f5](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/84c74f55c4da20ddf23b78a124209e33ca76eea8))
* **deps:** bump fastify-floc-off from 1.0.0 to 1.0.1 ([f76dcb4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/f76dcb4904a10be3cd5b2e72a6b83b236297a653))
* **deps:** bump GoogleCloudPlatform/release-please-action ([7ff79b4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7ff79b4286ae856f8226ae7d999441bd2cd76ce1))
* **deps:** bump lodash from 4.17.20 to 4.17.21 ([6f37b8d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/6f37b8d7a6bf58f374b826107380c37cd67b2bd3))
* **deps:** bump mssql from 6.3.1 to 7.0.0 ([6eaca11](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/6eaca111d7ef4199a1828cec49a675d65afc2911))
* **deps:** bump wagoid/commitlint-github-action from v3.1.0 to v3.1.1 ([8854095](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/88540958a943bfd1fe2e10014cfaf92126115167))

### [3.0.1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v3.0.0...v3.0.1) (2021-05-04)


### Documentation

* **readme:** compress duplicate setup steps into a single section ([#173](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/173)) ([1d5c50d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/1d5c50df99992e6dd2972a2eeb0c8d147c0975f9))


### Dependencies

* **deps:** bump fastify from 3.15.0 to 3.15.1 ([ad964d6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/ad964d6a23e6b4d8e8ee689f4e5feaa27a853158))
* **deps:** bump GoogleCloudPlatform/release-please-action ([eba9923](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/eba99235ad3abf4f61e8dc0fc242e359da4d2b08))

## [3.0.0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v2.0.0...v3.0.0) (2021-04-30)


### ⚠ BREAKING CHANGES

* remove support for nodejs v10, as it is EOL as of 2021-04-30

### Features

* **config:** allow for rate and process limits to be user configured ([82d1ced](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/82d1ced102374baa588162022eb95f55230c92a3))
* **server:** add process-load/503 handling ([78aa4b4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/78aa4b482ce37c1e83da1524b40b246b532dabee))
* **server:** add rate limiter ([8d183cd](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8d183cdc3d2ad26c858570ffd287dff6381c5240))
* **server:** disable google floc support ([8dfce45](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8dfce4545754868e8eb53080b80460cbd94a6eca))


### Bug Fixes

* **config:** plugin defaults ([50c8b9c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/50c8b9c18abae56da9700e8c8d9140160b5068e3))
* **config:** re-add removed defaults ([13d1ff0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/13d1ff0b9538a752b2cbd97e91caf0db199f2ba7))
* **routes:** hide options routes from swagger docs ([08a1ae7](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/08a1ae7164727beca789e660017d76599fdc2af4))


### Miscellaneous

* **config:** remove redundant conditionals ([4d07d2e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4d07d2efd51d32dd420e55465cf653a6abf999d0))
* **env:** add whitespace ([3a48c7c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3a48c7c976d662d6234ac904d9e3799877f9f0a3))
* remove support for nodejs v10 ([53a5d81](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/53a5d81bdae3bc6a9d17baff483c30d2e1f767e0))
* **routes:** replace snakecase with camelcase ([9c9d1d6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/9c9d1d643c4414e981ee34c04c45430b45979dba))


### Continuous Integration

* add nodejs v16 to unit test matrix ([11d08c3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/11d08c340977dbd71de0acf5a45570a270c14992))
* do not run coveralls steps/jobs on forks ([7318ad9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7318ad9b0a269a1c90b1cce669b6c775118ac2a7))
* **link-check:** fix skip regex ([4089a2c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4089a2c4bca86b261a8a0d18c60bd9d7e448e885))
* **typoci:** add "pino" to excluded words ([57765fb](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/57765fbf137264ffb058f81fb9a3887e6cf95d3a))


### Documentation

* grammar and readability fixes ([e2b56ea](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e2b56eaf0e3037e2f3666b322526d17203f83940))


### Dependencies

* **deps-dev:** bump autocannon from 7.0.5 to 7.2.0 ([fdf4315](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/fdf4315dbd2f554d1170b1276c143adc7e6b193f))
* **deps-dev:** bump eslint from 7.23.0 to 7.25.0 ([1899a0a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/1899a0a2a9d02ff8a162e5c650081ae49375fd15))
* **deps-dev:** bump eslint-config-prettier from 8.1.0 to 8.3.0 ([f431b26](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/f431b26d0789ed327bf259d4a6e749106b0ad0e9))
* **deps-dev:** bump eslint-plugin-jest from 24.3.4 to 24.3.6 ([471f419](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/471f4195d14b0b58adb5eb9a4c4acb2d7ffa9056))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.3.0 to 33.0.0 ([80060da](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/80060da5038abbb91cabb487e13970c7eaf6b3d5))
* **deps-dev:** bump eslint-plugin-promise from 4.3.1 to 5.1.0 ([044600d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/044600da9585c6e43981fc10aa09e76b0a7c2fee))
* **deps-dev:** bump faker from 5.5.2 to 5.5.3 ([d13abb3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d13abb338b2081145884eb58927aa72042889756))
* **deps:** bump actions/cache from v2.1.4 to v2.1.5 ([7c1edee](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7c1edee4e8cb5b527d5854529503692b407dcc40))
* **deps:** bump actions/github-script from v3.1.1 to v4.0.2 ([45dd861](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/45dd861865abe83beeae7cbfa3df6737342b2220))
* **deps:** bump actions/upload-artifact from v2.2.2 to v2.2.3 ([19dc231](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/19dc23195219fca3c26f1968bca6564f1325c620))
* **deps:** bump brpaz/hadolint-action from v1.3.1 to v1.4.0 ([7b60048](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7b60048a2223b0834f05fa8adaf41812699d7afd))
* **deps:** bump fastify from 3.14.1 to 3.15.0 ([49ef354](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/49ef354224e8da18d45fb422d4b5a78d5c291778))
* **deps:** bump fastify-autoload from 3.6.0 to 3.7.1 ([584e0ce](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/584e0cec107ed97c69176e6764297c2cc197cfdd))
* **deps:** bump fastify-cors from 5.2.0 to 6.0.0 ([7b59a98](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/7b59a985cd52738622c99a152e407bba384a0223))
* **deps:** bump fastify-disablecache from 1.0.6 to 2.0.0 ([416fef3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/416fef378c48fbd592ed7217511fdff3a988dbb4))
* **deps:** bump fastify-swagger from 4.5.0 to 4.7.0 ([864bfb0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/864bfb0738f8f9af82ea08b3fde87e8843edec36))
* **deps:** bump GoogleCloudPlatform/release-please-action ([0c84fc9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0c84fc9cea0743497778f0fcbac73e8632ea1e19))
* **deps:** bump pino from 6.11.2 to 6.11.3 ([0e761ed](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0e761ed9a59b6394f388159fcc86cb56578633b6))
* **deps:** bump typoci/spellcheck-action from v0.4.0 to v1.1.0 ([514fe6f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/514fe6f6255f2ce327f331e07d451f99268e659a))

## [2.0.0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v1.4.0...v2.0.0) (2021-04-06)


### ⚠ BREAKING CHANGES

* `CORS_METHODS` env variable removed

### Features

* add support for cors preflight requests ([c27d9f5](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c27d9f5e704e260232f6a76c0778dc07bb184fba))
* **config:** support `access-control-allow-credentials` cors header ([860ee55](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/860ee556e30f410814450eacb51412968444fc6f))


### Bug Fixes

* **config:** comma-delimited string support for cors origin value ([883fe36](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/883fe3668bae2b174ad587723eb5bb2d8d805493))
* **config:** remove cors_methods from schema validation ([28a2f08](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/28a2f0812e9b08cc98e7c4ad514a5992be2d0406))


### Miscellaneous

* **env.template:** add default cors settings ([a98703b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a98703bbdb13df311fdc1715b69b5cf876856407))
* **env.template:** add note discouraging reflecting cors origin ([155fec3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/155fec3aa95d5bf117cbd0d60ab71e3587a9e011))
* **env.template:** remove bad example ([6bb158a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/6bb158a5578ec0c6214bb6e57f8d4146f64abd11))
* **tests:** standardise test file names ([92cf197](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/92cf19760f388c1811ccc9f78564ce5b89b2f385))


### Continuous Integration

* add cleanup-run job ([d48eb7a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d48eb7a667edfb02f59b647827426585b312922f))


### Dependencies

* **deps-dev:** bump @commitlint/cli from 12.0.1 to 12.1.1 ([e35fa57](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e35fa577e17e07608232b5708e7ab4e03f72e5ac))
* **deps-dev:** bump @commitlint/config-conventional ([4e6b57e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4e6b57efe425a9d3014e332db170d0265d8b6252))
* **deps-dev:** bump eslint-plugin-jest from 24.3.2 to 24.3.4 ([1b09191](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/1b091915bead66c753735ad14a218dd98e8e1aab))
* **deps-dev:** bump faker from 5.5.1 to 5.5.2 ([99d3887](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/99d38873f22d8d4bd0f98f9fd442157ffc09b3a2))
* **deps:** bump actions/github-script from v3.1.0 to v3.1.1 ([14972f0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/14972f023f4ab7fd504dec9c5ad79d50c2424f7f))
* **deps:** bump fastify-swagger from 4.4.2 to 4.5.0 ([1b77758](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/1b777581c179c2ad253e43e08a5a5f777faaafbf))
* **deps:** bump wagoid/commitlint-github-action from v3.0.6 to v3.1.0 ([cf782ae](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/cf782aed1d55f82ecc1398e42062f60d40222449))

## [1.4.0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v1.3.1...v1.4.0) (2021-03-30)


### Features

* **server:** use `strict-origin-when-cross-origin` referrer policy ([c99058e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c99058ec78575cac73a7bfc2d3d8feb7029a775b))


### Miscellaneous

* **config:** move `pino-pretty` config out of script ([29bbbb7](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/29bbbb79654a8d521f1416486cead45772851eb1))
* **prettierignore:** add yarn lock file ([a743252](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a74325296d366b1d568b87700765f5235dd8b2df))
* **readme:** replace jpg ydh logo with svg ([357c52e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/357c52e0a0a0a3494aaba466f1e88bad19729162))
* remove contraction usage in comments ([af86ff9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/af86ff91e1170c23bf6ab0173854e41d13f64449))
* **server:** tidy inline comments ([d5cfe1c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d5cfe1c361c0e2808715e65ab8350c0b46eae7f2))
* **workflows:** rename ci and perf sections ([6be7b4a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/6be7b4ad0b8522b1a6217c89dad02265df026eb0))


### Continuous Integration

* **automerge:** move automerge job into new workflow ([c068ef0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/c068ef0bca33ef4abc041b70e090bb2339793554))
* **ci:** ignore dependabot prs for commit message linting ([ff9b9ac](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/ff9b9ac74768880dc7afcd0aeb1a50f92b918f55))
* **stale:** shorten workflow name ([68c393f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/68c393ffe777d8bfa510d8488b69eb5533152e8c))
* **workflows:** run only on push and pulls to master branch ([8f9eece](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/8f9eecefbcf0e008f926c9bd47835b5c91859ca4))


### Dependencies

* **deps-dev:** bump autocannon from 7.0.4 to 7.0.5 ([2678053](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/2678053c0bd3c7147fa7049de28289a09cbad8a1))
* **deps-dev:** bump eslint from 7.21.0 to 7.23.0 ([5c0a892](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/5c0a892b8f8586c604feed62c8dd5a5570b12a87))
* **deps-dev:** bump eslint-plugin-jest from 24.1.5 to 24.3.2 ([41d59e1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/41d59e1413d1da219bb001a7d3094c08a71cfe8a))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.2.0 to 32.3.0 ([e13d796](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e13d79680ca0310c026e0700f6822146ee34f825))
* **deps-dev:** bump faker from 5.4.0 to 5.5.1 ([cb89b27](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/cb89b271a26e43b15c3ade5c7676639f6011ab8d))
* **deps-dev:** bump husky from 4.3.8 to 6.0.0 ([db042d8](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/db042d89b4c04c445d3e1b799ef36c22323ef7eb))
* **deps-dev:** bump pino-pretty from 4.5.0 to 4.7.1 ([4707c30](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4707c306c20a4067c20515d386afb409ea6c9515))
* **deps:** bump actions/stale from v3.0.17 to v3.0.18 ([e36eb74](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e36eb740960fb3ef8e7fddb75a7a630fc1173769))
* **deps:** bump env-schema from 2.1.0 to 3.0.1 ([4cb508b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/4cb508b7eb6fe75e91e80486b8e6d47c683fa879))
* **deps:** bump fastify from 3.12.0 to 3.14.1 ([b22aeba](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b22aebad6c6e29d41e78f8ca97473119d7bb8794))
* **deps:** bump fastify-autoload from 3.5.2 to 3.6.0 ([060395b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/060395b7c07604e26f112f42df55babec5b69b8e))
* **deps:** bump fastify-disablecache from 1.0.4 to 1.0.5 ([71fd4c8](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/71fd4c87c4ad5acdf03ed9899a4cd49abd9938e4))
* **deps:** bump fastify-disablecache from 1.0.5 to 1.0.6 ([f0b4493](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/f0b44933f3cee9a1ac83aeb6e2eb7982897692af))
* **deps:** bump fastify-helmet from 5.2.0 to 5.3.1 ([b85a03a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b85a03afe933d869c7a04770cc3b7605f99ad30a))
* **deps:** bump fastify-swagger from 4.3.1 to 4.4.2 ([0ae302f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0ae302ffb9b93e4b0a0359b8cb702ce897743f24))
* **deps:** bump GoogleCloudPlatform/release-please-action ([eca8b5e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/eca8b5e2de99df8c0e30300d0aeea3726dc51a0c))
* **deps:** bump pino from 6.11.1 to 6.11.2 ([98ec081](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/98ec08188d5ce9276e55f3867fb37a260a5b954f))
* **deps:** bump typoci/spellcheck-action from v0.3.0 to v0.4.0 ([ec9048b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/ec9048b61c7144e16c50f8d963d2f3de852fb398))
* **deps:** bump wagoid/commitlint-github-action from v3.0.1 to v3.0.6 ([0e48dd1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0e48dd19d65efb9399723da6940f794cc5786fba))
* **deps:** bump xmldom from 0.4.0 to 0.5.0 ([59bca47](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/59bca4706468a12f8c487b18caf21e87787b32f4))
* **docker:** remove now optional `version` value ([33906d2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/33906d2e2c7ca2c1d42860781cb02eb3b6c99259))

### [1.3.1](https://www.github.com/Fdawgs/ydh-myydh-crud-api/compare/v1.3.0...v1.3.1) (2021-03-03)


### Documentation

* **readme:** add link to sql ([642aa17](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/642aa17361e3242042a7cde33fe42fabf9cfc131))
* **readme:** fix broken link ([b8a003e](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b8a003ee0bcf8840c524c8dcc07e75df8587035a))
* **readme:** shorten links ([0c425b5](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0c425b5a175d6476b87754d1a101f8eb310c3dd0))


### Dependencies

* **dependabot:** set commit message prefix; lower pull limit ([3b43a82](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3b43a82b490fd22312371f1fe3c8369faae018c1))
* **deps:** specify minor and hotfix versions ([a0b17b2](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a0b17b2630daf0aeda641c217de3e9fcfd28c112))


### Miscellaneous

* add link check workflow ([f78af85](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/f78af85d5e6c7603c0d21e98cb60dd90c81e4c6f))
* automate release and changelog generation ([6e4f646](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/6e4f64669480c0ae7235b1424c13916e82bdd82f))
* **codeql:** remove autobuild action ([b6786d3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b6786d315bafa896723e49a64a55f3d1de7deddd))
* **dependabot:** ignore husky updates ([a9cb7de](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/a9cb7de2c18922a4b6e2503b9bece78942ead761))
* **deps-dev:** bump @commitlint/cli from 11.0.0 to 12.0.1 ([#88](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/88)) ([0aea501](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/0aea501b0ea73e1c8b003459f9ba225b1a583cf9))
* **deps-dev:** bump @commitlint/config-conventional ([12961ad](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/12961adff582d05a57409eea3b586af4f058a0d9))
* **deps-dev:** bump autocannon from 7.0.3 to 7.0.4 ([#94](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/94)) ([efc7a9d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/efc7a9d24d40c70b34dcbde0c9ee904afd0e9c13))
* **deps-dev:** bump eslint from 7.19.0 to 7.20.0 ([#81](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/81)) ([193e803](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/193e80398e3d8a4327fb8fec0c146e297d0aa0ff))
* **deps-dev:** bump eslint from 7.20.0 to 7.21.0 ([#91](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/91)) ([197e69b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/197e69b6970032f759e8076663e7eb1ae059c7d6))
* **deps-dev:** bump eslint-config-prettier from 7.2.0 to 8.1.0 ([f0b2a2b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/f0b2a2b7a23bf02ff1ec0c54f0bb62d3dd0bcff6))
* **deps-dev:** bump eslint-plugin-jest from 24.1.3 to 24.1.5 ([547efe5](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/547efe5900ac7c2183a213b1167c849839092f75))
* **deps-dev:** bump eslint-plugin-jsdoc from 31.6.1 to 32.0.1 ([#76](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/76)) ([57ffd33](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/57ffd33495f37a48cf5158d6570681a344663878))
* **deps-dev:** bump eslint-plugin-jsdoc from 32.0.1 to 32.2.0 ([#93](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/93)) ([5279ed4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/5279ed4971b3137dfd12d98f0bdfbcf753859e43))
* **deps:** bump env-schema from 2.0.1 to 2.1.0 ([#78](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/78)) ([d646cf8](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d646cf892cbb377b8a49a4197e9899bd7e7baff3))
* **deps:** bump fastify from 3.11.0 to 3.12.0 ([#80](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/80)) ([36e29f0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/36e29f08cb1eb6c3b3d8e787c5a8a6e6ba1ae1b4))
* **deps:** bump fastify-autoload from 3.4.2 to 3.5.2 ([#90](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/90)) ([73f8e24](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/73f8e24bc1f1e8199c3ce110a24cd7be27d23d75))
* **deps:** bump fastify-bearer-auth from 5.0.2 to 5.1.0 ([#77](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/77)) ([e916877](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e916877f70f757be9a550bc553330720d42aea2b))
* **deps:** bump fastify-swagger from 4.3.0 to 4.3.1 ([#79](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/79)) ([3869656](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/38696569893babd5f898aff5b65ebea85ebab465))
* **deps:** bump fluent-json-schema from 2.0.3 to 2.0.4 ([#86](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/86)) ([3e5ad36](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/3e5ad3666126b17e0855906b92f8d7f701c893d4))
* **deps:** bump wagoid/commitlint-github-action from v2.0.3 to v2.2.3 ([#75](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/75)) ([b294c7b](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b294c7bc44ee1952431f48d3148a24233489b2d0))
* **deps:** bump wagoid/commitlint-github-action from v2.2.3 to v3.0.1 ([f9c582f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/f9c582f154073e06377c6835ddb3b8619e892b2e))
* **linkcheck:** add name ([5c907e0](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/5c907e0c2622a271b586a1f400f865a5596e2217))
* **linkcheck:** extend ignored urls ([e1fdd42](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/e1fdd42c89932b46169092d0fe32afef04d9d925))
* **lint-check:** compress patterns ([46d2d7a](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/46d2d7a1e9e20560717740bc77f08a21f54bdf46))
* **prettier:** create separate files to allow for CI/CD to use prettier config ([#96](https://www.github.com/Fdawgs/ydh-myydh-crud-api/issues/96)) ([d798a2c](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d798a2c4a56608e2a9c8eb1b939381fab407f02d))
* remove link check action and replace with npx ([537eb46](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/537eb46dc6bf4ebf967b1a37b642d366c692dfc6))
* replace stalebot with github action ([ef024e6](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/ef024e6666609b3e56ce754cc062b2f00117991e))
* require `commit-lint` job to pass before automerge ([d4a943d](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/d4a943d6849a479e792e9d6de2bc20787c62af62))
* update link check workflow ([02627f9](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/02627f9792d800fa99ed4abab33526cd806c9891))
* **vscode:** remove conflicting prettier ext setting ([b5fb4c4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/b5fb4c49e81257d3e9b1c3f76354001e5348fb58))
* **workflows:** move release steps into `cd` workflow ([03f809f](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/03f809f6f728cd4d09520a434fb6e128e83ae436))
* **workflows:** remove redundant comments ([9e935b4](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/9e935b4bf2e02a032f293225d58fdca6af7b936c))
* **workflows:** rename spellcheck workflow ([317f7de](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/317f7deb732531c16869a275d826c8782d74e20a))
* **workflows:** tidy node-version syntax ([07ae4c3](https://www.github.com/Fdawgs/ydh-myydh-crud-api/commit/07ae4c3c9af7e7d9ee8a0fd2c2d8c49fba5405da))

## 1.3.0 (2021-02-12)

-   fix: missing dependencies ([ff69f63](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ff69f63))
-   fix(routes/documents/register): set format to uri for uri values ([e530f23](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/e530f23))
-   feat(routes/documents/register): add new columns ([7d3f4c3](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/7d3f4c3))
-   build(deps-dev): pin husky major version ([f25c78e](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/f25c78e))
-   style: shorten husky pre-push script ([b999a60](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b999a60))
-   style(readme): add linebreaks between badges ([361082d](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/361082d))
-   style(scripts): rename `jest-coverage` to `jest:coverage` ([17f920a](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/17f920a))
-   style(tests): use apa header style for describe name params ([bd02d99](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/bd02d99))
-   ci: add commit-lint job ([67421c4](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/67421c4))
-   ci: replace typo ci app with action ([ec8ea13](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ec8ea13))
-   chore: add bsd to list of allowed licenses ([29e5dac](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/29e5dac))
-   chore: add commitlint husky `commit-msg` hook ([390f258](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/390f258))
-   chore: add documentation style link to pr template ([1b9a961](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1b9a961))
-   chore: set allowed list of licenses ([6a99abb](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/6a99abb))
-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.6.0 to 31.6.1 (#69) ([a89faed](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a89faed)), closes [#69](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/69)
-   chore(deps-dev): bump eslint-plugin-promise from 4.2.1 to 4.3.1 (#70) ([cb40ab1](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/cb40ab1)), closes [#70](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/70)
-   chore(deps-dev): bump faker from 5.2.0 to 5.4.0 (#66) ([222334e](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/222334e)), closes [#66](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/66)
-   chore(deps-dev): bump husky from 4.3.8 to 5.0.9 (#71) ([9428a2a](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9428a2a)), closes [#71](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/71)
-   chore(deps): bump actions/cache from v2 to v2.1.4 (#65) ([a702776](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a702776)), closes [#65](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/65)
-   chore(deps): bump fastify-swagger from 4.0.1 to 4.3.0 (#68) ([bc6e058](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/bc6e058)), closes [#68](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/68)
-   chore(deps): bump pino from 6.11.0 to 6.11.1 (#67) ([be58180](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/be58180)), closes [#67](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/67)
-   chore(vscode): add `redhat.vscode-yaml` as recommended extension ([e848ce0](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/e848ce0))
-   chore(vscode): add `updateImportsOnFileMove` setting ([6d6c39c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/6d6c39c))
-   chore(vscode): add workspace settings and extensions ([b605620](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b605620))
-   docs(changelog): escape star ([69eac75](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/69eac75))
-   docs(contributing): add documentation style ([f3135bf](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/f3135bf))
-   docs(readme): add ignore scripts arg ([500b1b5](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/500b1b5))

### 1.2.2 (2021-02-02)

-   test(config): delete test files ([2933009](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2933009))
-   test(config): log stream key ([38a2f40](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/38a2f40))
-   chore(deps-dev): bump pino-pretty from 4.4.0 to 4.5.0 (#62) ([c6a6d22](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/c6a6d22)), closes [#62](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/62)
-   fix(config): stop rotatinglogstream flooding stdout ([8cce824](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/8cce824))
-   refactor(config): update openapi docs from v2.\*.\* to v3.\*.\* ([5928e61](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/5928e61))

### 1.2.1 (2021-02-01)

-   chore: add insomnia example requests ([aeaed49](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/aeaed49))
-   chore: check direct dependency licenses only ([9d7c724](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9d7c724))
-   chore: stop excess coverage files being generated ([57efb55](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/57efb55))
-   chore(deps-dev): bump eslint from 7.18.0 to 7.19.0 (#55) ([677f7fd](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/677f7fd)), closes [#55](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/55)
-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.4.0 to 31.6.0 (#51) ([e719ceb](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/e719ceb)), closes [#51](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/51)
-   chore(deps-dev): bump pino-pretty from 4.3.0 to 4.4.0 (#53) ([87ccfd0](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/87ccfd0)), closes [#53](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/53)
-   chore(deps): bump fastify-disablecache from 1.0.3 to 1.0.4 (#57) ([a7e7b23](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a7e7b23)), closes [#57](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/57)
-   chore(deps): bump fastify-helmet from 5.1.0 to 5.2.0 (#54) ([5b4ecf1](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/5b4ecf1)), closes [#54](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/54)
-   chore(deps): bump fastify-swagger from 4.0.0 to 4.0.1 (#52) ([3ae4a57](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3ae4a57)), closes [#52](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/52)
-   chore(routes): specify further openapi spec values ([52978a4](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/52978a4))
-   chore(sql): update example patient ids ([74a882a](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/74a882a))
-   style: rename `license-checker` to `lint:licenses` ([95d55c2](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/95d55c2))
-   style(readme): capitalise sql server subheading ([08670cf](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/08670cf))
-   refactor(server): use new exposed CSP dir from `fastify-helmet` ([15bcb46](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/15bcb46))
-   fix(docker): use node command over npm ([2ccfd85](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2ccfd85))
-   docs(readme): remove superfluous text in pm2 install instructions ([b9f0b4d](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b9f0b4d))
-   build(deps-dev): remove coveralls, replaced by github action ([2f441ce](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2f441ce))
-   build(deps-dev): remove lodash ([b9f342b](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b9f342b))

## 1.2.0 (2021-01-28)

-   chore: add pull request template ([774b207](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/774b207))
-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.0.8 to 31.4.0 (#44) ([2d0fe12](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2d0fe12)), closes [#44](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/44)
-   chore(deps-dev): bump faker from 5.1.0 to 5.2.0 (#46) ([ea77258](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ea77258)), closes [#46](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/46)
-   chore(deps): bump fastify from 3.10.1 to 3.11.0 (#47) ([573711b](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/573711b)), closes [#47](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/47)
-   chore(deps): bump fastify-autoload from 3.4.0 to 3.4.2 (#45) ([b00264c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b00264c)), closes [#45](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/45)
-   chore(deps): bump fastify-cors from 5.1.0 to 5.2.0 (#42) ([c91356c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/c91356c)), closes [#42](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/42)
-   chore(deps): bump fastify-swagger from 3.5.0 to 4.0.0 (#43) ([46c9aaa](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/46c9aaa)), closes [#43](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/43)
-   feat(config): allow configurable cors headers ([6bdad58](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/6bdad58))
-   style: capitalise headings correctly ([0b1255d](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/0b1255d))
-   style(ci): capitalise jobs and job step names ([f017968](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/f017968))
-   style(readme): capitalise headings correctly ([9ba6ad0](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9ba6ad0))
-   style(readme): prettier badge shape ([82361a9](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/82361a9))
-   fix(config): add required properties ([6394b40](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/6394b40))
-   ci: cache on `node-version` as well as `os` ([59c03de](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/59c03de))
-   ci(github-actions): set `flag-name` for parallel coverage tests ([85a21ca](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/85a21ca))
-   ci(github-actions): set semver for coverallsapp ([c9e9a25](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/c9e9a25))
-   build(deps-dev): add husky for git hook handling ([81ca50d](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/81ca50d))
-   docs: bump coc from v1.4.0 to v2.0.0 ([1c6a345](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1c6a345))

### 1.1.9 (2021-01-22)

-   refactor(pm2): use repo name for instances; remove redundant env setting ([1255e92](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1255e92))
-   refactor(routes/documents): clean regex ([b4ac403](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b4ac403))
-   refactor(server): use default helmet referrer policy ([1cd2d24](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1cd2d24))
-   chore(deps-dev): bump autocannon from 7.0.2 to 7.0.3 (#38) ([bc416a7](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/bc416a7)), closes [#38](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/38)
-   chore(pm2): rename pm2 instances ([3a2855b](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3a2855b))
-   build(docker): speed up install by using `npm ci` over `npm install` ([84156d3](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/84156d3))
-   fix(config): add `node_env` to schema ([80869bf](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/80869bf))
-   fix(server): reject unsupported content-types in `Accept` req header ([1c4e352](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1c4e352))
-   test(routes/healthcheck): correct description ([d1771b9](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/d1771b9))
-   test(routes/preferences/user): 415 error res on unsupported content ([834024c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/834024c))

### 1.1.8 (2021-01-21)

-   chore: rename repo to better reflect content ([1667997](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1667997))
-   chore(deps-dev): bump autocannon from 7.0.1 to 7.0.2 (#36) ([a6238e7](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a6238e7)), closes [#36](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/36)
-   fix(routes): remove heavy-handed required responses ([ae89b16](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ae89b16))
-   docs(readme): update name of app supported ([0644883](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/0644883))

### 1.1.7 (2021-01-20)

-   build(docker): add `--ignore-scripts` arg ([1b3ecfb](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1b3ecfb))
-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.0.7 to 31.0.8 (#34) ([c76a228](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/c76a228)), closes [#34](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/34)
-   fix(routes): set min and max items for arrays; set unique items ([7a0b6d0](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/7a0b6d0))
-   fix(routes/documents/receipt): schema type from number to string ([9d131f1](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9d131f1))
-   fix(routes/documents/register): set querystring per_page max to 100 ([57bb639](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/57bb639))
-   fix(routes/documents/register): set regex pattern for returned json ([03fc722](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/03fc722))
-   fix(routes/preferences/user): validate body of request ([dc7a58f](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/dc7a58f))
-   fix(routes/preferences/user): validate returned json ([f15fc16](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/f15fc16))

### 1.1.6 (2021-01-19)

-   chore(deps-dev): bump eslint-config-prettier from 7.1.0 to 7.2.0 (#31) ([6235796](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/6235796)), closes [#31](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/31)
-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.0.6 to 31.0.7 (#29) ([a386f5d](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a386f5d)), closes [#29](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/29)
-   chore(deps): bump fastify-disablecache from 1.0.1 to 1.0.3 (#30) ([81cea00](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/81cea00)), closes [#30](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/30)
-   chore(deps): bump helmet from 4.3.1 to 4.4.1 (#32) ([ca85e6f](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ca85e6f)), closes [#32](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/32)
-   chore(package): add homepage and bug urls ([5edf454](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/5edf454))
-   chore(routes/documents): update example guid ([a9dac38](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a9dac38))
-   fix(routes/documents/receipt): limit id param length to max of 36 ([dd3f2fc](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/dd3f2fc))
-   fix(routes/preferences/user): limit id param length to max of 10 ([e5c49ad](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/e5c49ad))
-   ci: lint lockfile ([dc85e75](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/dc85e75))
-   ci(typo-ci): add `ydh` to list of excluded words ([2861af2](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2861af2))
-   test(routes): fix injection usage ([86d31bb](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/86d31bb))
-   refactor(routes/healthcheck): remove unused `options` param ([5ac0a52](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/5ac0a52))
-   docs(readme): correct script ([8992ccb](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/8992ccb))
-   build: remove `yarn` as package manager, revert to `npm` ([7d872d8](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/7d872d8))
-   style: rename `querystring` to `query` ([60c8c7a](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/60c8c7a))

### 1.1.5 (2021-01-15)

-   chore: convert missed headers to uppercase ([5cd7765](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/5cd7765))
-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.0.3 to 31.0.5 (#26) ([54b6227](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/54b6227)), closes [#26](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/26)
-   chore(deps): bump fastify from 3.9.2 to 3.10.1 (#25) ([bdeea5b](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/bdeea5b)), closes [#25](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/25)
-   chore(plugins): add missing param descriptions ([f68f8e9](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/f68f8e9))
-   fix(routes/preferences/user): set accepted pattern for id param ([40fe971](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/40fe971))

### 1.1.4 (2021-01-14)

-   fix(server): set referrer policy with fallback ([83e0e0a](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/83e0e0a))
-   style(server): rename plugin variable ([a1678dd](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a1678dd))
-   chore: disable cors in template ([3a2b770](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3a2b770))

### 1.1.3 (2021-01-13)

-   fix(routes/documents/register): add missing table columns ([81ece65](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/81ece65))
-   docs(readme): clarify on api documentation location ([1831643](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/1831643))
-   ci: remove redundant javascript dictionary ([623ca92](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/623ca92))

### 1.1.2 (2021-01-12)

-   chore: add metadata to api schema ([b7c635f](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b7c635f))
-   chore: add securitydefinitions and tags ([e841359](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/e841359))
-   chore: update license holder ([804973c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/804973c))
-   chore(deps-dev): bump eslint-plugin-jsdoc from 31.0.2 to 31.0.3 (#18) ([87022ea](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/87022ea)), closes [#18](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/18)
-   chore(deps): bump fastify-disablecache from 1.0.0 to 1.0.1 (#19) ([d0cdaba](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/d0cdaba)), closes [#19](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/19)
-   chore(sql): add `register.documents` table creation ([3dfbc06](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3dfbc06))
-   test: set resetmocks option in jest config ([2940577](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2940577))
-   fix(routes): correct schema to be nullable string ([3d0dfb6](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3d0dfb6))

### 1.1.1 (2021-01-11)

-   fix(env): set default cors to wildcard as boolean option broken ([ed8754f](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ed8754f))
-   fix(server): add form-action csp directive ([c7d241c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/c7d241c))
-   fix(server): disable caching ([4a18b30](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/4a18b30))
-   build(docker): ignore test_resources directory ([3a1c391](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3a1c391))
-   docs(readme): correct badge links ([34c4ff5](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/34c4ff5))
-   chore: rename repository ([7c76a6c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/7c76a6c))

## 1.1.0 (2021-01-11)

-   chore: add benchmark script ([5c96a32](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/5c96a32))
-   chore(deps-dev): bump eslint-plugin-jsdoc from 30.7.13 to 31.0.1 (#14) ([bbebc1a](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/bbebc1a)), closes [#14](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/14)
-   chore(deps): bump pino from 6.9.0 to 6.10.0 (#13) ([2b9af96](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2b9af96)), closes [#13](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/13)
-   refactor(routes/preferences/options): removed unused branch ([c306093](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/c306093))
-   refactor(routes/preferences/user): removed unused branch ([f7e7d32](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/f7e7d32))
-   refactor(server): use helmet default csp directives function ([2a45afa](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2a45afa))
-   style: rename fastifyplugin variable to fp ([44963d1](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/44963d1))
-   style(routes/preferences): rename variables to be meaningful ([f163946](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/f163946))
-   style(server): rename child server param to be clearer ([4aea194](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/4aea194))
-   fix(routes): export of schemas ([a67da6e](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a67da6e))
-   fix(routes/documents/register): key casing ([c92cfa2](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/c92cfa2))
-   feat(routes): add healthcheck route ([b640424](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b640424))
-   build: add typoci config file ([67e7650](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/67e7650))
-   docs(contributing): rename `main` to `master` ([11182f6](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/11182f6))

## 1.0.0 (2021-01-08)

-   chore: commit template ([d1a95fc](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/d1a95fc))
-   chore(deps-dev): bump nodemon from 2.0.6 to 2.0.7 (#4) ([9ab89a1](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9ab89a1)), closes [#4](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/4)
-   chore(deps): bump fastify-helmet from 5.0.3 to 5.1.0 (#5) ([0869eee](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/0869eee)), closes [#5](https://github.com/Fdawgs/ydh-myydh-crud-api/issues/5)
-   chore(routes): remove unused variables ([585ae91](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/585ae91))
-   chore(routes/preferences): tidy response schema ([57f314e](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/57f314e))
-   chore(scripts): tidy license-checker options ([dfab5a0](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/dfab5a0))
-   docs(readme): add docker and pm2 deploy steps ([6358d4e](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/6358d4e))
-   docs(readme): add sql deployment section ([b3af0c0](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b3af0c0))
-   docs(readme): clarify on backend api for what ([3717c31](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3717c31))
-   docs(readme): update yarn link ([4125e90](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/4125e90))
-   test: skip tests that require a db connection ([54e45aa](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/54e45aa))
-   test(config): add bearer token test ([4c664b2](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/4c664b2))
-   test(plugins/mssql): add unit test ([d30f386](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/d30f386))
-   test(plugins/mssql): update sql query ([3c854ef](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3c854ef))
-   test(routes): remove excess tests ([a016129](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a016129))
-   test(routes/documents/receipt): add test requests ([3251fac](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3251fac))
-   test(routes/documents/register): add test requests ([be109bd](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/be109bd))
-   test(routes/preferences/user): add test requests ([70161c4](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/70161c4))
-   test(server): add unit test ([d2ef5d6](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/d2ef5d6))
-   feat: add pm2 config file ([b8ff7e2](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/b8ff7e2))
-   feat(plugins): add mssql decorator plugin ([2816ab9](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2816ab9))
-   feat(routes/documents): add functionality to `/receipt` routes ([2970d3c](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/2970d3c))
-   feat(routes/documents): add functionality to `/register` route ([aaea116](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/aaea116))
-   feat(routes/documents): add route schemas ([958296b](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/958296b))
-   feat(routes/preferences): add functionality to all routes ([4664590](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/4664590))
-   feat(routes/preferences): add route schemas ([ff3506e](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ff3506e))
-   feat(server): add bearer token auth ([768b9ff](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/768b9ff))
-   refactor(plugins): rename mssql plugin, alter accepted options object ([559c1af](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/559c1af))
-   refactor(routes): remove redundant header schema ([9fc7217](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9fc7217))
-   refactor(routes): tidy route structure ([ddeb258](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/ddeb258))
-   refactor(routes): use fluent json schema for other objects ([9c55e94](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9c55e94))
-   refactor(routes/documents): remove duplicate code ([fee2a9e](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/fee2a9e))
-   refactor(routes/documents): use fluent json schema for header object ([a3c7953](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/a3c7953))
-   refactor(routes/documents/receipt): move queries into own functions ([d43d50f](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/d43d50f))
-   refactor(routes/documents/register): consolidate sql queries ([4fdf27b](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/4fdf27b))
-   refactor(routes/preferences/options): consolidate sql queries ([3d63616](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/3d63616))
-   refactor(routes/preferences/user): consolidate sql queries ([cae6c68](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/cae6c68))
-   refactor(routes/preferences/user): remove redundant branch ([90b23cf](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/90b23cf))
-   style(routes/documents): tidy test names ([79429a5](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/79429a5))
-   style(routes/documents/receipt): fix name of test ([50d2983](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/50d2983))
-   fix(routes): add semicolons to end of sql query strings ([cd68282](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/cd68282))
-   fix(routes/documents): fix expected type of id param ([9f775f3](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/9f775f3))
-   fix(routes/documents/receipt): add catch for missing records ([51014f0](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/51014f0))
-   fix(server): set missing content-security-policy directives ([85d68e6](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/85d68e6))
-   Initial commit ([78d5e0f](https://github.com/Fdawgs/ydh-myydh-crud-api/commit/78d5e0f))
