{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;    
  }

  // Use for utility type 'Pick'
  // 기존의 타입에서 몇가지의 프로퍼티만 가져와서 좀 더 제한적인 타입을 만들고 싶을 때 -> Pick을 활용하여 선언한다
  type VideoMetadata =  Pick<Video, 'id' | 'title'> 

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://',
      data: 'byte-data..'
    }
  }

  function getVideoMetadata (id: string): VideoMetadata{
    return {
      id: id,
      title: 'title'
    }
  }
}