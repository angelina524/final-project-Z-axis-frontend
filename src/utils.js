export const isEmailFormatValid = (email) => {
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  return regex.test(email)
}

export const isPasswordFormatValid = (email) => {
  const regex = /^.*(?=.{8,})(?=.*\d)(?=.*[a-z]).*$/
  return regex.test(email)
}

export const transformDate = (date) => {
  const mm = date.getMonth() + 1 // getMonth() is zero-based
  const dd = date.getDate()

  return [
    date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
  ].join('/')
}

export const isIssueFinished = (issue) =>
  Date.UTC(...new Date().toLocaleDateString().split('/')) >
  Date.UTC(...issue.finishTime.substring(0, 10).split('-'))
export const isIssueOncoming = (issue) =>
  Date.UTC(...new Date().toLocaleDateString().split('/')) <
  Date.UTC(...issue.beginTime.substring(0, 10).split('-'))
export const isIssueOngoing = (issue) =>
  Date.UTC(...new Date().toLocaleDateString().split('/')) >=
  Date.UTC(...issue.beginTime.substring(0, 10).split('-'))
