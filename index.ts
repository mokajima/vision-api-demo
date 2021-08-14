import { ImageAnnotatorClient } from '@google-cloud/vision'
import { program } from 'commander'
import * as fs from 'fs'

const client = new ImageAnnotatorClient()

program
  .requiredOption('-f, --fileName <fileName>')
  .action(async () => {
    const { fileName } = program.opts()

    try {
      const [{ fullTextAnnotation }] = await client.documentTextDetection(fileName)

      fs.writeFile('./result.txt', fullTextAnnotation?.text ?? '', (error) => {
        if (error) {
          throw error
        }
      })
    } catch (error) {
      console.error(error)
    }
  })

program.parse(process.argv)
