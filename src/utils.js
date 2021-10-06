export const isEmailFormatValid = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

export const isPasswordFormatValid = (email) => {
  const regex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z]).*$/
  return regex.test(email)
}

export const isIssueFinished = (issue) =>
  new Date().getTime() > new Date(issue.finishDate).getTime()
export const isIssueOncoming = (issue) =>
  new Date().getTime() < new Date(issue.beginDate).getTime()
export const isIssueOngoing = (issue) =>
  new Date().getTime() >= new Date(issue.beginDate).getTime()
