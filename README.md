![mrvl.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl.png)

![mrvl2.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl2.png)

![mrvl3.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl3.png)

![mrvl4.png](https://raw.githubusercontent.com/kkamara/useful/main/mrvl4.png)

# mrvl
Browse and manage your favourite Marvel Comics.

## Installation

* [Node.js](https://nodejs.org/en/) 
* [pNpM](https://pnpm.io/)

## Usage

Update https://github.com/kkamara/mrvl/blob/main/client/src/constants.jsx to the following:

```bash
// export const API_URL = 'https://mrvl.herokuapp.com/api/v1'
// export const ENV = 'prod'
export const API_URL = 'http://localhost:3000/api/v1'
export const ENV = 'local'
```

Start the server:
```bash
cp .env.example .env
export NODE_OPTIONS=--openssl-legacy-provider
pnpm install
pnpm run dev
# defaults:
#   server: http://localhost:3000
#   client: http://localhost:5000
# see ./package.json and client/package.json for change
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
      const comic = await axios.get(`${apiURL}/api/v1/comics/${id}`)
      resolve(comic.data.data)
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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[BSD](https://opensource.org/licenses/BSD-3-Clause)
