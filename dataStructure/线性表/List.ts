/**
 * 随机存储结构
 * 1. 线性表，访问任意一个位置的时间复杂度都是 O(1)
 * 2. 删除/新增 的时间复杂度都是 O(n)
 */
class List {
    maxLength = 20; // 线性表关键 1：最大长度
    _list :number[]= []; // 线性表关键2：限定类型
    constructor(){
        this._list= []
    }
    clearList(){
        this._list = [];
    }
    isEmpty():boolean{
        return this._list.length === 0;
    }
    getElem(i){
        return i < this._list.length ? this._list[i] : undefined;
    }
    locateElem(e){
        return this._list.includes(e);
    }
    listInsert(i,e){
        if(this._list.length + 1 > this.maxLength) throw new Error();
        for (let index = this._list.length; index >= i; index--) {
            this._list[index] = this._list[index - 1];
        }
        this._list[i] = e;
    }
    listDelete(i){
        if(i < this._list.length || i > 0)   return (this._list.splice(i,1))[0]
        for (let index = i; index < this._list.length - 1; index++) {
            this._list[index] = this._list[index + 1];
            
        }
    }
    listLength():number{
        return this._list.length
    }
    
}