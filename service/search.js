import{ Xrequest} from './Xrequest'

export function getHotSearch(){
    return Xrequest(
      '/search/hot','GET'
    )
}