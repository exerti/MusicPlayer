
import{ Xrequest} from './Xrequest'

export function getBanners(){
  return Xrequest(
    '/banner',
    'GET',
    {
      type:2
    }
  )
}

/**
 * 获取歌单详情
 * @param {*} id id=24381616 是热门歌单
 */
export function getPlayListDetail(id=24381616){
  return Xrequest('/playlist/detail','GET',{id})
}
/**
 * 获取网易云音乐歌单的所有歌曲
 * @param {*} id  歌单的Id
 * @param {*} limit   分页大小
 * @param {*} offset  偏移量
 */
export function getTopPlayList(limit= 10 ,offset = 1){
  return Xrequest('/top/playlist' , 'GET',{limit, offset,cat:"全部"})
}

export  function getSongeMenuLsit(){
    return Xrequest('')
}