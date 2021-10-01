import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlus,
  faTrophy,
  faScroll,
  faFile,
  faEdit,
  faThumbtack,
  faTrashAlt,
  faThumbsUp,
  faReply,
  faCommentDots,
  faBars,
  faChevronCircleRight
} from '@fortawesome/free-solid-svg-icons'
import {
  faCommentAlt,
  faArrowAltCircleUp
} from '@fortawesome/free-regular-svg-icons'
import { faBuffer } from '@fortawesome/free-brands-svg-icons'

export const plusIcon = (size, color) => (
  <FontAwesomeIcon icon={faPlus} size={size} color={color} />
)
export const issueIcon = (size, color) => (
  <FontAwesomeIcon icon={faCommentDots} size={size} color={color} />
)
export const testIcon = (size, color) => (
  <FontAwesomeIcon icon={faScroll} size={size} color={color} />
)
export const lotteryIcon = (size, color) => (
  <FontAwesomeIcon icon={faTrophy} size={size} color={color} />
)
export const questionIcon = (size, color) => (
  <FontAwesomeIcon icon={faFile} size={size} color={color} />
)
export const editIcon = (size, color) => (
  <FontAwesomeIcon icon={faEdit} size={size} color={color} />
)
export const deleteIcon = (size, color) => (
  <FontAwesomeIcon icon={faTrashAlt} size={size} color={color} />
)
export const pushpinIcon = (size, color) => (
  <FontAwesomeIcon icon={faThumbtack} size={size} color={color} />
)
export const thumbsUpIcon = (size, color) => (
  <FontAwesomeIcon icon={faThumbsUp} size={size} color={color} />
)
export const replyIcon = (size, color) => (
  <FontAwesomeIcon icon={faReply} size={size} color={color} />
)
export const backstageIcon = (size, color) => (
  <FontAwesomeIcon icon={faBuffer} size={size} color={color} />
)
export const sendIcon = (size, color) => (
  <FontAwesomeIcon icon={faChevronCircleRight} size={size} color={color} />
)
export const hamburgerIcon = (size, color) => (
  <FontAwesomeIcon icon={faBars} size={size} color={color} />
)
export const commentIcon = (size, color) => (
  <FontAwesomeIcon icon={faCommentAlt} size={size} color={color} />
)
export const goToTopIcon = (size, color) => (
  <FontAwesomeIcon icon={faArrowAltCircleUp} size={size} color={color} />
)
