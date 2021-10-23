import theme from './theme'

export default `
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: ${theme.secondary_850};
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.secondary_300};
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.secondary_200};
    border-radius: 0.5rem;
  }
`
