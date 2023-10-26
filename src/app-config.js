let backendHost;

const hostname = window && window.location && window.location.hostname; // 여러 중첩된 속성접근을 통해 호스트명을 안전하게 가져옴

if (hostname === "localhost") {
    backendHost = "http://localhost:8053";
}

export const API_BASE_URL = `${backendHost}`;