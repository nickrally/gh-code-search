import fetchResults from '../Api'
import "regenerator-runtime/runtime";
import mockAxios from 'axios'
import { exportAllDeclaration } from '@babel/types';

var data = {
        total_count: 2,
        items: [
            {
                path: "lib/request.js",
                html_url: "https://github.com/RallyTools/rally-node/blob/6caf46bbb1b03d613294020dcf1f4747f5d9be3a/lib/request.js",
                repository: {
                    full_name: "RallyTools/rally-node"
                }
            },
            {
                path: "spec/restapi.spec.js",
                html_url: "https://github.com/RallyTools/rally-node/blob/273fdc6bec8e488f4854e20d12e1efa67b1e9ea9/spec/restapi.spec.js",
                repository: {
                    full_name: "RallyTools/rally-node"
                }
            }
            
        ]    
}

/* it("makes axios request", async () => {
    const repoName = 'RallyTools/rally-node'
    const term = 'zsessionid'
    const url = `https://api.github.com/search/code?q=${term}+repo:${repoName}`
    expect((await fetchResults(url)).data['total_count']).toBe(4)
}) */

it("makes mock axios request", async () => {
    mockAxios.get.mockImplementationOnce(() => 
      Promise.resolve({
        data
      })
    ) 
    const mockResults = await fetchResults('fake url')
    console.log("FAKE RESPONSE", mockResults)

    expect(mockResults.data['items'].length).toEqual(mockResults.data['total_count'])
    expect(mockAxios.get).toHaveBeenCalledWith(
        "fake url", 
        {"auth": {"password": undefined, "username": undefined}}
    )
})