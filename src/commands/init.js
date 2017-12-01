import fs from 'fs'
import path from 'path'

import { defaultConfig } from './config'

const createFile = filename => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, JSON.stringify(defaultConfig), { flag: 'wx' }, e => {
      if (e) reject(e)
      resolve(true)
    })
  })
}

const init = () => {
  const dir = process.cwd()
  const filename = path.resolve(dir, 'mailero.json')
  createFile(filename)
    .then(() => {
      console.log('Config file created.')
    })
    .catch(e => {
      console.log(e)
    })
}

export { init as default }
