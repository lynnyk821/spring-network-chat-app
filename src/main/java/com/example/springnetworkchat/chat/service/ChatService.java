package com.example.springnetworkchat.chat.service;

import com.example.springnetworkchat.chat.modules.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChatService {
    private final ChatMessageRepository chatMessageRepository;

    @Autowired
    public ChatService(ChatMessageRepository chatMessageRepository) {
        this.chatMessageRepository = chatMessageRepository;
    }
    public void saveChatMessage(ChatMessage chatMessage) {
        this.chatMessageRepository.save(chatMessage);
    }
}