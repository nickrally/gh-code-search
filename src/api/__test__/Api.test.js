import fetchResults from '../Api'

it("makes axios request", () => {
    const repo = 'RallyCommunity/custom-grid-with-deep-export'
    const searchText = 'Rally.data.wsapi.TreeStoreBuilder'
    const url = `https://api.github.com/search/code?q=${searchText}+repo:${repo.name}`
    const result = fetchResults(url)
})