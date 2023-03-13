import fs from 'node:fs'
import path from 'node:path'

import openapiTS from 'openapi-typescript'

const schemaPath = path.join(process.cwd(), './schema')

const services = [
  {
    name: 'all',
    url: path.join(process.cwd(), './scripts/apidocs.swagger.json')
  }
]

function gen() {
  if (!fs.existsSync(schemaPath)) {
    fs.mkdirSync(schemaPath)
  }

  services.forEach(async ({ name, url }) => {
    const output = await openapiTS(url, { version: 2 }).catch(console.log)
    if (output?.length > 195) {
      const filePath = path.join(schemaPath, `./${name}.ts`)
      fs.writeFileSync(filePath, output)
      console.log(`生成dts文件: ${filePath}`)
    }
  })
}

gen()
