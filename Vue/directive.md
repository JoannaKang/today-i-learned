1. v-bind: 지정된 해당 태그의 속성값을 지정하는데 사용하는 디렉티브

```
<div class="summary-text" v-bind:class="country.cssId" v-bind:for="country.cssId" v-if="stackedChartShow === true">
  <div v-bind:class="country.cssId" v-bind:for="country.cssId" style="border:none; color:'#D8D8D8' !important; padding: 0;">
      <h2 v-bind:class="country.cssId" v-bind:for="country.cssId">
        {{ country.vForId }}
      </h2>
  </div>
</div>
```

2. v-model: 모델 객체를 수정하는데 이용하는 디렉티브 (input, textarea 등의 입력태그에 사용 가능), v-model로 지정한 모델객체 변수에 저장됨

```
<form @submit="submitLogin">
  <input type="email" class="login-email" placeholder="Your email address" v-model="email">
  <input v-if="login === false" type="text" class="fullname-text" placeholder="Your full name" v-model="fullname">
  <input type="password" class="login-text" placeholder="Your password" v-model="password">
  <input @click="submitSignUp" v-if="login === false" type="button" class="sign-up" value="Sign up"></input>
  <input @click="submitLogin" v-if="login === true" type="button" class="login-button" value="Login"></input>
</form>
```

3. v-on:click === @click="" : 이벤트 바인딩, 이벤트에 등록하고자 하는 함수는 methods의 인자로 전달해줘야 한다

- 세부적인 제약사항도 추가할 수 있다

1. click.once : 한번만 트리거
2. click.left : 왼쪽 클릭만 트리거

- 많이 쓰이는 종류: mouseover, mouseout, mouseup, mousedown, keyup....

```
<div @mouseover="mouseHover" @mouseout="mouseOut">
  <div class="framework-link-title">
    <h1>INS Lessons</h1>
    <h1 style="color:#8954BA;">{{insGrowthRate}}</h1>
  </div>
```
