# [1.1.0-alpha.3](https://github.com/Royserg/bear-board/compare/v1.1.0-alpha.2...v1.1.0-alpha.3) (2022-08-27)


### Bug Fixes

* **ci:** pass secrets to test-builds workflow ([ec1f70d](https://github.com/Royserg/bear-board/commit/ec1f70d5a9a63632fd94f30a8ede08bba318a277))

# [1.1.0-alpha.2](https://github.com/Royserg/bear-board/compare/v1.1.0-alpha.1...v1.1.0-alpha.2) (2022-08-27)


### Bug Fixes

* **ci:** add missing PRIVATE_KEY secrets to test-build workflow ([8f26401](https://github.com/Royserg/bear-board/commit/8f26401c8d358c0f8e4228ffdd0f0c2f8d511966))

# [1.1.0-alpha.1](https://github.com/Royserg/bear-board/compare/v1.0.3...v1.1.0-alpha.1) (2022-08-27)


### Features

* **ci:** add tauri updater config, include key secrets in build workflow ([ec4456e](https://github.com/Royserg/bear-board/commit/ec4456e01b5d15e8df3bfa600348e40a865d7dff))

## [1.0.3](https://github.com/Royserg/bear-board/compare/v1.0.2...v1.0.3) (2022-08-25)


### Bug Fixes

* **fe:** adjust themes to simple `light` and `dark` with overriden primary color ([d9e80e8](https://github.com/Royserg/bear-board/commit/d9e80e8d262f68e2bcb8306d57227b7b41be0c02))

## [1.0.3-alpha.1](https://github.com/Royserg/bear-board/compare/v1.0.2...v1.0.3-alpha.1) (2022-08-25)


### Bug Fixes

* **fe:** adjust themes to simple `light` and `dark` with overriden primary color ([d9e80e8](https://github.com/Royserg/bear-board/commit/d9e80e8d262f68e2bcb8306d57227b7b41be0c02))

## [1.0.2](https://github.com/Royserg/bear-board/compare/v1.0.1...v1.0.2) (2022-08-19)


### Bug Fixes

* **app:** show them widget on small screen ([9f6cf63](https://github.com/Royserg/bear-board/commit/9f6cf63c8f330e955d0c3992e5dd540cf701ae31))

## [1.0.2-alpha.1](https://github.com/Royserg/bear-board/compare/v1.0.1...v1.0.2-alpha.1) (2022-08-19)


### Bug Fixes

* **app:** show them widget on small screen ([9f6cf63](https://github.com/Royserg/bear-board/commit/9f6cf63c8f330e955d0c3992e5dd540cf701ae31))

## [1.0.1](https://github.com/Royserg/bear-board/compare/v1.0.0...v1.0.1) (2022-08-16)


### Bug Fixes

* **fe:** display ctx menu on the left side on smaller screens ([01273a0](https://github.com/Royserg/bear-board/commit/01273a0720d8a2860e9c8fe21790733fb45f826c))

## [1.0.1-alpha.1](https://github.com/Royserg/bear-board/compare/v1.0.0...v1.0.1-alpha.1) (2022-08-16)


### Bug Fixes

* **fe:** display ctx menu on the left side on smaller screens ([01273a0](https://github.com/Royserg/bear-board/commit/01273a0720d8a2860e9c8fe21790733fb45f826c))

# 1.0.0 (2022-08-14)


### Bug Fixes

* **be:** set market_data to be Optional ([4d91195](https://github.com/Royserg/bear-board/commit/4d911952dda15c3aa2d5aff153e86b9b288ca470))
* **fe:** focus search input when component mounts ([23b9bf8](https://github.com/Royserg/bear-board/commit/23b9bf8bfbf96bd73acb58f7a8b13c58051d222b))


### Features

* **be:** add call to `search` for coins ([c234ed8](https://github.com/Royserg/bear-board/commit/c234ed806023cfefbf1b8702d5c7e4e071b39d9c))
* **be:** add config + method to fetch coin data from coinGecko API. Register handler ([90ebdb0](https://github.com/Royserg/bear-board/commit/90ebdb02f70de28a5867cf7c652bb9b7896d3667))
* **fe:** add CoinPriceCard component ([48c8503](https://github.com/Royserg/bear-board/commit/48c8503de4d04591bad284835da2ea5dcb485cde))
* **fe:** add confirmation on delete, and reload menu action ([1d169ec](https://github.com/Royserg/bear-board/commit/1d169ecfaf5f64e139741c6f29cbb27325fec6e7))
* **fe:** add initial search component showing 5 search results ([4d73682](https://github.com/Royserg/bear-board/commit/4d7368282c3c9fd945475cf54a1ea2a79c319620))
* **fe:** add load next/prev batch of search results + UI arrows ([153cdc4](https://github.com/Royserg/bear-board/commit/153cdc48d47d2529f7f7fcade4776bdefb58d271))
* **fe:** add possibility to select searched coin and add to in-memory array ([334c6ea](https://github.com/Royserg/bear-board/commit/334c6ea34f3057928ac01cf2401ef9accd910635))
* **fe:** add remove button and connect with action ([a0f0d94](https://github.com/Royserg/bear-board/commit/a0f0d9447351c95cedfbb09d515c71854d75364c))
* **fe:** add service with types reflecting available BE handlers ([9d02445](https://github.com/Royserg/bear-board/commit/9d02445f8b6f8f2f459c6339785e0bb0d3302897))
* **fe:** add Spinner component ([db6b5f0](https://github.com/Royserg/bear-board/commit/db6b5f0aa60f74aae628c20aa5f9874cd09ee1d7))
* **fe:** add theme widget - change light/dark theme ([5379d87](https://github.com/Royserg/bear-board/commit/5379d8772cfafc5ba2d73440c0bb4173f26b1137))
* **fe:** add ThemeStore, hook it up to ThemeWidget ([7a16a73](https://github.com/Royserg/bear-board/commit/7a16a7337fc38f5b20792682ce8521eed109e892))
* **fe:** set initial list of coins to load and display on Home page ([6b31bd4](https://github.com/Royserg/bear-board/commit/6b31bd42b9d47f1b72939ae50eff43ee25f65432))
* **website:** generate initial nextjs landing page ([09b41d4](https://github.com/Royserg/bear-board/commit/09b41d496647c9193482be61d09f46ae0a0dd0eb))

# 1.0.0-alpha.1 (2022-08-14)


### Bug Fixes

* **be:** set market_data to be Optional ([4d91195](https://github.com/Royserg/bear-board/commit/4d911952dda15c3aa2d5aff153e86b9b288ca470))
* **fe:** focus search input when component mounts ([23b9bf8](https://github.com/Royserg/bear-board/commit/23b9bf8bfbf96bd73acb58f7a8b13c58051d222b))


### Features

* **be:** add call to `search` for coins ([c234ed8](https://github.com/Royserg/bear-board/commit/c234ed806023cfefbf1b8702d5c7e4e071b39d9c))
* **be:** add config + method to fetch coin data from coinGecko API. Register handler ([90ebdb0](https://github.com/Royserg/bear-board/commit/90ebdb02f70de28a5867cf7c652bb9b7896d3667))
* **fe:** add CoinPriceCard component ([48c8503](https://github.com/Royserg/bear-board/commit/48c8503de4d04591bad284835da2ea5dcb485cde))
* **fe:** add confirmation on delete, and reload menu action ([1d169ec](https://github.com/Royserg/bear-board/commit/1d169ecfaf5f64e139741c6f29cbb27325fec6e7))
* **fe:** add initial search component showing 5 search results ([4d73682](https://github.com/Royserg/bear-board/commit/4d7368282c3c9fd945475cf54a1ea2a79c319620))
* **fe:** add load next/prev batch of search results + UI arrows ([153cdc4](https://github.com/Royserg/bear-board/commit/153cdc48d47d2529f7f7fcade4776bdefb58d271))
* **fe:** add possibility to select searched coin and add to in-memory array ([334c6ea](https://github.com/Royserg/bear-board/commit/334c6ea34f3057928ac01cf2401ef9accd910635))
* **fe:** add remove button and connect with action ([a0f0d94](https://github.com/Royserg/bear-board/commit/a0f0d9447351c95cedfbb09d515c71854d75364c))
* **fe:** add service with types reflecting available BE handlers ([9d02445](https://github.com/Royserg/bear-board/commit/9d02445f8b6f8f2f459c6339785e0bb0d3302897))
* **fe:** add Spinner component ([db6b5f0](https://github.com/Royserg/bear-board/commit/db6b5f0aa60f74aae628c20aa5f9874cd09ee1d7))
* **fe:** add theme widget - change light/dark theme ([5379d87](https://github.com/Royserg/bear-board/commit/5379d8772cfafc5ba2d73440c0bb4173f26b1137))
* **fe:** add ThemeStore, hook it up to ThemeWidget ([7a16a73](https://github.com/Royserg/bear-board/commit/7a16a7337fc38f5b20792682ce8521eed109e892))
* **fe:** set initial list of coins to load and display on Home page ([6b31bd4](https://github.com/Royserg/bear-board/commit/6b31bd42b9d47f1b72939ae50eff43ee25f65432))
* **website:** generate initial nextjs landing page ([09b41d4](https://github.com/Royserg/bear-board/commit/09b41d496647c9193482be61d09f46ae0a0dd0eb))
