import React, { useState } from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import { useToasts } from "react-toast-notifications"
import Select from "react-select"

import {
  Form,
  Label,
  Input,
  Checkbox,
  CheckboxInput,
  TextArea,
  Button,
  Required,
  Center,
  H2,
  RadioContainer,
  RadioPrompt,
  RadioInputContainer,
  RadioLabel,
} from "../components/SharedStyledComponents"

import { colorRed } from "../utils/styles"
import validateEmail from "../utils/validateEmail"
import isDev from "../utils/isDev"
import * as styles from "../utils/styles"

import { COUNTRY_OPTIONS, TIMEZONE_OPTIONS } from "../constants"

const Container = styled.div`
  max-width: ${styles.screenSizeXL};
  margin: 0 auto;
`

const StyledForm = styled(Form)`
  margin: 2rem auto;
`

const StyledSelect = styled(Select)`
  margin-top: 0.5rem;
`

const StyledLabel = styled(Label)`
  display: ${({ display = true }) => (display ? "flex" : "none")};
  margin-bottom: 2.5rem;
  width: 100%;
`

const ErrorMessage = styled.small`
  color: ${colorRed};
`

const ErrorDiv = styled.div`
  margin-top: 0.5rem;
  height: 0rem;
  width: 100%;
`

const StyledButton = styled(Button)`
  margin-bottom: 1rem;
`

const Title = styled(H2)`
  margin-left: 1rem;
  margin-right: 1rem;
`

const TwoColumn = styled.div`
  display: flex;

  *:first-child {
    margin-right: 50px;
  }
`

const GENDER_TYPES = ["She/Her", "Him/His", "They/Them", "Other"]

const YES_NO = ["Yes", "No"]

const STAGE_OF_PROJECT = [
  "Yes, I have a project/research being implemented",
  "Yes, I have a project idea but it is in its early stages",
  "No, I have an idea, but the project/research is not currently being implemented",
  "Other",
]

const REFERRAL_SOURCE = [
  "Social media",
  "Blog post",
  "Through my network - someone shared the opportunity with me",
  "Other (please specify)",
]

const requiredFields = [
  "lastName",
  "POCisAuthorisedSignatory",
  "authorisedSignatoryInformation",
  "contactEmail",
  "phone",
  "gender",
  "country",
  "timezone",
  "title",
  "ethKnowledge",
  "resumeLink",
  "introVideoLink",
  "stageOfProject",
  "applyingAsOther",
  "projectName",
  "projectDescription",
  "projectLeaderReasons",
  "projectGoals",
  "proposedTimeline",
  "requestedAmount",
  "problemBeingSolved",
  "isYourProjectPublicGood",
  "projectReasons",
  "plansForBroaderCommunity",
  "plansForScaling",
  "repeatApplicant",
  "referralSource",
  "referralSourceIfOther",
  "firstReferenceContact",
  "secondReferenceContact",
  "meme",
]

const emailFields = ["contactEmail"]

const urlFields = [
  "websiteOrg",
  "resumeLink",
  "introVideoLink",
  "projectPreviousWork",
]

const RequiredError = () => <ErrorMessage>Field is required</ErrorMessage>
const EmailError = () => (
  <ErrorMessage>Please provide a valid email address</ErrorMessage>
)
const UrlError = () => <ErrorMessage>Ensure link is a valid URL</ErrorMessage>

const ApplicationForm = () => {
  const [formState, setFormState] = useState({
    isPending: false,
    // form fields
    firstName: { value: "", isTouched: false, isValid: false },
    lastName: { value: "", isTouched: false, isValid: false },
    POCisAuthorisedSignatory: {
      value: true,
      isTouched: false,
      isValid: true,
    },
    authorisedSignatoryInformation: {
      value: "",
      isTouched: false,
      isValid: false,
    },
    contactEmail: { value: "", isTouched: false, isValid: false },
    phone: { value: "", isTouched: false, isValid: false },
    gender: { value: "", isTouched: false, isValid: false },
    country: { value: "", isTouched: false, isValid: false },
    timezone: { value: "", isTouched: false, isValid: false },
    socialNetworks: { value: "", isTouched: false, isValid: true }, // optional
    title: { value: "", isTouched: false, isValid: false },
    affiliatedOrg: { value: "", isTouched: false, isValid: true }, // optional
    roleOrg: { value: "", isTouched: false, isValid: true }, // optional
    websiteOrg: { value: "", isTouched: false, isValid: true }, // optional
    ethKnowledge: { value: "", isTouched: false, isValid: false },
    resumeLink: { value: "", isTouched: false, isValid: false },
    introVideoLink: { value: "", isTouched: false, isValid: false },
    stageOfProject: { value: "", isTouched: false, isValid: false },
    applyingAsOther: { value: "", isTouched: false, isValid: false },
    projectName: { value: "", isTouched: false, isValid: false },
    projectDescription: { value: "", isTouched: false, isValid: false },
    projectPreviousWork: { value: "", isTouched: false, isValid: true }, // optional
    projectLeaderReasons: { value: "", isTouched: false, isValid: false },
    projectGoals: { value: "", isTouched: false, isValid: false },
    proposedTimeline: { value: "", isTouched: false, isValid: false },
    requestedAmount: { value: "", isTouched: false, isValid: false },
    problemBeingSolved: { value: "", isTouched: false, isValid: false },
    isYourProjectPublicGood: { value: "", isTouched: false, isValid: false },
    projectReasons: { value: "", isTouched: false, isValid: false },
    plansForBroaderCommunity: { value: "", isTouched: false, isValid: false },
    plansForScaling: { value: "", isTouched: false, isValid: false },
    repeatApplicant: { value: false, isTouched: false, isValid: false },
    referralSource: { value: "", isTouched: false, isValid: false },
    referralSourceIfOther: { value: "", isTouched: false, isValid: false },
    additionalInfo: { value: "", isTouched: false, isValid: true }, // optional
    firstReferenceContact: { value: "", isTouched: false, isValid: false },
    secondReferenceContact: { value: "", isTouched: false, isValid: false },
    meme: { value: "", isTouched: false, isValid: false },
  })

  const [isApplyingAsOther, setIsApplyingAsOther] = useState(false)
  const [isReferralSourceOther, setIsReferralSourceOther] = useState(false)

  const { addToast } = useToasts()

  const genderOptions = GENDER_TYPES.map(option => ({
    value: option,
    label: option,
    name: "gender",
  }))

  const countryOptions = COUNTRY_OPTIONS.map(({ value, label }) => ({
    value,
    label,
    name: "country",
  }))

  const timezoneOptions = TIMEZONE_OPTIONS.map(({ value, label }) => ({
    value,
    label,
    name: "timezone",
  }))

  const stageOfProjectOptions = STAGE_OF_PROJECT.map(option => ({
    value: option,
    label: option,
    name: "stageOfProject",
  }))

  const referralSourceOptions = REFERRAL_SOURCE.map(option => ({
    value: option,
    label: option,
    name: "referralSource",
  }))

  const isEmailValid = email => {
    try {
      validateEmail(email)
      return true
    } catch (error) {
      return false
    }
  }

  const isUrlValid = url => {
    const re = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/
    return url === "" || !!url.match(re)
  }

  const handleCheckBoxChange = event => {
    const { name, checked } = event.target
    setFormState({
      ...formState,
      [name]: { ...formState[name], value: checked },
    })
  }

  const handleInputChange = event => {
    let { value, name } = event.target
    if (name === "repeatApplicant") {
      // convert this value into a boolean
      value = value === YES_NO[0]
    }
    const snapshot = { ...formState }
    snapshot[name].value = value
    snapshot[name].isValid = isFieldValid(name, value)
    setFormState(snapshot)
  }

  const handleSelectChange = selectedOption => {
    let { name, value } = selectedOption
    const snapshot = { ...formState }
    snapshot[name].value = value
    snapshot[name].isValid = value !== "" || !requiredFields.includes(name)
    setFormState(snapshot)
  }

  const handleTouched = (event, field) => {
    const name = field || event.target.name
    const snapshot = { ...formState }
    snapshot[name].isTouched = true
    setFormState(snapshot)
  }

  const submitInquiry = async () => {
    setFormState({ ...formState, isPending: true })
    const stateFields = Object.keys(formState)
    const formData = {}
    for (const field of stateFields) {
      formData[field] = formState[field].value
    }

    try {
      const response = await fetch("/.netlify/functions/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      setFormState({ ...formState, isPending: false })
      if (response.status !== 200) {
        addToast("Error submitting, please try again.", {
          appearance: "error",
          autoDismiss: true,
        })
      } else {
        addToast("Success!", {
          appearance: "success",
          autoDismiss: true,
        })
        navigate("/thanks/")
      }
    } catch (error) {
      setFormState({ ...formState, isPending: false })
      console.error(error)
      addToast("Error submitting, please try again.", {
        appearance: "error",
        autoDismiss: true,
      })
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Already be validated before this button is enabled
    isFormValid() && submitInquiry()
  }

  const isFieldValid = (name, value) => {
    let valid = true

    if (valid && requiredFields.includes(name)) {
      valid = value !== ""
    }

    if (valid && emailFields.includes(name)) {
      valid = isEmailValid(value)
    }

    if (valid && urlFields.includes(name)) {
      valid = isUrlValid(value)
    }

    return valid
  }

  const isFormValid = () => {
    if (isDev()) {
      return true
    }

    // Filter conditional fields if they are not selected
    const requiredFieldsWOConditionals = requiredFields.filter(field => {
      if (field === "applyingAsOther" && !isApplyingAsOther) {
        return false
      }

      if (field === "referralSourceIfOther" && !isReferralSourceOther) {
        return false
      }

      return true
    })

    for (const field of requiredFieldsWOConditionals) {
      if (!formState[field]?.isValid) {
        return false
      }
    }

    if (!emailFields.every(field => isEmailValid(formState[field].value))) {
      return false
    }

    if (!urlFields.every(field => isUrlValid(formState[field].value))) {
      return false
    }

    return true
  }

  const isButtonDisabled = !isFormValid() || formState.isPending
  const buttonText = formState.isPending ? "Submitting..." : "Submit"

  return (
    <Container>
      <Center>
        <Title>
          Thank you for your interest in the Fellowship Program. Please fill out
          the form below.
        </Title>
      </Center>
      <StyledForm onSubmit={handleSubmit}>
        <TwoColumn>
          <StyledLabel>
            <span>First Name</span>
            <Input
              type="text"
              name="firstName"
              value={formState.firstName?.value}
              onChange={handleInputChange}
              maxLength="255"
              onBlur={handleTouched}
            />
          </StyledLabel>
          <StyledLabel>
            <span>
              Last name/ preferred name/ pseudonym <Required>*</Required>
            </span>
            <Input
              type="text"
              name="lastName"
              value={formState.lastName.value}
              onChange={handleInputChange}
              maxLength="255"
              onBlur={handleTouched}
              required
            />
            <ErrorDiv>
              {formState.lastName.isTouched && !formState.lastName.isValid && (
                <RequiredError />
              )}
            </ErrorDiv>
          </StyledLabel>
        </TwoColumn>
        <StyledLabel>
          <Checkbox>
            <CheckboxInput
              type="checkbox"
              name="POCisAuthorisedSignatory"
              defaultChecked={formState.POCisAuthorisedSignatory.value}
              onChange={handleCheckBoxChange}
              required
            />
            Is the point of contact also the authorised signatory?
          </Checkbox>
        </StyledLabel>
        <StyledLabel>
          <span>
            Name, job title, and email address of the authorised signatory{" "}
            <Required>*</Required>
          </span>
          <div>
            <small>
              (e.g. John Smith, CEO, john@mycompany.com. This is the person who
              will sign the contract. They must be someone who can sign
              contracts on behalf of the entity.)
            </small>
          </div>
          <Input
            type="text"
            name="authorisedSignatoryInformation"
            value={formState.authorisedSignatoryInformation.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.authorisedSignatoryInformation.isTouched &&
              !formState.authorisedSignatoryInformation.isValid && (
                <RequiredError />
              )}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Email <Required>*</Required>
          </span>
          <Input
            type="email"
            name="contactEmail"
            value={formState.contactEmail.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.contactEmail.isTouched &&
              !formState.contactEmail.isValid && <EmailError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Phone number <Required>*</Required>
          </span>
          <div>
            <small>Phone number with country code (format - eg.: +1)</small>
          </div>
          <Input
            type="text"
            name="phone"
            value={formState.phone.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.phone.isTouched && !formState.phone.isValid && (
              <RequiredError />
            )}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Which gender pronoun do you use? <Required>*</Required>
          </span>
          <StyledSelect
            options={genderOptions}
            onChange={handleSelectChange}
            onBlur={e => handleTouched(e, "gender")}
            required
          />
          <ErrorDiv>
            {formState.gender.isTouched && !formState.gender.isValid && (
              <RequiredError />
            )}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Country <Required>*</Required>
          </span>
          <div>
            <small>
              Please provide the current country you’re located in or spend the
              most time if it’s not your country of origin
            </small>
          </div>
          <StyledSelect
            options={countryOptions}
            onChange={handleSelectChange}
            onBlur={e => handleTouched(e, "country")}
            required
          />
          <ErrorDiv>
            {formState.country.isTouched && !formState.country.isValid && (
              <RequiredError />
            )}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Time Zone <Required>*</Required>
          </span>
          <div>
            <small>
              Please choose your current time zone to help us schedule calls.
            </small>
          </div>
          <StyledSelect
            options={timezoneOptions}
            onChange={handleSelectChange}
            onBlur={e => handleTouched(e, "timezone")}
            required
          />
          <ErrorDiv>
            {formState.timezone.isTouched && !formState.timezone.isValid && (
              <RequiredError />
            )}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>Social network(s)</span>
          <div>
            <small>
              Please indicate your preferred social network(s) handle(s)
            </small>
          </div>
          <Input
            type="text"
            name="socialNetworks"
            value={formState.socialNetworks.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
          />
        </StyledLabel>
        <StyledLabel>
          <span>
            What is your current occupation? <Required>*</Required>
          </span>
          <Input
            type="text"
            name="title"
            value={formState.title.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.title.isTouched && !formState.title.isValid && (
              <RequiredError />
            )}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            What is your affiliated organization(s)? <Required>*</Required>
          </span>
          <div>
            <small>
              What is the name of the organization you are affiliated with? If
              you are not affiliated with an organization, simply put "N/A".
            </small>
          </div>
          <Input
            type="text"
            name="affiliatedOrg"
            value={formState.affiliatedOrg.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
          />
          <ErrorDiv>
            {formState.affiliatedOrg.isTouched &&
              !formState.affiliatedOrg.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>What is your role in your organization?</span>
          <Input
            type="text"
            name="roleOrg"
            value={formState.roleOrg.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
          />
        </StyledLabel>
        <StyledLabel>
          <span>Organization website</span>
          <div>
            <small>What is your organization's website?</small>
          </div>
          <Input
            type="text"
            name="websiteOrg"
            value={formState.websiteOrg.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
          />
          <ErrorDiv>
            {formState.websiteOrg.isTouched &&
              !formState.websiteOrg.isValid && <UrlError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Describe your familiarity and understanding of Ethereum or other
            blockchains. <Required>*</Required>
          </span>
          <div>
            <small>
              We value sincerity. Please rest assured that your (lack) knowledge
              about blockchain is not detrimental to becoming a Fellow. (max
              1,000 characters)
            </small>
          </div>
          <TextArea
            name="ethKnowledge"
            value={formState.ethKnowledge.value}
            onChange={handleInputChange}
            onBlur={handleTouched}
            maxLength="1000"
            required
          />
          <ErrorDiv>
            {formState.ethKnowledge.isTouched &&
              !formState.ethKnowledge.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Insert a link to your Resumé <Required>*</Required>
          </span>
          <div>
            <small>Please make sure that the link is accessible</small>
          </div>
          <Input
            type="text"
            name="resumeLink"
            value={formState.resumeLink.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.resumeLink.isTouched &&
              !formState.resumeLink.isValid && <UrlError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Please insert a link to a 3 minute video - In a 3 minute video,
            please let us know about you and your project. Why are you
            interested in Ethereum and the Ethereum Foundation Fellowship
            Program? <Required>*</Required>
          </span>
          <div>
            <small>
              Please describe why you would like to be considered for the
              Fellowship Program. Please make sure the link is accesible.
            </small>
          </div>
          <Input
            type="text"
            name="introVideoLink"
            value={formState.introVideoLink.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.introVideoLink.isTouched &&
              !formState.introVideoLink.isValid && <UrlError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Do you already have a project, research topic, or idea?{" "}
            <Required>*</Required>
          </span>
          <StyledSelect
            options={stageOfProjectOptions}
            onChange={option => {
              // is Other option selected?
              setIsApplyingAsOther(option.value === STAGE_OF_PROJECT[3])
              handleSelectChange(option)
            }}
            onBlur={e => handleTouched(e, "stageOfProject")}
            required
          />
          <ErrorDiv>
            {formState.stageOfProject.isTouched &&
              !formState.stageOfProject.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel display={isApplyingAsOther}>
          <span>
            If "Other" selected, please describe <Required>*</Required>
          </span>
          <Input
            type="text"
            name="applyingAsOther"
            value={formState.applyingAsOther.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.applyingAsOther.isTouched &&
              !formState.applyingAsOther.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Project name <Required>*</Required>
          </span>
          <div>
            <small>
              This should be a concise description of the title of your project.
            </small>
          </div>
          <Input
            type="text"
            name="projectName"
            value={formState.projectName.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.projectName.isTouched &&
              !formState.projectName.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Please describe what your idea/project is. <Required>*</Required>
          </span>
          <div>
            <small>
              Please describe your innovative idea, the impact that this project
              has on Ethereum reaching the next billion, how Ethereum is/will be
              used and the problem you’re trying to address. Do indicate the
              name of the project, how long you have been working on this (if
              applicable) and with whom.
            </small>
          </div>
          <TextArea
            name="projectDescription"
            value={formState.projectDescription.value}
            onChange={handleInputChange}
            onBlur={handleTouched}
            maxLength="32768"
            required
          />
          <ErrorDiv>
            {formState.projectDescription.isTouched &&
              !formState.projectDescription.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Please provide other projects or research papers (ideally public
            and/or open-source), and engagements. If your project has an
            open-source code repository, or if you want to share other
            open-source contributions you’ve made please include it.
          </span>
          <div>
            <small>Any links for us to check out?</small>
          </div>
          <Input
            type="text"
            name="projectPreviousWork"
            value={formState.projectPreviousWork?.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
          />
          <ErrorDiv>
            {formState.projectPreviousWork.isTouched &&
              !formState.projectPreviousWork.isValid && <UrlError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Why are you the right person to carry out this project? What makes
            you unique? <Required>*</Required>
          </span>
          <div>
            <small>(max 1,000 characters)</small>
          </div>
          <TextArea
            name="projectLeaderReasons"
            value={formState.projectLeaderReasons.value}
            onChange={handleInputChange}
            onBlur={handleTouched}
            maxLength="1000"
            required
          />
          <ErrorDiv>
            {formState.projectLeaderReasons.isTouched &&
              !formState.projectLeaderReasons.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Project goals & success factors <Required>*</Required>
          </span>
          <div>
            <small>
              How do you define and measure success for this
              project/research/idea? (max 1,000 characters)
            </small>
          </div>
          <TextArea
            name="projectGoals"
            value={formState.projectGoals.value}
            onChange={handleInputChange}
            maxLength="1000"
          />
          <ErrorDiv>
            {formState.projectGoals.isTouched &&
              !formState.projectGoals.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            The fellowship duration is 6 months. What do you imagine
            accomplishing during these 6 months? And what are your plans for
            after the fellowship? <Required>*</Required>
          </span>
          <div>
            <small>(max 1,000 characters)</small>
          </div>
          <TextArea
            name="proposedTimeline"
            value={formState.proposedTimeline.value}
            onChange={handleInputChange}
            maxLength="1000"
          />
          <ErrorDiv>
            {formState.proposedTimeline.isTouched &&
              !formState.proposedTimeline.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            What resources or support will you require to achieve your
            project/research/idea? <Required>*</Required>
          </span>
          <div>
            <small>
              Please describe ways the Ethereum Foundation can best support the
              goals of your project/research/idea.
            </small>
          </div>
          <TextArea
            name="requestedAmount"
            value={formState.requestedAmount.value}
            onChange={handleInputChange}
            maxLength="32768"
          />
          <ErrorDiv>
            {formState.requestedAmount.isTouched &&
              !formState.requestedAmount.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            What are the main beneficiaries/target population of the project and
            where are they located? How do you foresee the ripple effect?{" "}
            <Required>*</Required>
          </span>
          <div>
            <small>(max 1,000 characters)</small>
          </div>
          <TextArea
            name="problemBeingSolved"
            value={formState.problemBeingSolved.value}
            onChange={handleInputChange}
            maxLength="1000"
          />
          <ErrorDiv>
            {formState.requestedAmount.isTouched &&
              !formState.requestedAmount.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            How does your project/idea benefit the Ethereum ecosystem and
            community? <Required>*</Required>
          </span>
          <div>
            <small>(max 1,000 characters)</small>
          </div>
          <TextArea
            name="isYourProjectPublicGood"
            value={formState.isYourProjectPublicGood.value}
            onChange={handleInputChange}
            maxLength="1000"
          />
          <ErrorDiv>
            {formState.isYourProjectPublicGood.isTouched &&
              !formState.isYourProjectPublicGood.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Why do you personally care about the issue/project? And why are you
            choosing to use Ethereum? <Required>*</Required>
          </span>
          <div>
            <small>(max 1,000 characters)</small>
          </div>
          <TextArea
            name="projectReasons"
            value={formState.projectReasons.value}
            onChange={handleInputChange}
            maxLength="1000"
          />
          <ErrorDiv>
            {formState.projectReasons.isTouched &&
              !formState.projectReasons.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            How do you plan to share your project with the broader community?{" "}
            <Required>*</Required>
          </span>
          <div>
            <small>(max 1,000 characters)</small>
          </div>
          <TextArea
            name="plansForBroaderCommunity"
            value={formState.plansForBroaderCommunity.value}
            onChange={handleInputChange}
            maxLength="1000"
          />
          <ErrorDiv>
            {formState.plansForBroaderCommunity.isTouched &&
              !formState.plansForBroaderCommunity.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            What is your strategy for scaling the impact of your idea? What will
            be different in 5-10 years if you are successful? On the other hand,
            if not selected as a Fellow this year, how would your
            project/research/idea progress? <Required>*</Required>
          </span>
          <div>
            <small>(max 1,000 characters)</small>
          </div>
          <TextArea
            name="plansForScaling"
            value={formState.plansForScaling.value}
            onChange={handleInputChange}
            maxLength="1000"
          />
          <ErrorDiv>
            {formState.plansForScaling.isTouched &&
              !formState.plansForScaling.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <RadioContainer>
            <RadioPrompt>
              Have you previously applied as a Fellow candidate or for any
              grants at the Ethereum Foundation? <Required>*</Required>
            </RadioPrompt>
            <RadioInputContainer>
              <RadioLabel>
                <Input
                  type="radio"
                  name="repeatApplicant"
                  value={YES_NO[0]}
                  onChange={handleInputChange}
                />
                <div>{YES_NO[0]}</div>
              </RadioLabel>
            </RadioInputContainer>
            <RadioInputContainer>
              <RadioLabel>
                <Input
                  type="radio"
                  name="repeatApplicant"
                  value={YES_NO[1]}
                  onChange={handleInputChange}
                />
                <div>{YES_NO[1]}</div>
              </RadioLabel>
            </RadioInputContainer>
          </RadioContainer>
          <ErrorDiv>
            {formState.repeatApplicant.isTouched &&
              !formState.repeatApplicant.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            How did you hear about this Fellowship program?{" "}
            <Required>*</Required>
          </span>
          <StyledSelect
            options={referralSourceOptions}
            onChange={option => {
              // is Other option selected?
              setIsReferralSourceOther(option.value === REFERRAL_SOURCE[3])
              handleSelectChange(option)
            }}
            onBlur={e => handleTouched(e, "referralSource")}
            required
          />
          <ErrorDiv>
            {formState.referralSource.isTouched &&
              !formState.referralSource.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel display={isReferralSourceOther}>
          <span>
            If Other, please specify the source <Required>*</Required>
          </span>
          <Input
            type="text"
            name="referralSourceIfOther"
            value={formState.referralSourceIfOther?.value}
            onChange={handleInputChange}
            maxLength="255"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.referralSourceIfOther.isTouched &&
              !formState.referralSourceIfOther.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Is there anything else you would like us to know or do you have any
            questions?
          </span>
          <TextArea
            name="additionalInfo"
            value={formState.additionalInfo.value}
            onChange={handleInputChange}
            maxLength="32768"
          />
        </StyledLabel>
        <StyledLabel>
          <span>
            First Reference contact details <Required>*</Required>
          </span>
          <div>
            <small>
              Please provide a referee contact information, including name,
              email address, relationship
            </small>
          </div>
          <Input
            type="text"
            name="firstReferenceContact"
            value={formState.firstReferenceContact?.value}
            onChange={handleInputChange}
            maxLength="20"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.firstReferenceContact.isTouched &&
              !formState.firstReferenceContact.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Second Reference contact details <Required>*</Required>
          </span>
          <div>
            <small>
              Please provide a referee contact information, including name,
              email address, relationship
            </small>
          </div>
          <Input
            type="text"
            name="secondReferenceContact"
            value={formState.secondReferenceContact?.value}
            onChange={handleInputChange}
            maxLength="20"
            onBlur={handleTouched}
            required
          />
          <ErrorDiv>
            {formState.secondReferenceContact.isTouched &&
              !formState.secondReferenceContact.isValid && <RequiredError />}
          </ErrorDiv>
        </StyledLabel>
        <StyledLabel>
          <span>
            Insert a link to your favorite meme and describe why it's your
            favorite. <Required>*</Required>
          </span>
          <TextArea
            name="meme"
            value={formState.meme.value}
            onChange={handleInputChange}
            maxLength="32768"
          />
          <ErrorDiv>
            {formState.meme.isTouched && !formState.meme.isValid && (
              <RequiredError />
            )}
          </ErrorDiv>
        </StyledLabel>
        <div>
          <StyledButton disabled={isButtonDisabled} onClick={handleSubmit}>
            {buttonText}
          </StyledButton>
          {!isFormValid() && (
            <div>
              <small>Fill out all required fields before submitting</small>
            </div>
          )}
        </div>
      </StyledForm>
    </Container>
  )
}

export default ApplicationForm
