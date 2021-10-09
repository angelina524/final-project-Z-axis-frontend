import moment from 'moment'

export const isEmailFormatValid = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

export const isPasswordFormatValid = (email) => {
  const regex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z]).*$/
  return regex.test(email)
}

export const formatDate = (date, separator = '-') =>
  moment(date).format(`YYYY${separator}MM${separator}DD`)

export const isIssueFinished = (issue) =>
  new Date(formatDate(new Date())).getTime() >
  new Date(formatDate(issue.finishDate)).getTime()
export const isIssueOncoming = (issue) =>
  new Date(formatDate(new Date())).getTime() <
  new Date(formatDate(issue.beginDate)).getTime()
export const isIssueOngoing = (issue) =>
  new Date(formatDate(new Date())).getTime() >=
    new Date(formatDate(issue.beginDate)).getTime() &&
  new Date(formatDate(new Date())).getTime() <=
    new Date(formatDate(issue.finishDate)).getTime()
