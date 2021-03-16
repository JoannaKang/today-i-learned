
{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;    
  }
  
  // Use for utility type 'Omit'
  // omit을 활용하면 제외하고싶은것만 명시할 수 있음
  // 빼고자 하는 것이 더 명확하다면 omit을 활용
  
  type VideoMetadata =  Omit<Video, 'id' | 'title'> 

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