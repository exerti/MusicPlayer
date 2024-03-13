import{ Xrequest} from './Xrequest'

export function getHotSearch(){
    return Xrequest(
      '/search/hot','GET'
    )
}


export function search(keywords){
  return  Xrequest(
    '/search','get',{
      keywords
    }
  )
}