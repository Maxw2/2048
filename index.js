function Game2048(id){
    this.id = id

    this.data = [
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
        [0,0,0,0],
    ]
    this.init()
};
Game2048.prototype = {
    init:function(){
        this.randomNum(2)
        this.addEvent()
    },
    addEvent:function(){
        var that = this
        document.addEventListener('keydown',function(e){
            //console.log(e.keyCode)
            if(e.keyCode == 38){
                console.log('↑')
                that.keyUp()
                
            }
            if(e.keyCode == 40){
                console.log('↓')
                that.keyDown()
                
            }
            if(e.keyCode == 37){
                console.log('←')
                that.keyLeft()
               
            }
            if(e.keyCode == 39){
                console.log('→')
                that.keyRight()
                
                
            }
            that.view()
            that.randomNum(1)
        })
    },
    randomNum:function(num){
        var nums = num
        var tempData = []
        for(let i = 0;i < this.data.length;i++){
            for(let j = 0;j < this.data[i].length;j++){
                if(this.data[i][j] == 0){
                    tempData.push([[i],[j]])
                }
            }
        }

        for(let i = 0;i < nums;i++){
            //
            var posNum = this.random(0,tempData.length - 1)
            var posData = tempData[posNum]
            tempData.splice(posNum,1)
            //num
            if(this.random(0,10) > 5){
                var num = 4
            }else{
                var num = 2
            }
            this.data[posData[0]][posData[1]] = num
        }
        console.log(this.data)
        this.view()
    },
    /*
    *   0 0 0 0     0 0 0 0 
    *   0 2 0 2     0 4 0 0
    *   0 4 0 2     0 4 0 2
    *   0 0 0 2     0 0 0 2
    */
    keyUp:function(){
        //addData
        var numData = []
        for(let i = this.data.length - 1; i > -1;i--){
            for(let j = this.data[i].length - 1;j > -1;j--){
                if(this.data[j][i] !== 0){
                    numData.push([this.data[j][i],j,i])
                }
            }
        }
       
        //console.log(this.data)
        //console.log(numData)

        //sumData
        for(let i = 0;i < numData.length - 1;i++){
            //如果Array Y     
            if(numData[i][2] == numData[i + 1][2]){
                //X的num是否相等
                if(numData[i][0] ==  numData[i+1][0]){
                    var x = numData[i][1],
                        y = numData[i][2]
                    var x1 = numData[i+1][1],
                        y1 = numData[i+1][2]
                    this.data[x][y] = numData[i][0] * 2
                    numData[i][0] = numData[i][0] * 2
                    this.data[x1][y1] = 0
                    numData[i + 1][0] = 0
                    //numData.splice(i + 1,1)
                    //i--
                }
            }
        }
        for(let i = 0;i < numData.length;i++){
            if(numData[i][0] == 0){
                numData.splice(i,1)
                i--
            }
        }
        //console.log(this.data)
        //console.log(numData)
//
        //moveData
        for(let i = 0;i < this.data.length;i++){
            for(let j = 0;j < this.data[i].length;j++){
                for(let h = numData.length - 1;h > -1;h--){
                    if(numData[h][2] == i && this.data[j][i] == 0){
                        if(numData[h][1] > j){
                            console.log(numData[h])
                            var val = numData[h][0],
                                  x = numData[h][1],
                                  y = numData[h][2]
                            //console.log(this.data[x][y])
                            this.data[j][i] = val
                            this.data[x][y] = 0
                            numData.splice(h,1)
                            h--
                        
                        }
                        
                    }
                }
            }
        }
        console.log(this.data)
        
        //*/
        
    },
    keyDown:function(){
        //addData
        var numData = []
        for(let i = 0;i < this.data.length;i++){
            for(let j = 0;j < this.data[i].length;j++){
                if(this.data[j][i] !== 0){
                    numData.push([this.data[j][i],j,i])
                }
            }
        }
        //console.log(this.data)
        //console.log(numData)

        //sumData
        for(let i = 0;i < numData.length - 1;i++){
            //如果Array X     
            if(numData[i][2] == numData[i + 1][2]){
                //X的num是否相等
                if(numData[i][0] ==  numData[i+1][0]){
                    var x = numData[i][1],
                        y = numData[i][2]
                    var x1 = numData[i+1][1],
                        y1 = numData[i+1][2]
                    this.data[x][y] = numData[i][0] * 2
                    numData[i][0] = numData[i][0] * 2
                    this.data[x1][y1] = 0
                    numData[i + 1][0] = 0
                    //numData.splice(i + 1,1)
                    //i--
                }
            }
        }
        
        for(let i = 0;i < numData.length;i++){
            if(numData[i][0] == 0){
                numData.splice(i,1)
                i--
            }
        }
        console.log(numData)

        //moveData
        for(let i = 0;i < this.data.length;i++){
            for(let j = this.data[i].length - 1;j > -1;j--){
                for(let h = numData.length - 1;h > -1;h--){
                    if(numData[h][2] == i && this.data[j][i] == 0){
                        if(numData[h][1] < j){
                            console.log(numData[h])
                            var val = numData[h][0],
                                  x = numData[h][1],
                                  y = numData[h][2]
                            //console.log(this.data[x][y])
                            this.data[j][i] = val
                            this.data[x][y] = 0
                            numData.splice(h,1)
                            h--
                        
                        }
                        
                    }
                }
            }
        }
        console.log(this.data)
        /*
        */
    },
    keyLeft:function(){
        //addData
        var numData = []
        for(let i = 0;i < this.data.length;i++){
            for(let j = 0;j < this.data[i].length;j++){
                if(this.data[i][j] !== 0){
                    numData.push([this.data[i][j],i,j])
                }
            }
        }
        //console.log(this.data)
        //console.log(numData)

        //sumData
        for(let i = 0;i < numData.length - 1;i++){
            //如果Array X     
            if(numData[i][1] == numData[i + 1][1]){
                //X的num是否相等
                if(numData[i][0] ==  numData[i+1][0]){
                    var x = numData[i][1],
                        y = numData[i][2]
                    var x1 = numData[i+1][1],
                        y1 = numData[i+1][2]
                    this.data[x][y] = numData[i][0] * 2
                    numData[i][0] = numData[i][0] * 2
                    this.data[x1][y1] = 0
                    numData[i + 1][0] = 0
                    //numData.splice(i + 1,1)
                    //i--
                }
            }
        }
        
        for(let i = 0;i < numData.length;i++){
            if(numData[i][0] == 0){
                numData.splice(i,1)
                i--
            }
        }
        console.log(numData)

        //moveData
        for(let i = 0;i < this.data.length;i++){
            for(let j = 0;j < this.data[i].length;j++){
                for(let h = 0;h < numData.length;h++){
                    if(numData[h][1] == i && this.data[i][j] == 0){
                        if(numData[h][2] > j){
                            var val = numData[h][0],
                                  x = numData[h][1],
                                  y = numData[h][2]
                            console.log(this.data[x][y])
                            this.data[i][j] = val
                            this.data[x][y] = 0
                            numData.splice(h,1)
                            h--
                        }
                    }
                }
            }
        }
        console.log(this.data)
        /*
        */
    },
    keyRight:function(){
        //addData
        var numData = []
        for(let i = 0;i < this.data.length;i++){
            for(let j = this.data[i].length - 1;j > -1;j--){
                if(this.data[i][j] !== 0){
                    numData.push([this.data[i][j],i,j])
                }
            }
        }
        console.log(this.data)
        console.log(numData)

        //sumData
        for(let i = 0;i < numData.length - 1;i++){
            //如果Array X     
            if(numData[i][1] == numData[i + 1][1]){
                //X的num是否相等
                if(numData[i][0] ==  numData[i+1][0]){
                    var x = numData[i][1],
                        y = numData[i][2]
                    var x1 = numData[i+1][1],
                        y1 = numData[i+1][2]
                    this.data[x][y] = numData[i][0] * 2
                    numData[i][0] = numData[i][0] * 2
                    this.data[x1][y1] = 0
                    numData[i + 1][0] = 0
                    //numData.splice(i + 1,1)
                    //i--
                }
            }
        }
        
        for(let i = 0;i < numData.length;i++){
            if(numData[i][0] == 0){
                numData.splice(i,1)
                i--
            }
        }
        console.log(numData)

        //moveData
        for(let i = 0;i < this.data.length;i++){
            for(let j = this.data[i].length;j > 0;j--){
                for(let h = 0;h < numData.length;h++){
                    if(numData[h][1] == i && this.data[i][j] == 0){
                        if(numData[h][2] < j){
                            var val = numData[h][0],
                                  x = numData[h][1],
                                  y = numData[h][2]
                            console.log(this.data[x][y])
                            this.data[i][j] = val
                            this.data[x][y] = 0
                            numData.splice(h,1)
                            h--
                        }
                    }
                }
            }
        }
        console.log(this.data)
        /*
        */
    },
    random:function(min,max){
        var a = Math.floor(Math.random() * (max - min + 1) + min)
        return a
    },
    view:function(){
        var span = this.id.querySelectorAll('span')
        for(let i = 0; i < this.data.length;i++){
            for(let j = 0; j < this.data[i].length;j++){
                if(this.data[i][j] !== 0){
                    switch (i){
                        case 0:
                            span[j].innerText = this.data[i][j]
                            break;
                        case 1:
                            span[4 + j].innerText = this.data[i][j]
                            break;
                        case 2:
                            span[8 + j].innerText = this.data[i][j]
                            break;
                        case 3:
                            span[12 + j].innerText = this.data[i][j]
                            break;
                    }
                }else{
                    switch (i){
                        case 0:
                            span[j].innerText = ''
                            break;
                        case 1:
                            span[4 + j].innerText = ''
                            break;
                        case 2:
                            span[8 + j].innerText = ''
                            break;
                        case 3:
                            span[12 + j].innerText = ''
                            break;
                    }
                }
            }
        }
    },


    
}
    


