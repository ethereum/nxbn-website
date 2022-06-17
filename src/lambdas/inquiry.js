import jsforce from "jsforce"

import addRowToSpreadsheet from "../utils/addRowToSpreadsheet"

const googleSpreadsheetId = process.env.GOOGLE_ACADEMIC_SPREADSHEET_ID
const googleSheetName = process.env.GOOGLE_ACADEMIC_SHEET_NAME

export const handler = async function(event) {
  const {
    firstName,
    lastName,
    POCisAuthorisedSignatory,
    authorisedSignatoryInformation,
    contactEmail,
    phone,
    gender,
    country,
    timezone,
    socialNetworks,
    title,
    affiliatedOrg,
    roleOrg,
    websiteOrg,
    ethKnowledge,
    resumeLink,
    introVideoLink,
    projectResearchIdea,
    projectName,
    projectDescription,
    projectPreviousWork,
    stageOfProject,
    applyingAsOther,
    projectGoals,
    proposedTimeline,
    projectLeaderReasons,
    requestedAmount,
    problemBeingSolved,
    isYourProjectPublicGood,
    projectReasons,
    plansForBroaderCommunity,
    plansForScaling,
    repeatApplicant,
    referralSource,
    referralSourceIfOther,
    additionalInfo,
    firstReferenceContact,
    secondReferenceContact,
    meme,
  } = JSON.parse(event.body)
  const {
    SF_PROD_LOGIN_URL,
    SF_PROD_USERNAME,
    SF_PROD_PASSWORD,
    SF_PROD_SECURITY_TOKEN,
    SF_RECORD_TYPE_GRANTS_ROUND,
  } = process.env

  const conn = new jsforce.Connection({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl: SF_PROD_LOGIN_URL,
  })

  const form = {
    FirstName: firstName,
    LastName: lastName,
    POC_is_authorised_signatory__c: POCisAuthorisedSignatory,
    Authorised_Signatory_Information__c: authorisedSignatoryInformation,
    Email: contactEmail,
    Phone: phone,
    Gender_Pronoun__c: gender,
    npsp__CompanyCountry__c: country,
    Time_Zone__c: timezone,
    Social_Network__c: socialNetworks,
    Title: title,
    Company: affiliatedOrg,
    // roleOrg,
    Website: websiteOrg,
    Ethereum_Knowledge__c: ethKnowledge,
    Resume_Link__c: resumeLink,
    Video_Link__c: introVideoLink,
    Project_Name__c: projectName,
    Project_Description__c: projectDescription,
    Previous_Work__c: projectPreviousWork,
    Stage_of_Project__c: stageOfProject,
    Applying_as_Other__c: applyingAsOther,
    Impact__c: projectGoals,
    Proposed_Timeline__c: proposedTimeline,
    How_is_it_different__c: projectLeaderReasons,
    Additional_support_requests__c: requestedAmount,
    Problem_Being_Solved__c: problemBeingSolved,
    Is_it_a_Public_Good__c: isYourProjectPublicGood,
    Why_Ethereum__c: projectReasons,
    Target_Audience__c: plansForBroaderCommunity,
    Sustainability_Plan__c: plansForScaling,
    Repeat_Applicant__c: repeatApplicant,
    Referral_Source__c: referralSource,
    Referral_Source_if_Other__c: referralSourceIfOther,
    Additional_Information__c: additionalInfo,
    First_Reference__c: firstReferenceContact,
    Second_Reference__c: secondReferenceContact,
    Meme__c: meme,
  }

  const application = Object.keys(form).reduce((app, field) => {
    if (typeof form[field] === "string") {
      return {
        ...app,
        [field]: form[field].trim(),
      }
    }

    return {
      ...app,
      [field]: form[field],
    }
  }, {})

  conn.login(
    SF_PROD_USERNAME,
    `${SF_PROD_PASSWORD}${SF_PROD_SECURITY_TOKEN}`,
    err => {
      if (err) {
        console.error(err)
        return {
          statusCode: 400,
          body: JSON.stringify({ status: "fail" }),
        }
      }

      const lead = {
        ...application,
        Proactive_Community_Grants_Round__c: "Fellowship Program 2022", // this value is hardwired, depending on the type of grant round
        RecordTypeId: SF_RECORD_TYPE_GRANTS_ROUND,
      }

      // Single record creation
      conn.sobject("Lead").create(lead, async (err, ret) => {
        if (err || !ret.success) {
          console.error(err)
          return {
            statusCode: 400,
            body: JSON.stringify({ status: "fail" }),
          }
        }

        // send submission data to a google spreadsheet
        try {
          await addRowToSpreadsheet(
            {
              id: googleSpreadsheetId,
              sheetName: googleSheetName,
            },
            lead
          )
        } catch (err) {
          // as this is something internal we don't want to show this error to the user
          console.log(err)
        }

        console.log(
          `Fellowship Program 2022 with ID: ${ret.id} has been created!`
        )

        return {
          statusCode: 200,
          body: JSON.stringify({ status: "ok" }),
        }
      })
    }
  )
}
