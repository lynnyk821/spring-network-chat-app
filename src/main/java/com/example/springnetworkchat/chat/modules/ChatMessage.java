package com.example.springnetworkchat.chat.modules;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "chat_messages")
@Builder @Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class ChatMessage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String content;

    @Column(nullable = false)
    private String sender;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private MessageType type;
}