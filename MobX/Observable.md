* Push vs Pull Model: Approaches which is dealing wiht async codes
1. Push model : Producer of data is king -> producer determines when to sen data to consumer => Promise
2. Pull model : Consumer is important -> consumer of data determines when it wants data from the producer => Observable

* Example of Observable
```
var observable = Rx.Observable.create((observer: any) => {
    observer.next('hi Observable');
})

observable.subscribe((data) => {
    console.log(data);
})
```