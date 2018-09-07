var Tetris = function(id){
    this.id = id
    this.bGround = []
    this.block = {
        i:[],
        j:[],
        l:[],
        o:[],
        s:[],
        z:[],
        t:[]
    }



    this.init()
    console.log(this.bGround)
    console.log(this.block)
}
Tetris.prototype = {
    init:function(){
        this.getData()
        this.template()



    },
    //
    getData:function(){
        this.getbGroundData()
        this.getBlockData()    
    },
    getbGroundData:function(){
        for(let i = 0;i < 20;i++){
            this.bGround[i] = []
            for(let j = 0;j < 10;j++){
                this.bGround[i].push(0)
            }
        }
    },
    getBlockData:function(){
        this.block.i = [[0,1,0],
                        [0,1,0],
                        [0,1,0],
                        [0,1,0]]

        this.block.j = [[0,1,0],
                        [0,1,0],
                        [1,1,0]]

        this.block.l = [[0,1,0],
                        [0,1,0],
                        [0,1,1]]

        this.block.o = [[1,1],
                        [1,1]]

        this.block.s = [[0,1,1],
                        [1,1,0]]
        
        this.block.z = [[1,1,0],
                        [0,1,1]]

        this.block.t = [[0,1,0],
                        [1,1,1]]
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
    //
    listener:function(){

    },
    //碰撞体积
    //向下坠落
    //






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