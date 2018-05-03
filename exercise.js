const GoogleSpreadsheet = require('google-spreadsheet')
const creds = require('') // IMPORT YOUR CREDENTIALS HERE
const { promisify } = require('util')

const doc = new GoogleSpreadsheet('') // INSERT YOUR URL LONG KEY HERE

const useServiceAccountAuth = promisify(doc.useServiceAccountAuth)
const getInfo = promisify(doc.getInfo)

let exampleFun = async () => {
  try {
    await useServiceAccountAuth(creds)
    let gs = await getInfo()

    // console.log(gs)

    let sheet = gs.worksheets[0]
    await sheet.setHeaderRow(['Task', 'Completion Status', 'Created At', 'Updated At'])

    // let addRow = promisify(sheet.addRow)
    // await addRow({
    //   task: 'Teach Google spreadsheet integration with Nodejs.',
    //   completionstatus: false,
    //   createdat: new Date(Date.now()),
    //   updateat: new Date(Date.now())
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
exampleFun()
