import * as fs from 'fs'
import openapiTS from 'openapi-typescript'
import path from 'path'
// import { fileURLToPath } from 'url'

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// const text = fs.readFileSync(
//   path.join(__dirname, `../public/config/config.development.js`),
//   { encoding: 'UTF-8' }
// )

// const devServer = text.match(/\s{2}BASE_URL:\s+"(?<baseUrl>.*)"/).groups.baseUrl

function gen() {
  const __dirname = path.resolve()

  const services = [
    // { name: 'common', url: `${devServer}common/v2/api-docs` },
    {
      name: 'all',
      url: path.resolve(__dirname, './scripts/apidocs.swagger.json'),
    },
  ]

  if (!fs.existsSync(path.join(__dirname, './schema'))) {
    fs.mkdirSync(path.join(__dirname, './schema'))
  }

  services.forEach(async ({ name, url }) => {
    const output = await openapiTS(url, { version: 2 }).catch(console.log)
    if (output?.length > 195) {
      const filePath = path.join(__dirname, `./schema/${name}.ts`)
      fs.writeFileSync(filePath, output)
      console.log(`生成dts文件: ${filePath}`)
    }
  })
}

gen()
