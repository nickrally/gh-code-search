import { searchCode } from '../Search'

it("makes axios request", () => {
    const repos = ['RallyCommunity/custom-grid-with-deep-export']
    const text = 'Rally.data.wsapi.TreeStoreBuilder'
    const result = searchCode(repos, text)
})