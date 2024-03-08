package com.example.springnetworkchat.chat.service;

import com.example.springnetworkchat.chat.modules.ChatMessage;
import org.springframework.data.repository.CrudRepository;

public interface ChatMessageRepository extends CrudRepository<ChatMessage, Long> {}
