# Useful website

- https://dinfree.com/lecture/frontend/122_css_6.html

# Structure of Bootstrap grid

- container > row > col

```
<div class="container">
  <div class="row">
    <div class="col-"> contents </div>
  </div>
</div>

```

- col is devided 1 grids
- column has 4 classes
  1. .col-sx-\* : always stay in same line
  2. .col-sm-\*: stack grids under 768px screen size
  3. .col-md-\*: stack grids under 992px screen size
  4. .col-lg-\*: stack grids under 1200px screen size
  5. visible-lg: reveal this class onyl screen size is over 992px
  ```
  <div class="col-lg-4 col-xs-6"> <img src="https://shop-phinf.pstatic.net/20200624_263" alt="쇼핑몰 추천 상품[0]" style="width:100%;"> </div> <div class="col-lg-4 col-xs-6"> <img src="https://shop-phinf.pstatic.net/20200806_185" alt="쇼핑몰 추천 상품[1]" style="width:100%;"> </div> <div class="col-lg-4 visible-lg"> <img src="https://shop-phinf.pstatic.net/20200827_42" alt="쇼핑몰 추천 상품[2]" style="width:100%;"> </div>
  ```

# how to set full screeen in bootstrap

- Assign container-fluid in body tag

```

 <body class="container-fluid" style="padding:0">
 </body>
```
