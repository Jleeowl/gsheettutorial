const GoogleSpreadsheet = require('google-spreadsheet')
const creds = require('') // IMPORT YOUR CREDENTIALS HERE

const doc = new GoogleSpreadsheet('') // INSERT YOUR URL KEY HERE
const { promisify } = require('util')

const useServiceAccountAuth = promisify(doc.useServiceAccountAuth)
const getInfo = promisify(doc.getInfo)

let exampleFunc = async () => {
  try {
    await useServiceAccountAuth(creds)
    let info = await getInfo()
    console.log(info)

    let sheet = info.worksheets[0]
    await sheet.setHeaderRow(['Task', 'Completion Status', 'Created At', 'Updated At'])

    // let addRow = promisify(sheet.addRow)
    // await addRow({
    //   task: 'Teach how to integrate Google spreadsheet with Node.js',
    //   completionstatus: false,
    //   createdat: new Date(Date.now()),
    //   updatedat: new Date(Date.now())
    // })

    let getRows = promisify(sheet.getRows)
    let rows = await getRows()
    console.log(rows)

    // rows[0].completionstatus = true
    // rows[0].updatedat = new Date(Date.now())
    // rows[0].save()
    // rows[0].del()
  } catch (err) {
    console.log(err)
  }
}
exampleFunc()
