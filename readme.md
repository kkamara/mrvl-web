![marvel-moving](https://user-images.githubusercontent.com/31970496/201666745-37f4c424-0557-4051-bf27-d40cd0b09780.gif)

![mrvl4.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl4.png)

![mrvl.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl.png)

![mrvl2.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl2.png)

![mrvl3.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl3.png)

# mrvl-web
Browse and manage your favourite Marvel Comics. Reactjs.

## Installation

* [Node.js](https://nodejs.org/en/) 
* [Yarn](https://yarnpkg.com/)

```sh
cp .env.example .env
yarn install # and yarn
```

## Usage

Update https://github.com/kkamara/mrvl/blob/main/src/constants.jsx to the following:

```js
// export const ENV = 'prod'
export const ENV = 'local'
```

Start the server:
```bash
yarn start
# http://localhost:5000/mrvl
```

## Code snippet

```js
/** 
 * Return searchable paginated characters api response
 * @param {array} ids
 * @return {Promise}
 */
async getFavComics(ids) {
  const promises = []
  let comics = []

  for (const id of ids) {
    promises.push(new Promise(async resolve => {
      const comic = await this.getComic(id)
      resolve(comic.data.data.results[0])
    }))
  }

  await new Promise((resolve, reject) => {
    Promise.all(promises).then(data => 
      comics = data
      resolve()
    })  
    .catch(err => { throw err })
  })  
  return comics
}
```

## Misc

Each Marvel API key ([see environment variables](https://raw.githubusercontent.com/kkamara/mrvl/main/.env.example)) has a request limit of 3000/day.

[See react boilerplate.](https://github.com/kkamara/react-boilerplate)

[See php scraper.](https://github.com/kkamara/php-scraper)

[See node react boilerplate.](https://github.com/kkamara/node-react-boilerplate)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
