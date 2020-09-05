
/******/ (function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function (exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter,
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function (module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ 
    function (module, exports) {
      const patch = snabbdom.patch;
      const h = snabbdom.h;
      let arr=[]
      let flag=false
        // 渲染增添组件
        function renderTjs(){
            let tjbox=h('div',{props:{className:'tj'},style:{display:'block',width:'100%',height:'50px'}},[
                h('input',{props:{type:'text', placeholder:'输入添加内容',onkeydown:(e)=>{if(e.keyCode==13){refer(e)}}},style:{float:'left'}},),
                h('button',{props:{onclick:(e)=>{refer(e)}},style:{float:'left'}},'提交')
            ])
            patch(gett('.tijiao'),tjbox)
        }
        renderTjs()
        // 渲染修改组件  up替换index
        function renderxg(up){
            let ins=arr[up]
            let tjbox=h('div',{props:{className:'xiugai',key:up},style:{display:flag?'block':'none',width:'100%',height:'50px',marginTop:'-40px'}},[
                h('p',{props:{}},`替换内容`),
                h('input',{props:{type:'text', placeholder:ins,onkeydown:(e)=>{if(e.keyCode==13){refer(e)}}},style:{float:'left'}},),
                h('button',{props:{onclick:(e)=>{upp(e)}},style:{float:'left'}},'提交'),
                h('p',{props:{}},`你修改的是第${up+1}个`)
            ])
            patch(gett('.xiugai'),tjbox)
        }
        renderxg()
        // 渲染查找组件
        function rendercz(){
            let czbox=h('div',{props:{className:'chazhao'},style:{display:'block',width:'100%',height:'50px'}},[
                h('p',{props:{}},`按照内容查找`),
                h('input',{props:{type:'text', placeholder:'查找内容',onkeydown:(e)=>{if(e.keyCode==13){refer(e)}}},style:{float:'left'}},),
                h('button',{props:{onclick:(e)=>{finds(e)}},style:{float:'left'}},'查找'),
                h('button',{props:{onclick:(e)=>{cancle(e)}},style:{float:'left'}},'取消查找')
            ])
            patch(gett('.chazhao'),czbox)
        }
        rendercz()
       
        // 替换使用函数
        function upp(e){
            arr[e.target.parentNode.key]=e.target.parentNode.children[1].value;
            patch(gett('.con'),mapList())
        }
        // 处理增添
        function refer(e){
            let val=e.target.parentNode.children[0].value
            if(val!=''){
                arr.push(val)
                patch(gett('.con'),mapList())
                e.target.parentNode.children[0].value=''
            }
        }
        // 循环arr 设立有参数的时候代表查找渲染
        function mapList(arrr){
            if(arrr){
                    return h('ul',{props:{className:'con'},style:{display:'block'}}, 
                    arrr.map((item,index)=>{
                return h('li',{props:{key:index}},[h('p',props={},item),h('button',{props:{onclick:(e)=>{ament(e)}},style:{}},'修改'),h('button',{props:{onclick:(e)=>{delate(e)}},style:{}},'删除')])

            }))
            }else{
                return h('ul',{props:{className:'con'},style:{display:'block'}}, 
                arr.map((item,index)=>{
                return h('li',{props:{key:index}},[h('p',props={},item),h('button',{props:{onclick:(e)=>{ament(e)}},style:{}},'修改'),h('button',{props:{onclick:(e)=>{delate(e)}},style:{}},'删除')])
            }))
            }
           
        }
        // 删除功能
        function delate(e){
            arr.splice(e.target.parentNode.key,1)
            patch(gett('.con'),mapList())
        }
        // 修改点击
        function ament(e){
            flag=true
            let up=e.target.parentNode.key
            renderxg(up)
        }
        // 查找函数
        function finds(e){
            let newArr=arr.reduce((value,item,index)=>{
                if(item==e.target.parentNode.children[1].value){
                    value.push(item)
                }
                return value;
            },[])
            patch(gett('.con'),mapList(newArr))
        }
        // 取消查找函数
        function cancle(e){
            e.target.parentNode.children[1].value=''
            patch(gett('.con'),mapList())
        }
        // 获取元素封装
        function gett(i){
            return document.querySelector(i)
        }
      /***/
    },
    /******/
  ]
);
