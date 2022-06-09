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
    isAffiliated,
    affiliatedOrg,
    ethKnowledge,
    resumeLink,
    introVideoLink,
    projectResearchIdea,
    projectName,
    projectDescription,
    projectPreviousWork,
    projectLeaderReasons,
    projectGoals,
    proposedTimeline,
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
    memeDescription,
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
    gender,
    npsp__CompanyCountry__c: country,
    Time_Zone__c: timezone,
    socialNetworks,
    title,
    isAffiliated,
    affiliatedOrg,
    ethKnowledge,
    resumeLink,
    introVideoLink,
    projectResearchIdea,
    Project_Name__c: projectName,
    Project_Description__c: projectDescription,
    Previous_Work__c: projectPreviousWork,
    projectLeaderReasons,
    Impact__c: projectGoals,
    Proposed_Timeline__c: proposedTimeline,
    Requested_Amount__c: requestedAmount,
    Problem_Being_Solved__c: problemBeingSolved,
    Is_it_a_Public_Good__c: isYourProjectPublicGood,
    projectReasons,
    plansForBroaderCommunity,
    plansForScaling,
    Repeat_Applicant__c: repeatApplicant,
    Referral_Source__c: referralSource,
    referralSourceIfOther,
    Additional_Information__c: additionalInfo,
    firstReferenceContact,
    secondReferenceContact,
    memeDescription,
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

  console.log({ application })

  try {
    await addRowToSpreadsheet(
      {
        id: googleSpreadsheetId,
        sheetName: googleSheetName,
      },
      application
    )
  } catch (err) {
    // as this is something internal we don't want to show this error to the user
    console.log(err)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ status: "ok" }),
  }

  // conn.login(
  //   SF_PROD_USERNAME,
  //   `${SF_PROD_PASSWORD}${SF_PROD_SECURITY_TOKEN}`,
  //   err => {
  //     if (err) {
  //       console.error(err)
  //       return {
  //         statusCode: 400,
  //         body: JSON.stringify({ status: "fail" }),
  //       }
  //     }

  //     const application = {
  //       FirstName: FirstName.trim(),
  //       LastName: LastName.trim(),
  //       Email: Email.trim(),
  //       POC_is_authorised_signatory__c, // this is a boolean value, no trim applied
  //       Authorised_Signatory_Information__c: Authorised_Signatory_Information__c.trim(),
  //       Applying_as_a__c: Applying_as_a__c.trim(),
  //       Applying_as_Other__c: Applying_as_Other__c.trim(),
  //       Company: Company.trim(),
  //       npsp__CompanyCountry__c: npsp__CompanyCountry__c.trim(),
  //       Countries_of_Team__c: Countries_of_Team__c.trim(),
  //       Time_Zone__c: Time_Zone__c.trim(),
  //       Project_Name__c: Project_Name__c.trim(),
  //       Project_Description__c: Project_Description__c.trim(),
  //       Category__c: Category__c.trim(),
  //       Team_Profile__c: Team_Profile__c.trim(),
  //       Previous_Work__c: Previous_Work__c.trim(),
  //       Grant_Scope__c: Grant_Scope__c.trim(),
  //       Impact__c: Impact__c.trim(),
  //       Problem_Being_Solved__c: Problem_Being_Solved__c.trim(),
  //       Is_it_a_Public_Good__c: Is_it_a_Public_Good__c.trim(),
  //       Requested_Amount__c: Requested_Amount__c.trim(),
  //       Proposed_Timeline__c: Proposed_Timeline__c.trim(),
  //       Challenges__c: Challenges__c.trim(),
  //       Additional_support_requests__c: Additional_support_requests__c.trim(),
  //       Referral_Source__c: Referral_Source__c.trim(),
  //       Referral_Source_if_Other__c: Referral_Source_if_Other__c.trim(),
  //       Would_you_share_your_research__c: Would_you_share_your_research__c.trim(),
  //       LinkedIn_Profile__c: LinkedIn_Profile__c.trim(),
  //       Twitter__c: Twitter__c.trim(),
  //       Alternative_Contact__c: Alternative_Contact__c.trim(),
  //       Repeat_Applicant__c, // this is a boolean value, no trim applied
  //       Can_the_EF_reach_out__c, // this is a boolean value, no trim applied
  //       Additional_Information__c: Additional_Information__c.trim(),
  //       Proactive_Community_Grants_Round__c: "Academic Grants Round", // this value is hardwired, depending on the type of grant round
  //       RecordTypeId: SF_RECORD_TYPE_GRANTS_ROUND,
  //     }

  // Single record creation
  // conn.sobject('Lead').create(application, async (err, ret) => {
  //   if (err || !ret.success) {
  //     console.error(err);
  //     return {
  //       statusCode: 400,
  //       body: JSON.stringify({ status: 'fail' }),
  //     };
  //   }

  //   // send submission data to a google spreadsheet
  //   try {
  //     await addRowToSpreadsheet(
  //       {
  //         id: googleSpreadsheetId!,
  //         sheetName: googleSheetName!
  //       },
  //       application
  //     );
  //   } catch (err) {
  //     // as this is something internal we don't want to show this error to the user
  //     console.log(err);
  //   }

  //   console.log(`Academic Grants Lead with ID: ${ret.id} has been created!`);

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({ status: 'ok' }),
  //   };
  // });
  // }
  // )
}
