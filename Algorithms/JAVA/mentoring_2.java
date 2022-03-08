import java.util.*;

public class mentoring_2 {

  interface Shape {
    public double getArea();
  }
  
  static class Circle implements Shape {
    int r;
    Circle(int r) {
      this.r = r;
    }
    
    public double getArea() {
      return Math.PI * Math.pow(r,2);
    }
  }

  static class Triangle implements Shape {
    int w;
    int h;

    Triangle(int w,int h) {
      this.w = w;
      this.h = h;
    }
    
    public double getArea() {
      return w * h / 2;
    }
  }

  static class Rectangle implements Shape {
    int w;
    int h;

    Rectangle(int w, int h) {
      this.w = w;
      this.h = h;
    }
    
    public double getArea() {
      return w * h;
    }
  }
  
  public static void main(String[] args) {

    // Circle
    // Triangle
    // Rectangle
    // getArea()

    List<Shape> shapes = new ArrayList<>();

    Shape circle = new Circle(4);
    Shape triangle = new Triangle(2, 5);
    Shape rectangle = new Rectangle(3, 4);

    shapes.add(circle);
    shapes.add(triangle);
    shapes.add(rectangle);

    double area = 0;
    for (Shape shape : shapes) {
      area += shape.getArea();
    }
    
    // double area = circle.getArea() + triangle.getArea() + rectangle.getArea();
    
    System.out.println(area);
  }
}
