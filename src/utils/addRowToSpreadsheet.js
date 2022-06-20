import { GoogleSpreadsheet } from "google-spreadsheet"

let credentials
try {
  credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || "")
} catch (error) {
  console.log(error)
}

async function addRowToSpreadsheet(spreadsheet, row) {
  if (!credentials) {
    throw new Error("no credentials")
  }

  const doc = new GoogleSpreadsheet(spreadsheet.id)
  await doc.useServiceAccountAuth(credentials)

  await doc.loadInfo()

  let sheet
  if (spreadsheet.sheetName) {
    sheet = doc.sheetsByTitle[spreadsheet.sheetName]
  } else {
    sheet = doc.sheetsByIndex[0]
  }

  await sheet.addRow(row)
}

export default addRowToSpreadsheet
