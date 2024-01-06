import { Code128Reader } from "./Code128Reader.js";
const resolution = { w: 1600, h: 1600 };
const canvasSize = { w: 1600, h: 1600 };
const analysisSize = { x: 0, y: (canvasSize.h - 800) / 2, w: 1600, h: 400 };
window.onload = () => {
    console.log("onload");
    const video = document.getElementById('video');
    video.width = resolution.w;
    video.height = resolution.h;
    video.play();
    // video要素にWebカメラの映像を表示させる
    const media = navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            width: { ideal: resolution.w },
            height: { ideal: resolution.h },
            facingMode: {
                exact: isSmartPhone() ? 'environment' : 'user'
            }
        },
    }).then(function (stream) {
        video.srcObject = stream;
    });
    //     const captureStream = navigator.mediaDevices.getDisplayMedia({
    //         video: {
    //             width: { ideal: resolution.w },
    //             height: { ideal: resolution.h },
    //         },
    //     }).then(function (stream) {
    // //        video.srcObject = stream;
    //
    //     });
    // canvas要素をつくる
    const canvas = document.getElementById('canvas');
    canvas.width = canvasSize.w;
    canvas.height = canvasSize.h;
    // コンテキストを取得する
    const canvasCtx = canvas.getContext('2d', { willReadFrequently: true });
    const code128Reader = new Code128Reader(analysisSize.w, analysisSize.h);
    const canvasUpdate = () => {
        var start = Date.now();
        canvasCtx.drawImage(video, 0, (resolution.h - canvas.height) / 2, canvasSize.w, canvasSize.h, 0, 0, canvas.width, canvas.height);
        console.log(Date.now() - start);
        const data = canvasCtx.getImageData(analysisSize.x, analysisSize.y, analysisSize.w, analysisSize.h).data;
        console.log(Date.now() - start);
        const [res, result] = code128Reader.analyze(data);
        canvasCtx.strokeStyle = "rgb(0,0,255)";
        canvasCtx.lineWidth = 2;
        canvasCtx.strokeRect(80, analysisSize.y + 16, canvasSize.w - 160, analysisSize.h - 32);
        result.forEach((r) => {
            // canvasCtx.strokeRect(0, analysisSize.y+r.y, r.x1, 1);
        });
        if (result.length > 0) {
            const p1 = [result[0].x1, result[0].y + analysisSize.y];
            const p2 = [result[0].x2, result[0].y + analysisSize.y];
            const p3 = [result.slice(-1)[0].x2, result.slice(-1)[0].y + analysisSize.y];
            const p4 = [result.slice(-1)[0].x1, result.slice(-1)[0].y + analysisSize.y];
            canvasCtx.strokeStyle = "rgb(255,0,0)";
            canvasCtx.lineWidth = 10;
            canvasCtx.beginPath();
            canvasCtx.moveTo(p1[0], p1[1]);
            canvasCtx.lineTo(p2[0], p2[1]);
            canvasCtx.lineTo(p3[0], p3[1]);
            canvasCtx.lineTo(p4[0], p4[1]);
            canvasCtx.closePath();
            canvasCtx.stroke();
            document.getElementById("result").innerText = res;
            setTimeout(canvasUpdate, 1000);
        }
        else {
            setTimeout(canvasUpdate, 100);
        }
    };
    // video要素の映像をcanvasに描画する
    canvasUpdate();
};
function isSmartPhone() {
    if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=index.js.map