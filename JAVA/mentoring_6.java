class BrowserHistory {
    
  Stack<String> browserUrl;
  Stack<String> forwardUrl;

  public BrowserHistory(String homepage) {
      browserUrl = new Stack<>();
      forwardUrl = new Stack<>();
      browserUrl.add(homepage);
  }
  
  public void visit(String url) {
      browserUrl.add(url);
      forwardUrl = new Stack<>();
  }
  
  public String back(int steps) {
      for(int i = 0; i < steps; i++) {
          if(browserUrl.size() > 1) {
              String popUrl = browserUrl.pop();
              forwardUrl.add(popUrl);                
          }
      }
      return browserUrl.peek();
  }
  
  public String forward(int steps) {
      for (int i = 0; i < steps; i++) {
          if(forwardUrl.size() > 0) {
              String popUrl = forwardUrl.pop();
              browserUrl.add(popUrl);
          }
      }
      return browserUrl.peek();
  }
}

/**
* Your BrowserHistory object will be instantiated and called as such:
* BrowserHistory obj = new BrowserHistory(homepage);
* obj.visit(url);
* String param_2 = obj.back(steps);
* String param_3 = obj.forward(steps);
*/


class BrowserHistory {

  ArrayList<String> browseUrl;
  int index;
  
  public BrowserHistory(String homepage) {
      browseUrl = new ArrayList<String>();
      browseUrl.add(homepage);
      index = 0;
  }
  
  public void visit(String url) {
      browseUrl.subList(index + 1, browseUrl.size()).clear();
      browseUrl.add(url);
      index++;
  }
  
  public String back(int steps) {
      int indexCheck = index-steps;
      
      if(indexCheck > 0) {
         index = indexCheck;
      } else {
         index = 0;
      }
      return browseUrl.get(index);
  }
  
  public String forward(int steps) {
      int indexCheck = index + steps;
      if (indexCheck < browseUrl.size()) {
          index = indexCheck;
      } else {
          index = browseUrl.size() - 1;
      }
      return browseUrl.get(index);
  }
}
