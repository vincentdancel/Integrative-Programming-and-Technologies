package com.mycompany.chatclient;

import java.io.*;
import java.net.Socket;

public class ChatClient {

    private static final String SERVER_ADDRESS = "10.6.9.5";
    private static final int PORT = 12345;

    public static void main(String[] args) {
        try {

            Socket socket = new Socket(SERVER_ADDRESS, PORT);
            System.out.println("Connected to server:" + SERVER_ADDRESS + ":" + PORT);

            BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
            BufferedReader userInput = new BufferedReader(new InputStreamReader(System.in));

            System.out.println("Enter your name:");
            String name = userInput.readLine();

            Thread receiveThread = new Thread(() -> {
                try {
                    String serverMessage;
                    while ((serverMessage = in.readLine()) != null) {
                        System.out.println(serverMessage);
                    }
                } catch (IOException e) {
                    System.out.println("Disconnected from server.");
                }
            });

            receiveThread.start();

            String message;
            while ((message = userInput.readLine()) != null) {
                out.println(name + ":" + message);
            }

            in.close();
            out.close();
            userInput.close();
            socket.close();

        } catch (IOException e) {
            System.out.println("Error:" + e.getMessage());
        }
    }
}
