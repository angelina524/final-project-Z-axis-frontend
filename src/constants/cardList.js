import {
  issueIcon,
  testIcon,
  lotteryIcon,
  questionIcon
} from './../styles/icon'

const cardList = [
  {
    path: '/form',
    iconName: issueIcon,
    cardTitle: '留言箱',
    cardText: '創建專屬話題並提供觀眾匿名留言，與您輕鬆地進行話題討論。'
  },
  {
    path: 'add',
    iconName: testIcon,
    cardTitle: '測驗',
    cardText: '創建專屬測驗問答以了解觀眾的想法，提升您與觀眾的互動率。'
  },
  {
    path: 'add',
    iconName: lotteryIcon,
    cardTitle: '抽獎',
    cardText: '創建吸睛且有趣的抽獎活動，以刺激觀眾於當前話題的參與度。'
  },
  {
    path: 'add',
    iconName: questionIcon,
    cardTitle: '問卷',
    cardText: '按您的喜好設計並創建表單，可快速搜集與整理觀眾的資料。'
  }
]

export default cardList
