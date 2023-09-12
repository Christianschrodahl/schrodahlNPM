import {createStore} from 'vuex'


export interface PdfDocument {
  title: string;
  url: string;
  date:string;
  confirmed: boolean;
}


export const store = new createStore({
    state: {
      documents: [
        {
            title: 'document 1',
            date: '01.06.23 08:55',
            url: 'someRandomURL',
            confirmed: false
        },
        {
            title: 'document 2',
            date: '01.06.23 08:55',
            url: 'someRandomURL',
            confirmed: false
        }
    ]
    },
    mutations: {
      confirmed (state, payload:Record<string,string>) {
        console.log(payload)
        state.documents[payload.id].confirmed = true
      }
    }
  })