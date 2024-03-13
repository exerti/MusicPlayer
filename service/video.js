import{ Xrequest} from './Xrequest'

export function getTopMv(offset =  0,limit = 10 ){
  return Xrequest (
    '/top/mv',
    'GET',
    {
     limit :limit,
     offset :offset
    }
  )
}



export function getMVUrl(id) {
  return Xrequest(
    "/mv/url",
    'GET',
     {id}
  )
}

export function getMVInfo(mvid) {
  return Xrequest(
    "/mv/detail",
    'GET',
    {
      mvid
    }
  )
}

export function getMVRelated(mvid) {
  return Xrequest(
    "/simi/mv",
    'GET',
    {
      mvid
    }
  )
}
