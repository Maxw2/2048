var Tetris = function(id){
    this.id = id
    this.bGround = []
    this.block = {}
    this.timer


    this.init()
    console.log(this.bGround)
    console.log(this.block)
}
Tetris.prototype = {
    init:function(){
        this.template()
        this.getbGroundData()
        
        this.stareGame()
        



    },
    //
    template:function(){
        this.id.innerHTML = '<ul class="bGround"></ul>'
        var ul = this.id.querySelector('.bGround')
        for(let i = 0;i < 20;i++){
            var a = this._creatEle('li',ul,{'class':'row' + i})
            for(let j = 0;j < 10;j++){
                this._creatEle('span',a)
            }
        }
    },
    getbGroundData:function(){
        for(let i = 0;i < 20;i++){
            this.bGround[i] = []
            for(let j = 0;j < 10;j++){
                this.bGround[i][j] = 0
            }
        }
    },
    //
    //
    stareGame:function(){
        this.getBlockData()
        this.refreshFrame()





    },
    
    getBlockData:function(){
        this.block = new Array(4)
        var num = (Math.floor(Math.random()*20)+1)%7;
        console.log(num)
        switch(num){
            //i
            case 0:
                this.block[0] = {row:0,col:5}
                this.block[1] = {row:1,col:5}
                this.block[2] = {row:2,col:5}
                this.block[3] = {row:3,col:5}
                break;
            //J
            case 1:
                this.block[0] = {row:0,col:5}
                this.block[1] = {row:1,col:5}
                this.block[2] = {row:2,col:5}
                this.block[3] = {row:2,col:4}
                break;
            //L    
            case 2:
                this.block[0] = {row:0,col:5}
                this.block[1] = {row:1,col:5}
                this.block[2] = {row:2,col:5}
                this.block[3] = {row:2,col:6}
                break;
            //O
            case 3:
                this.block[0] = {row:0,col:5}
                this.block[1] = {row:0,col:6}
                this.block[2] = {row:1,col:5}
                this.block[3] = {row:1,col:6}
                break;
            //S
            case 4:
                this.block[0] = {row:0,col:6}
                this.block[1] = {row:0,col:5}
                this.block[2] = {row:1,col:5}
                this.block[3] = {row:1,col:4}
                break;
            //Z
            case 5:
                this.block[0] = {row:0,col:4}
                this.block[1] = {row:0,col:5}
                this.block[2] = {row:1,col:5}
                this.block[3] = {row:1,col:6}
                break;
            case 6:
                this.block[0] = {row:0,col:5}
                this.block[1] = {row:1,col:4}
                this.block[2] = {row:1,col:5}
                this.block[3] = {row:1,col:6}
                break;
        }
    },
    

    //刷新帧数
    //随机方框 随机方位
    //碰撞体积
    //向下坠落
    //
    refreshFrame:function(){
        var that = this
        
        this.timer = setInterval(function(){
            
            that.blockDown()

            console.log(that.bGround)
        },500)
    },
    //方块下坠
    blockDown:function(){
        for(let i = 0;i < this.block.length;i++){
            var row = this.block[i].row
            var col = this.block[i].col
            this.bGround[row][col] = 1
            this.bGround[row][col].className = '.block'   
            
        }

        clear
    },
    
    //方块旋转
    blockRotate:function(){
    //写自闭了 不想写了      
    },




    _creatEle:function(ele,parent,obj){
        var el = document.createElement(ele)

        if(typeof arguments[2] === 'object'){
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    el.setAttribute(key,obj[key])
                }
            }
        }
        parent.appendChild(el)
        return el
    }
}