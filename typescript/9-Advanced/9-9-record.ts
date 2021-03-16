type PageInfo = {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

// Use for utility type 'Page': map 함수와 유사하게 쓸 수 있다
const nav: Record <Page, PageInfo> = { // page와 pageInfo를 연결한다 (page가 key, pageInfo가 value가 된다)
  home: { title: 'Home' },
  about : { title: 'About' },
  contact : { title: 'Contact' }
}