package gamma;

public class TestGamma {
	
public static void main(String[] args) {
		
		System.out.println("n LEPREMIER PROGRAMME \n");
		
		// TODO Auto-generated method stub
		for(int i = 1; i<= 100 ; i++) {
			if((i % 3 == 0) && (i % 5 != 0)) {
				System.out.println("fizz");
			}else if((i % 3 != 0) && (i % 5 == 0)) {
				System.out.println("buzz");
			}else if((i % 3 == 0) && (i % 5 == 0)) {
				System.out.println("fizzbuzz");
			}else {
				System.out.println(i);
			}
		}
		
		System.out.println("n LE DEUXIEME PROGRAMME \n");
		
		for(int i = 1; i<=100; i++) {
			
			 if((i % 3 == 0 || String.valueOf(i).contains("3")) && i %5 != 0) {
				if(String.valueOf(i).contains("5") && i %3 != 0) {
					System.out.println("fizzbuzz");
				}else {
					System.out.println("fizz");
				}
			 }
			 else if(i % 5 == 0 || String.valueOf(i).contains("5")) {
				 
				 if( (i % 5 == 0 && String.valueOf(i).contains("3")) &&  String.valueOf(i).contains("5") ) {
					 System.out.println("fizzbuzzbuzz");
				 }else if(String.valueOf(i).contains("3") &&  String.valueOf(i).contains("5")) {
					 System.out.println("fizzbuzz");
				 }
				 else {
					 System.out.println("buzz");
				 }
			 }else {
				 System.out.println(i);
			 }
		}

	}

}
