document.getElementById('chat-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const userInput = document.getElementById('user-input');
  const message = userInput.value.trim();
  if (message) {
    addMessage('user', message);
    respond(message);
    userInput.value = '';
  }
});

function addMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  messageDiv.textContent = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respond(message) {
  let response = '';
  const msg = message.toLowerCase();

  if (msg.includes('대출 방법')) {
    response = '도서 대출은 무인 대출/반납기를 통해 가능합니다. 학생증 또는 대출 번호가 필요합니다.';
  } else if (msg.includes('대출 규정')) {
    response = '도서 대출은 1인당 최대 2권까지 가능하며, 대출 기간은 14일입니다.';
  } else if (msg.includes('이용 시 주의사항') || msg.includes('주의사항')) {
    response = '도서관에서는 조용한 분위기를 유지해주세요. 다 읽은 책은 북트럭 위에 올려주세요.';
  } else if (msg.includes('안녕') || msg.includes('반가워')) {
    response = '안녕하세요! 무엇을 도와드릴까요? 😊';
  } else {
    response = '답변할 수 없는 내용입니다. 다시 입력해주세요!';
  }

  addMessage('bot', response);
}
