/**
 * 클립보드에 텍스트를 복사하는 유틸리티 함수
 * @param text - 복사할 텍스트
 * @param message - 성공 메시지
 */
export const copyToClipboard = async (text: string, message: string): Promise<void> => {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      // 폴백: execCommand 사용
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    alert(message);
  } catch (e) {
    console.error(e);
    alert("클립보드 복사에 실패했어요. 브라우저 권한을 확인해주세요.");
  }
};
