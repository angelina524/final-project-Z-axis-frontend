<h1 align="center">Welcome to Z-axis 👋</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://www.notion.so/didijhong/Z-axis-User-Story-3f51e7514f114ac984b34b95aaeeb8fd" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> Z-axis，為您的演說帶來無限的可能。

### 專案介紹

在虛擬的網路世界中，Z-axis 將連結您（代表 x）與觀眾（代表 y）的即時多人互動，三方串連打造更加自由、更加立體的互動空間。

Z-axis 提供即時匿名留言、按讚投票、測驗互動、抽獎活動、問卷調查…等多項豐富演說的功能，透過即時數據，分析所有活動參與者的想法，以利整場演說延伸出更多互動地可能。

前端主要專案採用 React、Socket.IO 開發，並部署在 Netlify。

後端採用 Express、Sequelize、Socket.IO 開發，部署在 AWS EC2 平台，並使用 AWS RDS - MySQL 資料庫。

### 🏠 Homepage
- [Front-End repository](https://github.com/angelina524/final-project-Z-axis-frontend/tree/dev)
- [Back-End repository](https://github.com/angelina524/final-project-Z-axis-backend/tree/dev)
- [UserStory | notion](https://www.notion.so/didijhong/Z-axis-User-Story-3f51e7514f114ac984b34b95aaeeb8fd)
  

### ✨ [Demo](https://zaxis.netlify.app/#/)

- 首頁
<img src="https://user-images.githubusercontent.com/61361198/134876154-25c68d49-c8ac-468b-a9d1-6c9b82f7de9d.gif" width="300" />

- 即時留言功能

<img src="https://user-images.githubusercontent.com/61361198/136129383-66df350c-7f8a-454e-9f51-dcbe7d916310.gif" width="600" />
  

## Install

  

```sh
# npm
npm install
# yarn
yarn i
```
 

## Usage

```sh
# npm
npm run start
# yarn
yarn start
```

---

## Tools
- Framework （React ecosystem）
  - create-react-app
  - react
  - react-router-dom
  - recharts ( data visualization)
  - react-date-range ( select date input )
  - react-animals ( animals avatar )
- CSS, styles
  - \@emotion
  - fontawesome-icon
- Others
  - socket.io-client ( real time )
  - axios ( fetch api )
  - moment ( data format )

## Author

👤 **Angelina** :octocat: Github: [@angelina524](https://github.com/angelina524)

👤 **BenBen** :octocat: Github: [@Benben](https://github.com/angelina524)

👤 **Didi** :octocat: Github: [@Didi](https://github.com/angelina524)

👤 **Allen** :octocat: Github: [@Allen](https://github.com/rockyooooooo)

## File structure

```
📦src
 ┣ 📂components
 ┃ ┣ 📂Menu
 ┃ ┃ ┣ 📜BackstageMenuContent.js
 ┃ ┃ ┣ 📜ForestageMenuContent.js
 ┃ ┃ ┗ 📜Menu.js
 ┃ ┣ 📂Navbar
 ┃ ┃ ┣ 📜BackstageNavbar.js
 ┃ ┃ ┣ 📜ForestageNavbar.js
 ┃ ┃ ┗ 📜Navbar.js
 ┃ ┣ 📜AddCommentForm.js
 ┃ ┣ 📜App.js
 ┃ ┣ 📜Avatar.js
 ┃ ┣ 📜Button.js
 ┃ ┣ 📜Comment.js
 ┃ ┣ 📜form.js
 ┃ ┣ 📜HomePageNavbar.js
 ┃ ┣ 📜icons.js
 ┃ ┣ 📜index.js
 ┃ ┣ 📜Loader.js
 ┃ ┣ 📜Logo.js
 ┃ ┣ 📜WidthWrapper.js
 ┃ ┗ 📜Wrapper.js
 ┣ 📂constants
 ┃ ┣ 📜baseURL.js
 ┃ ┣ 📜cardList.js
 ┃ ┗ 📜optionList.js
 ┣ 📂contexts
 ┃ ┣ 📜editIssueContext.js
 ┃ ┗ 📜tokenContexts.js
 ┣ 📂hooks
 ┃ ┗ 📜useForm.js
 ┣ 📂pages
 ┃ ┣ 📂AddPage
 ┃ ┃ ┣ 📜AddPage.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂BackstagePages
 ┃ ┃ ┣ 📜BackstagePage.js
 ┃ ┃ ┣ 📜components.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜IssueListPage.js
 ┃ ┣ 📂BackstageSinglePage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📜SectionWrapper.js
 ┃ ┃ ┣ 📜BackstageSinglePage.js
 ┃ ┃ ┣ 📜EditSection.js
 ┃ ┃ ┣ 📜GraphSection.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜QRcodeSection.js
 ┃ ┣ 📂FormPage
 ┃ ┃ ┣ 📜FormPage.js
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂HomePage
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜BackgroundCircle.js
 ┃ ┃ ┃ ┣ 📜BackgroundCircleDashed.js
 ┃ ┃ ┃ ┣ 📜BackgroundRectangle.js
 ┃ ┃ ┃ ┣ 📜CircleNumber.js
 ┃ ┃ ┃ ┣ 📜Curve.js
 ┃ ┃ ┃ ┣ 📜IssuePattern.js
 ┃ ┃ ┃ ┣ 📜LotteryPattern.js
 ┃ ┃ ┃ ┣ 📜PatternWrapper.js
 ┃ ┃ ┃ ┣ 📜Section.js
 ┃ ┃ ┃ ┣ 📜SurveyPattern.js
 ┃ ┃ ┃ ┣ 📜TestPattern.js
 ┃ ┃ ┃ ┗ 📜TitleWrapper.js
 ┃ ┃ ┣ 📜HomePage.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜IssueSection.js
 ┃ ┃ ┣ 📜LotterySection.js
 ┃ ┃ ┣ 📜MainSection.js
 ┃ ┃ ┣ 📜SurveySection.js
 ┃ ┃ ┣ 📜TestSection.js
 ┃ ┃ ┗ 📜TextSection.js
 ┃ ┣ 📂IssuePage
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜IssuePage.js
 ┃ ┣ 📂LoginPage
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜LoginPage.js
 ┃ ┣ 📂RegisterPage
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜RegisterPage.js
 ┃ ┣ 📂UpdateMe
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜UpdateMe.js
 ┃ ┗ 📂UpdatePassword
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜UpdatePassword.js
 ┣ 📂styles
 ┃ ┣ 📜flexJustifyAlign.js
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜theme.js
 ┣ 📂webapi
 ┃ ┣ 📜commentApi.js
 ┃ ┣ 📜guestApi.js
 ┃ ┣ 📜instance.js
 ┃ ┣ 📜issueApi.js
 ┃ ┗ 📜userApi.js
 ┣ 📜index.js
 ┣ 📜localStorageApi.js
 ┣ 📜logo.svg
 ┗ 📜utils.js
```
  

> Give us a ⭐️ if you like this project!
