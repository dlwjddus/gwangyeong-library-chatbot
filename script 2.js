const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");

function addMessage(sender, text) {
  const message = document.createElement("div");
  message.classList.add(sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showMenu() {
  addMessage("bot", "무엇을 알고 싶으신가요?\n1. 도서 대출 방법\n2. 도서 반납 방법\n3. 도서 대출 규정\n4. 도서관 이용 시 주의사항\n5. 종료");
}

window.onload = function () {
  addMessage("bot", "안녕하세요! 광영여자고등학교 도서관 이용 안내 챗봇입니다.");
  showMenu();
};

userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const input = userInput.value.trim();
    if (input === "") return;
    addMessage("user", input);

    switch (input) {
      case "1":
        addMessage("bot", "📘 도서 대출 방법:\n- 무인 대출/반납기를 통해 도서를 대출할 수 있습니다.\n- 대출 시 학생증 또는 대출 번호가 필요합니다.");
        break;
      case "2":
        addMessage("bot", "📕 도서 반납 방법:\n- 무인 대출/반납기를 통해 도서를 반납하실 수 있습니다.");
        break;
      case "3":
        addMessage("bot", "📗 도서 대출 규정:\n- 1인당 최대 2권까지 대출할 수 있습니다.\n- 대출 기간은 14일입니다.");
        break;
      case "4":
        addMessage("bot", "📙 도서관 이용 시 주의사항:\n- 다 읽은 책은 반드시 북트럭 위에 올려주세요.\n- 도서관에서는 조용한 분위기를 유지해주세요.");
        break;
      case "5":
        addMessage("bot", "광영여자고등학교 도서관 챗봇을 이용해 주셔서 감사합니다!");
        break;
      default:
        addMessage("bot", "❗답변할 수 없는 내용입니다. 다시 입력해주세요!");
    }
    userInput.value = "";
    if (input !== "5") {
      setTimeout(showMenu, 500);
    }
  }
});
