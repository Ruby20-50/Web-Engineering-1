/*
Dokumentation der API siehe unter
https://doc.wikimedia.org/generated-data-platform/aqs/analytics-api/reference/page-views.html#get-number-of-page-views-for-a-page
*/

// Die Konstanten hier sind NICHT zu ändern!
const api = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article";
const access = "all-access";
const agent = "all-agents";
const project = "de.wikipedia.org";
const granularity = "monthly";

/** Typ der Rückgabe der API im Erfolgsfall. */
interface PageViews {
    items: Item[]
}

/** Item ist ein Eintrag in dem Array der Antwort. */
interface Item {
    project: string
    article: string
    granularity: string
    timestamp: string
    access: string
    agent: string
    views: number
}


export async function getWikipediaPageViews(article: string, year: number) {
    const from = `${year}010100`;
    const to = `${year + 1}010100`;   
    const url = encodeURI(`${api}/${project}/${access}/${agent}/${article}/${granularity}/${from}/${to}`);

        let response = await fetch(url);
        if(!response.ok){
            return -1;
        }
        let data = await response.json()
        let items = data.items
        let views = 0;
        for(let i = 0; i < items.length; i++ ){
                views += items[i].views
        }        
        return views;
    }

export function getWikipediaPageViewsPromises(article: string, year: number) {
    const from = `${year}010100`;
    const to = `${year + 1}010100`;
    const url = encodeURI(`${api}/${project}/${access}/${agent}/${article}/${granularity}/${from}/${to}`);
    
     const result = fetch(url)
        .then((response) => {
            if(!response.ok){
                return -1;
            }
            const request = response.json()
            .then((data)=>{
                let items = data.items;
                let views = 0;
                for (let i = 0; i < items.length; i++) {
                        views += items[i].views;
                    }
                    return views;
            })
            return request;
        })
        .catch(()=>{
            return -1;
        })
        return result;
      
        }
        // let data = await response.json()
        // let items = data.items
        // let views = 0;
        // for(let i = 0; i < items.length; i++ ){
        //         views += items[i].views
        // }        
        // return views;

//const url = "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/de.wikipedia.org/all-access/all-agents/JavaScript/monthly/2024010100/2025010100"