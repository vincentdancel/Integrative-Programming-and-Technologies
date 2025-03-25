
import java.io.*;
import java.net.*;

public class server {

    public static void main(String[] args) {
        try {
            ServerSocket serverSocket = new ServerSocket(5000);
            System.out.println("Server started...");

            Socket clientSocket = serverSocket.accept();

            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

            String message = in.readLine(); //client
            System.out.println("Client:" + message);
            out.println("Hello from server"); // reply

            in.close();
            out.close();
            clientSocket.close();
            serverSocket.close();
          
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
