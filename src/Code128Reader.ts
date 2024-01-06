/**
 * Code128のパターンを定義します。
 */
class Code128{
    constructor(
        readonly id: number,
        readonly codeA: string,
        readonly codeB:string,
        readonly codeC:string,
        readonly pattern: number[]
    ){
    }
}
//すべてのパターンを列挙します。
const code128: Code128[] = [
    {id:0,codeA:" ",codeB:" ",codeC:"0",pattern:[2,1,2,2,2,2]},
    {id:1,codeA:"!",codeB:"!",codeC:"1",pattern:[2,2,2,1,2,2]},
    {id:2,codeA:"",codeB:"",codeC:"2",pattern:[2,2,2,2,2,1]},
    {id:3,codeA:"#",codeB:"#",codeC:"3",pattern:[1,2,1,2,2,3]},
    {id:4,codeA:"$",codeB:"$",codeC:"4",pattern:[1,2,1,3,2,2]},
    {id:5,codeA:"%",codeB:"%",codeC:"5",pattern:[1,3,1,2,2,2]},
    {id:6,codeA:"&",codeB:"&",codeC:"6",pattern:[1,2,2,2,1,3]},
    {id:7,codeA:"'",codeB:"'",codeC:"7",pattern:[1,2,2,3,1,2]},
    {id:8,codeA:"(",codeB:"(",codeC:"8",pattern:[1,3,2,2,1,2]},
    {id:9,codeA:")",codeB:")",codeC:"9",pattern:[2,2,1,2,1,3]},
    {id:10,codeA:"*",codeB:"*",codeC:"10",pattern:[2,2,1,3,1,2]},
    {id:11,codeA:"+",codeB:"+",codeC:"11",pattern:[2,3,1,2,1,2]},
    {id:12,codeA:",",codeB:",",codeC:"12",pattern:[1,1,2,2,3,2]},
    {id:13,codeA:"-",codeB:"-",codeC:"13",pattern:[1,2,2,1,3,2]},
    {id:14,codeA:".",codeB:".",codeC:"14",pattern:[1,2,2,2,3,1]},
    {id:15,codeA:"/",codeB:"/",codeC:"15",pattern:[1,1,3,2,2,2]},
    {id:16,codeA:"0",codeB:"0",codeC:"16",pattern:[1,2,3,1,2,2]},
    {id:17,codeA:"1",codeB:"1",codeC:"17",pattern:[1,2,3,2,2,1]},
    {id:18,codeA:"2",codeB:"2",codeC:"18",pattern:[2,2,3,2,1,1]},
    {id:19,codeA:"3",codeB:"3",codeC:"19",pattern:[2,2,1,1,3,2]},
    {id:20,codeA:"4",codeB:"4",codeC:"20",pattern:[2,2,1,2,3,1]},
    {id:21,codeA:"5",codeB:"5",codeC:"21",pattern:[2,1,3,2,1,2]},
    {id:22,codeA:"6",codeB:"6",codeC:"22",pattern:[2,2,3,1,1,2]},
    {id:23,codeA:"7",codeB:"7",codeC:"23",pattern:[3,1,2,1,3,1]},
    {id:24,codeA:"8",codeB:"8",codeC:"24",pattern:[3,1,1,2,2,2]},
    {id:25,codeA:"9",codeB:"9",codeC:"25",pattern:[3,2,1,1,2,2]},
    {id:26,codeA:":",codeB:":",codeC:"26",pattern:[3,2,1,2,2,1]},
    {id:27,codeA:";",codeB:";",codeC:"27",pattern:[3,1,2,2,1,2]},
    {id:28,codeA:"<",codeB:"<",codeC:"28",pattern:[3,2,2,1,1,2]},
    {id:29,codeA:"=",codeB:"=",codeC:"29",pattern:[3,2,2,2,1,1]},
    {id:30,codeA:">",codeB:">",codeC:"30",pattern:[2,1,2,1,2,3]},
    {id:31,codeA:"?",codeB:"?",codeC:"31",pattern:[2,1,2,3,2,1]},
    {id:32,codeA:"@",codeB:"@",codeC:"32",pattern:[2,3,2,1,2,1]},
    {id:33,codeA:"A",codeB:"A",codeC:"33",pattern:[1,1,1,3,2,3]},
    {id:34,codeA:"B",codeB:"B",codeC:"34",pattern:[1,3,1,1,2,3]},
    {id:35,codeA:"C",codeB:"C",codeC:"35",pattern:[1,3,1,3,2,1]},
    {id:36,codeA:"D",codeB:"D",codeC:"36",pattern:[1,1,2,3,1,3]},
    {id:37,codeA:"E",codeB:"E",codeC:"37",pattern:[1,3,2,1,1,3]},
    {id:38,codeA:"F",codeB:"F",codeC:"38",pattern:[1,3,2,3,1,1]},
    {id:39,codeA:"G",codeB:"G",codeC:"39",pattern:[2,1,1,3,1,3]},
    {id:40,codeA:"H",codeB:"H",codeC:"40",pattern:[2,3,1,1,1,3]},
    {id:41,codeA:"I",codeB:"I",codeC:"41",pattern:[2,3,1,3,1,1]},
    {id:42,codeA:"J",codeB:"J",codeC:"42",pattern:[1,1,2,1,3,3]},
    {id:43,codeA:"K",codeB:"K",codeC:"43",pattern:[1,1,2,3,3,1]},
    {id:44,codeA:"L",codeB:"L",codeC:"44",pattern:[1,3,2,1,3,1]},
    {id:45,codeA:"M",codeB:"M",codeC:"45",pattern:[1,1,3,1,2,3]},
    {id:46,codeA:"N",codeB:"N",codeC:"46",pattern:[1,1,3,3,2,1]},
    {id:47,codeA:"O",codeB:"O",codeC:"47",pattern:[1,3,3,1,2,1]},
    {id:48,codeA:"P",codeB:"P",codeC:"48",pattern:[3,1,3,1,2,1]},
    {id:49,codeA:"Q",codeB:"Q",codeC:"49",pattern:[2,1,1,3,3,1]},
    {id:50,codeA:"R",codeB:"R",codeC:"50",pattern:[2,3,1,1,3,1]},
    {id:51,codeA:"S",codeB:"S",codeC:"51",pattern:[2,1,3,1,1,3]},
    {id:52,codeA:"T",codeB:"T",codeC:"52",pattern:[2,1,3,3,1,1]},
    {id:53,codeA:"U",codeB:"U",codeC:"53",pattern:[2,1,3,1,3,1]},
    {id:54,codeA:"V",codeB:"V",codeC:"54",pattern:[3,1,1,1,2,3]},
    {id:55,codeA:"W",codeB:"W",codeC:"55",pattern:[3,1,1,3,2,1]},
    {id:56,codeA:"X",codeB:"X",codeC:"56",pattern:[3,3,1,1,2,1]},
    {id:57,codeA:"Y",codeB:"Y",codeC:"57",pattern:[3,1,2,1,1,3]},
    {id:58,codeA:"Z",codeB:"Z",codeC:"58",pattern:[3,1,2,3,1,1]},
    {id:59,codeA:"[",codeB:"[",codeC:"59",pattern:[3,3,2,1,1,1]},
    {id:60,codeA:"\\",codeB:"\\",codeC:"60",pattern:[3,1,4,1,1,1]},
    {id:61,codeA:"]",codeB:"]",codeC:"61",pattern:[2,2,1,4,1,1]},
    {id:62,codeA:"^",codeB:"^",codeC:"62",pattern:[4,3,1,1,1,1]},
    {id:63,codeA:"_",codeB:"_",codeC:"63",pattern:[1,1,1,2,2,4]},
    {id:64,codeA:"\0",codeB:"`",codeC:"64",pattern:[1,1,1,4,2,2]},
    {id:65,codeA:"\x01",codeB:"a",codeC:"65",pattern:[1,2,1,1,2,4]},
    {id:66,codeA:"\x02",codeB:"b",codeC:"66",pattern:[1,2,1,4,2,1]},
    {id:67,codeA:"\x03",codeB:"c",codeC:"67",pattern:[1,4,1,1,2,2]},
    {id:68,codeA:"\x04",codeB:"d",codeC:"68",pattern:[1,4,1,2,2,1]},
    {id:69,codeA:"\x05",codeB:"e",codeC:"69",pattern:[1,1,2,2,1,4]},
    {id:70,codeA:"\x06",codeB:"f",codeC:"70",pattern:[1,1,2,4,1,2]},
    {id:71,codeA:"\x07",codeB:"g",codeC:"71",pattern:[1,2,2,1,1,4]},
    {id:72,codeA:"\x08",codeB:"h",codeC:"72",pattern:[1,2,2,4,1,1]},
    {id:73,codeA:"\x09",codeB:"i",codeC:"73",pattern:[1,4,2,1,1,2]},
    {id:74,codeA:"\x0A",codeB:"j",codeC:"74",pattern:[1,4,2,2,1,1]},
    {id:75,codeA:"\x0B",codeB:"k",codeC:"75",pattern:[2,4,1,2,1,1]},
    {id:76,codeA:"\x0C",codeB:"l",codeC:"76",pattern:[2,2,1,1,1,4]},
    {id:77,codeA:"\x0D",codeB:"m",codeC:"77",pattern:[4,1,3,1,1,1]},
    {id:78,codeA:"\x0E",codeB:"n",codeC:"78",pattern:[2,4,1,1,1,2]},
    {id:79,codeA:"\x0F",codeB:"o",codeC:"79",pattern:[1,3,4,1,1,1]},
    {id:80,codeA:"\x10",codeB:"p",codeC:"80",pattern:[1,1,1,2,4,2]},
    {id:81,codeA:"\x11",codeB:"q",codeC:"81",pattern:[1,2,1,1,4,2]},
    {id:82,codeA:"\x12",codeB:"r",codeC:"82",pattern:[1,2,1,2,4,1]},
    {id:83,codeA:"\x13",codeB:"s",codeC:"83",pattern:[1,1,4,2,1,2]},
    {id:84,codeA:"\x14",codeB:"t",codeC:"84",pattern:[1,2,4,1,1,2]},
    {id:85,codeA:"\x15",codeB:"u",codeC:"85",pattern:[1,2,4,2,1,1]},
    {id:86,codeA:"\x16",codeB:"v",codeC:"86",pattern:[4,1,1,2,1,2]},
    {id:87,codeA:"\x17",codeB:"w",codeC:"87",pattern:[4,2,1,1,1,2]},
    {id:88,codeA:"\x18",codeB:"x",codeC:"88",pattern:[4,2,1,2,1,1]},
    {id:89,codeA:"\x19",codeB:"y",codeC:"89",pattern:[2,1,2,1,4,1]},
    {id:90,codeA:"\x1A",codeB:"z",codeC:"90",pattern:[2,1,4,1,2,1]},
    {id:91,codeA:"\x1B",codeB:"{",codeC:"91",pattern:[4,1,2,1,2,1]},
    {id:92,codeA:"\x1C",codeB:"|",codeC:"92",pattern:[1,1,1,1,4,3]},
    {id:93,codeA:"\x1D",codeB:"}",codeC:"93",pattern:[1,1,1,3,4,1]},
    {id:94,codeA:"\x1E",codeB:"~",codeC:"94",pattern:[1,3,1,1,4,1]},
    {id:95,codeA:"\x1F",codeB:"\x10",codeC:"95",pattern:[1,1,4,1,1,3]},
    {id:96,codeA:"FNC 3",codeB:"FNC 3",codeC:"96",pattern:[1,1,4,3,1,1]},
    {id:97,codeA:"FNC 2",codeB:"FNC 2",codeC:"97",pattern:[4,1,1,1,1,3]},
    {id:98,codeA:"Shift B",codeB:"Shift A",codeC:"98",pattern:[4,1,1,3,1,1]},
    {id:99,codeA:"Code C",codeB:"Code C",codeC:"99",pattern:[1,1,3,1,4,1]},
    {id:100,codeA:"Code B",codeB:"FNC 4",codeC:"Code B",pattern:[1,1,4,1,3,1]},
    {id:101,codeA:"FNC 4",codeB:"Code A",codeC:"Code A",pattern:[3,1,1,1,4,1]},
    {id:102,codeA:"FNC 1",codeB:"FNC 1",codeC:"FNC 1",pattern:[4,1,1,1,3,1]},
    {id:103,codeA:"Start Code A",codeB:"Start Code A",codeC:"Start Code A",pattern:[2,1,1,4,1,2]},
    {id:104,codeA:"Start Code B",codeB:"Start Code B",codeC:"Start Code B",pattern:[2,1,1,2,1,4]},
    {id:105,codeA:"Start Code C",codeB:"Start Code C",codeC:"Start Code C",pattern:[2,1,1,2,3,2]},
    {id:106,codeA:"Stop",codeB:"Stop",codeC:"Stop",pattern:[2,3,3,1,1,1]},
]
export class BarcodeReadResult{
    //バーコードとして認識したxの範囲をx1-x2でしめします。
    public  x1:number=0;
    public  x2:number=0;
    public  y:number=0;
    //result:認識したバーコードの文字列
    public  result:string="";

    //confidence:認識したバーコードの信頼度(小さいほど信頼度が高い)
    public  confidence:number=0;
    public  count=0;
}

/**
 * Code128のバーコードを読み取りを行うクラス
 */
export class Code128Reader{
    private gpu:any;
    private toGray: any;
    private getMaxMin: any;
    private binarize: any;

    /**
     * width:解析する画像の幅
     * height:解析する画像の高さ
     */
    constructor(private width:number,private height:number) {
        //@ts-ignore
        if(GPU.GPU){
            //@ts-ignore
            this.gpu=new GPU.GPU();
        }else{
            //@ts-ignore
            this.gpu=new GPU({mode: 'gpu'});
        }
        //@ts-ignore
        this.toGray = this.gpu.createKernel(function (image,width) {
            //@ts-ignore
            return image[(width * this.thread.y + this.thread.x) * 4 + 0] + image[(width * this.thread.y + this.thread.x) * 4 + 1] + image[(width * this.thread.y + this.thread.x) * 4 + 2];
        }).setOutput([this.width,this.height]);
        //@ts-ignore
        this.getMaxMin= this.gpu.createKernel(function (image) {
            let max = -1000;
            let min = 1000;
            for (let y = 0; y < 16; y++) {
                for (let x = 0; x < 16; x++) {
                    //@ts-ignore
                     if(max < image[y + 16 * this.thread.y][x + 16 * this.thread.x]){
                        //@ts-ignore
                        max = image[y + 16 * this.thread.y][x + 16 * this.thread.x];
                       }
                    //@ts-ignore
                    if (min > image[y + 16 * this.thread.y][x + 16 * this.thread.x]) {
                        //@ts-ignore
                        min = image[y + 16 * this.thread.y][x + 16 * this.thread.x];
                    }
                }
            }
            return [max,min];
        }).setOutput([this.width/16,this.height/16]);
        this.binarize= this.gpu.createKernel(function (image:number[][],maxmin:number[][][]) {
            let min2 = 1000;
            let max2 = -1000;
            for (let y = -1; y < 2; y++) {
                for (let x = -1; x < 2; x++) {
                    // @ts-ignore
                    if (min2 > maxmin[y+ this.thread.y/16][x +  this.thread.x/16][1]) {
                        // @ts-ignore
                        min2 = maxmin[y + this.thread.y / 16][x + this.thread.x / 16][1];
                    }
                    // @ts-ignore
                    if (max2 < maxmin[y + this.thread.y / 16][x + this.thread.x / 16][0]) {
                        // @ts-ignore
                        max2 = maxmin[y + this.thread.y / 16][x + this.thread.x / 16][0];
                    }
                }
            }
            // @ts-ignore
            let res = 1 - (max2 - image[this.thread.y][this.thread.x]) / (max2 - min2);
            if ( res > 0.5||(min2>max2*0.7)) {
                // @ts-ignore
                this.color(1,1,1,1);
                return 1;
            } else {
                // @ts-ignore
                this.color(0,0,0,1);
                return 0;
            }

        }).setOutput([this.width,this.height])
            // .setGraphical(true)
        ;
        // this.binarize2= this.gpu.createKernel(function (image:number[][],maxmin:number[][][]) {
        //     let min2 = 1000;
        //     let max2 = -1000;
        //     for (let y = -1; y < 2; y++) {
        //         for (let x = -1; x < 2; x++) {
        //             // @ts-ignore
        //             if (min2 > maxmin[y+ this.thread.y/16][x +  this.thread.x/16][1]) {
        //                 // @ts-ignore
        //                 min2 = maxmin[y + this.thread.y / 16][x + this.thread.x / 16][1];
        //             }
        //             // @ts-ignore
        //             if (max2 < maxmin[y + this.thread.y / 16][x + this.thread.x / 16][0]) {
        //                 // @ts-ignore
        //                 max2 = maxmin[y + this.thread.y / 16][x + this.thread.x / 16][0];
        //             }
        //         }
        //     }
        //     // @ts-ignore
        //     let res = 1 - (max2 - image[this.thread.y][this.thread.x]) / (max2 - min2);
        //     if ( res > 0.5||(min2>max2*0.7)) {
        //         // @ts-ignore
        //         this.color(1,1,1,1);
        //         return 1;
        //     } else {
        //         // @ts-ignore
        //         this.color(0,0,0,1);
        //         return 0;
        //     }
        //
        // }).setOutput([this.width,this.height])
        // .setGraphical(true)
        // ;
        // this.binarize.canvas.style.width="100%";
        // document.getElementsByTagName('body')[0].appendChild(this.binarize.canvas);

    }


    public analyze(image:Uint8ClampedArray): [string,BarcodeReadResult[]] {
        const start=Date.now();
        const grayImage=this.toGray(image,this.width);
        const maxmin = this.getMaxMin(grayImage);
        const binarized:number[][] = this.binarize(grayImage,maxmin) as number[][];
        // this.binarize2(grayImage,maxmin) as number[][];

        const result:BarcodeReadResult[]=[];
        for (let i = 16; i < this.height-16; i++) {
            const readResult=new BarcodeReadResult();
            readResult.y=i;

            let now = 1;
            //白黒が切り替わったポイント(黒から順番に開始)
            let changePoint = []
            for (let j = 80; j < this.width - 80; j++) {
                if (binarized[i][j] !== now) {
                    changePoint.push(j);
                    now = binarized[i][j];
                }
            }
            while (true) {
                if (changePoint.length < 19) {
                    break;
                }
                let b1 = (changePoint[0] + changePoint[12] - 2 * changePoint[6]) / (changePoint[12]);
                let b2 = (changePoint[6] + changePoint[18] - 2 * changePoint[12]) / (changePoint[18] - changePoint[6]);
                if (Math.abs(b1) < 0.08 && Math.abs(b2) < 0.08 && Math.abs(b1 - b2) < 0.08) {
                    break;
                }
                changePoint = changePoint.slice(2);
            }
            readResult.x1=changePoint[0];
            let sss = [];
            let prevBlockLen = -1;
            while (true) {
                if (changePoint.length < 7) {
                    break;
                }
                let blockLen = changePoint[6]-changePoint[0];
                if (prevBlockLen > 0 && Math.abs(blockLen - prevBlockLen) / (blockLen + prevBlockLen) > 0.2) {
                    break;
                }
                prevBlockLen = blockLen;
                let pattern:number[] = [];
                for (let k = 0; k < 6; k++) {
                    pattern.push((changePoint[k + 1] - changePoint[k]) / blockLen * 11);
                }
                let gosa = 10000000;
                let ans = 0;
                code128.forEach((item) => {
                    let t = 0;
                    for (let l = 0; l < 6; l++) {
                        t += (item.pattern[l] - pattern[l]) * (item.pattern[l] - pattern[l]);
                    }
                    if (t < gosa) {
                        gosa = t;
                        ans = item.id;
                    }
                })
                readResult.confidence+=gosa;
                readResult.count++;
                sss.push(ans);
                changePoint = changePoint.slice(6);
                if(ans===106){
                    break;
                }
            }
            readResult.x2=changePoint[0];
            const parser = new Code128Parse();
            for (let k = 0; k < sss.length; k++) {
                parser.append(sss[k]);
            }
            if(parser.isOK){
                readResult.result=parser.getResult();
                result.push(readResult);
            }
        }
        if (result.length > 0) {
            console.log(result.map(item=>item.y+" "+item.result));
            const res=mode(result.map((item)=>item.result));
            const result5=result.filter((item)=>item.result===res);
            if(result5.length>5) {
                return [res, result5];
            }
        }
        return ["",[]];
    }

}

class Code128Parse{
    public mode:number=0;
    private check:number=0;
    private shift=false;

    private count=0;
    public result:string[]=[];

    private prev=-1;

    public isOK=false;
    constructor() {
    }
    public append(id:number){
        if(id===106){
            //STOP処理をします。
            this.check-=this.prev*(this.count-1);
            if(this.check%103===this.prev){
                this.result.pop();
                this.isOK=this.result.length>0;
                return;
            }else{
                //チェックデジットがおかしい
                this.isOK=false;
                return;
            }
        }
        this.prev=id;
        if(this.count==0){
            this.check+=id;
        }
        this.check+=id*this.count;
        this.count++;

        if(id===103){
            this.mode=0;
            return;
        }
        if(id===104){
            this.mode=1;
            return;
        }
        if(id===105){
            this.mode=2;
            return;
        }
        if(id===98){
            if(this.mode===0||this.mode===1){
                this.shift=true;
                return;
            }
        }
        if(id===99){
            if(this.mode===0||this.mode===1){
                this.mode=2;
                return;
            }
        }
        if(id===99){
            if(this.mode===0||this.mode===1){
                this.mode=2;
                return;
            }
        }
        if(id===100){
            if(this.mode===0||this.mode===2){
                this.mode=1;
                return;
            }
        }
        if(id===101){
            if(this.mode===1||this.mode===2){
                this.mode=0;
                return;
            }
        }

        switch ((this.mode+(this.shift?1:0))%3) {
            case 0:
                this.result.push(code128[id].codeA);
                return;
            case 1:
                this.result.push(code128[id].codeB);
                return;
            case 2:
                this.result.push(code128[id].codeC);
                return;
        }
    }
    public getResult(){
        if(this.isOK&&this.result.length>0){
            return this.result.join("");
        }else{
            return "AA";
        }

    }
}


const mode = function (array:string[]):string {
    if (array.length === 0) {
        //配列の個数が0だとエラーを返す。
        throw new Error("配列の長さが0のため最頻値が計算できません");
        //nullを返しても困らない時(配列の中にnullが無い時)はnullを返すように実装しても良い。
        //return null
    }
    //回数を記録する連想配列
    var counter:{[key:string]:number} = {}
    //本来の値を入れた辞書
    var nativeValues = {}

    //最頻値とその出現回数を挿入する変数
    var maxCounter = 0;
    var maxValue = "EE";

    for (var i = 0; i < array.length; i++) {
        //counterに存在しなければ作る。keyは型を区別する
        if (!counter[array[i]]) {
            counter[array[i]] = 0;
        }
        counter[array[i]]++;
    }
    for (var j = 0; j < Object.keys(counter).length; j++) {
        let key = Object.keys(counter)[j];
        if (counter[key] > maxCounter) {
            maxCounter = counter[key];
            maxValue = key;
        }
    }
    return maxValue

}