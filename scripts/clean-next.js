const fs = require('fs')
const path = require('path')

const nextDir = path.join(__dirname, '..', '.next')

function removeDir(dir) {
  if (!fs.existsSync(dir)) return

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      removeDir(fullPath)
    } else {
      try {
        fs.unlinkSync(fullPath)
      } catch {
        // ignore locked files
      }
    }
  }

  try {
    fs.rmdirSync(dir)
  } catch {
    try {
      fs.rmSync(dir, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 })
    } catch (error) {
      console.warn(`Could not fully remove ${dir}: ${error.message}`)
    }
  }
}

removeDir(nextDir)
console.log('Cleaned .next cache')
